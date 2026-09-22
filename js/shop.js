/* =========================================================
   SPORTHUB - SHOP ENGINE V2

   Chức năng:
   - Search không dấu
   - Lọc theo môn thể thao
   - Lọc theo loại sản phẩm
   - Lọc theo thương hiệu
   - Lọc theo khoảng giá
   - Lọc theo đối tượng
   - Lọc theo trình độ
   - Lọc theo rating
   - Lọc sản phẩm giảm giá
   - Sort
   - Reset filter
   - Category active state
   - Empty state
========================================================= */


/* =========================================================
   1. DOM
========================================================= */

const shopGrid =
    document.getElementById("shopGrid");

const countElement =
    document.getElementById("count");

const searchInput =
    document.getElementById("q");

const categoryFilter =
    document.getElementById("cat");

const productTypeFilter =
    document.getElementById("productType");

const brandFilter =
    document.getElementById("brand");

const priceRangeFilter =
    document.getElementById("priceRange");

const audienceFilter =
    document.getElementById("audience");

const levelFilter =
    document.getElementById("level");

const ratingFilter =
    document.getElementById("ratingFilter");

const promotionFilter =
    document.getElementById("promotion");

const sortFilter =
    document.getElementById("sort");

const resetFiltersButton =
    document.getElementById("resetFilters");



/* =========================================================
   2. CHUẨN HÓA TEXT
   Tìm kiếm không phân biệt dấu tiếng Việt
========================================================= */

function normalizeSearchText(value = "") {

    return String(value)

        .normalize("NFD")

        .replace(
            /[\u0300-\u036f]/g,
            ""
        )

        .replace(
            /đ/g,
            "d"
        )

        .replace(
            /Đ/g,
            "d"
        )

        .toLowerCase()

        .trim();

}



/* =========================================================
   3. CHUYỂN ARRAY / OBJECT THÀNH TEXT TÌM KIẾM
========================================================= */

function searchableValue(value) {

    if (
        value === null ||
        value === undefined
    ) {

        return "";

    }


    if (
        Array.isArray(value)
    ) {

        return value
            .map(searchableValue)
            .join(" ");

    }


    if (
        typeof value === "object"
    ) {

        return Object.values(value)
            .map(searchableValue)
            .join(" ");

    }


    return String(value);

}



/* =========================================================
   4. TẠO SEARCH INDEX CHO SẢN PHẨM
========================================================= */

function getProductSearchText(product) {

    const searchableFields = [

        product.id,

        product.code,

        product.name,

        product.slug,

        product.category,

        product.type,

        product.sport,

        product.sportName,

        product.brand,

        product.shortDescription,

        product.description,

        product.tags,

        product.audience,

        product.level,

        product.badge,

        product.highlights,

        product.suitableFor,

        product.specifications,

        product.relatedExercises,

        product.relatedSports

    ];


    return normalizeSearchText(
        searchableFields
            .map(searchableValue)
            .join(" ")
    );

}



/* =========================================================
   5. SEARCH
   Hỗ trợ nhiều từ khóa cùng lúc

   Ví dụ:
   "boxing beginner"
   "pickleball carbon"
   "P43"
========================================================= */

function matchesSearch(
    product,
    query
) {

    const normalizedQuery =
        normalizeSearchText(query);


    if (!normalizedQuery) {

        return true;

    }


    const keywords =
        normalizedQuery
            .split(/\s+/)
            .filter(Boolean);


    const productText =
        getProductSearchText(product);


    return keywords.every(
        keyword =>
            productText.includes(
                keyword
            )
    );

}



/* =========================================================
   6. FILTER SPORT
========================================================= */

function matchesSport(
    product,
    selectedSport
) {

    if (
        !selectedSport ||
        selectedSport === "all"
    ) {

        return true;

    }


    return (
        String(product.sport || "") ===
        selectedSport
    );

}



/* =========================================================
   7. FILTER PRODUCT TYPE
========================================================= */

