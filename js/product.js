/* =========================================================
   SPORTHUB - PRODUCT DETAIL ENGINE V2
   Product Detail + SEO + Related Products
========================================================= */


/* =========================================================
   1. LẤY PRODUCT ID
   Hỗ trợ:
   - product.html?id=1
   - product.html?id=P01
========================================================= */


/*
    URL chính thức của website.

    Chỉ dùng cho:
    - Canonical
    - Open Graph
    - Schema
    - URL hình ảnh tuyệt đối

    Không ảnh hưởng đường dẫn tương đối
    khi website chạy bình thường.
*/

const SPORTHUB_SITE_URL =
    "https://tranthiquynhnhu0901-hue.github.io/shopthethao/";


/*
    Chuẩn hóa ID.

    Ví dụ:

    1     -> 1
    "1"   -> 1
    "P01" -> 1
    "p01" -> 1
*/

function normalizeProductId(value) {

    const normalized =
        String(value || "")
            .trim()
            .toUpperCase();


    const match =
        normalized.match(
            /^P?(\d+)$/
        );


    if (!match) {

        return NaN;

    }


    return Number(
        match[1]
    );

}


/*
    Lấy mã sản phẩm chuẩn P01 - P52.

    Ưu tiên product.code nếu database
    đã có mã riêng.

    Nếu chưa có thì tự tạo từ product.id.
*/

function getProductCode(product) {

    if (!product) {

        return "";

    }


    if (product.code) {

        const code =
            String(product.code)
                .trim()
                .toUpperCase();


        if (code) {

            return code;

        }

    }


    const normalizedId =
        normalizeProductId(
            product.id
        );


    if (
        !Number.isFinite(normalizedId)
    ) {

        return "";

    }


    return `P${String(normalizedId).padStart(2, "0")}`;

}


/*
    Canonical sản phẩm luôn chuẩn hóa
    về dạng:

    product.html?id=P01
*/

function getProductCanonicalURL(product) {

    const code =
        getProductCode(
            product
        );


    if (!code) {

        return `${SPORTHUB_SITE_URL}product.html`;

    }


    return (
        `${SPORTHUB_SITE_URL}product.html?id=` +
        encodeURIComponent(code)
    );

}


/*
    Chuẩn hóa URL đang mở về đúng mã sản phẩm:

    product.html?id=5
    product.html?id=p05
    product.html?id=P05&utm_source=...

    -> product.html?id=P05

    Dùng history.replaceState nên:
    - Không reload trang
    - Không mất dữ liệu đang render
    - Thanh địa chỉ và Canonical thống nhất
*/

function normalizeCurrentProductURL(product) {

    const code =
        getProductCode(
            product
        );


    if (!code) {

        return;

    }


    const normalizedPath =
        `${window.location.pathname}?id=${encodeURIComponent(code)}`;


    const currentPath =
        window.location.pathname +
        window.location.search +
        window.location.hash;


    if (
        currentPath !== normalizedPath
    ) {

        window.history.replaceState(
            window.history.state,
            "",
            normalizedPath
        );

    }

}


/*
    Chuyển ảnh tương đối thành URL tuyệt đối
    để dùng cho OG + Schema.
*/

function getAbsoluteProductURL(path) {

    if (!path) {

        return "";

    }


    try {

        return new URL(
            path,
            SPORTHUB_SITE_URL
        ).href;

    }

    catch (error) {

        return "";

    }

}


/*
    Đọc ?id=
*/

const rawProductId =
    new URLSearchParams(
        window.location.search
    ).get("id");


const productId =
    normalizeProductId(
        rawProductId
    );


/*
    Tìm sản phẩm.

    Hỗ trợ database dùng:
    - id số
    - id chuỗi
    - code P01
*/

const product =
    products.find(
        item => {

            const itemId =
                normalizeProductId(
                    item.id
                );


            const itemCode =
                normalizeProductId(
                    item.code
                );


            return (
                itemId === productId ||
                itemCode === productId
            );

        }
    );


/*
    Nếu sản phẩm hợp lệ, chuẩn hóa ngay URL đang mở.

    Ví dụ:
    ?id=5   -> ?id=P05
    ?id=p05 -> ?id=P05
*/

if (product) {

    normalizeCurrentProductURL(
        product
    );

}


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
   3. SEO HELPER
========================================================= */


/*
    META theo name
*/

function setMetaByName(
    name,
    content
) {

    let meta =
        document.querySelector(
            `meta[name="${name}"]`
        );


    if (!meta) {

        meta =
            document.createElement(
                "meta"
            );


        meta.setAttribute(
            "name",
            name
        );


        document.head.appendChild(
            meta
        );

    }


    meta.setAttribute(
        "content",
        content || ""
    );

}


