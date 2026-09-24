let discount = Number(
    localStorage.getItem("sporthub_discount") || 0
);


function subtotal() {

    return getCart().reduce(
        (sum, item) =>
            sum + item.price * item.quantity,
        0
    );

}


function renderCart() {

    const cart = getCart();

    const root =
        document.getElementById("cartList");


    root.innerHTML = cart.length

        ? cart.map(

            (item, index) => `

                <div class="cart-item">

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                    >

                    <div>

                        <h3>
                            ${item.name}
                        </h3>

                        <p>
                            Size: ${item.size}
                        </p>

                        <strong>
                            ${money(item.price)}
                        </strong>

                    </div>


                    <div class="qty">

                        <button
                            type="button"
                            onclick="change(${index}, -1)"
                            aria-label="Giảm số lượng"
                        >
                            −
                        </button>

                        <span>
                            ${item.quantity}
                        </span>

                        <button
                            type="button"
                            onclick="change(${index}, 1)"
                            aria-label="Tăng số lượng"
                        >
                            +
                        </button>

                    </div>


                    <strong>
                        ${
                            money(
                                item.price *
                                item.quantity
                            )
                        }
                    </strong>


                    <button
                        type="button"
                        style="
                            border:0;
                            background:none;
                            color:red;
                            font-size:22px;
                        "
                        onclick="removeItem(${index})"
                        aria-label="Xóa sản phẩm khỏi giỏ hàng"
                    >
                        ×
                    </button>

                </div>

            `

        ).join("")

        : `

            <div class="empty">

                <h2>
                    Giỏ hàng đang trống
                </h2>

                <a
                    class="btn-primary"
                    href="shop.html"
                >
                    Mua sắm ngay
                </a>

            </div>

        `;


    summary();

}


function change(index, value) {

    const cart = getCart();


    cart[index].quantity += value;


    if (
        cart[index].quantity <= 0
    ) {

        cart.splice(
            index,
            1
        );

    }


    saveCart(cart);

    renderCart();

}


function removeItem(index) {

    const cart = getCart();


    cart.splice(
        index,
        1
    );


    saveCart(cart);

    renderCart();

}


function summary() {

    const sub = subtotal();

    const total =
        Math.max(
            0,
            sub - discount
        );


    document
        .getElementById("sub")
        .textContent =
            money(sub);


    document
        .getElementById("dis")
        .textContent =
            "- " + money(discount);


    document
        .getElementById("tot")
        .textContent =
            money(total);

}


function coupon() {

    const code =
        document
            .getElementById("coupon")
            .value
            .trim()
            .toUpperCase();


    discount =
        code === "SPORT10"

            ? subtotal() * 0.1

            : 0;


    localStorage.setItem(
        "sporthub_discount",
        discount
    );


    document
        .getElementById("couponMsg")
        .textContent =

            discount

                ? "Đã áp dụng giảm 10%"

                : "Mã không hợp lệ";


    summary();

}


function checkout() {

    if (
        !getCart().length
    ) {

        return toast(
            "Giỏ hàng đang trống"
        );

    }


    location.href =
        "checkout.html";

}


renderCart();