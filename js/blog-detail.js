/* =========================================================
   SPORTHUB - BLOG DETAIL ENGINE
   Article Render + Dynamic SEO + Schema
========================================================= */


/* =========================================================
   1. WEBSITE BASE URL
========================================================= */

const SPORTHUB_SITE_URL =
    "https://tranthiquynhnhu0901-hue.github.io/shopthethao/";


/* =========================================================
   2. LẤY BLOG ID
========================================================= */

const blogId =
    Number(
        new URLSearchParams(
            window.location.search
        ).get("id")
    );


const blog =
    blogs.find(
        item =>
            Number(item.id) === blogId
    );


const articleRoot =
    document.getElementById(
        "article"
    );


/* =========================================================
   3. SEO HELPERS
========================================================= */

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


function getAbsoluteURL(path) {

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


function setArticleSchema(data) {

    let schema =
        document.getElementById(
            "articleSchema"
        );


    if (!schema) {

        schema =
            document.createElement(
                "script"
            );


        schema.id =
            "articleSchema";


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
   4. SEO BÀI VIẾT
========================================================= */

function setBlogSEO(blog) {


    /* -----------------------------------------------------
       TITLE
    ----------------------------------------------------- */

    const title =
        blog.seoTitle ||
        `${blog.title} | SPORTHUB`;


    /* -----------------------------------------------------
       DESCRIPTION
    ----------------------------------------------------- */

    const description =
        blog.metaDescription ||
        blog.excerpt ||
        "Bài viết chia sẻ kiến thức thể thao và Fitness tại SPORTHUB.";


    /* -----------------------------------------------------
       CANONICAL
    ----------------------------------------------------- */

    const canonicalURL =
        `${SPORTHUB_SITE_URL}blog-detail.html?id=${blog.id}`;


    /* -----------------------------------------------------
       IMAGE
    ----------------------------------------------------- */

    const imageURL =
        getAbsoluteURL(
            blog.image
        );


    const imageAlt =
        blog.imageAlt ||
        blog.title;



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

    setMetaByName(
        "description",
        description
    );



    /* =====================================================
       CANONICAL
    ===================================================== */

    setCanonicalURL(
        canonicalURL
    );



    /* =====================================================
       OPEN GRAPH
    ===================================================== */

    setMetaByProperty(
        "og:type",
        "article"
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
       BLOG POSTING SCHEMA
    ===================================================== */

    const blogPostingSchema = {

        "@type":
            "BlogPosting",

        "@id":
            `${canonicalURL}#article`,

        "headline":
            blog.title,

        "description":
            description,

        "url":
            canonicalURL,

        "mainEntityOfPage":
            {
                "@type":
                    "WebPage",

                "@id":
                    canonicalURL
            },

        "author":
            {
                "@type":
                    "Organization",

                "name":
                    blog.author ||
                    "SPORTHUB Editorial"
            },

        "publisher":
            {
                "@type":
                    "Organization",

                "name":
                    "SPORTHUB",

                "url":
                    SPORTHUB_SITE_URL
            }

    };


    /*
        IMAGE
    */

    if (imageURL) {

        blogPostingSchema.image =
            [
                imageURL
            ];

    }


    /*
        ARTICLE SECTION
    */

    if (blog.category) {

        blogPostingSchema.articleSection =
            blog.category;

    }


    /*
        DATE PUBLISHED

        Chỉ thêm nếu dữ liệu bài blog
        thực sự có trường ngày.

        Không tự bịa ngày đăng.
    */

    const datePublished =
        blog.datePublished ||
        blog.publishDate ||
        blog.date ||
        "";


    if (datePublished) {

        blogPostingSchema.datePublished =
            datePublished;

    }


    /*
        DATE MODIFIED

        Chỉ thêm khi database có dữ liệu.
    */

    const dateModified =
        blog.dateModified ||
        blog.modifiedDate ||
        "";


    if (dateModified) {

        blogPostingSchema.dateModified =
            dateModified;

    }



    /* =====================================================
       BREADCRUMB SCHEMA
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
                        "Blog",

                    "item":
                        `${SPORTHUB_SITE_URL}blog.html`

                },


                {

                    "@type":
                        "ListItem",

                    "position":
                        3,

                    "name":
                        blog.title,

                    "item":
                        canonicalURL

                }

            ]

    };



    /* =====================================================
       STRUCTURED DATA
    ===================================================== */

    const structuredData = {

        "@context":
            "https://schema.org",

        "@graph":
            [

                blogPostingSchema,

                breadcrumbSchema

            ]

    };


    setArticleSchema(
        structuredData
    );

}


/* =========================================================
   5. SEO KHI KHÔNG TÌM THẤY BÀI
========================================================= */

function setBlogNotFoundSEO() {

    const title =
        "Không tìm thấy bài viết | SPORTHUB";


    const description =
        "Bài viết không tồn tại hoặc đường dẫn không chính xác. Khám phá các nội dung thể thao và Fitness khác tại SPORTHUB.";


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
        URL bài lỗi không cần Canonical.
    */

    const canonical =
        document.querySelector(
            'link[rel="canonical"]'
        );


    if (canonical) {

        canonical.remove();

    }


    /*
        Không xuất BlogPosting Schema
        cho URL không có bài viết.
    */

    const schema =
        document.getElementById(
            "articleSchema"
        );


    if (schema) {

        schema.remove();

    }

}


/* =========================================================
   6. KHÔNG TÌM THẤY BÀI VIẾT
========================================================= */

if (!blog) {


    setBlogNotFoundSEO();


    articleRoot.innerHTML = `

        <div class="container empty">

            <h1>
                Không tìm thấy bài viết
            </h1>

            <p>
                Bài viết có thể đã được thay đổi
                hoặc đường dẫn không chính xác.
            </p>

            <a
                class="btn-primary"
                href="blog.html"
            >
                Quay lại Blog
            </a>

        </div>

    `;

}


/* =========================================================
   7. TÌM THẤY BÀI VIẾT
========================================================= */

else {


    /* =====================================================
       SEO
    ===================================================== */

    setBlogSEO(
        blog
    );



    /* =====================================================
       IMAGE ALT
    ===================================================== */

    const imageAlt =
        blog.imageAlt ||
        blog.title;



    /* =====================================================
       AUTHOR
    ===================================================== */

    const author =
        blog.author ||
        "SPORTHUB Editorial";



    /* =====================================================
       RENDER ARTICLE
    ===================================================== */

    articleRoot.innerHTML = `

        <header class="article-header">

            <div class="article-heading">

                <span class="eyebrow">
                    ${blog.category}
                </span>


                <h1>
                    ${blog.title}
                </h1>


                <p>
                    ${blog.excerpt}
                </p>


                <div
                    style="
                        margin-top:18px;
                        color:#87979e
                    "
                >
                    ${author}
                    ·
                    Nội dung giáo dục và tham khảo
                </div>

            </div>

        </header>



        <main class="article-main">


            <img
                class="article-cover"
                src="${blog.image}"
                alt="${imageAlt}"
            >


            <article class="article-content">


                ${blog.content}



                <div class="article-callout">

                    <strong>
                        Lưu ý an toàn
                    </strong>

                    <p>
                        Nội dung trên mang tính giáo dục chung,
                        không thay thế chẩn đoán hay chỉ định y khoa.
                        Nếu bạn có bệnh nền, đang chấn thương hoặc
                        xuất hiện triệu chứng bất thường khi tập,
                        hãy tìm hỗ trợ chuyên môn phù hợp.
                    </p>

                </div>



                <p style="margin-top:30px">

                    <a
                        class="btn-dark"
                        href="blog.html"
                    >
                        ← Quay lại 20 bài Blog
                    </a>

                </p>


            </article>

        </main>

    `;

}