/*
    META theo property
*/

function setMetaByProperty(
    property,
    content
) {

    let meta =
        document.querySelector(
            `meta[property="${property}"]`
        );


    if (!meta) {

        meta =
            document.createElement(
                "meta"
            );


        meta.setAttribute(
            "property",
            property
        );


        document.head.appendChild(
            meta
        );

    }


    meta.setAttribute(
        "content",
        content || ""
    );

}


/*
    Xóa META property khi không có dữ liệu.

    Ví dụ sản phẩm không có giá.
*/

function removeMetaByProperty(
    property
) {

    const meta =
        document.querySelector(
            `meta[property="${property}"]`
        );


    if (meta) {

        meta.remove();

    }

}


/*
    Canonical
*/

function setCanonicalURL(url) {

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


    canonical.setAttribute(
        "href",
        url
    );

}


/*
    Structured Data JSON-LD
*/

function setProductStructuredData(
    data
) {

    let schema =
        document.getElementById(
            "productSchema"
        );


    if (!schema) {

        schema =
            document.createElement(
                "script"
            );


        schema.id =
            "productSchema";


        schema.type =
            "application/ld+json";


        document.head.appendChild(
            schema
        );

    }


    schema.textContent =
        JSON.stringify(
            data,
            null,
            2
        );

}



/* =========================================================
   4. SEO ĐỘNG
========================================================= */

