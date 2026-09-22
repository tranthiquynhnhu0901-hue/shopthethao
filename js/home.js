/* =========================================================
   SPORTHUB - HOME / PRODUCT CARD ENGINE
   Dùng cho:
   - Product Card
   - Shop
   - Sản phẩm nổi bật trang chủ
   - Blog Card
   - Blog nổi bật trang chủ
========================================================= */


/* =========================================================
   1. TÍNH % GIẢM GIÁ
========================================================= */

function getDiscountPercent(product) {

    const price =
        Number(product?.price || 0);

    const oldPrice =
        Number(product?.oldPrice || 0);


    if (
        oldPrice <= 0 ||
        price <= 0 ||
        oldPrice <= price
    ) {

        return 0;

    }


    return Math.round(
        (
            (oldPrice - price) /
            oldPrice
        ) * 100
    );

}



/* =========================================================
   2. FORMAT GIÁ AN TOÀN

   Nếu main.js có hàm money()
   → sử dụng money()

   Nếu chưa có
   → tự format VNĐ
========================================================= */

function formatProductMoney(value) {

    const number =
        Number(value || 0);


    if (
        typeof money === "function"
    ) {

        return money(number);

    }


    return (
        number.toLocaleString(
            "vi-VN"
        ) + "đ"
    );

}



/* =========================================================
   3. ESCAPE TEXT CƠ BẢN

   Giúp tránh text dữ liệu làm hỏng HTML.
========================================================= */

function escapeProductText(value = "") {

    return String(value)

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );

}



/* =========================================================
   4. PRODUCT CARD
========================================================= */

function productCard(product) {

    if (!product) {

        return "";

    }


    /* -----------------------------------------------------
       DISCOUNT
    ----------------------------------------------------- */

    const discount =
        getDiscountPercent(
            product
        );


    /* -----------------------------------------------------
       PRODUCT CODE
    ----------------------------------------------------- */

    const code =
        product.code ||
        `P${String(
            product.id || 0
        ).padStart(
            2,
            "0"
        )}`;


    /* -----------------------------------------------------
       SPORT
    ----------------------------------------------------- */

    const sportName =
        product.sportName ||
        product.category ||
        "Thể thao";


    /* -----------------------------------------------------
       IMAGE
    ----------------------------------------------------- */

    const image =
        product.image ||
        "";


    const imageAlt =
        product.imageAlt ||
        product.name ||
        "Sản phẩm thể thao SPORTHUB";


    /* -----------------------------------------------------
       BADGE
    ----------------------------------------------------- */

    const badge =
        product.badge ||
        "SPORTHUB";


    /* -----------------------------------------------------
       RATING
    ----------------------------------------------------- */

    const rating =
        Number(
            product.rating || 0
        ).toFixed(1);


    const reviews =
        Number(
            product.reviews || 0
        );


    /* -----------------------------------------------------
       DESCRIPTION
    ----------------------------------------------------- */

    const shortDescription =
        product.shortDescription ||
        "Sản phẩm thể thao tại SPORTHUB.";


    /* -----------------------------------------------------
       SAFE TEXT
    ----------------------------------------------------- */

    const safeName =
        escapeProductText(
            product.name || "Sản phẩm"
        );


    const safeCode =
        escapeProductText(
            code
        );


    const safeSportName =
        escapeProductText(
            sportName
        );


    const safeBadge =
        escapeProductText(
            badge
        );


    const safeImage =
        escapeProductText(
            image
        );


    const safeImageAlt =
        escapeProductText(
            imageAlt
        );


    const safeDescription =
        escapeProductText(
            shortDescription
        );


    /* -----------------------------------------------------
       PRODUCT URL
    ----------------------------------------------------- */

    const productUrl =
        `product.html?id=${encodeURIComponent(
            product.id
        )}`;



    /* -----------------------------------------------------
       HTML
    ----------------------------------------------------- */

    return `

        <article class="product-card">


            <!-- =============================================
                 PRODUCT IMAGE
            ============================================== -->

            <a
                href="${productUrl}"
                aria-label="Xem ${safeName}"
            >

                <div class="product-image">


                    <img
                        src="${safeImage}"
                        alt="${safeImageAlt}"
                        loading="lazy"
                    >


                    <!-- BADGE -->

                    <span class="product-badge">

                        ${safeBadge}

                    </span>


                    <!-- DISCOUNT -->

                    ${
                        discount > 0

                            ? `

                                <span class="product-discount">

                                    -${discount}%

                                </span>

                            `

                            : ""
                    }


                </div>

            </a>



            <!-- =============================================
                 PRODUCT INFO
            ============================================== -->

            <div class="product-info">


                <!-- META -->

                <div class="product-meta">


                    <span class="product-code">

                        ${safeCode}

                    </span>


                    <span class="product-sport">

                        ${safeSportName}

                    </span>


                </div>



                <!-- PRODUCT NAME -->

                <h3>


                    <a
                        href="${productUrl}"
                        aria-label="Xem ${safeName}"
                    >

                        ${safeName}

                    </a>


                </h3>



                <!-- RATING -->

                <div class="rating">


                    <span
                        class="rating-star"
                        aria-hidden="true"
                    >

                        ★

                    </span>


                    <strong>

                        ${rating}

                    </strong>


                    <span>

                        (${reviews} đánh giá)

                    </span>


                </div>



                <!-- DESCRIPTION -->

                <p class="product-short-description">

                    ${safeDescription}

                </p>



                <!-- PRICE -->

                <div class="price">


                    <strong>

                        ${formatProductMoney(
                            product.price
                        )}

                    </strong>


                    ${
                        Number(
                            product.oldPrice || 0
                        ) >
                        Number(
                            product.price || 0
                        )

                            ? `

                                <del>

                                    ${formatProductMoney(
                                        product.oldPrice
                                    )}

                                </del>

                            `

                            : ""
                    }


                </div>



                <!-- ACTION -->

                <a
                    class="product-btn"
                    href="${productUrl}"
                >

                    Xem chi tiết

                </a>


            </div>


        </article>

    `;

}



