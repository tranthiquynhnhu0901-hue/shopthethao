/* =========================================================
   SPORTHUB - PRODUCT DETAIL ENGINE V2
   Product Detail + SEO + Related Products
========================================================= */


/* =========================================================
   1. LẤY PRODUCT ID
========================================================= */

const productId =
    Number(
        new URLSearchParams(
            window.location.search
        ).get("id")
    );


const product =
    products.find(
        item =>
            Number(item.id) === productId
    );


const root =
    document.getElementById(
        "productDetail"
    );


let qty = 1;


/* =========================================================
   2. TÍNH % GIẢM GIÁ
========================================================= */

function getProductDiscount(product) {

    const price =
        Number(product.price || 0);


    const oldPrice =
        Number(product.oldPrice || 0);


    if (
        price <= 0 ||
        oldPrice <= 0 ||
        oldPrice <= price
    ) {
        return 0;
    }


    return Math.round(
        ((oldPrice - price) / oldPrice) * 100
    );

}


/* =========================================================
   3. SEO ĐỘNG
========================================================= */

function setProductSEO(product) {

    const title =
        product.seoTitle ||
        `${product.name} | SPORTHUB`;


    const description =
        product.metaDescription ||
        product.shortDescription ||
        product.description ||
        "Sản phẩm thể thao tại SPORTHUB.";


    /* TITLE */

    document.title = title;


    const pageTitle =
        document.getElementById(
            "pageTitle"
        );


    if (pageTitle) {
        pageTitle.textContent = title;
    }


    /* META DESCRIPTION */

    const metaDescription =
        document.getElementById(
            "metaDescription"
        );


    if (metaDescription) {

        metaDescription.setAttribute(
            "content",
            description
        );

    }


    /* OPEN GRAPH TITLE */

    const ogTitle =
        document.getElementById(
            "ogTitle"
        );


    if (ogTitle) {

        ogTitle.setAttribute(
            "content",
            title
        );

    }


    /* OPEN GRAPH DESCRIPTION */

    const ogDescription =
        document.getElementById(
            "ogDescription"
        );


    if (ogDescription) {

        ogDescription.setAttribute(
            "content",
            description
        );

    }


    /* OPEN GRAPH IMAGE */

    const ogImage =
        document.getElementById(
            "ogImage"
        );


    if (
        ogImage &&
        product.image
    ) {

        const imageURL =
            new URL(
                product.image,
                window.location.href
            ).href;


        ogImage.setAttribute(
            "content",
            imageURL
        );

    }


    /* CANONICAL */

    let canonical =
        document.querySelector(
            'link[rel="canonical"]'
        );


    if (!canonical) {

        canonical =
            document.createElement(
                "link"
            );


        canonical.setAttribute(
            "rel",
            "canonical"
        );


        document.head.appendChild(
            canonical
        );

    }


    const canonicalURL =
        new URL(
            `product.html?id=${product.id}`,
            window.location.href
        ).href;


    canonical.setAttribute(
        "href",
        canonicalURL
    );


    /* OG URL */

    let ogURL =
        document.querySelector(
            'meta[property="og:url"]'
        );


    if (!ogURL) {

        ogURL =
            document.createElement(
                "meta"
            );


        ogURL.setAttribute(
            "property",
            "og:url"
        );


        document.head.appendChild(
            ogURL
        );

    }


    ogURL.setAttribute(
        "content",
        canonicalURL
    );


    /* BREADCRUMB */

    const breadcrumb =
        document.getElementById(
            "breadcrumbProduct"
        );


    if (breadcrumb) {

        breadcrumb.textContent =
            product.name;

    }

}


/* =========================================================
   4. RENDER DANH SÁCH
========================================================= */

function renderList(items) {

    if (
        !Array.isArray(items) ||
        !items.length
    ) {
        return "";
    }


    return `

        <ul class="product-detail-list">

            ${items
                .map(item => `
                    <li>
                        ${item}
                    </li>
                `)
                .join("")}

        </ul>

    `;

}


/* =========================================================
   5. FORMAT TÊN THÔNG SỐ
========================================================= */