function setProductSEO(product) {


    /* -----------------------------------------------------
       TITLE
    ----------------------------------------------------- */

    const title =
        product.seoTitle ||
        `${product.name} | SPORTHUB`;


    /* -----------------------------------------------------
       DESCRIPTION
    ----------------------------------------------------- */

    const description =
        product.metaDescription ||
        product.shortDescription ||
        product.description ||
        "Sản phẩm thể thao tại SPORTHUB.";


    /* -----------------------------------------------------
       PRODUCT CODE
    ----------------------------------------------------- */

    const code =
        getProductCode(
            product
        );


    /* -----------------------------------------------------
       CANONICAL URL
    ----------------------------------------------------- */

    const canonicalURL =
        getProductCanonicalURL(
            product
        );


    /* -----------------------------------------------------
       IMAGE
    ----------------------------------------------------- */

    const imageURL =
        getAbsoluteProductURL(
            product.image
        );


    const imageAlt =
        product.imageAlt ||
        product.name;


    /* -----------------------------------------------------
       PRICE
    ----------------------------------------------------- */

    const price =
        Number(
            product.price || 0
        );


    /* -----------------------------------------------------
       STOCK
    ----------------------------------------------------- */

    const stock =
        Number(
            product.stock || 0
        );



    /* =====================================================
       TITLE
    ===================================================== */

    document.title =
        title;


    const pageTitle =
        document.getElementById(
            "pageTitle"
        );


    if (pageTitle) {

        pageTitle.textContent =
            title;

    }



    /* =====================================================
       ROBOTS
    ===================================================== */

    setMetaByName(
        "robots",
        "index, follow"
    );



    /* =====================================================
       META DESCRIPTION
    ===================================================== */

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

    else {

        setMetaByName(
            "description",
            description
        );

    }



    /* =====================================================
       CANONICAL
    ===================================================== */

    setCanonicalURL(
        canonicalURL
    );



    /* =====================================================
       OPEN GRAPH BASIC
    ===================================================== */

    setMetaByProperty(
        "og:type",
        "product"
    );


    setMetaByProperty(
        "og:locale",
        "vi_VN"
    );


    setMetaByProperty(
        "og:site_name",
        "SPORTHUB"
    );


    setMetaByProperty(
        "og:title",
        title
    );


    setMetaByProperty(
        "og:description",
        description
    );


    setMetaByProperty(
        "og:url",
        canonicalURL
    );



    /* =====================================================
       OPEN GRAPH IMAGE
    ===================================================== */

    if (imageURL) {

        setMetaByProperty(
            "og:image",
            imageURL
        );


        setMetaByProperty(
            "og:image:alt",
            imageAlt
        );

    }



    /* =====================================================
       PRODUCT OPEN GRAPH
    ===================================================== */

    if (price > 0) {

        setMetaByProperty(
            "product:price:amount",
            String(price)
        );


        setMetaByProperty(
            "product:price:currency",
            "VND"
        );


        setMetaByProperty(
            "product:availability",
            stock > 0
                ? "in stock"
                : "out of stock"
        );

    }

    else {

        removeMetaByProperty(
            "product:price:amount"
        );


        removeMetaByProperty(
            "product:price:currency"
        );


        removeMetaByProperty(
            "product:availability"
        );

    }



    /* =====================================================
       TWITTER / SOCIAL CARD
    ===================================================== */

    setMetaByName(
        "twitter:card",
        imageURL
            ? "summary_large_image"
            : "summary"
    );


    setMetaByName(
        "twitter:title",
        title
    );


    setMetaByName(
        "twitter:description",
        description
    );


    if (imageURL) {

        setMetaByName(
            "twitter:image",
            imageURL
        );


        setMetaByName(
            "twitter:image:alt",
            imageAlt
        );

    }



    /* =====================================================
       BREADCRUMB HIỂN THỊ
    ===================================================== */

    const breadcrumb =
        document.getElementById(
            "breadcrumbProduct"
        );


    if (breadcrumb) {

        breadcrumb.textContent =
            product.name;

    }



    /* =====================================================
       SCHEMA PRODUCT
    ===================================================== */

    const productSchema = {

        "@type":
            "Product",

        "@id":
            `${canonicalURL}#product`,

        "name":
            product.name,

        "description":
            description,

        "url":
            canonicalURL

    };


    /*
        SKU
    */

    if (code) {

        productSchema.sku =
            code;

    }


    /*
        IMAGE
    */

    if (imageURL) {

        productSchema.image =
            [
                imageURL
            ];

    }


    /*
        CATEGORY

        Chỉ lấy dữ liệu thật đang có
        trong catalog.
    */

    const category =
        product.sportName ||
        product.category ||
        product.sport ||
        "";


    if (category) {

        productSchema.category =
            category;

    }


    /*
        BRAND

        Không tự gán SPORTHUB làm thương hiệu.

        Chỉ thêm nếu database sản phẩm
        thật sự có product.brand.
    */

    if (product.brand) {

        productSchema.brand = {

            "@type":
                "Brand",

            "name":
                product.brand

        };

    }



    /* =====================================================
       SCHEMA OFFER
    ===================================================== */

    if (price > 0) {

        productSchema.offers = {

            "@type":
                "Offer",

            "url":
                canonicalURL,

            "priceCurrency":
                "VND",

            "price":
                String(price),

            "availability":
                stock > 0

                    ? "https://schema.org/InStock"

                    : "https://schema.org/OutOfStock"

        };

    }



    /* =====================================================
       SCHEMA BREADCRUMB
    ===================================================== */

    const breadcrumbSchema = {

        "@type":
            "BreadcrumbList",

        "@id":
            `${canonicalURL}#breadcrumb`,

        "itemListElement":
            [

                {

                    "@type":
                        "ListItem",

                    "position":
                        1,

                    "name":
                        "Trang chủ",

                    "item":
                        SPORTHUB_SITE_URL

                },


                {

                    "@type":
                        "ListItem",

                    "position":
                        2,

                    "name":
                        "Sản phẩm",

                    "item":
                        `${SPORTHUB_SITE_URL}shop.html`

                },


                {

                    "@type":
                        "ListItem",

                    "position":
                        3,

                    "name":
                        product.name,

                    "item":
                        canonicalURL

                }

            ]

    };



    /* =====================================================
       JSON-LD GRAPH
    ===================================================== */

    const structuredData = {

        "@context":
            "https://schema.org",

        "@graph":
            [

                productSchema,

                breadcrumbSchema

            ]

    };


    /*
        Không đưa AggregateRating / Review
        vào Schema nếu chưa có dữ liệu đánh giá
        được xác nhận riêng.

        Rating hiển thị trong giao diện
        vẫn giữ nguyên logic cũ.
    */

    setProductStructuredData(
        structuredData
    );

}



/* =========================================================
   5. SEO KHI KHÔNG TÌM THẤY SẢN PHẨM
========================================================= */

function setProductNotFoundSEO() {

    const title =
        "Không tìm thấy sản phẩm | SPORTHUB";


    const description =
        "Sản phẩm không tồn tại hoặc đường dẫn không chính xác. Khám phá các sản phẩm thể thao khác tại SPORTHUB.";



    document.title =
        title;



    const pageTitle =
        document.getElementById(
            "pageTitle"
        );


    if (pageTitle) {

        pageTitle.textContent =
            title;

    }



    setMetaByName(
        "description",
        description
    );


    /*
        URL sản phẩm lỗi không nên index.
    */

    setMetaByName(
        "robots",
        "noindex, follow"
    );



    setMetaByProperty(
        "og:type",
        "website"
    );


    setMetaByProperty(
        "og:title",
        title
    );


    setMetaByProperty(
        "og:description",
        description
    );


    setMetaByName(
        "twitter:title",
        title
    );


    setMetaByName(
        "twitter:description",
        description
    );



    /*
        URL lỗi không đặt canonical
        về một sản phẩm khác.
    */

    const canonical =
        document.querySelector(
            'link[rel="canonical"]'
        );


    if (canonical) {

        canonical.remove();

    }



    /*
        Không xuất Product Schema
        khi không có sản phẩm.
    */

    const schema =
        document.getElementById(
            "productSchema"
        );


    if (schema) {

        schema.remove();

    }



    const breadcrumb =
        document.getElementById(
            "breadcrumbProduct"
        );


    if (breadcrumb) {

        breadcrumb.textContent =
            "Không tìm thấy sản phẩm";

    }

}