function matchesProductType(
    product,
    selectedType
) {

    if (
        !selectedType ||
        selectedType === "all"
    ) {

        return true;

    }


    return (
        String(product.type || "") ===
        selectedType
    );

}



/* =========================================================
   8. FILTER BRAND
========================================================= */

function matchesBrand(
    product,
    selectedBrand
) {

    if (
        !selectedBrand ||
        selectedBrand === "all"
    ) {

        return true;

    }


    return (
        normalizeSearchText(
            product.brand
        ) ===
        normalizeSearchText(
            selectedBrand
        )
    );

}



/* =========================================================
   9. FILTER PRICE
========================================================= */

function matchesPrice(
    product,
    selectedRange
) {

    if (
        !selectedRange ||
        selectedRange === "all"
    ) {

        return true;

    }


    const price =
        Number(
            product.price
        ) || 0;


    switch (
        selectedRange
    ) {

        case "under-300":

            return (
                price < 300000
            );


        case "300-500":

            return (
                price >= 300000 &&
                price < 500000
            );


        case "500-1000":

            return (
                price >= 500000 &&
                price < 1000000
            );


        case "1000-1500":

            return (
                price >= 1000000 &&
                price <= 1500000
            );


        case "over-1500":

            return (
                price > 1500000
            );


        default:

            return true;

    }

}



/* =========================================================
   10. FILTER AUDIENCE
========================================================= */

function matchesAudience(
    product,
    selectedAudience
) {

    if (
        !selectedAudience ||
        selectedAudience === "all"
    ) {

        return true;

    }


    const audiences =
        Array.isArray(
            product.audience
        )
            ? product.audience
            : [];


    return audiences.some(
        audience =>
            normalizeSearchText(
                audience
            ) ===
            normalizeSearchText(
                selectedAudience
            )
    );

}



/* =========================================================
   11. FILTER LEVEL
========================================================= */

function matchesLevel(
    product,
    selectedLevel
) {

    if (
        !selectedLevel ||
        selectedLevel === "all"
    ) {

        return true;

    }


    const levels =
        Array.isArray(
            product.level
        )
            ? product.level
            : [];


    return levels.some(
        level =>
            normalizeSearchText(
                level
            ) ===
            normalizeSearchText(
                selectedLevel
            )
    );

}



/* =========================================================
   12. FILTER RATING
========================================================= */

function matchesRating(
    product,
    selectedRating
) {

    if (
        !selectedRating ||
        selectedRating === "all"
    ) {

        return true;

    }


    const rating =
        Number(
            product.rating
        ) || 0;


    const minimumRating =
        Number(
            selectedRating
        ) || 0;


    return (
        rating >=
        minimumRating
    );

}



/* =========================================================
   13. FILTER PROMOTION
========================================================= */

function isProductOnSale(
    product
) {

    const currentPrice =
        Number(
            product.price
        ) || 0;


    const oldPrice =
        Number(
            product.oldPrice
        ) || 0;


    return (
        oldPrice > 0 &&
        currentPrice > 0 &&
        oldPrice > currentPrice
    );

}


function matchesPromotion(
    product,
    selectedPromotion
) {

    if (
        !selectedPromotion ||
        selectedPromotion === "all"
    ) {

        return true;

    }


    if (
        selectedPromotion === "sale"
    ) {

        return isProductOnSale(
            product
        );

    }


    return true;

}



/* =========================================================
   14. DISCOUNT %
========================================================= */

function getShopDiscountPercent(
    product
) {

    const price =
        Number(
            product.price
        ) || 0;


    const oldPrice =
        Number(
            product.oldPrice
        ) || 0;


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
        ) *
        100
    );

}



/* =========================================================
   15. SORT
========================================================= */

