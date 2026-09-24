const cart = getCart();


if (!cart.length) {

    location.href = "cart.html";

}


const shipping = 30000;

const disc = Number(
    localStorage.getItem("sporthub_discount") || 0
);

const sub = cart.reduce(
    (sum, item) =>
        sum + item.price * item.quantity,
    0
);

const total =
    sub + shipping - disc;



/* =====================================================
   RENDER CHECKOUT ITEMS
===================================================== */

document
    .getElementById("checkoutItems")
    .innerHTML = cart
        .map(

            item => `

                <div class="checkout-item">

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                    >

                    <div>

                        <strong>
                            ${item.name}
                        </strong>

                        <div>
                            ${item.quantity}
                            ×
                            ${money(item.price)}
                        </div>

                    </div>

                </div>

            `

        )
        .join("");



/* =====================================================
   ORDER SUMMARY
===================================================== */

document
    .getElementById("csub")
    .textContent =
        money(sub);


document
    .getElementById("cdis")
    .textContent =
        "- " + money(disc);


document
    .getElementById("ctotal")
    .textContent =
        money(total);



/* =====================================================
   PLACE ORDER
===================================================== */

function placeOrder(event) {

    event.preventDefault();


    const phone =
        document
            .getElementById("phone")
            .value
            .trim();


    if (
        !/^0?\d{9,10}$/.test(phone)
    ) {

        return toast(
            "Số điện thoại chưa hợp lệ"
        );

    }


    const code =
        "SPH"
        +
        Date.now()
            .toString()
            .slice(-7);


    const order = {

        code,

        customer: {

            name:
                document
                    .getElementById("name")
                    .value,

            address:
                document
                    .getElementById("address")
                    .value,

            phone

        },

        items: cart,

        total,

        createdAt:
            new Date()
                .toLocaleString("vi-VN")

    };


    const orders =
        JSON.parse(
            localStorage.getItem(
                "sporthub_orders"
            ) || "[]"
        );


    orders.push(order);


    localStorage.setItem(
        "sporthub_orders",
        JSON.stringify(orders)
    );


    localStorage.removeItem(
        "sporthub_cart"
    );

    localStorage.removeItem(
        "sporthub_discount"
    );


    document
        .getElementById("orderCode")
        .textContent =
            code;


    document
        .getElementById("success")
        .classList.add("active");

}