function formatSpecName(key) {

    const labels = {

        material: "Chất liệu",

        padding: "Lớp đệm",

        closure: "Kiểu khóa",

        weightOptions: "Lựa chọn trọng lượng",

        length: "Chiều dài",

        quantity: "Số lượng",

        size: "Kích thước",

        sizes: "Kích thước",

        type: "Loại sản phẩm",

        productType: "Loại sản phẩm",

        use: "Mục đích sử dụng",

        capacity: "Dung tích",

        fit: "Form",

        upper: "Thân giày",

        midsole: "Đế giữa",

        outsole: "Đế ngoài",

        storage: "Ngăn chứa",

        surface: "Bề mặt",

        grip: "Cán cầm",

        balance: "Độ cân bằng",

        racketType: "Loại vợt",

        faceMaterial: "Chất liệu mặt",

        playStyle: "Phong cách",

        resistance: "Mức kháng lực",

        handles: "Tay cầm",

        firmness: "Độ cứng",

        rotation: "Cơ chế xoay",

        compartments: "Ngăn chứa",

        shoeCompartment: "Ngăn giày",

        carryOptions: "Cách mang",

        lid: "Nắp bình",

        construction: "Cấu trúc",

        coverage: "Vùng bảo vệ",

        trainingType: "Hình thức tập",

        sleeve: "Tay áo",

        strap: "Dây đeo",

        straps: "Dây cố định",

        blade: "Thiết kế lưỡi",

        waistband: "Cạp quần",

        courtUse: "Loại sân",

        reinforcedZones: "Vùng gia cố",

        outerLayer: "Lớp ngoài",

        handle: "Tay cầm",

        adjustment: "Điều chỉnh",

        gripOptions: "Lựa chọn grip",

        headType: "Thiết kế mặt vợt"

    };


    if (labels[key]) {

        return labels[key];

    }


    return key

        .replace(
            /([A-Z])/g,
            " $1"
        )

        .replace(
            /^./,
            character =>
                character.toUpperCase()
        );

}


/* =========================================================
   6. RENDER THÔNG SỐ
========================================================= */

function renderSpecifications(specifications) {

    if (
        !specifications ||
        typeof specifications !== "object"
    ) {
        return "";
    }


    const entries =
        Object.entries(
            specifications
        );


    if (!entries.length) {
        return "";
    }


    return `

        <div class="product-spec-table">

            ${entries
                .map(([key, value]) => `

                    <div class="product-spec-row">

                        <span>
                            ${formatSpecName(key)}
                        </span>

                        <strong>
                            ${value}
                        </strong>

                    </div>

                `)
                .join("")}

        </div>

    `;

}


/* =========================================================
   7. TÌM SẢN PHẨM LIÊN QUAN
========================================================= */

function getRelatedProducts(product) {

    const result = [];


    /* -----------------------------------------------------
       ƯU TIÊN CÙNG MÔN THỂ THAO
    ----------------------------------------------------- */

    products.forEach(item => {

        if (
            item.id !== product.id &&
            item.sport &&
            item.sport === product.sport &&
            result.length < 4
        ) {

            result.push(item);

        }

    });


    /* -----------------------------------------------------
       NẾU CHƯA ĐỦ → CÙNG TYPE
    ----------------------------------------------------- */

    if (result.length < 4) {

        products.forEach(item => {

            const alreadyExists =
                result.some(
                    related =>
                        related.id === item.id
                );


            if (
                item.id !== product.id &&
                !alreadyExists &&
                item.type === product.type &&
                result.length < 4
            ) {

                result.push(item);

            }

        });

    }


    return result;

}


/* =========================================================
   8. RELATED PRODUCT CARD
========================================================= */

function relatedProductCard(product) {

    const code =
        product.code ||
        `P${String(product.id).padStart(2, "0")}`;


    const imageAlt =
        product.imageAlt ||
        product.name;


    return `

        <article class="product-card">


            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${imageAlt}"
                    loading="lazy"
                >

                <span class="product-badge">
                    ${product.badge || "SPORTHUB"}
                </span>

            </div>


            <div class="product-info">


                <div class="product-meta">

                    <span class="product-code">
                        ${code}
                    </span>

                    <span class="product-sport">
                        ${product.sportName || product.category}
                    </span>

                </div>


                <h3>

                    <a href="product.html?id=${product.id}">
                        ${product.name}
                    </a>

                </h3>


                <div class="rating">

                    <span class="rating-star">
                        ★
                    </span>

                    <strong>
                        ${Number(product.rating || 0).toFixed(1)}
                    </strong>

                    <span>
                        (${product.reviews || 0})
                    </span>

                </div>


                <div class="price">

                    <strong>
                        ${money(product.price)}
                    </strong>


                    ${
                        Number(product.oldPrice || 0) >
                        Number(product.price || 0)

                            ? `
                                <del>
                                    ${money(product.oldPrice)}
                                </del>
                            `

                            : ""
                    }

                </div>


                <a
                    class="product-btn"
                    href="product.html?id=${product.id}"
                >
                    Xem chi tiết
                </a>


            </div>

        </article>

    `;

}


/* =========================================================
   9. PRODUCT NOT FOUND
========================================================= */