function sortProducts(
    productList,
    sortType
) {

    const sortedProducts =
        [...productList];


    switch (
        sortType
    ) {

        case "low":

            sortedProducts.sort(
                (a, b) =>
                    Number(a.price || 0) -
                    Number(b.price || 0)
            );

            break;


        case "high":

            sortedProducts.sort(
                (a, b) =>
                    Number(b.price || 0) -
                    Number(a.price || 0)
            );

            break;


        case "rating":

            sortedProducts.sort(
                (a, b) => {

                    const ratingDifference =
                        Number(
                            b.rating || 0
                        ) -
                        Number(
                            a.rating || 0
                        );


                    if (
                        ratingDifference !== 0
                    ) {

                        return ratingDifference;

                    }


                    return (
                        Number(
                            b.reviews || 0
                        ) -
                        Number(
                            a.reviews || 0
                        )
                    );

                }
            );

            break;


        case "discount":

            sortedProducts.sort(
                (a, b) =>
                    getShopDiscountPercent(b) -
                    getShopDiscountPercent(a)
            );

            break;


        case "default":

        default:

            sortedProducts.sort(
                (a, b) =>
                    Number(a.id || 0) -
                    Number(b.id || 0)
            );

            break;

    }


    return sortedProducts;

}



/* =========================================================
   16. CATEGORY ACTIVE STATE
========================================================= */

function updateCategoryActiveState(
    selectedSport
) {

    const categoryCards =
        document.querySelectorAll(
            ".category-card[data-category]"
        );


    categoryCards.forEach(
        card => {

            const cardCategory =
                card.dataset.category;


            const isActive =
                selectedSport !== "all" &&
                cardCategory ===
                    selectedSport;


            card.classList.toggle(
                "active",
                isActive
            );


            card.setAttribute(
                "aria-pressed",
                isActive
                    ? "true"
                    : "false"
            );

        }
    );

}



/* =========================================================
   17. EMPTY STATE
========================================================= */

function renderEmptyState() {

    if (!shopGrid) {
        return;
    }


    shopGrid.innerHTML = `

        <div class="empty shop-empty">

            <h3>
                Không tìm thấy sản phẩm phù hợp
            </h3>

            <p>
                Hãy thử thay đổi từ khóa
                hoặc xóa bớt một số bộ lọc.
            </p>

            <button
                type="button"
                class="btn-primary"
                onclick="resetShopFilters()"
            >
                XÓA BỘ LỌC
            </button>

        </div>

    `;

}



/* =========================================================
   18. RENDER SHOP
========================================================= */