/* =========================================================
   6. RENDER DANH SÁCH
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
   7. FORMAT TÊN THÔNG SỐ
========================================================= */

function formatSpecName(key) {

    const labels = {

        material:
            "Chất liệu",

        padding:
            "Lớp đệm",

        closure:
            "Kiểu khóa",

        weightOptions:
            "Lựa chọn trọng lượng",

        length:
            "Chiều dài",

        quantity:
            "Số lượng",

        size:
            "Kích thước",

        sizes:
            "Kích thước",

        type:
            "Loại sản phẩm",

        productType:
            "Loại sản phẩm",

        use:
            "Mục đích sử dụng",

        capacity:
            "Dung tích",

        fit:
            "Form",

        upper:
            "Thân giày",

        midsole:
            "Đế giữa",

        outsole:
            "Đế ngoài",

        storage:
            "Ngăn chứa",

        surface:
            "Bề mặt",

        grip:
            "Cán cầm",

        balance:
            "Độ cân bằng",

        racketType:
            "Loại vợt",

        faceMaterial:
            "Chất liệu mặt",

        playStyle:
            "Phong cách",

        resistance:
            "Mức kháng lực",

        handles:
            "Tay cầm",

        firmness:
            "Độ cứng",

        rotation:
            "Cơ chế xoay",

        compartments:
            "Ngăn chứa",

        shoeCompartment:
            "Ngăn giày",

        carryOptions:
            "Cách mang",

        lid:
            "Nắp bình",

        construction:
            "Cấu trúc",

        coverage:
            "Vùng bảo vệ",

        trainingType:
            "Hình thức tập",

        sleeve:
            "Tay áo",

        strap:
            "Dây đeo",

        straps:
            "Dây cố định",

        blade:
            "Thiết kế lưỡi",

        waistband:
            "Cạp quần",

        courtUse:
            "Loại sân",

        reinforcedZones:
            "Vùng gia cố",

        outerLayer:
            "Lớp ngoài",

        handle:
            "Tay cầm",

        adjustment:
            "Điều chỉnh",

        gripOptions:
            "Lựa chọn grip",

        headType:
            "Thiết kế mặt vợt"

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
   8. RENDER THÔNG SỐ
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
   9. TÌM SẢN PHẨM LIÊN QUAN
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

            result.push(
                item
            );

        }

    });



    /* -----------------------------------------------------
       NẾU CHƯA ĐỦ → CÙNG TYPE
    ----------------------------------------------------- */

    if (
        result.length < 4
    ) {

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

                result.push(
                    item
                );

            }

        });

    }


    return result;

}



/* =========================================================
   10. RELATED PRODUCT CARD
========================================================= */

function relatedProductCard(product) {

    const code =
        getProductCode(
            product
        );


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

                    <a href="product.html?id=${encodeURIComponent(code)}">
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
                    href="product.html?id=${encodeURIComponent(code)}"
                >
                    Xem chi tiết
                </a>


            </div>

        </article>

    `;

}


/* =========================================================
   11. PRODUCT NOT FOUND
========================================================= */

if (!product) {


    /*
        SEO riêng cho URL lỗi.
    */

    setProductNotFoundSEO();


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
   12. PRODUCT FOUND
========================================================= */

else {


    /* =====================================================
       SEO
    ===================================================== */

    setProductSEO(
        product
    );



    /* =====================================================
       DISCOUNT
    ===================================================== */

    const discount =
        getProductDiscount(
            product
        );



    /* =====================================================
       PRODUCT CODE
    ===================================================== */

    const code =
        getProductCode(
            product
        );



    /* =====================================================
       SIZE
    ===================================================== */

    const sizes =
        Array.isArray(product.sizes) &&
        product.sizes.length

            ? product.sizes

            : ["Tiêu chuẩn"];



    /* =====================================================
       IMAGE ALT
    ===================================================== */

    const imageAlt =
        product.imageAlt ||
        product.name;



    /* =====================================================
       RELATED PRODUCTS
    ===================================================== */

    const relatedProducts =
        getRelatedProducts(
            product
        );



    /* =====================================================
       RENDER PRODUCT
    ===================================================== */

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
   13. THAY ĐỔI SỐ LƯỢNG
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
   14. THÊM VÀO GIỎ HÀNG
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