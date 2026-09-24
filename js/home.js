/* =========================================================
   SPORTHUB - HOME / PRODUCT CARD ENGINE V4

   Dùng cho:
   - Product Card
   - Shop
   - Sản phẩm nổi bật trang chủ
   - Thêm nhanh vào giỏ hàng
   - Blog Card
   - Blog nổi bật trang chủ
   - Xử lý ảnh lỗi / ảnh dự phòng

   Yêu cầu load trước file này:
   1. image-factory.js
   2. data.js
   3. catalog-data.js
   4. main.js
========================================================= */



/* =========================================================
   1. TÍNH % GIẢM GIÁ
========================================================= */

function getDiscountPercent(product) {

    const price =
        Number(
            product?.price || 0
        );


    const oldPrice =
        Number(
            product?.oldPrice || 0
        );


    if (
        oldPrice <= 0 ||
        price <= 0 ||
        oldPrice <= price
    ) {

        return 0;

    }


    return Math.round(

        (
            (
                oldPrice -
                price
            ) /
            oldPrice
        ) * 100

    );

}



/* =========================================================
   2. FORMAT GIÁ VNĐ
========================================================= */

function formatProductMoney(value) {

    const number =
        Number(
            value || 0
        );


    /*
        Nếu main.js đã có money()
        thì ưu tiên sử dụng.
    */

    if (
        typeof money ===
        "function"
    ) {

        return money(
            number
        );

    }


    return (

        number.toLocaleString(
            "vi-VN"
        ) +

        "đ"

    );

}



/* =========================================================
   3. ESCAPE TEXT
   Tránh dữ liệu phá cấu trúc HTML
========================================================= */