/* =========================================================
   5. BLOG CARD
========================================================= */

function blogCard(blog) {

    if (!blog) {

        return "";

    }


    const safeTitle =
        escapeProductText(
            blog.title ||
            "Bài viết SPORTHUB"
        );


    const safeCategory =
        escapeProductText(
            blog.category ||
            "BLOG"
        );


    const safeExcerpt =
        escapeProductText(
            blog.excerpt ||
            ""
        );


    const safeImage =
        escapeProductText(
            blog.image ||
            ""
        );


    const blogUrl =
        `blog-detail.html?id=${encodeURIComponent(
            blog.id
        )}`;


    return `

        <article class="blog-card">


            <a
                href="${blogUrl}"
                aria-label="Đọc ${safeTitle}"
            >

                <img
                    src="${safeImage}"
                    alt="${safeTitle}"
                    loading="lazy"
                >

            </a>



            <div class="blog-content">


                <span class="blog-category">

                    ${safeCategory}

                </span>



                <h3>


                    <a
                        href="${blogUrl}"
                    >

                        ${safeTitle}

                    </a>


                </h3>



                <p>

                    ${safeExcerpt}

                </p>



                <a
                    class="read-more"
                    href="${blogUrl}"
                >

                    Đọc bài chi tiết →

                </a>


            </div>


        </article>

    `;

}



/* =========================================================
   6. FEATURED PRODUCTS - TRANG CHỦ
========================================================= */

const featuredProducts =
    document.getElementById(
        "featuredProducts"
    );


if (
    featuredProducts
) {

    const featuredList =
        Array.isArray(products)

            ? products.slice(
                0,
                4
            )

            : [];


    featuredProducts.innerHTML =

        featuredList

            .map(
                productCard
            )

            .join("");

}



/* =========================================================
   7. HOME BLOGS
========================================================= */

const homeBlogs =
    document.getElementById(
        "homeBlogs"
    );


if (
    homeBlogs
) {

    const homeBlogList =
        Array.isArray(blogs)

            ? blogs.slice(
                0,
                4
            )

            : [];


    homeBlogs.innerHTML =

        homeBlogList

            .map(
                blogCard
            )

            .join("");

}



/* =========================================================
   8. DEBUG
========================================================= */

console.info(
    `[SPORTHUB] Home/Product Card Engine loaded: ${
        Array.isArray(products)
            ? products.length
            : 0
    } sản phẩm.`
);