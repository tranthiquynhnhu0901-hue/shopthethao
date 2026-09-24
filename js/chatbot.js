/* =========================================================
   SPORTHUB AI COACH & CUSTOMER ASSISTANT
   VERSION 4 - FULL LOCAL ENGINE

   CÓ SẴN:
   - Chat UI
   - Vietnamese NLP
   - Không dấu
   - Teencode
   - Typo cơ bản
   - Budget Entity
   - Sport Entity
   - Product Type Entity
   - Goal Entity
   - Level Entity
   - Current Product Context
   - Conversation Memory
   - Product Recommendation
   - Product Comparison
   - Mẫu rẻ hơn / tương tự
   - Fitness Coach
   - Nutrition Coach
   - Sleep / Recovery
   - Pain / Safety
   - Fitness Check Context
   - Platform Guide
   - Commerce / Cart / Coupon
   - Troubleshooting
   - Emotion Handling
   - Casual / Small Talk
   - Off-topic Handling
   - Confidence / Clarification
   - Không bịa dữ liệu realtime

   GIAI ĐOẠN SAU:
   - Backend API
   - LLM / AI thật
   - Tool Calling server-side
========================================================= */

(function () {

    "use strict";


    /* =====================================================
       1. WEBSITE PATH
    ===================================================== */

    const chatbotScriptUrl =
        document.currentScript
            ? document.currentScript.src
            : window.location.href;


    function sportHubUrl(path) {

        try {

            return new URL(
                "../" + String(path || "")
                    .replace(/^\/+/, ""),
                chatbotScriptUrl
            ).href;

        } catch (error) {

            return path;

        }

    }



    /* =====================================================
       2. HTML SAFETY
    ===================================================== */

    function escapeHtml(value) {

        return String(value ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }



    /* =====================================================
       3. BASIC HELPERS
    ===================================================== */

    function includesAny(text, phrases) {

        return phrases.some(
            function (phrase) {

                return text.includes(phrase);

            }
        );

    }


    function toArray(value) {

        if (Array.isArray(value)) {

            return value;

        }


        if (
            value === null
            ||
            value === undefined
            ||
            value === ""
        ) {

            return [];

        }


        return [value];

    }


    function unique(items) {

        return [
            ...new Set(
                items.filter(Boolean)
            )
        ];

    }



    /* =====================================================
       4. VIETNAMESE NLP
       TYPO + TEENCODE
    ===================================================== */

    function normalizeText(text) {

        let value =
            String(text || "")
                .toLowerCase()
                .normalize("NFD")
                .replace(
                    /[\u0300-\u036f]/g,
                    ""
                )
                .replace(/đ/g, "d");


        /* Chữ kéo dài */

        value =
            value.replace(
                /([a-z])\1{2,}/g,
                "$1"
            );


        /* Giữ chữ + số */

        value =
            value.replace(
                /[^a-z0-9\s.,]/g,
                " "
            );


        value =
            value
                .replace(/\s+/g, " ")
                .trim();



        const replacements = [

            /* =============================
               CỤM TỪ PHẢI CHẠY TRƯỚC
            ============================= */

            [/\bgim mo\b/g, "giam mo"],
            [/\bgim can\b/g, "giam can"],

            [/\bmau ni\b/g, "mau nay"],
            [/\bcai ni\b/g, "cai nay"],
            [/\bcon ni\b/g, "con nay"],
            [/\bem ni\b/g, "em nay"],

            [/\bbao nhiu\b/g, "bao nhieu"],

            [/\bng moi\b/g, "nguoi moi"],

            [/\btangco\b/g, "tang co"],
            [/\bgiammo\b/g, "giam mo"],


            /* =============================
               KHÔNG
            ============================= */

            [/\bko\b/g, "khong"],
            [/\bk0\b/g, "khong"],
            [/\bhok\b/g, "khong"],
            [/\bhong\b/g, "khong"],
            [/\bhem\b/g, "khong"],
            [/\bkhum\b/g, "khong"],
            [/\bkhongg\b/g, "khong"],


            /* =============================
               MUỐN
            ============================= */

            [/\bmun\b/g, "muon"],
            [/\bmuonn\b/g, "muon"],


            /* =============================
               TÔI / MÌNH
            ============================= */

            [/\btui\b/g, "toi"],
            [/\btoy\b/g, "toi"],

            [/\bmik\b/g, "minh"],
            [/\bminhf\b/g, "minh"],


            /* =============================
               GÌ
            ============================= */

            [/\bj\b/g, "gi"],
            [/\bgii\b/g, "gi"],
            [/\bgiif\b/g, "gi"],


            /* =============================
               NHIÊU
            ============================= */

            [/\bnhiu\b/g, "nhieu"],


            /* =============================
               ĐƯỢC
            ============================= */

            [/\bdc\b/g, "duoc"],
            [/\bdk\b/g, "duoc"],
            [/\bdkk\b/g, "duoc"],


            /* =============================
               SẢN PHẨM
            ============================= */

            [/\bsp\b/g, "san pham"],
            [/\bsanpham\b/g, "san pham"],


            /* =============================
               TƯ VẤN
            ============================= */

            [/\btuvan\b/g, "tu van"],


            /* =============================
               GYM
            ============================= */

            [/\bgim\b/g, "gym"],


            /* =============================
               RUNNING
            ============================= */

            [/\bruning\b/g, "running"],
            [/\brunnig\b/g, "running"],
            [/\brunnning\b/g, "running"],


            /* =============================
               PICKLEBALL
            ============================= */

            [/\bpickebal\b/g, "pickleball"],
            [/\bpicklebal\b/g, "pickleball"],
            [/\bpicleball\b/g, "pickleball"],
            [/\bpikleball\b/g, "pickleball"],
            [/\bpikeball\b/g, "pickleball"],


            /* =============================
               BADMINTON
            ============================= */

            [/\bbadmiton\b/g, "badminton"],


            /* =============================
               BOXING
            ============================= */

            [/\bboxin\b/g, "boxing"],
            [/\bboxxing\b/g, "boxing"],


            /* =============================
               FITNESS
            ============================= */

            [/\bfitnes\b/g, "fitness"],
            [/\bfitnees\b/g, "fitness"],


            /* =============================
               CHẠY
            ============================= */

            [/\bchaj\b/g, "chay"],
            [/\bchayy\b/g, "chay"],


            /* =============================
               TẬP
            ============================= */

            [/\btapj\b/g, "tap"],
            [/\btapp\b/g, "tap"],


            /* =============================
               GIÀY
            ============================= */

            [/\bgiayy\b/g, "giay"],


            /* =============================
               GIÁ
            ============================= */

            [/\bja\b/g, "gia"],
            [/\bjaa\b/g, "gia"],


            /* =============================
               SIZE
            ============================= */

            [/\bsz\b/g, "size"],


            /* =============================
               VIẾT TẮT CHAT
            ============================= */

            [/\bvs\b/g, "voi"],
            [/\bbh\b/g, "bay gio"],
            [/\bhnay\b/g, "hom nay"],

            [/\btks\b/g, "cam on"],
            [/\bthanks\b/g, "cam on"],

            [/\boki\b/g, "ok"],
            [/\bokie\b/g, "ok"]

        ];


        replacements.forEach(
            function (item) {

                value =
                    value.replace(
                        item[0],
                        item[1]
                    );

            }
        );


        return value
            .replace(/\s+/g, " ")
            .trim();

    }



    /* =====================================================
       5. CONVERSATION MEMORY
    ===================================================== */

    const DEFAULT_STATE = {

        lastIntent: null,

        lastSport: null,

        lastBudget: null,

        lastProductType: null,

        lastGoal: null,

        lastLevel: null,

        lastProductId: null,

        focusProductId: null,

        lastRecommendations: [],

        lastUserMessage: "",

        lastBotTopic: null,

        messageCount: 0,

        confidence: 1

    };


    function loadState() {

        try {

            const saved =
                sessionStorage.getItem(
                    "sporthub_chat_state"
                );


            if (!saved) {

                return {
                    ...DEFAULT_STATE
                };

            }


            return {
                ...DEFAULT_STATE,
                ...JSON.parse(saved)
            };

        } catch (error) {

            return {
                ...DEFAULT_STATE
            };

        }

    }


    const state =
        loadState();


    function saveState() {

        try {

            sessionStorage.setItem(
                "sporthub_chat_state",
                JSON.stringify(state)
            );

        } catch (error) {

            /* ignore */

        }

    }


    function updateState(data) {

        Object.assign(
            state,
            data
        );


        saveState();

    }



    /* =====================================================
       6. PRODUCT DATABASE
    ===================================================== */

    function getProducts() {

        if (
            typeof products !== "undefined"
            &&
            Array.isArray(products)
        ) {

            return products;

        }


        if (
            Array.isArray(
                window.products
            )
        ) {

            return window.products;

        }


        return [];

    }



    /* =====================================================
       7. PRODUCT HELPERS
    ===================================================== */

    function getProductPrice(product) {

        if (!product) {

            return 0;

        }


        return Number(

            product.price
            ??
            product.salePrice
            ??
            product.currentPrice
            ??
            0

        );

    }


    function getProductSizes(product) {

        if (!product) {

            return [];

        }


        const value =

            product.sizes
            ??
            product.size
            ??
            product.options?.sizes
            ??
            [];


        if (
            Array.isArray(value)
        ) {

            return value;

        }


        if (
            typeof value === "string"
        ) {

            return value
                .split(/[,/|]/)
                .map(
                    function (item) {

                        return item.trim();

                    }
                )
                .filter(Boolean);

        }


        return [];

    }


    function formatMoney(value) {

        const number =
            Number(value || 0);


        if (
            typeof money === "function"
        ) {

            try {

                return money(number);

            } catch (error) {

                /* fallback */

            }

        }


        return (
            new Intl.NumberFormat(
                "vi-VN"
            ).format(number)
            +
            "đ"
        );

    }


    function productSearchText(product) {

        if (!product) {

            return "";

        }


        const fields = [

            product.id,
            product.code,
            product.name,
            product.slug,

            product.brand,

            product.category,
            product.categoryName,

            product.type,

            product.sport,
            product.sportName,

            product.description,
            product.shortDescription,

            product.badge,

            product.tags,
            product.highlights,

            product.audience,
            product.level,
            product.suitableFor

        ];


        const output = [];


        fields.forEach(
            function (field) {

                if (
                    Array.isArray(field)
                ) {

                    output.push(
                        ...field
                    );

                } else if (
                    field !== null
                    &&
                    field !== undefined
                ) {

                    output.push(
                        field
                    );

                }

            }
        );


        return normalizeText(
            output.join(" ")
        );

    }



    /* =====================================================
       8. CURRENT PRODUCT
    ===================================================== */

    function getCurrentProduct() {

        const path =
            window.location.pathname
                .toLowerCase();


        if (
            !path.includes(
                "product.html"
            )
        ) {

            return null;

        }


        const id =
            new URLSearchParams(
                window.location.search
            ).get("id");


        if (!id) {

            return null;

        }


        const product =
            getProducts().find(
                function (item) {

                    return (
                        String(item.id)
                        ===
                        String(id)
                    );

                }
            );


        if (product) {

            updateState({

                lastProductId:
                    product.id,

                focusProductId:
                    product.id

            });

        }


        return product || null;

    }



    /* =====================================================
       9. FOCUS PRODUCT
       "cái đó", "mẫu đó"
    ===================================================== */

    function getFocusProduct() {

        const current =
            getCurrentProduct();


        if (current) {

            return current;

        }


        if (
            state.focusProductId
            === null
        ) {

            return null;

        }


        return (
            getProducts().find(
                function (item) {

                    return (
                        String(item.id)
                        ===
                        String(
                            state.focusProductId
                        )
                    );

                }
            )
            ||
            null
        );

    }



    /* =====================================================
       10. BUDGET ENTITY
    ===================================================== */

    function parseBudget(message) {

        let match;


        /* 1.5tr */

        match =
            message.match(
                /(\d+(?:[.,]\d+)?)\s*(tr|trieu)\b/
            );


        if (match) {

            return Math.round(
                parseFloat(
                    match[1]
                        .replace(",", ".")
                )
                *
                1000000
            );

        }


        /* 500k */

        match =
            message.match(
                /(\d+(?:[.,]\d+)?)\s*k\b/
            );


        if (match) {

            return Math.round(
                parseFloat(
                    match[1]
                        .replace(",", ".")
                )
                *
                1000
            );

        }


        /* 500 nghìn */

        match =
            message.match(
                /(\d+(?:[.,]\d+)?)\s*(nghin|ngan)\b/
            );


        if (match) {

            return Math.round(
                parseFloat(
                    match[1]
                        .replace(",", ".")
                )
                *
                1000
            );

        }


        /* 1000000 */

        match =
            message.match(
                /\b(\d{5,9})\b/
            );


        if (match) {

            const number =
                Number(match[1]);


            if (
                number >= 50000
            ) {

                return number;

            }

        }


        return null;

    }



    /* =====================================================
       11. SPORT ENTITY
    ===================================================== */

    const SPORT_MAP = {

        running: [

            "chay bo",
            "chay",
            "running",
            "runner",
            "jogging"

        ],


        gym: [

            "gym",
            "tap ta",
            "the hinh",
            "fitness"

        ],


        pickleball: [

            "pickleball"

        ],


        badminton: [

            "cau long",
            "badminton"

        ],


        football: [

            "bong da",
            "football",
            "soccer"

        ],


        basketball: [

            "bong ro",
            "basketball"

        ],


        yoga: [

            "yoga"

        ],


        swimming: [

            "boi",
            "boi loi",
            "swimming"

        ],


        boxing: [

            "boxing",
            "quyen anh"

        ],


        cycling: [

            "dap xe",
            "xe dap",
            "cycling"

        ]

    };


    function detectSport(message) {

        for (
            const sport
            in SPORT_MAP
        ) {

            if (
                includesAny(
                    message,
                    SPORT_MAP[sport]
                )
            ) {

                return sport;

            }

        }


        return null;

    }



    /* =====================================================
       12. PRODUCT TYPE ENTITY
    ===================================================== */

    const TYPE_MAP = {

        shoes: [

            "giay",
            "shoe",
            "sneaker"

        ],


        racket: [

            "vot",
            "racket"

        ],


        shirt: [

            "ao",
            "shirt"

        ],


        pants: [

            "quan",
            "pants"

        ],


        ball: [

            "bong",
            "ball"

        ],


        bag: [

            "balo",
            "tui",
            "bag"

        ],


        accessory: [

            "phu kien",
            "accessory"

        ]

    };


    function detectProductType(message) {

        for (
            const type
            in TYPE_MAP
        ) {

            if (
                includesAny(
                    message,
                    TYPE_MAP[type]
                )
            ) {

                return type;

            }

        }


        return null;

    }



    /* =====================================================
       13. GOAL ENTITY
    ===================================================== */

    function detectGoal(message) {

        if (
            includesAny(
                message,
                [
                    "tang co",
                    "len co",
                    "muscle gain"
                ]
            )
        ) {

            return "muscle_gain";

        }


        if (
            includesAny(
                message,
                [
                    "giam mo",
                    "giam can",
                    "fat loss"
                ]
            )
        ) {

            return "fat_loss";

        }


        if (
            includesAny(
                message,
                [
                    "tang suc manh",
                    "manh hon",
                    "strength"
                ]
            )
        ) {

            return "strength";

        }


        if (
            includesAny(
                message,
                [
                    "suc ben",
                    "endurance"
                ]
            )
        ) {

            return "endurance";

        }


        if (
            includesAny(
                message,
                [
                    "linh hoat",
                    "mobility"
                ]
            )
        ) {

            return "mobility";

        }


        return null;

    }



    /* =====================================================
       14. LEVEL ENTITY
    ===================================================== */

    function detectLevel(message) {

        if (
            includesAny(
                message,
                [
                    "nguoi moi",
                    "moi tap",
                    "moi choi",
                    "beginner"
                ]
            )
        ) {

            return "beginner";

        }


        if (
            includesAny(
                message,
                [
                    "trung cap",
                    "intermediate"
                ]
            )
        ) {

            return "intermediate";

        }


        if (
            includesAny(
                message,
                [
                    "nang cao",
                    "advanced",
                    "lau nam"
                ]
            )
        ) {

            return "advanced";

        }


        return null;

    }



    /* =====================================================
       15. UPDATE ENTITIES IN MEMORY
    ===================================================== */

    function rememberEntities(message) {

        const sport =
            detectSport(message);


        const budget =
            parseBudget(message);


        const type =
            detectProductType(message);


        const goal =
            detectGoal(message);


        const level =
            detectLevel(message);


        const data = {};


        if (sport) {

            data.lastSport =
                sport;

        }


        if (budget) {

            data.lastBudget =
                budget;

        }


        if (type) {

            data.lastProductType =
                type;

        }


        if (goal) {

            data.lastGoal =
                goal;

        }


        if (level) {

            data.lastLevel =
                level;

        }


        data.lastUserMessage =
            message;


        data.messageCount =
            state.messageCount + 1;


        updateState(data);

    }



    /* =====================================================
       16. FITNESS PROFILE FROM LOCAL STORAGE
    ===================================================== */

    function readFitnessProfile() {

        const preferredKeys = [

            "sporthub_fitness_profile",

            "sporthubFitnessProfile",

            "fitnessProfile",

            "fitness_check_data",

            "fitnessCheckData",

            "healthProfile",

            "sporthub_health_profile"

        ];


        for (
            const key
            of preferredKeys
        ) {

            try {

                const value =
                    localStorage.getItem(
                        key
                    );


                if (!value) {

                    continue;

                }


                const parsed =
                    JSON.parse(value);


                if (
                    parsed
                    &&
                    typeof parsed === "object"
                ) {

                    return parsed;

                }

            } catch (error) {

                /* continue */

            }

        }


        /*
            Fallback:
            tìm key có chữ fitness / health
        */

        try {

            for (
                let i = 0;
                i < localStorage.length;
                i++
            ) {

                const key =
                    localStorage.key(i);


                if (!key) {

                    continue;

                }


                const normalizedKey =
                    key.toLowerCase();


                if (
                    !normalizedKey.includes(
                        "fitness"
                    )
                    &&
                    !normalizedKey.includes(
                        "health"
                    )
                ) {

                    continue;

                }


                const raw =
                    localStorage.getItem(
                        key
                    );


                if (!raw) {

                    continue;

                }


                const parsed =
                    JSON.parse(raw);


                if (
                    parsed
                    &&
                    typeof parsed === "object"
                ) {

                    return parsed;

                }

            }

        } catch (error) {

            /* ignore */

        }


        return null;

    }



    /* =====================================================
       17. PROFILE FIELD
    ===================================================== */

    function getProfileField(
        profile,
        aliases
    ) {

        if (!profile) {

            return null;

        }


        for (
            const alias
            of aliases
        ) {

            if (
                profile[alias]
                !== undefined
                &&
                profile[alias]
                !== null
                &&
                profile[alias]
                !== ""
            ) {

                return profile[alias];

            }

        }


        return null;

    }



    /* =====================================================
       18. SAFETY ENGINE
       CHẠY TRƯỚC CÁC INTENT KHÁC
    ===================================================== */

    function safetyReply(message) {

        if (
            includesAny(
                message,
                [

                    "dau nguc",

                    "ngat",

                    "sap ngat",

                    "kho tho bat thuong",

                    "kho tho nghiem trong"

                ]
            )
        ) {

            return `

                Các dấu hiệu như
                <b>
                    đau ngực, ngất
                    hoặc khó thở bất thường
                </b>
                khi vận động cần được
                ưu tiên về an toàn.

                <br><br>

                Không nên cố tiếp tục
                buổi tập hoặc tự tăng
                cường độ trong tình trạng này.

                <br><br>

                Nếu triệu chứng đang xảy ra,
                nghiêm trọng hoặc không giảm,
                hãy tìm hỗ trợ y tế phù hợp.

            `;

        }


        if (
            includesAny(
                message,
                [

                    "moi phau thuat",

                    "phau thuat gan day",

                    "dang mang thai",

                    "mang thai",

                    "sau sinh"

                ]
            )
        ) {

            return `

                Trường hợp phẫu thuật gần đây,
                mang thai hoặc sau sinh cần
                điều chỉnh vận động theo
                tình trạng cụ thể.

                <br><br>

                Mình không nên tự tạo
                một lịch tập cường độ cao
                chỉ dựa trên vài tin nhắn.

                <br><br>

                Bạn có thể dùng
                Fitness Check để cung cấp
                thêm bối cảnh và ưu tiên
                hướng dẫn an toàn.

            `;

        }


        return null;

    }



    /* =====================================================
       19. PRODUCT MATCHING
    ===================================================== */

    function productMatchesSport(
        product,
        sport
    ) {

        if (!sport) {

            return true;

        }


        const text =
            productSearchText(
                product
            );


        return SPORT_MAP[sport]
            .some(
                function (keyword) {

                    return text.includes(
                        normalizeText(
                            keyword
                        )
                    );

                }
            );

    }


    function productMatchesType(
        product,
        type
    ) {

        if (!type) {

            return true;

        }


        const text =
            productSearchText(
                product
            );


        return TYPE_MAP[type]
            .some(
                function (keyword) {

                    return text.includes(
                        normalizeText(
                            keyword
                        )
                    );

                }
            );

    }



    /* =====================================================
       20. PRODUCT RECOMMENDER
    ===================================================== */

    function recommendProducts(options) {

        const sport =
            options?.sport
            ||
            null;


        const type =
            options?.type
            ||
            null;


        const budget =
            options?.budget
            ||
            null;


        const level =
            options?.level
            ||
            null;


        const limit =
            options?.limit
            ||
            3;


        let candidates =
            getProducts()
                .map(
                    function (product) {

                        const price =
                            getProductPrice(
                                product
                            );


                        if (!price) {

                            return null;

                        }


                        if (
                            budget
                            &&
                            price > budget
                        ) {

                            return null;

                        }


                        if (
                            sport
                            &&
                            !productMatchesSport(
                                product,
                                sport
                            )
                        ) {

                            return null;

                        }


                        if (
                            type
                            &&
                            !productMatchesType(
                                product,
                                type
                            )
                        ) {

                            return null;

                        }


                        let score = 0;


                        if (sport) {

                            score += 5;

                        }


                        if (type) {

                            score += 5;

                        }


                        if (budget) {

                            const ratio =
                                price / budget;


                            score +=
                                Math.max(
                                    0,
                                    4 - Math.abs(
                                        1 - ratio
                                    ) * 4
                                );

                        }


                        if (level) {

                            const text =
                                productSearchText(
                                    product
                                );


                            if (
                                text.includes(level)
                            ) {

                                score += 2;

                            }


                            if (
                                level === "beginner"
                                &&
                                includesAny(
                                    text,
                                    [
                                        "nguoi moi",
                                        "co ban",
                                        "beginner"
                                    ]
                                )
                            ) {

                                score += 2;

                            }

                        }


                        return {

                            product:
                                product,

                            score:
                                score

                        };

                    }
                )
                .filter(Boolean);


        candidates.sort(
            function (a, b) {

                if (
                    b.score
                    !==
                    a.score
                ) {

                    return (
                        b.score
                        -
                        a.score
                    );

                }


                return (
                    getProductPrice(
                        a.product
                    )
                    -
                    getProductPrice(
                        b.product
                    )
                );

            }
        );


        return candidates
            .slice(
                0,
                limit
            )
            .map(
                function (item) {

                    return item.product;

                }
            );

    }



    /* =====================================================
       21. PRODUCT CARD
    ===================================================== */

    function renderProducts(items) {

        if (
            !Array.isArray(items)
            ||
            !items.length
        ) {

            return "";

        }


        updateState({

            lastRecommendations:
                items.map(
                    function (item) {

                        return item.id;

                    }
                )

        });


        return items
            .map(
                function (
                    product,
                    index
                ) {

                    return `

                        <div
                            style="
                                margin-top:12px;
                                padding-top:10px;
                                border-top:
                                1px solid
                                rgba(128,128,128,.25);
                            "
                        >

                            <b>
                                ${index + 1}.
                                ${escapeHtml(
                                    product.name
                                )}
                            </b>

                            <br>

                            <b>
                                ${formatMoney(
                                    getProductPrice(
                                        product
                                    )
                                )}
                            </b>

                            <br>

                            <a
                                href="${
                                    sportHubUrl(
                                        "product.html?id="
                                        +
                                        product.id
                                    )
                                }"
                            >
                                Xem sản phẩm →
                            </a>

                        </div>

                    `;

                }
            )
            .join("");

    }



    /* =====================================================
       22. RECOMMENDATION REFERENCE
       mẫu 1 / mẫu 2 / cái thứ 3
    ===================================================== */

    function getReferencedProduct(message) {

        const match =
            message.match(
                /(?:mau|cai|con|so|thu)\s*(?:thu\s*)?([1-5])\b/
            );


        if (!match) {

            return null;

        }


        const index =
            Number(match[1])
            -
            1;


        const id =
            state
                .lastRecommendations[
                    index
                ];


        if (
            id === undefined
        ) {

            return null;

        }


        const product =
            getProducts().find(
                function (item) {

                    return (
                        String(item.id)
                        ===
                        String(id)
                    );

                }
            );


        if (product) {

            updateState({

                focusProductId:
                    product.id

            });

        }


        return product || null;

    }



    /* =====================================================
       23. PRODUCT DETAILS
    ===================================================== */

    function answerProductDetails(
        product,
        message
    ) {

        if (!product) {

            return null;

        }


        /* PRICE */

        if (
            includesAny(
                message,
                [
                    "gia",
                    "bao nhieu",
                    "may tien"
                ]
            )
        ) {

            updateState({

                focusProductId:
                    product.id

            });


            return `

                <b>
                    ${escapeHtml(
                        product.name
                    )}
                </b>

                có giá:

                <b>
                    ${formatMoney(
                        getProductPrice(
                            product
                        )
                    )}
                </b>.

            `;

        }



        /* SIZE */

        if (
            includesAny(
                message,
                [
                    "size",
                    "kich thuoc"
                ]
            )
        ) {

            const sizes =
                getProductSizes(
                    product
                );


            if (!sizes.length) {

                return `

                    Dữ liệu hiện tại của

                    <b>
                        ${escapeHtml(
                            product.name
                        )}
                    </b>

                    chưa có danh sách size
                    cụ thể để mình xác nhận.

                `;

            }


            return `

                <b>
                    ${escapeHtml(
                        product.name
                    )}
                </b>

                hiện có:

                <br><br>

                <b>
                    ${sizes
                        .map(
                            escapeHtml
                        )
                        .join(" • ")}
                </b>

            `;

        }



        /* STOCK */

        if (
            includesAny(
                message,
                [
                    "con hang",
                    "het hang",
                    "con khong"
                ]
            )
        ) {

            if (
                product.stock
                === undefined
                ||
                product.stock
                === null
                ||
                product.stock
                === ""
            ) {

                return `

                    Mình chưa có dữ liệu
                    tồn kho chính xác của

                    <b>
                        ${escapeHtml(
                            product.name
                        )}
                    </b>

                    nên mình không muốn
                    báo sai cho bạn.

                `;

            }


            const stock =
                Number(
                    product.stock
                );


            if (
                Number.isFinite(stock)
            ) {

                if (
                    stock > 0
                ) {

                    return `

                        <b>
                            ${escapeHtml(
                                product.name
                            )}
                        </b>

                        đang còn hàng
                        theo dữ liệu website.

                        <br><br>

                        Số lượng:
                        <b>${stock}</b>.

                    `;

                }


                return `

                    <b>
                        ${escapeHtml(
                            product.name
                        )}
                    </b>

                    đang hết hàng
                    theo dữ liệu website.

                `;

            }


            return `

                Mình chưa đủ dữ liệu
                để xác nhận tồn kho
                sản phẩm này.

            `;

        }



        /* BRAND */

        if (
            includesAny(
                message,
                [
                    "hang gi",
                    "thuong hieu",
                    "brand"
                ]
            )
        ) {

            if (!product.brand) {

                return `

                    Dữ liệu hiện tại
                    chưa có thương hiệu
                    rõ ràng cho sản phẩm này.

                `;

            }


            return `

                <b>
                    ${escapeHtml(
                        product.name
                    )}
                </b>

                thuộc thương hiệu:

                <b>
                    ${escapeHtml(
                        product.brand
                    )}
                </b>.

            `;

        }



        /* BEGINNER */

        if (
            includesAny(
                message,
                [
                    "nguoi moi",
                    "moi tap",
                    "moi choi"
                ]
            )
        ) {

            const text =
                productSearchText(
                    product
                );


            if (
                includesAny(
                    text,
                    [
                        "nguoi moi",
                        "beginner",
                        "co ban"
                    ]
                )
            ) {

                return `

                    Dựa trên metadata
                    hiện có,

                    <b>
                        ${escapeHtml(
                            product.name
                        )}
                    </b>

                    có đặc điểm phù hợp
                    với người mới.

                    <br><br>

                    Tuy nhiên mức độ phù hợp
                    còn phụ thuộc vào môn,
                    mục tiêu và kinh nghiệm
                    của bạn.

                `;

            }


            return `

                Dữ liệu hiện tại
                chưa đủ để khẳng định

                <b>
                    ${escapeHtml(
                        product.name
                    )}
                </b>

                là lựa chọn tối ưu
                cho người mới.

            `;

        }


        return null;

    }



    /* =====================================================
       24. CHEAPER / SIMILAR PRODUCT
    ===================================================== */

    function findAlternativeProducts(
        source,
        mode,
        limit = 3
    ) {

        if (!source) {

            return [];

        }


        const sourcePrice =
            getProductPrice(
                source
            );


        const sourceSport =
            detectSport(
                productSearchText(
                    source
                )
            );


        const sourceType =
            detectProductType(
                productSearchText(
                    source
                )
            );


        let items =
            getProducts()
                .filter(
                    function (product) {

                        if (
                            String(product.id)
                            ===
                            String(source.id)
                        ) {

                            return false;

                        }


                        const price =
                            getProductPrice(
                                product
                            );


                        if (!price) {

                            return false;

                        }


                        if (
                            sourceSport
                            &&
                            !productMatchesSport(
                                product,
                                sourceSport
                            )
                        ) {

                            return false;

                        }


                        if (
                            sourceType
                            &&
                            !productMatchesType(
                                product,
                                sourceType
                            )
                        ) {

                            return false;

                        }


                        if (
                            mode === "cheaper"
                        ) {

                            return (
                                price
                                <
                                sourcePrice
                            );

                        }


                        if (
                            mode === "premium"
                        ) {

                            return (
                                price
                                >
                                sourcePrice
                            );

                        }


                        return true;

                    }
                );


        if (
            mode === "cheaper"
        ) {

            items.sort(
                function (a, b) {

                    return (
                        getProductPrice(b)
                        -
                        getProductPrice(a)
                    );

                }
            );

        } else if (
            mode === "premium"
        ) {

            items.sort(
                function (a, b) {

                    return (
                        getProductPrice(a)
                        -
                        getProductPrice(b)
                    );

                }
            );

        } else {

            items.sort(
                function (a, b) {

                    return (
                        Math.abs(
                            getProductPrice(a)
                            -
                            sourcePrice
                        )
                        -
                        Math.abs(
                            getProductPrice(b)
                            -
                            sourcePrice
                        )
                    );

                }
            );

        }


        return items.slice(
            0,
            limit
        );

    }



    /* =====================================================
       25. PRODUCT CONTEXT
    ===================================================== */

    function productContextReply(
        message
    ) {

        let product =
            getReferencedProduct(
                message
            );


        if (!product) {

            product =
                getFocusProduct();

        }


        const hasReference =
            includesAny(
                message,
                [

                    "mau nay",
                    "cai nay",
                    "san pham nay",

                    "mau do",
                    "cai do",
                    "san pham do",

                    "con nay",
                    "em nay"

                ]
            );


        const detailIntent =
            includesAny(
                message,
                [

                    "gia",
                    "bao nhieu",
                    "may tien",

                    "size",
                    "kich thuoc",

                    "con hang",
                    "het hang",

                    "thuong hieu",
                    "brand",

                    "nguoi moi",
                    "moi tap"

                ]
            );


        if (
            product
            &&
            (
                hasReference
                ||
                detailIntent
                ||
                getReferencedProduct(
                    message
                )
            )
        ) {

            const answer =
                answerProductDetails(
                    product,
                    message
                );


            if (answer) {

                return answer;

            }

        }



        /* RẺ HƠN */

        if (
            product
            &&
            includesAny(
                message,
                [
                    "re hon",
                    "mau re",
                    "gia thap hon"
                ]
            )
        ) {

            const alternatives =
                findAlternativeProducts(
                    product,
                    "cheaper"
                );


            if (!alternatives.length) {

                return `

                    Mình chưa tìm thấy
                    mẫu cùng nhóm có giá
                    thấp hơn sản phẩm này
                    trong dữ liệu hiện tại.

                `;

            }


            return `

                Có. Đây là một số
                lựa chọn giá thấp hơn:

                ${renderProducts(
                    alternatives
                )}

            `;

        }



        /* CAO CẤP HƠN */

        if (
            product
            &&
            includesAny(
                message,
                [
                    "cao cap hon",
                    "xin hon",
                    "dat hon",
                    "tot hon"
                ]
            )
        ) {

            const alternatives =
                findAlternativeProducts(
                    product,
                    "premium"
                );


            if (!alternatives.length) {

                return `

                    Mình chưa tìm thấy
                    lựa chọn cùng nhóm
                    ở mức giá cao hơn
                    trong dữ liệu hiện tại.

                `;

            }


            return `

                Bạn có thể xem
                các lựa chọn cao hơn này:

                ${renderProducts(
                    alternatives
                )}

            `;

        }



        /* TƯƠNG TỰ */

        if (
            product
            &&
            includesAny(
                message,
                [
                    "tuong tu",
                    "giong cai nay",
                    "mau khac"
                ]
            )
        ) {

            const alternatives =
                findAlternativeProducts(
                    product,
                    "similar"
                );


            if (!alternatives.length) {

                return `

                    Mình chưa tìm thấy
                    mẫu tương tự phù hợp
                    trong dữ liệu hiện tại.

                `;

            }


            return `

                Một số lựa chọn tương tự:

                ${renderProducts(
                    alternatives
                )}

            `;

        }



        if (
            product
            &&
            hasReference
        ) {

            return `

                Bạn đang nhắc tới:

                <br><br>

                <b>
                    ${escapeHtml(
                        product.name
                    )}
                </b>

                <br>

                ${
                    formatMoney(
                        getProductPrice(
                            product
                        )
                    )
                }

                <br><br>

                Bạn có thể hỏi tiếp:

                <br>
                • giá bao nhiêu

                <br>
                • có size gì

                <br>
                • còn hàng không

                <br>
                • có mẫu rẻ hơn không

                <br>
                • có mẫu tương tự không

            `;

        }


        return null;

    }



    /* =====================================================
       26. PRODUCT RECOMMENDATION
    ===================================================== */

    function recommendationReply(
        message
    ) {

        const explicitSport =
            detectSport(
                message
            );


        const explicitBudget =
            parseBudget(
                message
            );


        const explicitType =
            detectProductType(
                message
            );


        const explicitLevel =
            detectLevel(
                message
            );


        const sport =
            explicitSport
            ||
            state.lastSport;


        const budget =
            explicitBudget
            ||
            state.lastBudget;


        const type =
            explicitType
            ||
            state.lastProductType;


        const level =
            explicitLevel
            ||
            state.lastLevel;


        const wantsRecommendation =
            includesAny(
                message,
                [

                    "tu van",
                    "goi y",
                    "nen mua",
                    "mua gi",
                    "tim giup",
                    "tim cho",

                    "giay",
                    "vot",
                    "ao",
                    "quan",
                    "balo",

                    "san pham"

                ]
            );


        if (
            !wantsRecommendation
            &&
            !explicitBudget
        ) {

            return null;

        }



        /* Chỉ có tiền, chưa biết nhu cầu */

        if (
            budget
            &&
            !sport
            &&
            !type
        ) {

            updateState({

                lastBudget:
                    budget,

                lastIntent:
                    "product_recommendation"

            });


            return `

                Mình đã nhớ ngân sách
                khoảng

                <b>
                    ${formatMoney(
                        budget
                    )}
                </b>.

                <br><br>

                Bạn cần sản phẩm
                cho môn nào hoặc loại gì?

                <br><br>

                Ví dụ:

                <br>
                • giày chạy

                <br>
                • vợt pickleball

                <br>
                • đồ gym

                <br>
                • cầu lông

            `;

        }



        /* Chưa đủ dữ liệu */

        if (
            !sport
            &&
            !type
        ) {

            return null;

        }


        const items =
            recommendProducts({

                sport:
                    sport,

                type:
                    type,

                budget:
                    budget,

                level:
                    level,

                limit:
                    3

            });


        updateState({

            lastIntent:
                "product_recommendation",

            lastSport:
                sport,

            lastBudget:
                budget,

            lastProductType:
                type,

            lastLevel:
                level

        });


        if (!items.length) {

            return `

                Mình chưa tìm thấy
                lựa chọn đủ khớp
                với yêu cầu hiện tại.

                <br><br>

                Bạn có thể:

                <br>
                • tăng ngân sách

                <br>
                • đổi loại sản phẩm

                <br>
                • hoặc cho mình biết
                nhu cầu rộng hơn.

            `;

        }


        let intro =
            "Mình tìm được một số lựa chọn phù hợp";


        if (budget) {

            intro +=
                ` trong ngân sách <b>${formatMoney(
                    budget
                )}</b>`;

        }


        return `

            ${intro}:

            ${renderProducts(
                items
            )}

            <br><br>

            Bạn có thể nói tiếp:

            <br>
            <b>
                “mẫu 2 giá bao nhiêu?”
            </b>

            <br>

            hoặc

            <b>
                “có mẫu nào rẻ hơn không?”
            </b>

        `;

    }



    /* =====================================================
       27. FITNESS COACH
    ===================================================== */

    function fitnessReply(
        message
    ) {

        const goal =
            detectGoal(
                message
            )
            ||
            state.lastGoal;


        const profile =
            readFitnessProfile();


        /* TĂNG CƠ */

        if (
            goal === "muscle_gain"
        ) {

            updateState({

                lastGoal:
                    "muscle_gain",

                lastIntent:
                    "fitness"

            });


            return `

                Với mục tiêu
                <b>tăng cơ</b>,
                phần quan trọng nhất là:

                <br><br>

                • Tập sức mạnh đều đặn

                <br>
                • Tăng dần volume hoặc tải tập

                <br>
                • Ăn đủ năng lượng

                <br>
                • Đảm bảo protein

                <br>
                • Ngủ và phục hồi tốt

                <br><br>

                ${
                    profile
                        ?
                        `
                            Mình phát hiện bạn đã có
                            dữ liệu Fitness Check,
                            nên các bước sau có thể
                            ưu tiên dùng dữ liệu đó
                            thay vì hỏi lại từ đầu.
                        `
                        :
                        `
                            Nếu muốn cá nhân hóa hơn,
                            bạn có thể làm
                            <a href="${
                                sportHubUrl(
                                    "health-check.html"
                                )
                            }">
                                <b>Fitness Check →</b>
                            </a>.
                        `
                }

            `;

        }



        /* GIẢM MỠ */

        if (
            goal === "fat_loss"
        ) {

            updateState({

                lastGoal:
                    "fat_loss",

                lastIntent:
                    "fitness"

            });


            return `

                Với mục tiêu
                <b>giảm mỡ</b>,
                nên kết hợp:

                <br><br>

                • Kiểm soát tổng năng lượng

                <br>
                • Duy trì protein

                <br>
                • Tập sức mạnh

                <br>
                • Cardio phù hợp

                <br>
                • Vận động hằng ngày

                <br>
                • Ngủ và phục hồi

                <br><br>

                Không cần ép giảm quá nhanh.
                Kế hoạch nên phù hợp
                với lịch tập và khả năng
                phục hồi thực tế.

            `;

        }



        /* STRENGTH */

        if (
            goal === "strength"
        ) {

            return `

                Nếu mục tiêu là
                <b>tăng sức mạnh</b>,
                nên ưu tiên các bài
                compound phù hợp,
                kỹ thuật ổn định và
                tăng tải có kiểm soát.

                <br><br>

                Mức tạ, số set và số rep
                nên phụ thuộc vào
                kinh nghiệm hiện tại.

            `;

        }



        /* ENDURANCE */

        if (
            goal === "endurance"
        ) {

            return `

                Với mục tiêu tăng sức bền,
                nên tăng dần tổng thời lượng
                vận động thay vì tăng đột ngột.

                <br><br>

                Có thể kết hợp
                cardio nền,
                buổi cường độ cao vừa phải
                và ngày phục hồi.

            `;

        }



        /* WORKOUT / LỊCH */

        if (
            includesAny(
                message,
                [

                    "lich tap",

                    "tap gym",

                    "tap o nha",

                    "workout",

                    "tap bao nhieu buoi",

                    "tap nhu the nao"

                ]
            )
        ) {

            const profileData =
                readFitnessProfile();


            if (profileData) {

                const sessions =
                    getProfileField(
                        profileData,
                        [
                            "sessions",
                            "sessionsPerWeek",
                            "daysPerWeek",
                            "workoutDays"
                        ]
                    );


                const experience =
                    getProfileField(
                        profileData,
                        [
                            "experience",
                            "level",
                            "trainingLevel"
                        ]
                    );


                const location =
                    getProfileField(
                        profileData,
                        [
                            "location",
                            "trainingLocation",
                            "place"
                        ]
                    );


                let known = "";


                if (sessions) {

                    known +=
                        `<br>• Số buổi: <b>${escapeHtml(sessions)}</b>`;

                }


                if (experience) {

                    known +=
                        `<br>• Kinh nghiệm: <b>${escapeHtml(experience)}</b>`;

                }


                if (location) {

                    known +=
                        `<br>• Nơi tập: <b>${escapeHtml(location)}</b>`;

                }


                return `

                    Mình đã tìm thấy
                    một phần dữ liệu
                    Fitness Check của bạn.

                    ${known}

                    <br><br>

                    Vì vậy mình sẽ ưu tiên
                    dùng thông tin đã có,
                    thay vì bắt bạn nhập lại
                    từ đầu.

                `;

            }


            return `

                Mình có thể hỗ trợ
                lên lịch tập.

                <br><br>

                Hiện mình chưa có đủ
                profile cá nhân hóa.

                <br><br>

                Bạn có thể cho mình biết
                mục tiêu + số buổi/tuần,
                hoặc làm

                <a href="${
                    sportHubUrl(
                        "health-check.html"
                    )
                }">
                    <b>Fitness Check →</b>
                </a>.

            `;

        }


        return null;

    }



    /* =====================================================
       28. NUTRITION COACH
    ===================================================== */

    function nutritionReply(
        message
    ) {

        if (
            !includesAny(
                message,
                [

                    "calo",
                    "calorie",

                    "protein",

                    "carb",

                    "chat beo",

                    "dinh duong",

                    "an gi",

                    "truoc tap",

                    "sau tap",

                    "uong nuoc",

                    "hydration",

                    "bua an"

                ]
            )
        ) {

            return null;

        }


        const profile =
            readFitnessProfile();


        /* ALLERGY FIRST */

        if (
            includesAny(
                message,
                [

                    "di ung",

                    "allergy",

                    "khong an duoc",

                    "kieng",

                    "tranh thuc pham"

                ]
            )
        ) {

            return `

                Với dị ứng hoặc
                thực phẩm cần tránh,
                mình sẽ ưu tiên
                loại chúng khỏi gợi ý
                trước khi đề xuất món.

                <br><br>

                Bạn hãy nêu rõ
                thực phẩm cần tránh.

                <br><br>

                Mình sẽ không tự giả định
                một thực phẩm là an toàn
                nếu dữ liệu chưa rõ.

            `;

        }



        /* BEFORE WORKOUT */

        if (
            message.includes(
                "truoc tap"
            )
        ) {

            return `

                Trước buổi tập,
                thường nên ưu tiên
                bữa dễ tiêu,
                đủ nước và đủ năng lượng.

                <br><br>

                Có thể kết hợp
                carbohydrate và protein
                ở mức phù hợp,
                đồng thời tránh ăn quá nặng
                ngay sát giờ tập.

            `;

        }



        /* AFTER WORKOUT */

        if (
            message.includes(
                "sau tap"
            )
        ) {

            return `

                Sau tập,
                ưu tiên:

                <br><br>

                • Protein

                <br>
                • Năng lượng phù hợp

                <br>
                • Nước

                <br>
                • Một bữa ăn cân đối

                <br><br>

                Không nhất thiết phải
                ăn ngay lập tức nếu
                tổng dinh dưỡng cả ngày
                vẫn được đảm bảo.

            `;

        }



        /* HYDRATION */

        if (
            includesAny(
                message,
                [
                    "uong nuoc",
                    "hydration"
                ]
            )
        ) {

            return `

                Nhu cầu nước phụ thuộc
                vào cơ thể,
                thời tiết,
                thời lượng tập và
                lượng mồ hôi.

                <br><br>

                Với buổi tập dài
                hoặc ra nhiều mồ hôi,
                cần chú ý cả nước
                và điện giải phù hợp.

            `;

        }


        return `

            Mình có thể hỗ trợ về:

            <br><br>

            • Calories

            <br>
            • Protein

            <br>
            • Carb

            <br>
            • Fat

            <br>
            • Ăn trước tập

            <br>
            • Ăn sau tập

            <br>
            • Hydration

            <br>
            • Dị ứng / thực phẩm cần tránh

            <br><br>

            ${
                profile
                    ?
                    "Mình cũng có thể ưu tiên dữ liệu Fitness Check đã lưu khi tư vấn."
                    :
                    "Nếu muốn cá nhân hóa sâu hơn, bạn có thể làm Fitness Check."
            }

        `;

    }



    /* =====================================================
       29. PAIN / RECOVERY / SLEEP
    ===================================================== */

    function recoveryReply(
        message
    ) {

        /* PAIN */

        if (
            includesAny(
                message,
                [

                    "dau vai",

                    "dau goi",

                    "dau lung",

                    "dau co",

                    "dau chan",

                    "dau khi chay",

                    "chuot rut"

                ]
            )
        ) {

            return `

                Mình có thể hỗ trợ
                hướng dẫn chung về
                điều chỉnh vận động,
                nhưng không thể chẩn đoán
                nguyên nhân đau qua chat.

                <br><br>

                Nếu đau sắc,
                đau tăng,
                sưng rõ,
                mất lực hoặc
                hạn chế vận động đáng kể,
                nên dừng hoạt động gây đau
                và cân nhắc đánh giá y tế phù hợp.

            `;

        }



        /* DOMS */

        if (
            includesAny(
                message,
                [
                    "dau moi co",
                    "doms",
                    "moi co"
                ]
            )
        ) {

            return `

                Đau mỏi cơ sau tập
                thường có thể xuất hiện
                khi cơ thể chưa quen
                với khối lượng vận động.

                <br><br>

                Nếu chỉ là mỏi cơ thông thường,
                có thể ưu tiên:

                <br>
                • vận động nhẹ

                <br>
                • ngủ đủ

                <br>
                • ăn uống phù hợp

                <br>
                • giảm tải buổi kế tiếp nếu cần

            `;

        }



        /* SLEEP */

        if (
            includesAny(
                message,
                [

                    "ngu it",

                    "thieu ngu",

                    "mat ngu",

                    "ngu kem",

                    "ngu may tieng"

                ]
            )
        ) {

            return `

                Nếu ngủ quá ít
                hoặc cảm thấy phục hồi kém,
                không nên cố tăng cường độ
                chỉ để hoàn thành kế hoạch.

                <br><br>

                Có thể cân nhắc:

                <br>
                • giảm volume

                <br>
                • giảm cường độ

                <br>
                • tập kỹ thuật nhẹ

                <br>
                • đi bộ

                <br>
                • hoặc nghỉ nếu cơ thể quá mệt

            `;

        }



        /* STRESS / FATIGUE */

        if (
            includesAny(
                message,
                [

                    "met",

                    "met moi",

                    "stress",

                    "cang thang",

                    "phuc hoi",

                    "rest day",

                    "nghi tap"

                ]
            )
        ) {

            return `

                Mức mệt và stress
                cũng nên được tính vào
                kế hoạch tập.

                <br><br>

                Một ngày nghỉ
                hoặc buổi tập nhẹ
                không làm hỏng tiến trình.

                <br><br>

                Nếu hiệu suất giảm rõ,
                ngủ kém và mệt kéo dài,
                nên ưu tiên phục hồi
                thay vì liên tục tăng tải.

            `;

        }


        return null;

    }



    /* =====================================================
       30. PAGE CONTEXT
    ===================================================== */

    function getCurrentPage() {

        const path =
            window.location.pathname
                .toLowerCase();


        if (
            path.includes(
                "product.html"
            )
        ) {

            return "product";

        }


        if (
            path.includes(
                "shop.html"
            )
        ) {

            return "shop";

        }


        if (
            path.includes(
                "health-check"
            )
        ) {

            return "health";

        }


        if (
            path.includes(
                "cart"
            )
        ) {

            return "cart";

        }


        if (
            path.includes(
                "checkout"
            )
        ) {

            return "checkout";

        }


        if (
            path.includes(
                "blog"
            )
        ) {

            return "blog";

        }


        if (
            path.includes(
                "lien-he"
            )
        ) {

            return "contact";

        }


        return "home";

    }



    /* =====================================================
       31. PLATFORM GUIDE
    ===================================================== */

    function platformReply(
        message
    ) {

        if (
            message.includes(
                "fitness check"
            )
            &&
            includesAny(
                message,
                [
                    "o dau",
                    "mo",
                    "vao",
                    "tim"
                ]
            )
        ) {

            return `

                Bạn mở:

                <br><br>

                <a href="${
                    sportHubUrl(
                        "health-check.html"
                    )
                }">
                    <b>
                        Fitness Check →
                    </b>
                </a>

                <br><br>

                Tại đó bạn có thể
                cung cấp thông tin
                về thể trạng,
                mục tiêu,
                kinh nghiệm,
                số buổi tập,
                dụng cụ,
                dinh dưỡng
                và phục hồi.

            `;

        }


        if (
            includesAny(
                message,
                [
                    "gio hang o dau",
                    "mo gio hang",
                    "vao gio hang"
                ]
            )
        ) {

            return `

                Bạn có thể mở:

                <br><br>

                <a href="${
                    sportHubUrl(
                        "cart.html"
                    )
                }">
                    <b>
                        Giỏ hàng →
                    </b>
                </a>

            `;

        }


        if (
            includesAny(
                message,
                [
                    "tim san pham",
                    "san pham o dau"
                ]
            )
        ) {

            return `

                Bạn có thể mở:

                <br><br>

                <a href="${
                    sportHubUrl(
                        "shop.html"
                    )
                }">
                    <b>
                        Danh sách sản phẩm →
                    </b>
                </a>

            `;

        }


        if (
            includesAny(
                message,
                [

                    "dang o dau",

                    "trang nay la gi",

                    "website co gi",

                    "huong dan website",

                    "huong dan su dung"

                ]
            )
        ) {

            const names = {

                home:
                    "Trang chủ",

                shop:
                    "Danh sách sản phẩm",

                product:
                    "Chi tiết sản phẩm",

                health:
                    "Fitness Check",

                cart:
                    "Giỏ hàng",

                checkout:
                    "Thanh toán",

                blog:
                    "Blog",

                contact:
                    "Liên hệ"

            };


            return `

                Hiện bạn đang ở:

                <b>
                    ${names[
                        getCurrentPage()
                    ]}
                </b>.

                <br><br>

                Các khu vực chính của
                SPORTHUB gồm:

                <br>
                • Sản phẩm

                <br>
                • Fitness Check

                <br>
                • Blog

                <br>
                • Giỏ hàng

                <br>
                • Thanh toán

                <br><br>

                Bạn nói chức năng
                muốn dùng,
                mình sẽ chỉ đúng trang.

            `;

        }


        return null;

    }



    /* =====================================================
       32. COMMERCE
    ===================================================== */

    function commerceReply(
        message
    ) {

        if (
            includesAny(
                message,
                [
                    "ma giam",
                    "coupon",
                    "sport10"
                ]
            )
        ) {

            return `

                Mã giảm giá demo
                hiện tại là:

                <br><br>

                <b>
                    SPORT10
                </b>

                <br><br>

                Bạn có thể nhập
                trong giỏ hàng.

            `;

        }


        if (
            includesAny(
                message,
                [
                    "ship",
                    "giao hang"
                ]
            )
        ) {

            return `

                Mình có thể hỗ trợ
                thông tin giao hàng
                mà website hiện có.

                <br><br>

                Nếu website không có
                ngày giao cụ thể
                hoặc trạng thái realtime,
                mình sẽ không tự bịa
                một mốc thời gian.

            `;

        }


        if (
            includesAny(
                message,
                [
                    "thanh toan",
                    "checkout",
                    "dat hang"
                ]
            )
        ) {

            return `

                Quy trình cơ bản:

                <br><br>

                1. Chọn sản phẩm

                <br>
                2. Thêm vào giỏ

                <br>
                3. Kiểm tra giỏ hàng

                <br>
                4. Chuyển sang thanh toán

                <br><br>

                <a href="${
                    sportHubUrl(
                        "cart.html"
                    )
                }">
                    <b>
                        Mở giỏ hàng →
                    </b>
                </a>

            `;

        }


        return null;

    }



    /* =====================================================
       33. TROUBLESHOOTING
    ===================================================== */

    function troubleshootingReply(
        message
    ) {

        if (
            !includesAny(
                message,
                [

                    "bi loi",

                    "loi",

                    "khong hien",

                    "khong chay",

                    "khong bam duoc",

                    "khong them vao gio",

                    "anh khong hien",

                    "coupon khong duoc",

                    "fitness check loi",

                    "checkout loi"

                ]
            )
        ) {

            return null;

        }


        return `

            Mình sẽ tập trung
            xử lý lỗi trước.

            <br><br>

            Bạn thử:

            <br>
            1. Tải lại trang.

            <br>
            2. Nếu vừa sửa code,
            nhấn <b>Ctrl + F5</b>.

            <br>
            3. Cho mình biết
            lỗi xảy ra ở trang nào.

            <br>
            4. Cho mình biết
            thao tác cuối cùng
            trước khi lỗi xuất hiện.

            <br><br>

            Nếu bạn gửi code
            hoặc ảnh lỗi,
            mình có thể hướng dẫn
            cụ thể hơn.

        `;

    }



    /* =====================================================
       34. EMOTION
    ===================================================== */

    function emotionReply(
        message
    ) {

        if (
            includesAny(
                message,
                [

                    "buc qua",

                    "uc che",

                    "dien that",

                    "loi hoai",

                    "chan cai web",

                    "khong dung duoc"

                ]
            )
        ) {

            return `

                Mình tập trung xử lý
                vấn đề cho bạn nhé.

                <br><br>

                Bạn nói đúng lỗi
                đang gặp hoặc gửi
                đoạn code / ảnh màn hình,
                mình sẽ đi thẳng
                vào chỗ cần sửa.

            `;

        }


        return null;

    }



    /* =====================================================
       35. CASUAL / SMALL TALK
    ===================================================== */

    function casualReply(
        message
    ) {

        /* GREETING */

        if (
            message === "hi"
            ||
            message === "hello"
            ||
            includesAny(
                message,
                [
                    "xin chao",
                    "chao bot",
                    "chao shop"
                ]
            )
        ) {

            return `

                Xin chào 👋

                <br><br>

                Mình là
                <b>
                    SPORTHUB Assistant
                </b>.

                <br><br>

                Bạn muốn hỏi gì
                cứ nói tự nhiên nhé.

            `;

        }



        /* THANK */

        if (
            includesAny(
                message,
                [
                    "cam on",
                    "thank"
                ]
            )
        ) {

            return `

                Không có gì 😄

                <br><br>

                Cứ hỏi tiếp
                nếu bạn còn điều gì
                muốn nói nhé.

            `;

        }



        /* TEST */

        if (
            includesAny(
                message,
                [
                    "test mic",
                    "test bot",
                    "test chatbot",
                    "alo alo"
                ]
            )
        ) {

            return `

                Nghe rõ 😄

                <br><br>

                SPORTHUB Assistant
                vẫn đang hoạt động.

            `;

        }



        /* BORED */

        if (
            includesAny(
                message,
                [
                    "chan qua",
                    "chan ghe",
                    "buon chan"
                ]
            )
        ) {

            return `

                Vậy nói chuyện linh tinh
                một chút cũng được 😄

                <br><br>

                Hôm nay có chuyện gì
                làm bạn thấy chán vậy?

            `;

        }



        /* SAD */

        if (
            includesAny(
                message,
                [
                    "buon qua",
                    "tam trang te",
                    "hom nay buon"
                ]
            )
        ) {

            return `

                Nghe có vẻ hôm nay
                bạn không vui lắm.

                <br><br>

                Nếu muốn,
                bạn cứ kể chuyện
                đang làm bạn khó chịu.

                Mình có thể trò chuyện
                cùng bạn một lúc.

            `;

        }



        /* CRUSH / LOVE */

        if (
            includesAny(
                message,
                [

                    "crush",

                    "nguoi yeu",

                    "that tinh",

                    "hen ho",

                    "yeu ai"

                ]
            )
        ) {

            return `

                Chủ đề này thì
                không liên quan thể thao
                lắm nhưng vẫn nói được 😄

                <br><br>

                Bạn kể tình huống cụ thể đi,
                mình sẽ cùng bạn
                suy nghĩ cho rõ hơn.

            `;

        }



        /* JOKE */

        if (
            includesAny(
                message,
                [
                    "ke chuyen cuoi",
                    "dua tui coi",
                    "noi gi vui"
                ]
            )
        ) {

            return `

                Một câu nhẹ thôi 😄

                <br><br>

                Người ta vào gym
                để tăng cơ.

                <br>

                Còn nhiều người vào gym
                để tăng... thời gian
                ngồi xem điện thoại giữa set 😂

            `;

        }



        /* WHO ARE YOU */

        if (
            includesAny(
                message,
                [
                    "ban la ai",
                    "may la ai",
                    "bot la ai"
                ]
            )
        ) {

            return `

                Mình là
                <b>
                    SPORTHUB Assistant
                </b>.

                <br><br>

                Mình là trợ lý phần mềm,
                không phải người thật.

                <br><br>

                Mình được thiết kế để
                hỗ trợ sản phẩm,
                tập luyện,
                dinh dưỡng,
                sử dụng nền tảng
                và cả trò chuyện thông thường.

            `;

        }


        return null;

    }



    /* =====================================================
       36. REALTIME / DON'T KNOW
    ===================================================== */

    function realtimeReply(
        message
    ) {

        if (
            includesAny(
                message,
                [

                    "bao gio co hang lai",

                    "ngay nao co hang",

                    "chinh xac may ngay giao",

                    "hom nay thoi tiet",

                    "tin moi nhat",

                    "gia thi truong hom nay"

                ]
            )
        ) {

            return `

                Mình chưa có nguồn
                dữ liệu realtime
                cho thông tin này.

                <br><br>

                Mình không muốn
                đoán hoặc bịa
                một câu trả lời.

                <br><br>

                Nếu website có dữ liệu
                cụ thể,
                mình có thể dùng
                dữ liệu đó để hỗ trợ bạn.

            `;

        }


        return null;

    }



    /* =====================================================
       37. CONFIDENCE / CLARIFICATION
    ===================================================== */

    function clarificationReply(
        message
    ) {

        /*
            Một số câu cực ngắn
            không đủ context.
        */

        if (
            message.length <= 2
        ) {

            updateState({

                confidence:
                    0.2

            });


            return `

                Mình chưa chắc
                bạn đang muốn hỏi gì.

                <br><br>

                Bạn nói thêm
                một chút nhé.

            `;

        }


        return null;

    }



    /* =====================================================
       38. MAIN INTENT ROUTER
    ===================================================== */

    function reply(text) {

        const message =
            normalizeText(
                text
            );


        if (!message) {

            return `
                Bạn nhập câu hỏi
                giúp mình nhé.
            `;

        }


        rememberEntities(
            message
        );



        /* ================================================
           1. SAFETY
        ================================================ */

        let result =
            safetyReply(
                message
            );


        if (result) {

            updateState({

                lastIntent:
                    "safety",

                confidence:
                    1

            });


            return result;

        }



        /* ================================================
           2. REALTIME DON'T-KNOW
        ================================================ */

        result =
            realtimeReply(
                message
            );


        if (result) {

            return result;

        }



        /* ================================================
           3. EMOTION
        ================================================ */

        result =
            emotionReply(
                message
            );


        if (result) {

            return result;

        }



        /* ================================================
           4. PRODUCT CONTEXT
        ================================================ */

        result =
            productContextReply(
                message
            );


        if (result) {

            updateState({

                lastIntent:
                    "product_context",

                confidence:
                    0.95

            });


            return result;

        }



        /* ================================================
           5. TROUBLESHOOTING
        ================================================ */

        result =
            troubleshootingReply(
                message
            );


        if (result) {

            return result;

        }



        /* ================================================
           6. PLATFORM
        ================================================ */

        result =
            platformReply(
                message
            );


        if (result) {

            return result;

        }



        /* ================================================
           7. COMMERCE
        ================================================ */

        result =
            commerceReply(
                message
            );


        if (result) {

            return result;

        }



        /* ================================================
           8. PRODUCT RECOMMENDATION
        ================================================ */

        result =
            recommendationReply(
                message
            );


        if (result) {

            return result;

        }



        /* ================================================
           9. FITNESS
        ================================================ */

        result =
            fitnessReply(
                message
            );


        if (result) {

            return result;

        }



        /* ================================================
           10. NUTRITION
        ================================================ */

        result =
            nutritionReply(
                message
            );


        if (result) {

            return result;

        }



        /* ================================================
           11. RECOVERY / PAIN / SLEEP
        ================================================ */

        result =
            recoveryReply(
                message
            );


        if (result) {

            return result;

        }



        /* ================================================
           12. CASUAL
        ================================================ */

        result =
            casualReply(
                message
            );


        if (result) {

            updateState({

                lastIntent:
                    "casual",

                confidence:
                    0.9

            });


            return result;

        }



        /* ================================================
           13. CLARIFICATION
        ================================================ */

        result =
            clarificationReply(
                message
            );


        if (result) {

            return result;

        }



        /* ================================================
           FALLBACK

           Không bịa.
           Không ép bán hàng.
        ================================================ */

        updateState({

            confidence:
                0.3,

            lastIntent:
                "unknown"

        });


        return `

            Mình chưa chắc
            mình hiểu đúng ý câu này.

            <br><br>

            Bạn có thể nói thêm
            một chút theo cách
            tự nhiên của bạn.

            <br><br>

            Ví dụ:

            <br>
            • tui muốn tìm giày chạy dưới 1tr

            <br>
            • mẫu 2 giá bao nhiêu

            <br>
            • cái đó có mẫu rẻ hơn không

            <br>
            • tui muốn tăng cơ

            <br>
            • ngủ ít có nên tập nặng không

            <br>
            • hôm nay tui chán quá

            <br><br>

            Nếu mình không có
            dữ liệu đáng tin cậy,
            mình sẽ nói rõ
            thay vì tự đoán.

        `;

    }



    /* =====================================================
       39. CHAT UI CREATOR
    ===================================================== */

    function createChatWidget() {

        /* BUTTON */

        if (
            !document.querySelector(
                ".chat-toggle"
            )
        ) {

            const toggle =
                document.createElement(
                    "button"
                );


            toggle.className =
                "chat-toggle";


            toggle.type =
                "button";


            toggle.setAttribute(
                "aria-label",
                "Mở trợ lý SPORTHUB"
            );


            toggle.innerHTML =
                "💬";


            document.body.appendChild(
                toggle
            );

        }



        /* CHATBOX */

        if (
            document.getElementById(
                "chatbox"
            )
        ) {

            return;

        }


        const chatbox =
            document.createElement(
                "div"
            );


        chatbox.id =
            "chatbox";


        chatbox.className =
            "chatbox";


        chatbox.innerHTML = `

            <div class="chat-head">

                <div>

                    <b>
                        SPORTHUB Assistant
                    </b>

                    <div
                        style="
                            font-size:11px;
                            opacity:.8;
                        "
                    >
                        AI Coach & Customer Assistant
                    </div>

                </div>


                <button
                    id="sporthubChatClose"
                    type="button"
                    aria-label="Đóng chatbot"
                >
                    ×
                </button>

            </div>


            <div
                id="chatMessages"
                class="chat-messages"
            >

                <div class="msg bot">

                    Xin chào 👋

                    <br><br>

                    Mình là
                    <b>
                        SPORTHUB Assistant
                    </b>.

                    <br><br>

                    Bạn cứ nói chuyện
                    tự nhiên nhé.

                    <br><br>

                    Mình có thể hỗ trợ:

                    <br>
                    • sản phẩm

                    <br>
                    • tập luyện

                    <br>
                    • dinh dưỡng

                    <br>
                    • Fitness Check

                    <br>
                    • phục hồi

                    <br>
                    • website

                    <br>
                    • hoặc nói chuyện linh tinh 😄

                </div>

            </div>


            <div class="chat-input">

                <input
                    id="chatInput"
                    type="text"
                    placeholder="Nhắn gì đó..."
                    autocomplete="off"
                >


                <button
                    id="sporthubChatSend"
                    type="button"
                    aria-label="Gửi câu hỏi"
                >
                    ➤
                </button>

            </div>

        `;


        document.body.appendChild(
            chatbox
        );

    }



    /* =====================================================
       40. ATTACH EVENTS
    ===================================================== */

    function attachChatEvents() {

        const toggles =
            document.querySelectorAll(
                ".chat-toggle"
            );


        toggles.forEach(
            function (button) {

                /*
                    Nếu HTML cũ đã có onclick
                    thì không addEventListener
                    thêm lần nữa.
                */

                if (
                    button.getAttribute(
                        "onclick"
                    )
                ) {

                    return;

                }


                if (
                    button.dataset
                        .sportHubBound
                    ===
                    "1"
                ) {

                    return;

                }


                button.addEventListener(
                    "click",
                    toggleChat
                );


                button.dataset
                    .sportHubBound =
                    "1";

            }
        );



        const close =
            document.getElementById(
                "sporthubChatClose"
            );


        if (
            close
            &&
            !close.getAttribute(
                "onclick"
            )
            &&
            close.dataset
                .sportHubBound
            !==
            "1"
        ) {

            close.addEventListener(
                "click",
                toggleChat
            );


            close.dataset
                .sportHubBound =
                "1";

        }



        const send =
            document.getElementById(
                "sporthubChatSend"
            );


        if (
            send
            &&
            !send.getAttribute(
                "onclick"
            )
            &&
            send.dataset
                .sportHubBound
            !==
            "1"
        ) {

            send.addEventListener(
                "click",
                sendChat
            );


            send.dataset
                .sportHubBound =
                "1";

        }



        const input =
            document.getElementById(
                "chatInput"
            );


        if (
            input
            &&
            !input.getAttribute(
                "onkeydown"
            )
            &&
            input.dataset
                .sportHubBound
            !==
            "1"
        ) {

            input.addEventListener(
                "keydown",
                chatKey
            );


            input.dataset
                .sportHubBound =
                "1";

        }

    }



    /* =====================================================
       41. ENSURE UI
    ===================================================== */

    function ensureChatWidget() {

        if (
            !document.getElementById(
                "chatbox"
            )
        ) {

            createChatWidget();

        }


        attachChatEvents();

    }



    /* =====================================================
       42. OPEN / CLOSE CHAT
    ===================================================== */

    function toggleChat() {

        const chatbox =
            document.getElementById(
                "chatbox"
            );


        if (!chatbox) {

            return;

        }


        chatbox.classList.toggle(
            "active"
        );


        if (
            chatbox.classList.contains(
                "active"
            )
        ) {

            setTimeout(
                function () {

                    document
                        .getElementById(
                            "chatInput"
                        )
                        ?.focus();

                },
                100
            );

        }

    }



    /* =====================================================
       43. SEND MESSAGE
    ===================================================== */

    function sendChat() {

        const input =
            document.getElementById(
                "chatInput"
            );


        const messages =
            document.getElementById(
                "chatMessages"
            );


        if (
            !input
            ||
            !messages
        ) {

            return;

        }


        const question =
            input.value.trim();


        if (!question) {

            return;

        }



        /* USER */

        messages.insertAdjacentHTML(
            "beforeend",
            `

                <div class="msg user">

                    ${escapeHtml(
                        question
                    )}

                </div>

            `
        );


        input.value =
            "";


        messages.scrollTop =
            messages.scrollHeight;



        /* TYPING */

        const typing =
            document.createElement(
                "div"
            );


        typing.className =
            "msg bot";


        typing.textContent =
            "Đang trả lời...";


        messages.appendChild(
            typing
        );


        messages.scrollTop =
            messages.scrollHeight;



        setTimeout(
            function () {

                try {

                    typing.innerHTML =
                        reply(
                            question
                        );

                } catch (error) {

                    console.error(
                        "SPORTHUB CHATBOT ERROR:",
                        error
                    );


                    typing.innerHTML = `

                        Mình gặp lỗi
                        khi xử lý câu này.

                        <br><br>

                        Bạn thử gửi lại
                        hoặc tải lại trang nhé.

                    `;

                }


                messages.scrollTop =
                    messages.scrollHeight;

            },
            250
        );

    }



    /* =====================================================
       44. ENTER TO SEND
    ===================================================== */

    function chatKey(event) {

        if (
            event.key === "Enter"
        ) {

            event.preventDefault();

            sendChat();

        }

    }



    /* =====================================================
       45. INIT
    ===================================================== */

    function initSportHubChatbot() {

        ensureChatWidget();


        /*
            Nếu đang ở trang sản phẩm
            thì cập nhật current product.
        */

        getCurrentProduct();

    }


    if (
        document.readyState
        ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initSportHubChatbot
        );

    } else {

        initSportHubChatbot();

    }



    /* =====================================================
       46. OLD HTML COMPATIBILITY
    ===================================================== */

    window.toggleChat =
        toggleChat;


    window.sendChat =
        sendChat;


    window.chatKey =
        chatKey;


    window.sportHubChatReply =
        reply;



    /* =====================================================
       47. DEBUG API

       Có thể test trong Console:

       SportHubChat.normalize("tui mún mua giày")

       SportHubChat.parseBudget("1.5tr")

       SportHubChat.detectSport("tui chơi pickebal")

       SportHubChat.getCurrentProduct()

       SportHubChat.getFitnessProfile()

       SportHubChat.state
    ===================================================== */

    window.SportHubChat = {

        reply:
            reply,

        normalize:
            normalizeText,

        parseBudget:
            parseBudget,

        detectSport:
            detectSport,

        detectGoal:
            detectGoal,

        detectLevel:
            detectLevel,

        getProducts:
            getProducts,

        getCurrentProduct:
            getCurrentProduct,

        getFocusProduct:
            getFocusProduct,

        recommendProducts:
            recommendProducts,

        getFitnessProfile:
            readFitnessProfile,

        state:
            state

    };


})();