function escapeProductText(
    value = ""
) {

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
   4. TẠO ẢNH DỰ PHÒNG CHO SẢN PHẨM
========================================================= */

function getProductFallbackImage(
    product
) {

    if (
        typeof makeSportImage ===
        "function"
    ) {

        return makeSportImage({

            title:
                product?.name ||
                "SPORTHUB",

            subtitle:
                product?.shortDescription ||
                "Sản phẩm thể thao",

            seed:
                500 +
                Number(
                    product?.id || 0
                ),

            kind:
                "product",

            icon:
                product?.icon ||
                product?.code ||
                "SPORT"

        });

    }


    return "";

}



/* =========================================================
   5. XỬ LÝ ẢNH SẢN PHẨM BỊ LỖI

   Nếu file ảnh chưa upload,
   sai tên hoặc sai đường dẫn
   -> dùng ảnh được tạo tự động
   -> không hiện icon ảnh vỡ.
========================================================= */

function handleProductImageError(
    imageElement,
    productId
) {

    if (!imageElement) {

        return;

    }


    /*
        Ngăn lỗi lặp vô hạn.
    */

    imageElement.onerror =
        null;


    const product =
        Array.isArray(products)

            ? products.find(

                item =>
                    Number(item.id) ===
                    Number(productId)

            )

            : null;


    const fallback =
        getProductFallbackImage(
            product
        );


    if (fallback) {

        imageElement.src =
            fallback;

        return;

    }


    /*
        Nếu image-factory cũng
        không hoạt động thì ẩn ảnh lỗi.
    */

    imageElement.style.display =
        "none";


    const parent =
        imageElement.parentElement;


    if (parent) {

        parent.classList.add(
            "product-image-fallback"
        );

    }

}



/* =========================================================
   6. TẠO ẢNH DỰ PHÒNG CHO BLOG
========================================================= */

function getBlogFallbackImage(
    blog
) {

    if (
        typeof makeSportImage ===
        "function"
    ) {

        return makeSportImage({

            title:
                blog?.title ||
                "SPORTHUB BLOG",

            subtitle:
                blog?.excerpt ||
                "Kiến thức thể thao",

            seed:
                900 +
                Number(
                    blog?.id || 0
                ) * 13,

            kind:
                "blog",

            icon:
                blog?.icon ||
                "BLOG"

        });

    }


    return "";

}



/* =========================================================
   7. XỬ LÝ ẢNH BLOG BỊ LỖI
========================================================= */

function handleBlogImageError(
    imageElement,
    blogId
) {

    if (!imageElement) {

        return;

    }


    imageElement.onerror =
        null;


    const blog =
        Array.isArray(blogs)

            ? blogs.find(

                item =>
                    Number(item.id) ===
                    Number(blogId)

            )

            : null;


    const fallback =
        getBlogFallbackImage(
            blog
        );


    if (fallback) {

        imageElement.src =
            fallback;

        return;

    }


    imageElement.style.display =
        "none";

}



/* =========================================================
   8. THÊM NHANH SẢN PHẨM VÀO GIỎ

   Không cần vào trang chi tiết.

   Hệ thống tự chọn lựa chọn đầu tiên
   trong product.sizes.
========================================================= */

function quickAddProduct(
    productId
) {

    if (
        !Array.isArray(products)
    ) {

        return;

    }


    const product =
        products.find(

            item =>
                Number(item.id) ===
                Number(productId)

        );


    if (!product) {

        if (
            typeof toast ===
            "function"
        ) {

            toast(
                "Không tìm thấy sản phẩm"
            );

        }


        return;

    }



    /* -----------------------------------------------------
       KIỂM TRA TỒN KHO
    ----------------------------------------------------- */

    const stock =
        Number(
            product.stock || 0
        );


    if (
        stock <= 0
    ) {

        if (
            typeof toast ===
            "function"
        ) {

            toast(
                "Sản phẩm hiện đang hết hàng"
            );

        }


        return;

    }



    /* -----------------------------------------------------
       CHỌN SIZE / LỰA CHỌN ĐẦU TIÊN
    ----------------------------------------------------- */

    const sizes =
        Array.isArray(
            product.sizes
        )

            ? product.sizes

            : [];


    const selectedSize =

        sizes.length

            ? sizes[0]

            : "Tiêu chuẩn";



    /* -----------------------------------------------------
       GỌI HỆ THỐNG GIỎ HÀNG
    ----------------------------------------------------- */

    if (
        typeof addToCart ===
        "function"
    ) {

        addToCart(

            product.id,

            selectedSize,

            1

        );

    }

}



/* =========================================================
   9. PRODUCT CARD
========================================================= */

function productCard(
    product
) {

    if (!product) {

        return "";

    }



    /* -----------------------------------------------------
       PRODUCT ID

       ID số vẫn được giữ để:
       - xử lý giỏ hàng
       - xử lý ảnh lỗi
       - tìm dữ liệu nội bộ

       Không dùng ID số để tạo URL sản phẩm.
    ----------------------------------------------------- */

    const productId =
        Number(
            product.id || 0
        );



    /* -----------------------------------------------------
       DISCOUNT
    ----------------------------------------------------- */

    const discount =
        getDiscountPercent(
            product
        );



    /* -----------------------------------------------------
       PRODUCT CODE

       Đây là mã URL chuẩn của sản phẩm:
       P01 -> P52
    ----------------------------------------------------- */

    const code =

        product.code ||

        `P${String(
            productId
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

        getProductFallbackImage(
            product
        );


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

            product.name ||
            "Sản phẩm"

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

       CHUẨN DUY NHẤT TOÀN WEBSITE:

       product.html?id=P01
       product.html?id=P02
       ...
       product.html?id=P52

       Không tạo:
       product.html?id=1
       product.html?id=2
       ...
    ----------------------------------------------------- */

    const productUrl =

        `product.html?id=${encodeURIComponent(
            code
        )}`;



    /* -----------------------------------------------------
       STOCK
    ----------------------------------------------------- */

    const stock =
        Number(
            product.stock || 0
        );


    const isOutOfStock =
        stock <= 0;



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
                        onerror="
                            handleProductImageError(
                                this,
                                ${productId}
                            )
                        "
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



                    <!-- OUT OF STOCK -->

                    ${
                        isOutOfStock

                            ? `

                                <span class="product-stock-badge">

                                    HẾT HÀNG

                                </span>

                            `

                            : ""
                    }


                </div>

            </a>



            <!-- =============================================
                 PRODUCT INFORMATION
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



                <!-- SHORT DESCRIPTION -->

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



                <!-- =========================================
                     PRODUCT ACTIONS
                ========================================== -->

                <div class="product-card-actions">


                    <!-- XEM CHI TIẾT -->

                    <a
                        class="
                            product-btn
                            product-detail-btn
                        "
                        href="${productUrl}"
                    >

                        XEM CHI TIẾT

                    </a>



                    <!-- THÊM VÀO GIỎ -->

                    <button
                        class="
                            btn-primary
                            product-add-btn
                        "
                        type="button"
                        onclick="
                            quickAddProduct(
                                ${productId}
                            )
                        "
                        ${isOutOfStock ? "disabled" : ""}
                    >

                        ${
                            isOutOfStock

                                ? "HẾT HÀNG"

                                : "🛒 THÊM VÀO GIỎ"
                        }

                    </button>


                </div>


            </div>


        </article>

    `;

}



/* =========================================================
   10. BLOG CARD
========================================================= */

function blogCard(
    blog
) {

    if (!blog) {

        return "";

    }



    const blogId =
        Number(
            blog.id || 0
        );


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


    const image =

        blog.image ||

        getBlogFallbackImage(
            blog
        );


    const safeImage =
        escapeProductText(
            image
        );


    /*
        Blog vẫn dùng ID số vì hệ thống Blog
        hiện tại được thiết kế:
        blog-detail.html?id=1 -> id=20
    */

    const blogUrl =

        `blog-detail.html?id=${encodeURIComponent(
            blogId
        )}`;



    return `

        <article class="blog-card">


            <!-- BLOG IMAGE -->

            <a
                href="${blogUrl}"
                aria-label="Đọc ${safeTitle}"
            >

                <img
                    src="${safeImage}"
                    alt="${safeTitle}"
                    loading="lazy"
                    onerror="
                        handleBlogImageError(
                            this,
                            ${blogId}
                        )
                    "
                >

            </a>



            <!-- BLOG CONTENT -->

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

                    ĐỌC BÀI CHI TIẾT →

                </a>


            </div>


        </article>

    `;

}



/* =========================================================
   11. SẢN PHẨM NỔI BẬT TRANG CHỦ

   Ưu tiên nhiều môn khác nhau
   để trang chủ phong phú hơn.
========================================================= */

const featuredProducts =
    document.getElementById(
        "featuredProducts"
    );


if (
    featuredProducts &&
    Array.isArray(products)
) {


    /*
        Danh sách ưu tiên:

        P01 Gym
        P02 Running
        P03 Gym
        P06 Yoga
        P13 Boxing
        P18 Muay Thai
        P38 Badminton
        P43 Pickleball

        Giá trị số bên dưới chỉ dùng
        để tìm sản phẩm trong database.

        URL sau khi render vẫn dùng:
        P01, P02, P03...
    */

    const featuredProductIds = [

        1,
        2,
        3,
        6,
        13,
        18,
        38,
        43

    ];



    let featuredList =

        featuredProductIds

            .map(

                id =>
                    products.find(

                        product =>
                            Number(product.id) ===
                            Number(id)

                    )

            )

            .filter(
                Boolean
            );



    /*
        Nếu catalog chưa đủ dữ liệu
        thì tự bù sản phẩm khác
        cho đủ tối đa 8 sản phẩm.
    */

    if (
        featuredList.length < 8
    ) {

        const existingIds =
            new Set(

                featuredList.map(

                    product =>
                        Number(product.id)

                )

            );


        const additionalProducts =

            products

                .filter(

                    product =>
                        !existingIds.has(
                            Number(product.id)
                        )

                )

                .slice(
                    0,
                    8 -
                    featuredList.length
                );


        featuredList = [

            ...featuredList,

            ...additionalProducts

        ];

    }



    featuredProducts.innerHTML =

        featuredList

            .slice(
                0,
                8
            )

            .map(
                productCard
            )

            .join("");

}



/* =========================================================
   12. BLOG NỔI BẬT TRANG CHỦ
========================================================= */

const homeBlogs =
    document.getElementById(
        "homeBlogs"
    );


if (
    homeBlogs &&
    Array.isArray(blogs)
) {


    const homeBlogList =

        blogs.slice(
            0,
            4
        );


    homeBlogs.innerHTML =

        homeBlogList

            .map(
                blogCard
            )

            .join("");

}



/* =========================================================
   13. DEBUG
========================================================= */

console.info(

    `[SPORTHUB] Home/Product Card Engine V4 loaded: ${
        Array.isArray(products)
            ? products.length
            : 0
    } sản phẩm.`

);