function renderShop() {

    if (
        !shopGrid ||
        !Array.isArray(products)
    ) {

        return;

    }


    /* -----------------------------------------------------
       ĐỌC GIÁ TRỊ FILTER
    ----------------------------------------------------- */

    const query =
        searchInput
            ? searchInput.value
            : "";


    const selectedSport =
        categoryFilter
            ? categoryFilter.value
            : "all";


    const selectedType =
        productTypeFilter
            ? productTypeFilter.value
            : "all";


    const selectedBrand =
        brandFilter
            ? brandFilter.value
            : "all";


    const selectedPrice =
        priceRangeFilter
            ? priceRangeFilter.value
            : "all";


    const selectedAudience =
        audienceFilter
            ? audienceFilter.value
            : "all";


    const selectedLevel =
        levelFilter
            ? levelFilter.value
            : "all";


    const selectedRating =
        ratingFilter
            ? ratingFilter.value
            : "all";


    const selectedPromotion =
        promotionFilter
            ? promotionFilter.value
            : "all";


    const selectedSort =
        sortFilter
            ? sortFilter.value
            : "default";



    /* -----------------------------------------------------
       FILTER
    ----------------------------------------------------- */

    let filteredProducts =
        products.filter(
            product =>

                matchesSearch(
                    product,
                    query
                )

                &&

                matchesSport(
                    product,
                    selectedSport
                )

                &&

                matchesProductType(
                    product,
                    selectedType
                )

                &&

                matchesBrand(
                    product,
                    selectedBrand
                )

                &&

                matchesPrice(
                    product,
                    selectedPrice
                )

                &&

                matchesAudience(
                    product,
                    selectedAudience
                )

                &&

                matchesLevel(
                    product,
                    selectedLevel
                )

                &&

                matchesRating(
                    product,
                    selectedRating
                )

                &&

                matchesPromotion(
                    product,
                    selectedPromotion
                )

        );



    /* -----------------------------------------------------
       SORT
    ----------------------------------------------------- */

    filteredProducts =
        sortProducts(
            filteredProducts,
            selectedSort
        );



    /* -----------------------------------------------------
       CATEGORY ACTIVE
    ----------------------------------------------------- */

    updateCategoryActiveState(
        selectedSport
    );



    /* -----------------------------------------------------
       COUNT
    ----------------------------------------------------- */

    if (
        countElement
    ) {

        countElement.textContent =
            filteredProducts.length;

    }



    /* -----------------------------------------------------
       EMPTY
    ----------------------------------------------------- */

    if (
        filteredProducts.length === 0
    ) {

        renderEmptyState();

        return;

    }



    /* -----------------------------------------------------
       PRODUCT GRID
    ----------------------------------------------------- */

    shopGrid.innerHTML =
        filteredProducts

            .map(
                product => {

                    if (
                        typeof productCard ===
                        "function"
                    ) {

                        return productCard(
                            product
                        );

                    }


                    /*
                       Fallback nếu home.js
                       chưa load được.
                    */

                    return `

                        <article class="product-card">

                            <a
                                href="product.html?id=${product.id}"
                            >

                                <div class="product-image">

                                    <img
                                        src="${product.image || ""}"
                                        alt="${product.imageAlt || product.name}"
                                        loading="lazy"
                                    >

                                </div>

                            </a>


                            <div class="product-info">

                                <span class="product-code">
                                    ${product.code || ""}
                                </span>


                                <h3>

                                    <a
                                        href="product.html?id=${product.id}"
                                    >
                                        ${product.name}
                                    </a>

                                </h3>


                                <div class="price">

                                    ${
                                        typeof money ===
                                        "function"

                                            ? money(
                                                product.price
                                            )

                                            : Number(
                                                product.price || 0
                                            ).toLocaleString(
                                                "vi-VN"
                                            ) + "đ"
                                    }

                                </div>

                            </div>

                        </article>

                    `;

                }
            )

            .join("");

}



/* =========================================================
   19. RESET FILTER
========================================================= */

function resetShopFilters() {

    if (
        searchInput
    ) {

        searchInput.value =
            "";

    }


    if (
        categoryFilter
    ) {

        categoryFilter.value =
            "all";

    }


    if (
        productTypeFilter
    ) {

        productTypeFilter.value =
            "all";

    }


    if (
        brandFilter
    ) {

        brandFilter.value =
            "all";

    }


    if (
        priceRangeFilter
    ) {

        priceRangeFilter.value =
            "all";

    }


    if (
        audienceFilter
    ) {

        audienceFilter.value =
            "all";

    }


    if (
        levelFilter
    ) {

        levelFilter.value =
            "all";

    }


    if (
        ratingFilter
    ) {

        ratingFilter.value =
            "all";

    }


    if (
        promotionFilter
    ) {

        promotionFilter.value =
            "all";

    }


    if (
        sortFilter
    ) {

        sortFilter.value =
            "default";

    }


    renderShop();

}



/* =========================================================
   20. RESET BUTTON EVENT
========================================================= */

if (
    resetFiltersButton
) {

    resetFiltersButton.addEventListener(
        "click",
        resetShopFilters
    );

}



/* =========================================================
   21. CATEGORY CARD ACCESSIBILITY
========================================================= */

document
    .querySelectorAll(
        ".category-card[data-category]"
    )
    .forEach(
        card => {

            card.setAttribute(
                "aria-pressed",
                "false"
            );

        }
    );



/* =========================================================
   22. INITIAL RENDER
========================================================= */

renderShop();



/* =========================================================
   23. DEBUG
========================================================= */

console.info(
    `[SPORTHUB] Shop Engine V2 loaded với ${
        Array.isArray(products)
            ? products.length
            : 0
    } sản phẩm.`
);