if (!product) {

    root.innerHTML = `

        <section class="section">

            <div class="container empty">

                <h1>
                    Không tìm thấy sản phẩm
                </h1>

                <p>
                    Sản phẩm có thể đã được thay đổi
                    hoặc đường dẫn không chính xác.
                </p>

                <a
                    class="btn-primary"
                    href="shop.html"
                >
                    Quay lại cửa hàng
                </a>

            </div>

        </section>

    `;

}


/* =========================================================
   10. PRODUCT FOUND
========================================================= */

else {

    setProductSEO(
        product
    );


    const discount =
        getProductDiscount(
            product
        );


    const code =
        product.code ||
        `P${String(product.id).padStart(2, "0")}`;


    const sizes =
        Array.isArray(product.sizes) &&
        product.sizes.length

            ? product.sizes

            : ["Tiêu chuẩn"];


    const imageAlt =
        product.imageAlt ||
        product.name;


    const relatedProducts =
        getRelatedProducts(
            product
        );


    root.innerHTML = `


        <!-- =================================================
             PRODUCT MAIN
        ================================================== -->

        <section class="section">

            <div class="container detail-layout">


                <!-- =========================================
                     PRODUCT IMAGE
                ========================================== -->

                <div class="detail-media">

                    <div class="detail-image-wrap">


                        <img
                            src="${product.image}"
                            alt="${imageAlt}"
                        >


                        ${
                            discount > 0

                                ? `
                                    <span class="detail-discount">
                                        -${discount}%
                                    </span>
                                `

                                : ""
                        }


                    </div>

                </div>



                <!-- =========================================
                     PRODUCT INFO
                ========================================== -->

                <div class="detail-info">


                    <div class="detail-meta">

                        <span class="product-code">
                            ${code}
                        </span>

                        <span class="eyebrow">
                            ${product.sportName || product.category}
                        </span>

                    </div>


                    <h1>
                        ${product.name}
                    </h1>


                    <div class="rating">

                        ★

                        <strong>
                            ${Number(product.rating || 0).toFixed(1)}
                        </strong>

                        <span>
                            (${product.reviews || 0} đánh giá)
                        </span>

                    </div>


                    ${
                        product.shortDescription

                            ? `
                                <p class="detail-lead">
                                    ${product.shortDescription}
                                </p>
                            `

                            : ""
                    }


                    <div class="detail-price">

                        ${money(product.price)}


                        ${
                            Number(product.oldPrice || 0) >
                            Number(product.price || 0)

                                ? `
                                    <del>
                                        ${money(product.oldPrice)}
                                    </del>
                                `

                                : ""
                        }

                    </div>


                    <div class="detail-stock">

                        ${
                            Number(product.stock || 0) > 0

                                ? `
                                    <span class="stock-in">
                                        ✓ Còn ${product.stock} sản phẩm
                                    </span>
                                `

                                : `
                                    <span class="stock-out">
                                        Tạm hết hàng
                                    </span>
                                `
                        }

                    </div>



                    <!-- SIZE -->

                    <div class="detail-option">

                        <label for="size">

                            <strong>
                                Kích thước / lựa chọn
                            </strong>

                        </label>


                        <select id="size">

                            ${sizes
                                .map(size => `
                                    <option value="${size}">
                                        ${size}
                                    </option>
                                `)
                                .join("")}

                        </select>

                    </div>



                    <!-- QUANTITY -->

                    <div class="detail-option">

                        <strong>
                            Số lượng
                        </strong>


                        <div class="qty">

                            <button
                                type="button"
                                onclick="chg(-1)"
                                aria-label="Giảm số lượng"
                            >
                                −
                            </button>


                            <strong id="qty">
                                1
                            </strong>


                            <button
                                type="button"
                                onclick="chg(1)"
                                aria-label="Tăng số lượng"
                            >
                                +
                            </button>

                        </div>

                    </div>



                    <!-- ADD CART -->

                    <button
                        class="btn-primary detail-add-cart"
                        type="button"
                        onclick="addCurrent()"
                        ${Number(product.stock || 0) <= 0 ? "disabled" : ""}
                    >

                        🛒 THÊM VÀO GIỎ HÀNG

                    </button>



                    <!-- POLICY -->

                    <div class="policy">

                        <div>
                            ✓ Thông tin sản phẩm được trình bày rõ ràng
                        </div>

                        <div>
                            🚚 Giao hàng toàn quốc
                        </div>

                        <div>
                            ↻ Hỗ trợ đổi theo chính sách của SPORTHUB
                        </div>

                        <div>
                            🔒 Thanh toán và thông tin đơn hàng được xử lý an toàn
                        </div>

                    </div>


                </div>


            </div>

        </section>



        <!-- =================================================
             PRODUCT DETAIL CONTENT
        ================================================== -->

        <section class="product-information-section">

            <div class="container">


                <div class="section-heading">

                    <div>

                        <span class="eyebrow">
                            THÔNG TIN SẢN PHẨM
                        </span>

                        <h2>
                            CHI TIẾT ${product.name}
                        </h2>

                    </div>

                </div>



                <div class="product-detail-sections">


                    <!-- DESCRIPTION -->

                    <article class="product-detail-section product-description-section">

                        <h2>
                            Mô tả sản phẩm
                        </h2>

                        <p>
                            ${product.description || product.shortDescription || ""}
                        </p>

                    </article>



                    ${
                        Array.isArray(product.highlights) &&
                        product.highlights.length

                            ? `

                                <article class="product-detail-section">

                                    <h2>
                                        Điểm nổi bật
                                    </h2>

                                    ${renderList(product.highlights)}

                                </article>

                            `

                            : ""
                    }



                    ${
                        Array.isArray(product.suitableFor) &&
                        product.suitableFor.length

                            ? `

                                <article class="product-detail-section">

                                    <h2>
                                        Phù hợp với ai?
                                    </h2>

                                    ${renderList(product.suitableFor)}

                                </article>

                            `

                            : ""
                    }



                    ${
                        product.specifications

                            ? `

                                <article class="product-detail-section">

                                    <h2>
                                        Thông số sản phẩm
                                    </h2>

                                    ${renderSpecifications(product.specifications)}

                                </article>

                            `

                            : ""
                    }



                    ${
                        Array.isArray(product.usageGuide) &&
                        product.usageGuide.length

                            ? `

                                <article class="product-detail-section">

                                    <h2>
                                        Hướng dẫn sử dụng
                                    </h2>

                                    ${renderList(product.usageGuide)}

                                </article>

                            `

                            : ""
                    }



                    ${
                        Array.isArray(product.careGuide) &&
                        product.careGuide.length

                            ? `

                                <article class="product-detail-section">

                                    <h2>
                                        Hướng dẫn bảo quản
                                    </h2>

                                    ${renderList(product.careGuide)}

                                </article>

                            `

                            : ""
                    }



                    ${
                        Array.isArray(product.relatedExercises) &&
                        product.relatedExercises.length

                            ? `

                                <article class="product-detail-section">

                                    <h2>
                                        Bài tập liên quan
                                    </h2>

                                    ${renderList(product.relatedExercises)}

                                </article>

                            `

                            : ""
                    }



                    ${
                        Array.isArray(product.relatedSports) &&
                        product.relatedSports.length

                            ? `

                                <article class="product-detail-section">

                                    <h2>
                                        Môn thể thao phù hợp
                                    </h2>

                                    ${renderList(product.relatedSports)}

                                </article>

                            `

                            : ""
                    }


                </div>

            </div>

        </section>



        <!-- =================================================
             RELATED PRODUCTS
        ================================================== -->

        ${
            relatedProducts.length

                ? `

                    <section class="section related-products-section">

                        <div class="container">


                            <div class="section-heading">

                                <div>

                                    <span class="eyebrow">
                                        GỢI Ý CHO BẠN
                                    </span>

                                    <h2>
                                        SẢN PHẨM LIÊN QUAN
                                    </h2>

                                    <p>
                                        Một số sản phẩm khác phù hợp với môn thể thao
                                        hoặc nhu cầu tập luyện tương tự.
                                    </p>

                                </div>

                            </div>


                            <div class="product-grid">

                                ${relatedProducts
                                    .map(relatedProductCard)
                                    .join("")}

                            </div>


                        </div>

                    </section>

                `

                : ""
        }

    `;

}


/* =========================================================
   11. THAY ĐỔI SỐ LƯỢNG
========================================================= */

function chg(value) {

    if (!product) {
        return;
    }


    const stock =
        Math.max(
            1,
            Number(product.stock || 1)
        );


    qty =
        Math.max(
            1,
            Math.min(
                stock,
                qty + value
            )
        );


    const qtyElement =
        document.getElementById(
            "qty"
        );


    if (qtyElement) {

        qtyElement.textContent =
            qty;

    }

}


/* =========================================================
   12. THÊM VÀO GIỎ HÀNG
========================================================= */

function addCurrent() {

    if (!product) {
        return;
    }


    if (
        Number(product.stock || 0) <= 0
    ) {
        return;
    }


    const sizeElement =
        document.getElementById(
            "size"
        );


    const selectedSize =
        sizeElement
            ? sizeElement.value
            : "Tiêu chuẩn";


    addToCart(
        product.id,
        selectedSize,
        qty
    );

}