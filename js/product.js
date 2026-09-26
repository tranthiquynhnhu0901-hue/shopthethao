/* =========================================================
   SPORTHUB - CATALOG DATA
   Bản hoàn chỉnh:
   - 16 danh mục thể thao
   - Metadata P01 - P12
   - Sản phẩm P13 - P52
   - SEO
   - Ghép database
   - Kiểm tra dữ liệu tự động
========================================================= */


/* =========================================================
   1. DANH MỤC THỂ THAO
========================================================= */

window.SPORT_CATEGORIES = [

    {"id":"gym-fitness","name":"Gym & Fitness","slug":"gym-fitness","image":"images/categories/cat-gym-fitness.webp","description":"Dụng cụ, trang phục và phụ kiện dành cho tập Gym & Fitness."},

    {"id":"boxing","name":"Boxing","slug":"boxing","image":"images/categories/cat-boxing.webp","description":"Găng Boxing, dụng cụ tập, bảo hộ và phụ kiện dành cho Boxing."},

    {"id":"muay-thai","name":"Muay Thai","slug":"muay-thai","image":"images/categories/cat-muay-thai.webp","description":"Trang bị và dụng cụ hỗ trợ tập luyện Muay Thai."},

    {"id":"mma","name":"MMA","slug":"mma","image":"images/categories/cat-mma.webp","description":"Găng, trang phục và phụ kiện dành cho MMA."},

    {"id":"running","name":"Chạy bộ","slug":"chay-bo","image":"images/categories/cat-running.webp","description":"Giày, trang phục và phụ kiện phục vụ chạy bộ."},

    {"id":"swimming","name":"Bơi lội","slug":"boi-loi","image":"images/categories/cat-swimming.webp","description":"Kính bơi, mũ bơi và dụng cụ hỗ trợ luyện tập bơi lội."},

    {"id":"football","name":"Bóng đá","slug":"bong-da","image":"images/categories/cat-football.webp","description":"Bóng, giày và phụ kiện dành cho người chơi bóng đá."},

    {"id":"basketball","name":"Bóng rổ","slug":"bong-ro","image":"images/categories/cat-basketball.webp","description":"Bóng và phụ kiện hỗ trợ tập luyện bóng rổ."},

    {"id":"badminton","name":"Cầu lông","slug":"cau-long","image":"images/categories/cat-badminton.webp","description":"Vợt, cầu và phụ kiện dành cho cầu lông."},

    {"id":"tennis","name":"Tennis","slug":"tennis","image":"images/categories/cat-tennis.webp","description":"Vợt, bóng và phụ kiện dành cho Tennis."},

    {"id":"pickleball","name":"Pickleball","slug":"pickleball","image":"images/categories/cat-pickleball.webp","description":"Vợt, bóng và phụ kiện dành cho Pickleball."},

    {"id":"yoga","name":"Yoga","slug":"yoga","image":"images/categories/cat-yoga.webp","description":"Thảm và dụng cụ hỗ trợ luyện tập Yoga."},

    {"id":"pilates","name":"Pilates","slug":"pilates","image":"images/categories/cat-pilates.webp","description":"Dụng cụ hỗ trợ các bài tập Pilates."},

    {"id":"cardio","name":"Cardio","slug":"cardio","image":"images/categories/cat-cardio.webp","description":"Dụng cụ phục vụ Cardio và Conditioning."},

    {"id":"recovery","name":"Phục hồi","slug":"phuc-hoi","image":"images/categories/cat-recovery.webp","description":"Dụng cụ hỗ trợ mobility, massage và phục hồi sau tập."},

    {"id":"accessories","name":"Phụ kiện","slug":"phu-kien","image":"images/categories/cat-accessories.webp","description":"Các phụ kiện phục vụ tập luyện và hoạt động thể thao."}

];



/* =========================================================
   2. HÀM TẠO SLUG SEO
========================================================= */

window.sportHubSlug = function (text = "") {

    return String(text)

        .normalize("NFD")

        .replace(/[\u0300-\u036f]/g, "")

        .replace(/đ/g, "d")

        .replace(/Đ/g, "d")

        .toLowerCase()

        .trim()

        .replace(/[^a-z0-9]+/g, "-")

        .replace(/^-+|-+$/g, "");

};



/* =========================================================
   3. METADATA CHO P01 - P12
   Chỉ bổ sung dữ liệu, không ghi đè dữ liệu gốc
========================================================= */

window.LEGACY_PRODUCT_META = {

    "1": {
        "code":"P01",
        "sport":"gym-fitness",
        "sportName":"Gym & Fitness",
        "brand":"SPORTHUB",
        "audience":["Nam","Nữ"],
        "level":["Beginner","Intermediate","Advanced"],
        "tags":["áo gym","áo tập gym","fitness","quần áo thể thao","áo tập nam nữ"],
        "seoTitle":"Áo Gym Performance Pro co giãn thoáng khí | SPORTHUB",
        "metaDescription":"Áo Gym Performance Pro co giãn 4 chiều, thoáng khí và linh hoạt cho gym, fitness và nhiều hoạt động thể thao."
    },

    "2": {
        "code":"P02",
        "sport":"running",
        "sportName":"Chạy bộ",
        "brand":"SPORTHUB",
        "audience":["Nam","Nữ"],
        "level":["Beginner","Intermediate"],
        "tags":["giày chạy bộ","running","giày thể thao","road running","giày chạy hằng ngày"],
        "seoTitle":"Giày chạy bộ Energy Runner X2 đệm đàn hồi | SPORTHUB",
        "metaDescription":"Giày chạy bộ Energy Runner X2 với thiết kế nhẹ, đệm đàn hồi và đế bám ổn định cho các buổi chạy hằng ngày."
    },

    "3": {
        "code":"P03",
        "sport":"gym-fitness",
        "sportName":"Gym & Fitness",
        "brand":"SPORTHUB",
        "audience":["Nam","Nữ"],
        "level":["Beginner","Intermediate"],
        "tags":["găng tay gym","găng tập","progrip","gym","weight training"],
        "seoTitle":"Găng tay Gym ProGrip chống trượt tập tạ | SPORTHUB",
        "metaDescription":"Găng tay Gym ProGrip hỗ trợ tăng độ bám và bảo vệ lòng bàn tay khi tập dumbbell, row và các bài kéo."
    },

    "4": {
        "code":"P04",
        "sport":"gym-fitness",
        "sportName":"Gym & Fitness",
        "brand":"SPORTHUB",
        "audience":["Nam","Nữ"],
        "level":["Beginner","Intermediate"],
        "tags":["tạ tay","dumbbell","tạ 10kg","gym","tập tại nhà","strength training"],
        "seoTitle":"Tạ tay Rubber Dumbbell 10KG tập Gym tại nhà | SPORTHUB",
        "metaDescription":"Tạ tay Rubber Dumbbell 10KG bọc cao su, tay cầm chắc chắn, phù hợp tập gym, strength training và tập luyện tại nhà."
    },

    "5": {
        "code":"P05",
        "sport":"gym-fitness",
        "sportName":"Gym & Fitness",
        "brand":"SPORTHUB",
        "audience":["Nam","Nữ"],
        "level":["Beginner","Intermediate","Advanced"],
        "tags":["dây kháng lực","resistance band","powerband","home workout","mobility"],
        "seoTitle":"Dây kháng lực PowerBand Set 5 mức | SPORTHUB",
        "metaDescription":"Bộ dây kháng lực PowerBand Set gồm nhiều mức lực, phù hợp warm-up, activation, tập toàn thân và tập luyện tại nhà."
    },

    "6": {
        "code":"P06",
        "sport":"yoga",
        "sportName":"Yoga",
        "brand":"SPORTHUB",
        "audience":["Nam","Nữ"],
        "level":["Beginner","Intermediate","Advanced"],
        "tags":["thảm yoga","yoga mat","pilates","stretching","bodyweight training"],
        "seoTitle":"Thảm Yoga Premium Pro chống trượt | SPORTHUB",
        "metaDescription":"Thảm Yoga Premium Pro có bề mặt chống trượt và độ đàn hồi phù hợp cho Yoga, Pilates, stretching và bodyweight."
    },

    "7": {
        "code":"P07",
        "sport":"gym-fitness",
        "sportName":"Gym & Fitness",
        "brand":"SPORTHUB",
        "audience":["Nam","Nữ"],
        "level":["Beginner","Intermediate","Advanced"],
        "tags":["quần short thể thao","quần gym","fitness","running","activewear"],
        "seoTitle":"Quần Short FlexMove thể thao co giãn | SPORTHUB",
        "metaDescription":"Quần Short FlexMove nhẹ và linh hoạt, phù hợp cho gym, chạy bộ, fitness và nhiều hoạt động thể thao."
    },

    "8": {
        "code":"P08",
        "sport":"running",
        "sportName":"Chạy bộ",
        "brand":"SPORTHUB",
        "audience":["Nam","Nữ"],
        "level":["Beginner","Intermediate"],
        "tags":["áo khoác thể thao","running jacket","áo khoác chạy bộ","outdoor","active wear"],
        "seoTitle":"Áo khoác Active Wind chạy bộ ngoài trời | SPORTHUB",
        "metaDescription":"Áo khoác Active Wind thiết kế nhẹ, hỗ trợ cản gió cơ bản và phù hợp chạy bộ, tập luyện hoặc hoạt động ngoài trời."
    },

    "9": {
        "code":"P09",
        "sport":"accessories",
        "sportName":"Phụ kiện",
        "brand":"SPORTHUB",
        "audience":["Nam","Nữ"],
        "level":["Beginner","Intermediate","Advanced"],
        "tags":["bình nước","bình nước thể thao","hydration","gym accessories","sport bottle"],
        "seoTitle":"Bình nước SportFlow 1L thể thao | SPORTHUB",
        "metaDescription":"Bình nước SportFlow dung tích 1L với vạch theo dõi lượng nước, phù hợp tập gym, thể thao và sử dụng hằng ngày."
    },

    "10": {
        "code":"P10",
        "sport":"recovery",
        "sportName":"Phục hồi",
        "brand":"SPORTHUB",
        "audience":["Nam","Nữ"],
        "level":["Beginner","Intermediate","Advanced"],
        "tags":["foam roller","con lăn massage","recovery","mobility","phục hồi cơ"],
        "seoTitle":"Foam Roller Recovery X hỗ trợ phục hồi cơ | SPORTHUB",
        "metaDescription":"Foam Roller Recovery X hỗ trợ self-massage, mobility và thư giãn các nhóm cơ sau các buổi tập luyện."
    },

    "11": {
        "code":"P11",
        "sport":"accessories",
        "sportName":"Phụ kiện",
        "brand":"SPORTHUB",
        "audience":["Nam","Nữ"],
        "level":["Beginner","Intermediate","Advanced"],
        "tags":["túi gym","gym bag","túi thể thao","sport bag","phụ kiện gym"],
        "seoTitle":"Túi Gym Urban 35L nhiều ngăn | SPORTHUB",
        "metaDescription":"Túi Gym Urban 35L có nhiều ngăn và ngăn giày riêng, phù hợp mang đồ tập gym, thể thao và các chuyến đi ngắn."
    },

    "12": {
        "code":"P12",
        "sport":"cardio",
        "sportName":"Cardio",
        "brand":"SPORTHUB",
        "audience":["Nam","Nữ"],
        "level":["Beginner","Intermediate","Advanced"],
        "tags":["dây nhảy","speed rope","jump rope","cardio","boxing conditioning"],
        "seoTitle":"Dây nhảy Speed Rope RX tập Cardio | SPORTHUB",
        "metaDescription":"Dây nhảy Speed Rope RX có chiều dài điều chỉnh và cơ chế xoay mượt, phù hợp cardio, warm-up và conditioning."
    }

};



/* =========================================================
   4. GHÉP METADATA VÀO P01 - P12
========================================================= */

products.forEach(product => {

    const meta =
        window.LEGACY_PRODUCT_META[
            product.id
        ];


    if (!meta) {
        return;
    }


    product.code =
        meta.code;


    product.slug =
        meta.slug ||
        window.sportHubSlug(
            product.name
        );


    product.sport =
        meta.sport;


    product.sportName =
        meta.sportName;


    product.brand =
        meta.brand;


    product.audience =
        Array.isArray(meta.audience)
            ? [...meta.audience]
            : [];


    product.level =
        Array.isArray(meta.level)
            ? [...meta.level]
            : [];


    product.tags =
        Array.isArray(meta.tags)
            ? [...meta.tags]
            : [];


    product.seoTitle =
        meta.seoTitle;


    product.metaDescription =
        meta.metaDescription;


    product.isLegacy =
        true;

});



/* =========================================================
   5. SẢN PHẨM MỚI P13 - P52
========================================================= */

window.NEW_PRODUCTS = [

    {"id":13,"code":"P13","name":"Găng Boxing Training Pro","slug":"gang-boxing-training-pro","sport":"boxing","sportName":"Boxing","category":"Găng Boxing","type":"equipment","brand":"SPORTHUB","price":649000,"oldPrice":790000,"rating":4.8,"reviews":86,"stock":28,"badge":"Boxing","sizes":["10oz","12oz","14oz","16oz"],"audience":["Nam","Nữ"],"level":["Beginner","Intermediate"],"image":"images/products/p13-gang-boxing-training-pro.webp","imageAlt":"Găng Boxing Training Pro dành cho tập luyện Boxing","shortDescription":"Găng Boxing đa dụng dành cho luyện kỹ thuật, focus mitt và bao cát, thiết kế chú trọng khả năng bảo vệ bàn tay và ổn định cổ tay.","description":"Găng Boxing Training Pro được thiết kế cho các buổi tập Boxing thường xuyên, từ học kỹ thuật cơ bản, pad work đến luyện bao cát. Cấu trúc đệm nhiều lớp hỗ trợ phân tán lực va chạm, trong khi quai khóa vùng cổ tay giúp người tập tạo cảm giác chắc chắn hơn khi thực hiện các tổ hợp đòn. Khoang tay có không gian phù hợp để sử dụng cùng băng quấn tay Boxing. Đây là lựa chọn phù hợp cho người mới và người tập phong trào đang cần một đôi găng đa dụng cho nhiều hình thức luyện tập.","highlights":["Đệm nhiều lớp hỗ trợ phân tán lực va chạm.","Quai cổ tay dễ điều chỉnh.","Phù hợp luyện focus mitt và heavy bag.","Có nhiều mức trọng lượng từ 10oz đến 16oz.","Có thể sử dụng cùng băng quấn tay Boxing."],"suitableFor":["Người mới học Boxing.","Người tập Boxing phong trào.","Luyện kỹ thuật.","Pad work.","Heavy bag training."],"specifications":{"material":"Synthetic leather","padding":"Multi-layer foam","closure":"Hook-and-loop","weightOptions":"10oz / 12oz / 14oz / 16oz"},"usageGuide":["Nên sử dụng cùng băng quấn tay khi tập.","Chọn trọng lượng găng phù hợp với mục tiêu luyện tập.","Đảm bảo quai cổ tay được cố định trước khi bắt đầu.","Dừng sử dụng nếu găng bị rách hoặc phần khóa không còn chắc chắn."],"careGuide":["Lau khô bề mặt sau mỗi buổi tập.","Để găng ở nơi thông thoáng.","Không để găng còn ẩm trong túi kín.","Tránh phơi trực tiếp dưới nhiệt độ quá cao."],"tags":["boxing","găng boxing","boxing gloves","heavy bag","focus mitt","boxing beginner"],"seoTitle":"Găng Boxing Training Pro tập bao cát và pad | SPORTHUB","metaDescription":"Găng Boxing Training Pro dành cho người mới và người tập phong trào, phù hợp luyện kỹ thuật, focus mitt và bao cát với nhiều lựa chọn trọng lượng."},

    {"id":14,"code":"P14","name":"Băng quấn tay Boxing Wrap 4.5M","slug":"bang-quan-tay-boxing-wrap-4-5m","sport":"boxing","sportName":"Boxing","category":"Phụ kiện Boxing","type":"accessories","brand":"SPORTHUB","price":129000,"oldPrice":159000,"rating":4.8,"reviews":120,"stock":64,"badge":"Best Value","sizes":["4.5M"],"audience":["Nam","Nữ"],"level":["Beginner","Intermediate","Advanced"],"image":"images/products/p14-bang-quan-tay-boxing.webp","imageAlt":"Băng quấn tay Boxing Wrap 4.5M bảo vệ cổ tay và bàn tay","shortDescription":"Băng quấn tay Boxing dài 4.5m hỗ trợ cố định cổ tay, bàn tay và các khớp ngón trước khi mang găng.","description":"Boxing Wrap 4.5M là băng quấn tay dành cho các buổi luyện Boxing, Muay Thai và những môn striking tương tự. Chiều dài 4.5m cho phép người tập quấn nhiều vòng quanh cổ tay, lòng bàn tay và khớp ngón. Chất liệu có độ co giãn nhẹ giúp băng ôm tay nhưng vẫn giữ được cảm giác linh hoạt. Băng phù hợp sử dụng bên trong găng Boxing trong các buổi tập kỹ thuật, bao cát và pad work.","highlights":["Chiều dài 4.5m.","Hỗ trợ cố định cổ tay.","Có thể quấn quanh khớp ngón.","Khóa dán tiện dụng.","Phù hợp dùng bên trong găng Boxing."],"suitableFor":["Boxing.","Muay Thai.","Heavy bag.","Pad work.","Sparring."],"specifications":{"length":"4.5 m","material":"Cotton blend","closure":"Hook-and-loop","quantity":"1 cặp"},"usageGuide":["Quấn vừa đủ chắc, không siết quá mạnh.","Đảm bảo cổ tay vẫn cử động tự nhiên.","Không để băng tạo nếp gấp lớn bên trong găng."],"careGuide":["Giặt sau các buổi tập ra nhiều mồ hôi.","Nên dùng túi giặt.","Phơi ở nơi thông thoáng.","Không cuộn lại khi băng còn ẩm."],"tags":["boxing","hand wrap","băng quấn tay","boxing wrap","phụ kiện boxing"],"seoTitle":"Băng quấn tay Boxing Wrap 4.5M | SPORTHUB","metaDescription":"Băng quấn tay Boxing Wrap 4.5M hỗ trợ cố định cổ tay và bàn tay, phù hợp tập bao cát, pad work và Boxing thường xuyên."},

    {"id":15,"code":"P15","name":"Mũ bảo hộ Boxing HeadGuard X","slug":"mu-bao-ho-boxing-headguard-x","sport":"boxing","sportName":"Boxing","category":"Bảo hộ Boxing","type":"equipment","brand":"SPORTHUB","price":759000,"oldPrice":890000,"rating":4.7,"reviews":45,"stock":18,"badge":"Protection","sizes":["M","L","XL"],"audience":["Nam","Nữ"],"level":["Intermediate","Advanced"],"image":"images/products/p15-mu-bao-ho-boxing.webp","imageAlt":"Mũ bảo hộ Boxing HeadGuard X dành cho tập sparring","shortDescription":"Mũ bảo hộ Boxing có vùng đệm quanh trán, thái dương và má, hỗ trợ giảm tác động trong các buổi luyện sparring.","description":"HeadGuard X được thiết kế cho các buổi sparring và luyện đối kháng có kiểm soát. Hệ thống đệm bao quanh các vùng thường chịu va chạm giúp tăng lớp bảo vệ trong quá trình tập luyện. Quai điều chỉnh hỗ trợ cố định mũ trên đầu và hạn chế xê dịch khi di chuyển. Mũ bảo hộ không loại bỏ hoàn toàn nguy cơ chấn thương, vì vậy người tập vẫn cần tuân thủ cường độ sparring phù hợp và hướng dẫn của huấn luyện viên.","highlights":["Đệm vùng trán và thái dương.","Có vùng bảo vệ má.","Quai điều chỉnh độ ôm.","Thiết kế dành cho sparring.","Dễ tháo và vệ sinh sau buổi tập."],"suitableFor":["Boxing sparring.","Technical sparring.","Người tập Boxing có kinh nghiệm cơ bản."],"specifications":{"padding":"Impact-absorbing foam","closure":"Adjustable strap","sizes":"M / L / XL"},"usageGuide":["Chọn size vừa đầu.","Điều chỉnh quai để mũ không xê dịch.","Không dùng mũ hỏng hoặc phần đệm đã biến dạng.","Sparring cần được kiểm soát cường độ."],"careGuide":["Lau sạch sau buổi tập.","Để nơi khô thoáng.","Không cất khi còn ẩm.","Kiểm tra quai và lớp đệm định kỳ."],"tags":["boxing","headguard","mũ boxing","sparring","bảo hộ boxing"],"seoTitle":"Mũ bảo hộ Boxing HeadGuard X tập Sparring | SPORTHUB","metaDescription":"Mũ bảo hộ Boxing HeadGuard X với vùng đệm bảo vệ trán, thái dương và má, phù hợp các buổi sparring có kiểm soát."},

    {"id":16,"code":"P16","name":"Bao cát Boxing Heavy Bag Pro","slug":"bao-cat-boxing-heavy-bag-pro","sport":"boxing","sportName":"Boxing","category":"Bao cát Boxing","type":"equipment","brand":"SPORTHUB","price":1890000,"oldPrice":2190000,"rating":4.9,"reviews":38,"stock":9,"badge":"Heavy Duty","sizes":["100cm","120cm"],"audience":["Nam","Nữ"],"level":["Beginner","Intermediate","Advanced"],"image":"images/products/p16-bao-cat-boxing.webp","imageAlt":"Bao cát Boxing Heavy Bag Pro dùng luyện đòn và conditioning","shortDescription":"Bao cát Boxing dành cho luyện jab, cross, hook, combination và các bài conditioning.","description":"Heavy Bag Pro là bao cát dành cho những buổi luyện striking tại phòng tập hoặc khu tập tại nhà có không gian phù hợp. Kích thước thân dài tạo vùng đánh rộng để luyện các đòn jab, cross, hook và tổ hợp đòn. Bao cát có thể được sử dụng trong các bài kỹ thuật, conditioning hoặc circuit. Khi lắp đặt cần sử dụng hệ thống treo chắc chắn và kiểm tra khả năng chịu tải của vị trí treo.","highlights":["Thân bao dài.","Phù hợp luyện nhiều tổ hợp đòn.","Dùng được cho technique và conditioning.","Có lựa chọn 100cm và 120cm.","Phù hợp phòng tập và khu tập tại nhà."],"suitableFor":["Boxing.","Striking practice.","Heavy bag conditioning.","Home gym có vị trí treo phù hợp."],"specifications":{"heightOptions":"100cm / 120cm","usage":"Hanging heavy bag","trainingType":"Technique / Conditioning"},"usageGuide":["Kiểm tra điểm treo trước khi tập.","Sử dụng găng và băng quấn tay.","Bắt đầu bằng kỹ thuật trước khi tăng lực.","Không sử dụng nếu hệ thống treo bị lỏng."],"careGuide":["Lau bề mặt sau buổi tập.","Kiểm tra dây và khóa treo định kỳ.","Tránh để ngoài trời lâu ngày."],"tags":["boxing","heavy bag","bao cát boxing","boxing training","conditioning"],"seoTitle":"Bao cát Boxing Heavy Bag Pro tập đòn | SPORTHUB","metaDescription":"Bao cát Boxing Heavy Bag Pro phù hợp luyện jab, cross, hook, combination và conditioning tại phòng tập hoặc khu tập tại nhà."},

    {"id":17,"code":"P17","name":"Đích đấm Boxing Focus Mitt","slug":"dich-dam-boxing-focus-mitt","sport":"boxing","sportName":"Boxing","category":"Đích đấm Boxing","type":"equipment","brand":"SPORTHUB","price":549000,"oldPrice":649000,"rating":4.8,"reviews":52,"stock":27,"badge":"Coach","sizes":["Free Size"],"audience":["Nam","Nữ"],"level":["Beginner","Intermediate","Advanced"],"image":"images/products/p17-dich-dam-boxing.webp","imageAlt":"Đích đấm Boxing Focus Mitt dùng luyện tốc độ và độ chính xác","shortDescription":"Focus Mitt hỗ trợ luyện tốc độ, timing, độ chính xác và các tổ hợp đòn Boxing.","description":"Boxing Focus Mitt được thiết kế cho các buổi pad work giữa người tập và huấn luyện viên hoặc partner. Mặt đích có độ cong nhẹ giúp người giữ mitt dễ định hướng điểm tiếp xúc của cú đấm. Focus Mitt phù hợp luyện jab, cross, hook, uppercut và các combination cơ bản đến nâng cao. Việc sử dụng đúng kỹ thuật giúp người tập phát triển timing, phản xạ, footwork và khả năng kết hợp đòn.","highlights":["Mặt đích cong nhẹ.","Hỗ trợ luyện timing.","Phù hợp tập combination.","Có tay cầm ổn định.","Dùng cho nhiều trình độ."],"suitableFor":["Boxing pad work.","Technical training.","Combination training.","Coach và training partner."],"specifications":{"type":"Focus Mitt","quantity":"1 cặp","trainingUse":"Pad work"},"usageGuide":["Người giữ mitt cần giữ cổ tay ổn định.","Không để người tập đấm khi mitt chưa sẵn sàng.","Bắt đầu chậm trước khi tăng tốc độ combination."],"careGuide":["Lau sau buổi tập.","Để nơi thông thoáng.","Kiểm tra tay cầm và đường may định kỳ."],"tags":["boxing","focus mitt","đích đấm boxing","pad work","boxing coach"],"seoTitle":"Đích đấm Boxing Focus Mitt tập Pad Work | SPORTHUB","metaDescription":"Đích đấm Boxing Focus Mitt hỗ trợ luyện timing, tốc độ, độ chính xác và combination trong các buổi pad work."},

    {"id":18,"code":"P18","name":"Găng Muay Thai Combat Pro","slug":"gang-muay-thai-combat-pro","sport":"muay-thai","sportName":"Muay Thai","category":"Găng Muay Thai","type":"equipment","brand":"SPORTHUB","price":699000,"oldPrice":849000,"rating":4.8,"reviews":69,"stock":24,"badge":"Muay Thai","sizes":["10oz","12oz","14oz","16oz"],"audience":["Nam","Nữ"],"level":["Beginner","Intermediate"],"image":"images/products/p18-gang-muay-thai.webp","imageAlt":"Găng Muay Thai Combat Pro dành cho tập luyện Muay Thai","shortDescription":"Găng Muay Thai đa dụng dành cho luyện kỹ thuật, pad work và bao cát với thiết kế linh hoạt cho các bài striking.","description":"Găng Muay Thai Combat Pro được phát triển cho các buổi tập striking thường xuyên, bao gồm luyện kỹ thuật, pad work và heavy bag. Cấu trúc đệm nhiều lớp hỗ trợ phân tán lực va chạm ở vùng nắm đấm, trong khi thiết kế cổ tay cho phép người tập duy trì sự linh hoạt cần thiết trong các động tác Muay Thai. Khoang tay được thiết kế để có thể sử dụng cùng băng quấn tay. Sản phẩm phù hợp cho người mới bắt đầu và người tập phong trào đang xây dựng nền tảng kỹ thuật.","highlights":["Đệm nhiều lớp hỗ trợ phân tán lực va chạm.","Thiết kế phù hợp đặc trưng tập luyện Muay Thai.","Quai cổ tay dễ điều chỉnh.","Phù hợp pad work và heavy bag.","Có nhiều lựa chọn từ 10oz đến 16oz."],"suitableFor":["Người mới tập Muay Thai.","Người tập Muay Thai phong trào.","Pad work.","Heavy bag.","Technical striking."],"specifications":{"material":"Synthetic leather","padding":"Multi-layer foam","closure":"Hook-and-loop","weightOptions":"10oz / 12oz / 14oz / 16oz"},"usageGuide":["Nên sử dụng cùng băng quấn tay.","Chọn trọng lượng găng theo mục đích luyện tập.","Cố định quai cổ tay trước khi tập.","Tăng lực đánh dần sau khi kỹ thuật đã ổn định."],"careGuide":["Lau sạch bề mặt sau buổi tập.","Để găng khô tự nhiên ở nơi thông thoáng.","Không để găng ẩm trong túi kín.","Kiểm tra đường may và quai khóa định kỳ."],"tags":["muay thai","găng muay thai","muay thai gloves","thai boxing","pad work","heavy bag"],"seoTitle":"Găng Muay Thai Combat Pro tập Pad và bao cát | SPORTHUB","metaDescription":"Găng Muay Thai Combat Pro dành cho luyện kỹ thuật, pad work và bao cát, phù hợp người mới và người tập Muay Thai phong trào."},

    {"id":19,"code":"P19","name":"Bảo vệ ống đồng Muay Thai Shield","slug":"bao-ve-ong-dong-muay-thai-shield","sport":"muay-thai","sportName":"Muay Thai","category":"Bảo hộ Muay Thai","type":"equipment","brand":"SPORTHUB","price":829000,"oldPrice":990000,"rating":4.8,"reviews":58,"stock":21,"badge":"Protection","sizes":["M","L","XL"],"audience":["Nam","Nữ"],"level":["Beginner","Intermediate","Advanced"],"image":"images/products/p19-bao-ve-ong-dong-muay-thai.webp","imageAlt":"Bảo vệ ống đồng Muay Thai Shield dành cho tập luyện và sparring","shortDescription":"Shin guard Muay Thai có vùng đệm ở ống đồng và mu bàn chân, hỗ trợ giảm tác động trong các buổi luyện kick và sparring.","description":"Muay Thai Shield là bộ bảo vệ ống đồng dành cho các buổi tập kỹ thuật, drill đối kháng và sparring có kiểm soát. Phần đệm được bố trí dọc vùng cẳng chân và mu bàn chân nhằm tạo thêm lớp bảo vệ tại các vị trí thường chịu va chạm. Hệ thống dây cố định phía sau giúp hạn chế xê dịch khi di chuyển, đá hoặc thực hiện combination. Sản phẩm không loại bỏ hoàn toàn nguy cơ chấn thương nên cường độ luyện tập vẫn cần được kiểm soát phù hợp.","highlights":["Đệm bảo vệ vùng ống đồng.","Có phần bảo vệ mu bàn chân.","Dây cố định phía sau.","Thiết kế hỗ trợ hạn chế xê dịch.","Phù hợp luyện kỹ thuật và sparring có kiểm soát."],"suitableFor":["Muay Thai.","Kick training.","Technical sparring.","Drill đối kháng."],"specifications":{"padding":"Multi-layer protective foam","coverage":"Shin + Instep","closure":"Adjustable rear straps","sizes":"M / L / XL"},"usageGuide":["Chọn size vừa với chiều dài cẳng chân.","Điều chỉnh dây để sản phẩm không xoay khi di chuyển.","Kiểm tra vị trí bảo vệ trước khi sparring.","Không sử dụng nếu phần đệm hoặc dây cố định bị hỏng."],"careGuide":["Lau sạch sau buổi tập.","Hong khô ở nơi thông thoáng.","Không bảo quản khi còn ẩm.","Kiểm tra dây và lớp đệm định kỳ."],"tags":["muay thai","shin guard","bảo vệ ống đồng","muay thai protection","sparring"],"seoTitle":"Bảo vệ ống đồng Muay Thai Shield | SPORTHUB","metaDescription":"Bảo vệ ống đồng Muay Thai Shield có đệm vùng cẳng chân và mu bàn chân, phù hợp luyện kick, drill và sparring có kiểm soát."},

    {"id":20,"code":"P20","name":"Thai Pad Kick Training","slug":"thai-pad-kick-training","sport":"muay-thai","sportName":"Muay Thai","category":"Đích đá Muay Thai","type":"equipment","brand":"SPORTHUB","price":899000,"oldPrice":1050000,"rating":4.9,"reviews":42,"stock":16,"badge":"Coach","sizes":["Standard"],"audience":["Nam","Nữ"],"level":["Beginner","Intermediate","Advanced"],"image":"images/products/p20-thai-pad.webp","imageAlt":"Thai Pad Kick Training dùng luyện đá gối và combination Muay Thai","shortDescription":"Thai Pad dành cho luyện kick, knee, punch và các tổ hợp đòn Muay Thai với training partner hoặc huấn luyện viên.","description":"Thai Pad Kick Training được thiết kế cho các buổi pad work trong Muay Thai và striking. Bề mặt đích lớn cùng lớp đệm dày hỗ trợ người giữ pad tiếp nhận nhiều loại đòn như round kick, teep, knee và combination tay chân. Tay cầm kết hợp dây cố định giúp người giữ pad kiểm soát dụng cụ tốt hơn trong quá trình luyện tập. Việc sử dụng Thai Pad nên được thực hiện theo kỹ thuật phù hợp để hạn chế tải không cần thiết lên cổ tay và khuỷu tay của người giữ.","highlights":["Bề mặt đích lớn.","Đệm dày cho pad work.","Có tay cầm phía sau.","Dây cố định cẳng tay.","Phù hợp luyện kick, knee và combination."],"suitableFor":["Muay Thai pad work.","Kick training.","Knee training.","Combination training.","Coach và training partner."],"specifications":{"type":"Thai Pad","padding":"High-density foam","handle":"Rear grip","straps":"Adjustable forearm straps"},"usageGuide":["Cố định dây trước khi bắt đầu.","Người giữ pad cần duy trì cổ tay và khuỷu tay ổn định.","Bắt đầu với lực vừa phải khi luyện kỹ thuật mới.","Không nhận đòn khi pad chưa ở đúng vị trí."],"careGuide":["Lau sạch sau khi tập.","Để nơi thông thoáng.","Kiểm tra tay cầm và dây khóa.","Không sử dụng nếu phần đệm bị biến dạng nghiêm trọng."],"tags":["muay thai","thai pad","kick pad","pad work","muay thai training"],"seoTitle":"Thai Pad Kick Training luyện Muay Thai | SPORTHUB","metaDescription":"Thai Pad Kick Training dành cho luyện kick, knee, punch và combination trong các buổi pad work Muay Thai."},

    {"id":21,"code":"P21","name":"Quần Muay Thai Fight Short","slug":"quan-muay-thai-fight-short","sport":"muay-thai","sportName":"Muay Thai","category":"Trang phục Muay Thai","type":"clothes","brand":"SPORTHUB","price":399000,"oldPrice":469000,"rating":4.7,"reviews":51,"stock":39,"badge":"Fight","sizes":["S","M","L","XL"],"audience":["Nam","Nữ"],"level":["Beginner","Intermediate","Advanced"],"image":"images/products/p21-quan-muay-thai.webp","imageAlt":"Quần Muay Thai Fight Short dành cho tập luyện Muay Thai","shortDescription":"Quần Muay Thai form rộng với cạp co giãn, hỗ trợ thực hiện kick, knee và footwork linh hoạt.","description":"Muay Thai Fight Short được thiết kế theo form đặc trưng của trang phục Muay Thai với phần ống rộng nhằm tạo không gian cho các chuyển động hông và chân. Cạp quần co giãn giúp cố định trong quá trình tập, trong khi chiều dài ngắn hỗ trợ các kỹ thuật round kick, teep, knee và footwork. Sản phẩm phù hợp cho các buổi luyện kỹ thuật, pad work, heavy bag và hoạt động tại phòng tập.","highlights":["Form rộng dành cho Muay Thai.","Hỗ trợ biên độ đá và nâng gối.","Cạp co giãn.","Thiết kế nhẹ.","Phù hợp nhiều hình thức tập luyện."],"suitableFor":["Muay Thai.","Pad work.","Heavy bag.","Technical training.","Conditioning."],"specifications":{"fit":"Muay Thai training fit","waistband":"Elastic waistband","sizes":"S / M / L / XL","use":"Training"},"usageGuide":["Chọn size vừa cạp nhưng không quá chật.","Đảm bảo quần không hạn chế động tác đá.","Phù hợp sử dụng trong các buổi tập Muay Thai."],"careGuide":["Giặt sau khi tập.","Ưu tiên giặt ở nhiệt độ phù hợp.","Không để trang phục ẩm lâu trong túi tập.","Phơi ở nơi thông thoáng."],"tags":["muay thai","quần muay thai","muay thai shorts","fight short","trang phục muay thai"],"seoTitle":"Quần Muay Thai Fight Short tập luyện | SPORTHUB","metaDescription":"Quần Muay Thai Fight Short form rộng, cạp co giãn và thiết kế linh hoạt cho kick, knee, pad work và tập luyện Muay Thai."},

    {"id":22,"code":"P22","name":"Găng MMA Hybrid Fight","slug":"gang-mma-hybrid-fight","sport":"mma","sportName":"MMA","category":"Găng MMA","type":"equipment","brand":"SPORTHUB","price":589000,"oldPrice":699000,"rating":4.8,"reviews":47,"stock":26,"badge":"MMA","sizes":["M","L","XL"],"audience":["Nam","Nữ"],"level":["Intermediate","Advanced"],"image":"images/products/p22-gang-mma-hybrid.webp","imageAlt":"Găng MMA Hybrid Fight hở ngón dành cho tập luyện MMA","shortDescription":"Găng MMA hở ngón hỗ trợ kết hợp striking và grappling trong các buổi tập kỹ thuật tổng hợp.","description":"Găng MMA Hybrid Fight được thiết kế cho các buổi luyện Mixed Martial Arts cần kết hợp giữa striking và grappling. Phần đệm bảo vệ vùng khớp ngón hỗ trợ các bài đấm cơ bản, trong khi thiết kế hở ngón cho phép người tập thực hiện grip, clinch và các kỹ thuật kiểm soát đối thủ. Quai cổ tay có thể điều chỉnh giúp tăng độ ổn định khi tập luyện. Sản phẩm phù hợp hơn với người đã có nền tảng kỹ thuật MMA cơ bản và tập trong môi trường có huấn luyện viên hoặc partner phù hợp.","highlights":["Thiết kế hở ngón dành cho MMA.","Đệm vùng khớp ngón.","Hỗ trợ striking và grappling.","Quai cổ tay điều chỉnh.","Form gọn giúp duy trì khả năng cầm nắm."],"suitableFor":["MMA technical training.","Grappling drill.","Controlled striking.","Clinch practice.","Người tập MMA có nền tảng cơ bản."],"specifications":{"gloveType":"Open-finger MMA glove","padding":"Protective knuckle foam","closure":"Adjustable wrist strap","sizes":"M / L / XL"},"usageGuide":["Chọn size ôm tay nhưng không gây tê hoặc khó cử động.","Cố định quai cổ tay trước khi tập.","Không sử dụng full-power striking nếu buổi tập không cho phép.","Tuân thủ quy định của huấn luyện viên khi sparring."],"careGuide":["Lau sạch sau mỗi buổi tập.","Để găng khô ở nơi thông thoáng.","Không bảo quản khi còn ẩm.","Kiểm tra phần đệm và quai khóa định kỳ."],"tags":["mma","găng mma","mma gloves","grappling","striking","combat training"],"seoTitle":"Găng MMA Hybrid Fight hở ngón tập luyện | SPORTHUB","metaDescription":"Găng MMA Hybrid Fight thiết kế hở ngón, hỗ trợ striking, grappling và clinch trong các buổi tập MMA kỹ thuật."},

    {"id":23,"code":"P23","name":"Áo Rashguard MMA Performance","slug":"ao-rashguard-mma-performance","sport":"mma","sportName":"MMA","category":"Trang phục MMA","type":"clothes","brand":"SPORTHUB","price":459000,"oldPrice":549000,"rating":4.7,"reviews":41,"stock":33,"badge":"Performance","sizes":["S","M","L","XL"],"audience":["Nam","Nữ"],"level":["Beginner","Intermediate","Advanced"],"image":"images/products/p23-rashguard-mma.webp","imageAlt":"Áo Rashguard MMA Performance dành cho grappling và MMA","shortDescription":"Rashguard MMA form ôm, co giãn đa chiều và phù hợp các buổi grappling, MMA và conditioning.","description":"Áo Rashguard MMA Performance được thiết kế để sử dụng trong các buổi tập MMA, grappling và conditioning có cường độ cao. Form compression giúp áo ôm sát cơ thể và hạn chế vướng khi thực hiện các kỹ thuật ground work, clinch hoặc di chuyển nhanh. Chất liệu co giãn đa chiều hỗ trợ phạm vi chuyển động ở vai, thân và cánh tay. Bề mặt vải có khả năng thoát ẩm giúp người tập duy trì cảm giác thoải mái hơn trong buổi tập dài.","highlights":["Form compression dành cho MMA.","Co giãn đa chiều.","Hỗ trợ vận động linh hoạt.","Chất liệu thoát ẩm.","Phù hợp grappling và conditioning."],"suitableFor":["MMA.","Grappling.","No-Gi training.","Conditioning.","Combat sports."],"specifications":{"fit":"Compression fit","material":"Stretch performance fabric","sleeve":"Short sleeve","sizes":"S / M / L / XL"},"usageGuide":["Chọn size ôm cơ thể nhưng không hạn chế hô hấp.","Mặc trực tiếp hoặc dưới trang phục tập phù hợp.","Thay áo sau buổi tập nếu bị ướt nhiều."],"careGuide":["Giặt sau mỗi buổi tập.","Ưu tiên giặt nước mát.","Không để áo ẩm lâu trong túi.","Phơi ở nơi thông thoáng.","Hạn chế sử dụng nhiệt cao khi sấy."],"tags":["mma","rashguard","áo mma","grappling","no gi","combat clothing"],"seoTitle":"Áo Rashguard MMA Performance tập Grappling | SPORTHUB","metaDescription":"Áo Rashguard MMA Performance form compression, co giãn và thoát ẩm, phù hợp MMA, grappling, No-Gi và conditioning."},

    {"id":24,"code":"P24","name":"Mouthguard Combat Protect","slug":"mouthguard-combat-protect","sport":"mma","sportName":"MMA","category":"Bảo hộ đối kháng","type":"accessories","brand":"SPORTHUB","price":189000,"oldPrice":229000,"rating":4.7,"reviews":74,"stock":65,"badge":"Safety","sizes":["Adult"],"audience":["Nam","Nữ"],"level":["Beginner","Intermediate","Advanced"],"image":"images/products/p24-mouthguard-combat.webp","imageAlt":"Mouthguard Combat Protect bảo vệ răng khi tập MMA Boxing và Muay Thai","shortDescription":"Mouthguard dành cho các môn đối kháng, hỗ trợ bảo vệ răng và vùng miệng trong các buổi tập có tiếp xúc.","description":"Mouthguard Combat Protect là dụng cụ bảo hộ dành cho các môn đối kháng như MMA, Boxing và Muay Thai. Thiết kế có thể tạo hình theo cấu trúc răng giúp mouthguard ôm sát hơn khi sử dụng. Sản phẩm hỗ trợ giảm tác động trực tiếp lên răng và vùng miệng trong các buổi luyện tập có tiếp xúc. Mouthguard không loại bỏ hoàn toàn nguy cơ chấn thương nên người tập vẫn cần sử dụng đúng kỹ thuật, cường độ phù hợp và các trang bị bảo hộ cần thiết khác.","highlights":["Thiết kế dành cho các môn đối kháng.","Có thể tạo hình theo răng.","Form gọn khi sử dụng.","Phù hợp nhiều môn combat sports.","Dễ mang theo trong hộp bảo quản."],"suitableFor":["MMA.","Boxing.","Muay Thai.","Sparring.","Combat sports."],"specifications":{"type":"Moldable mouthguard","size":"Adult","use":"Combat sports","storage":"Protective case"},"usageGuide":["Tạo hình mouthguard theo hướng dẫn của sản phẩm.","Kiểm tra độ ôm trước khi sử dụng.","Không dùng mouthguard bị rách hoặc biến dạng.","Rửa sạch trước và sau khi tập.","Không dùng chung mouthguard với người khác."],"careGuide":["Rửa sạch sau khi sử dụng.","Để khô hoàn toàn trước khi cất.","Bảo quản trong hộp thông thoáng.","Không để gần nguồn nhiệt cao.","Thay mới nếu mouthguard bị biến dạng hoặc xuống cấp."],"tags":["mma","mouthguard","bảo vệ răng","boxing mouthguard","muay thai mouthguard","combat protection"],"seoTitle":"Mouthguard Combat Protect cho MMA Boxing Muay Thai | SPORTHUB","metaDescription":"Mouthguard Combat Protect hỗ trợ bảo vệ răng và vùng miệng khi tập MMA, Boxing, Muay Thai và các môn đối kháng."},

    {"id":25,"code":"P25","name":"Giày Road Runner Motion X","slug":"giay-road-runner-motion-x","sport":"running","sportName":"Chạy bộ","category":"Giày chạy bộ","type":"shoes","brand":"SPORTHUB","price":1390000,"oldPrice":1690000,"rating":4.9,"reviews":102,"stock":23,"badge":"Running","sizes":["39","40","41","42","43"],"audience":["Nam","Nữ"],"level":["Beginner","Intermediate"],"image":"images/products/p25-giay-road-runner-motion.webp","imageAlt":"Giày Road Runner Motion X dành cho chạy bộ đường bằng","shortDescription":"Giày chạy bộ đường bằng với thiết kế nhẹ, đệm đàn hồi và đế ngoài hỗ trợ độ bám trong các buổi chạy hằng ngày.","description":"Road Runner Motion X được thiết kế cho người chạy bộ cần một đôi giày đa dụng để sử dụng trong các buổi easy run, chạy nền và luyện tập hằng tuần. Phần upper ưu tiên độ thoáng khí, trong khi lớp đệm giữa hỗ trợ hấp thụ lực và tạo cảm giác êm khi tiếp đất. Đế ngoài có các vùng cao su tăng độ bám trên bề mặt đường khô và sân tập phổ biến. Đây là lựa chọn phù hợp cho người mới bắt đầu chạy bộ hoặc người tập trung cấp cần một đôi daily trainer dễ sử dụng.","highlights":["Thiết kế nhẹ cho chạy bộ hằng ngày.","Đệm giữa hỗ trợ hấp thụ lực.","Upper thoáng khí.","Đế ngoài có vùng cao su tăng độ bám.","Phù hợp easy run và chạy nền."],"suitableFor":["Người mới chạy bộ.","Easy run.","Base running.","Chạy đường bằng.","Luyện tập hằng tuần."],"specifications":{"type":"Daily running shoe","upper":"Breathable mesh","midsole":"Cushioned foam","outsole":"Rubber traction zones","sizes":"39 / 40 / 41 / 42 / 43"},"usageGuide":["Chọn size có khoảng trống hợp lý ở đầu ngón chân.","Mang với tất chạy bộ phù hợp.","Tăng quãng đường chạy từ từ nếu mới bắt đầu.","Không tiếp tục sử dụng nếu đế bị hư hỏng nghiêm trọng."],"careGuide":["Làm sạch bụi bẩn sau khi chạy.","Để giày khô tự nhiên.","Không phơi trực tiếp dưới nhiệt độ quá cao.","Không bảo quản giày còn ẩm trong túi kín."],"tags":["running","giày chạy bộ","road running","daily trainer","giày thể thao","easy run"],"seoTitle":"Giày Road Runner Motion X chạy bộ hằng ngày | SPORTHUB","metaDescription":"Giày Road Runner Motion X thiết kế nhẹ, đệm đàn hồi và đế bám ổn định, phù hợp người mới và các buổi chạy bộ hằng ngày."},

    {"id":26,"code":"P26","name":"Đai chạy bộ Running Belt Flex","slug":"dai-chay-bo-running-belt-flex","sport":"running","sportName":"Chạy bộ","category":"Phụ kiện chạy bộ","type":"accessories","brand":"SPORTHUB","price":279000,"oldPrice":339000,"rating":4.7,"reviews":66,"stock":48,"badge":"Running","sizes":["Free Size"],"audience":["Nam","Nữ"],"level":["Beginner","Intermediate","Advanced"],"image":"images/products/p26-running-belt-flex.webp","imageAlt":"Đai chạy bộ Running Belt Flex đựng điện thoại và vật dụng nhỏ","shortDescription":"Đai chạy bộ ôm sát cơ thể, phù hợp mang điện thoại, chìa khóa và các vật dụng nhỏ khi chạy.","description":"Running Belt Flex là phụ kiện dành cho người chạy cần mang theo điện thoại, chìa khóa hoặc các vật dụng nhỏ mà không muốn sử dụng balo. Thiết kế ôm gần cơ thể giúp hạn chế rung lắc khi di chuyển, trong khi phần dây điều chỉnh cho phép phù hợp với nhiều vòng eo khác nhau. Ngăn chính sử dụng khóa kéo giúp giữ vật dụng ổn định trong các buổi chạy ngắn, chạy nền hoặc hoạt động ngoài trời.","highlights":["Thiết kế gọn nhẹ.","Ôm sát cơ thể khi chạy.","Ngăn khóa kéo.","Dây đai điều chỉnh.","Phù hợp mang điện thoại và vật dụng nhỏ."],"suitableFor":["Chạy bộ hằng ngày.","Đi bộ nhanh.","Outdoor cardio.","Race training.","Hoạt động ngoài trời."],"specifications":{"fit":"Adjustable waist belt","storage":"Zipper pocket","size":"Free Size","use":"Running / Outdoor"},"usageGuide":["Điều chỉnh dây vừa vòng eo.","Không để vật dụng quá nặng trong đai.","Đóng khóa kéo trước khi chạy.","Đặt đai ở vị trí hạn chế rung lắc."],"careGuide":["Lau hoặc giặt nhẹ sau khi ra nhiều mồ hôi.","Để khô hoàn toàn trước khi cất.","Kiểm tra khóa kéo định kỳ."],"tags":["running","running belt","đai chạy bộ","phụ kiện chạy bộ","running accessories"],"seoTitle":"Đai chạy bộ Running Belt Flex gọn nhẹ | SPORTHUB","metaDescription":"Đai chạy bộ Running Belt Flex ôm sát cơ thể, có ngăn khóa kéo để điện thoại, chìa khóa và vật dụng nhỏ khi chạy."},

    {"id":27,"code":"P27","name":"Bình nước Running Soft Flask","slug":"binh-nuoc-running-soft-flask","sport":"running","sportName":"Chạy bộ","category":"Hydration","type":"accessories","brand":"SPORTHUB","price":249000,"oldPrice":299000,"rating":4.7,"reviews":49,"stock":52,"badge":"Hydration","sizes":["500ML"],"audience":["Nam","Nữ"],"level":["Beginner","Intermediate","Advanced"],"image":"images/products/p27-binh-nuoc-running.webp","imageAlt":"Bình nước Running Soft Flask 500ml dành cho chạy bộ","shortDescription":"Soft Flask dung tích 500ml, thiết kế mềm và gọn nhẹ để mang theo trong các buổi chạy bộ.","description":"Running Soft Flask được thiết kế cho người chạy cần mang theo nước nhưng muốn giảm trọng lượng và kích thước dụng cụ. Thân bình mềm có thể thu nhỏ dần khi lượng nước giảm, giúp hạn chế không gian chiếm dụng trong running vest hoặc đai đựng nước. Dung tích 500ml phù hợp cho nhiều buổi chạy ngắn đến trung bình, tùy điều kiện thời tiết và nhu cầu cá nhân.","highlights":["Dung tích 500ml.","Thân bình mềm.","Gọn dần khi lượng nước giảm.","Trọng lượng nhẹ.","Phù hợp chạy bộ và outdoor."],"suitableFor":["Running.","Outdoor training.","Walking.","Hiking nhẹ.","Cardio ngoài trời."],"specifications":{"capacity":"500 ml","type":"Soft flask","material":"Flexible bottle material","use":"Running / Outdoor"},"usageGuide":["Rửa sạch trước lần sử dụng đầu tiên.","Đổ lượng nước phù hợp với thời lượng buổi chạy.","Đóng nắp chắc trước khi cho vào đai hoặc vest.","Không sử dụng với chất lỏng không phù hợp với vật liệu bình."],"careGuide":["Rửa sạch sau mỗi lần sử dụng.","Để bình mở nắp cho khô hoàn toàn.","Không cất khi còn nước bên trong.","Tránh nguồn nhiệt cao."],"tags":["running","soft flask","bình nước chạy bộ","hydration","running hydration"],"seoTitle":"Bình nước Running Soft Flask 500ml | SPORTHUB","metaDescription":"Bình nước Running Soft Flask 500ml thiết kế mềm, nhẹ và gọn, phù hợp mang theo khi chạy bộ và hoạt động ngoài trời."},

    {"id":28,"code":"P28","name":"Tất chạy bộ Performance Socks","slug":"tat-chay-bo-performance-socks","sport":"running","sportName":"Chạy bộ","category":"Trang phục chạy bộ","type":"clothes","brand":"SPORTHUB","price":159000,"oldPrice":199000,"rating":4.7,"reviews":91,"stock":77,"badge":"Comfort","sizes":["M","L"],"audience":["Nam","Nữ"],"level":["Beginner","Intermediate","Advanced"],"image":"images/products/p28-tat-chay-bo.webp","imageAlt":"Tất chạy bộ Performance Socks thoáng khí dành cho luyện tập","shortDescription":"Tất chạy bộ thiết kế ôm bàn chân, thoáng khí và gia cố vùng gót cùng mũi chân cho các buổi chạy thường xuyên.","description":"Performance Socks được thiết kế cho người chạy bộ cần một đôi tất có độ ôm ổn định và khả năng thoát ẩm tốt hơn so với tất sinh hoạt thông thường. Vùng gót và mũi chân được gia cố nhằm tăng độ bền ở các vị trí thường chịu ma sát, trong khi cấu trúc vải thoáng giúp hạn chế cảm giác bí khi vận động. Sản phẩm phù hợp cho chạy bộ hằng ngày, gym và nhiều hoạt động thể thao khác.","highlights":["Thiết kế dành cho chạy bộ.","Chất liệu thoáng khí.","Gia cố vùng gót.","Gia cố vùng mũi chân.","Form ôm bàn chân."],"suitableFor":["Running.","Gym.","Walking.","Cardio.","Hoạt động thể thao hằng ngày."],"specifications":{"type":"Performance running socks","fit":"Athletic fit","reinforcedZones":"Heel + Toe","sizes":"M / L"},"usageGuide":["Chọn size phù hợp với bàn chân.","Mang cùng giày có kích thước phù hợp.","Thay tất sau buổi tập nếu bị ướt nhiều."],"careGuide":["Giặt sau khi sử dụng.","Không để tất ẩm lâu trong giày hoặc túi tập.","Phơi ở nơi thông thoáng.","Hạn chế nhiệt độ sấy quá cao."],"tags":["running","tất chạy bộ","running socks","performance socks","running clothing"],"seoTitle":"Tất chạy bộ Performance Socks thoáng khí | SPORTHUB","metaDescription":"Tất chạy bộ Performance Socks có thiết kế ôm chân, thoáng khí và gia cố vùng gót, mũi chân cho các buổi chạy thường xuyên."},

    {"id":29,"code":"P29","name":"Kính bơi AquaVision Anti-Fog","slug":"kinh-boi-aquavision-anti-fog","sport":"swimming","sportName":"Bơi lội","category":"Kính bơi","type":"equipment","brand":"SPORTHUB","price":389000,"oldPrice":459000,"rating":4.8,"reviews":87,"stock":42,"badge":"Aqua","sizes":["Free Size"],"audience":["Nam","Nữ"],"level":["Beginner","Intermediate","Advanced"],"image":"images/products/p29-kinh-boi-aquavision.webp","imageAlt":"Kính bơi AquaVision Anti-Fog dành cho luyện tập bơi lội","shortDescription":"Kính bơi có thiết kế ôm vùng mắt, lớp phủ hỗ trợ hạn chế sương mờ và dây đeo điều chỉnh phù hợp tập luyện trong hồ.","description":"Kính bơi AquaVision Anti-Fog được thiết kế cho các buổi luyện bơi thường xuyên trong hồ. Tròng kính có lớp phủ hỗ trợ hạn chế hiện tượng sương mờ trong điều kiện sử dụng phù hợp, giúp người bơi duy trì tầm nhìn tốt hơn trong quá trình tập. Phần đệm quanh mắt mềm và dây đeo có thể điều chỉnh giúp kính ôm ổn định hơn trên khuôn mặt. Sản phẩm phù hợp cho người mới học bơi, người tập kỹ thuật và người duy trì lịch bơi định kỳ.","highlights":["Lớp phủ hỗ trợ hạn chế sương mờ.","Đệm mắt mềm.","Dây đeo điều chỉnh.","Form ôm ổn định.","Phù hợp luyện tập trong hồ."],"suitableFor":["Người mới học bơi.","Bơi kỹ thuật.","Bơi fitness.","Luyện tập trong hồ.","Swim training."],"specifications":{"type":"Training swimming goggles","lens":"Anti-fog coated lens","seal":"Soft eye seal","strap":"Adjustable strap","size":"Free Size"},"usageGuide":["Điều chỉnh dây vừa đủ để kính ôm vùng mắt.","Không siết quá chặt gây khó chịu.","Làm ướt kính nhẹ trước khi xuống hồ.","Hạn chế chạm tay vào mặt trong tròng kính."],"careGuide":["Rửa bằng nước sạch sau khi bơi.","Để kính khô tự nhiên.","Không lau mạnh mặt trong tròng kính.","Bảo quản trong hộp khi không sử dụng."],"tags":["swimming","kính bơi","swimming goggles","anti fog","bơi lội","swim training"],"seoTitle":"Kính bơi AquaVision Anti-Fog tập luyện | SPORTHUB","metaDescription":"Kính bơi AquaVision Anti-Fog có đệm mắt mềm, dây điều chỉnh và lớp phủ hỗ trợ hạn chế sương mờ cho các buổi luyện bơi."},

    {"id":30,"code":"P30","name":"Mũ bơi Silicone AquaFit","slug":"mu-boi-silicone-aquafit","sport":"swimming","sportName":"Bơi lội","category":"Mũ bơi","type":"accessories","brand":"SPORTHUB","price":149000,"oldPrice":189000,"rating":4.7,"reviews":64,"stock":71,"badge":"Aqua","sizes":["Free Size"],"audience":["Nam","Nữ"],"level":["Beginner","Intermediate","Advanced"],"image":"images/products/p30-mu-boi-silicone.webp","imageAlt":"Mũ bơi Silicone AquaFit dùng cho tập luyện bơi lội","shortDescription":"Mũ bơi silicone đàn hồi, ôm đầu và phù hợp sử dụng trong các buổi tập bơi thường xuyên.","description":"Mũ bơi Silicone AquaFit được thiết kế để tạo bề mặt gọn gàng quanh đầu và tóc trong quá trình luyện tập dưới nước. Chất liệu silicone có độ đàn hồi giúp mũ ôm đầu mà vẫn duy trì sự linh hoạt khi đội và tháo. Sản phẩm phù hợp cho người mới học bơi, người tập fitness swimming hoặc duy trì lịch bơi thường xuyên trong hồ.","highlights":["Chất liệu silicone đàn hồi.","Form ôm đầu.","Thiết kế gọn khi bơi.","Dễ mang theo.","Phù hợp luyện tập thường xuyên."],"suitableFor":["Người mới học bơi.","Bơi fitness.","Swim training.","Luyện kỹ thuật.","Bơi trong hồ."],"specifications":{"material":"Silicone","fit":"Stretch fit","size":"Free Size","use":"Swimming training"},"usageGuide":["Làm ướt tóc nhẹ trước khi đội nếu cần.","Kéo mũ từ trước ra sau thay vì giật mạnh.","Không dùng vật sắc khi đội hoặc tháo mũ."],"careGuide":["Rửa lại bằng nước sạch sau khi bơi.","Để khô tự nhiên.","Không để gần nguồn nhiệt cao.","Bảo quản tránh vật sắc."],"tags":["swimming","mũ bơi","swim cap","silicone swim cap","bơi lội"],"seoTitle":"Mũ bơi Silicone AquaFit đàn hồi | SPORTHUB","metaDescription":"Mũ bơi Silicone AquaFit có độ đàn hồi tốt, form ôm đầu và phù hợp các buổi luyện bơi thường xuyên trong hồ."},

    {"id":31,"code":"P31","name":"Chân vịt Swim Training Fin","slug":"chan-vit-swim-training-fin","sport":"swimming","sportName":"Bơi lội","category":"Dụng cụ tập bơi","type":"equipment","brand":"SPORTHUB","price":549000,"oldPrice":649000,"rating":4.8,"reviews":43,"stock":29,"badge":"Training","sizes":["S","M","L"],"audience":["Nam","Nữ"],"level":["Beginner","Intermediate"],"image":"images/products/p31-chan-vit-boi.webp","imageAlt":"Chân vịt Swim Training Fin hỗ trợ luyện kỹ thuật bơi","shortDescription":"Chân vịt tập bơi hỗ trợ các bài kick drill, cảm nhận nước và phát triển kỹ thuật chân trong bơi lội.","description":"Swim Training Fin là chân vịt dành cho các bài tập kỹ thuật trong hồ. Phần lưỡi chân vịt có kích thước vừa phải giúp người bơi tăng lực đẩy mà vẫn duy trì nhịp chân tự nhiên. Sản phẩm có thể được sử dụng trong các bài kick drill, streamline, body position và một số bài luyện tốc độ ngắn. Người mới nên bắt đầu với thời lượng ngắn để làm quen với tải bổ sung lên cổ chân và bắp chân.","highlights":["Hỗ trợ luyện kick.","Tăng cảm nhận lực đẩy trong nước.","Phù hợp drill kỹ thuật.","Có nhiều size.","Thiết kế cho swim training."],"suitableFor":["Kick drill.","Technique training.","Body position drill.","Swim fitness.","Người mới đến trung cấp."],"specifications":{"type":"Training fins","blade":"Short-medium training blade","sizes":"S / M / L","use":"Swimming drills"},"usageGuide":["Chọn size vừa chân, không quá chật.","Bắt đầu với các đoạn bơi ngắn.","Không tăng thời lượng quá nhanh nếu chưa quen.","Dừng sử dụng nếu xuất hiện đau cổ chân bất thường."],"careGuide":["Rửa bằng nước sạch sau khi sử dụng.","Để khô tự nhiên.","Không phơi lâu dưới nắng gắt.","Tránh gập lưỡi chân vịt khi bảo quản."],"tags":["swimming","chân vịt bơi","swim fins","training fins","kick drill","bơi lội"],"seoTitle":"Chân vịt Swim Training Fin tập kỹ thuật bơi | SPORTHUB","metaDescription":"Chân vịt Swim Training Fin hỗ trợ kick drill, cảm nhận nước và luyện kỹ thuật chân cho người mới và người tập bơi."},

    {"id":32,"code":"P32","name":"Phao tập bơi Pull Buoy Pro","slug":"phao-tap-boi-pull-buoy-pro","sport":"swimming","sportName":"Bơi lội","category":"Dụng cụ tập bơi","type":"equipment","brand":"SPORTHUB","price":279000,"oldPrice":329000,"rating":4.7,"reviews":39,"stock":36,"badge":"Training","sizes":["Standard"],"audience":["Nam","Nữ"],"level":["Beginner","Intermediate"],"image":"images/products/p32-phao-tap-boi.webp","imageAlt":"Phao tập bơi Pull Buoy Pro hỗ trợ luyện thân trên","shortDescription":"Pull Buoy hỗ trợ giữ phần thân dưới nổi hơn để người bơi tập trung vào kỹ thuật tay, vị trí cơ thể và nhịp thở.","description":"Pull Buoy Pro là dụng cụ hỗ trợ luyện bơi được đặt giữa hai chân nhằm giảm sự tham gia của động tác đạp chân trong một số bài drill. Điều này giúp người bơi tập trung hơn vào kỹ thuật kéo tay, vị trí thân người và kiểm soát nhịp thở. Pull buoy thường được sử dụng trong các buổi luyện freestyle và nhiều bài kỹ thuật thân trên. Người mới nên sử dụng dưới sự hướng dẫn phù hợp để tránh phụ thuộc quá mức vào dụng cụ.","highlights":["Hỗ trợ nâng phần thân dưới.","Tập trung vào kỹ thuật tay.","Phù hợp pull drill.","Nhẹ và dễ mang theo.","Hỗ trợ luyện body position."],"suitableFor":["Pull drill.","Freestyle training.","Upper-body swimming drill.","Technique training.","Swim fitness."],"specifications":{"type":"Pull buoy","size":"Standard","material":"Lightweight buoyant foam","use":"Swimming technique drills"},"usageGuide":["Đặt pull buoy giữa hai đùi hoặc vị trí phù hợp với bài drill.","Giữ thân người ổn định.","Không kẹp quá chặt gây căng chân không cần thiết.","Kết hợp xen kẽ các đoạn bơi không dùng dụng cụ."],"careGuide":["Rửa bằng nước sạch sau khi bơi.","Để khô tự nhiên.","Không để dưới vật nặng.","Tránh nhiệt độ cao kéo dài."],"tags":["swimming","pull buoy","phao tập bơi","swimming drill","freestyle","bơi lội"],"seoTitle":"Phao tập bơi Pull Buoy Pro luyện kỹ thuật | SPORTHUB","metaDescription":"Phao tập bơi Pull Buoy Pro hỗ trợ luyện kỹ thuật tay, body position và pull drill trong các buổi tập bơi."},

    {"id":33,"code":"P33","name":"Bóng đá Match Training Pro","slug":"bong-da-match-training-pro","sport":"football","sportName":"Bóng đá","category":"Bóng đá","type":"equipment","brand":"SPORTHUB","price":499000,"oldPrice":599000,"rating":4.8,"reviews":73,"stock":31,"badge":"Match","sizes":["Size 5"],"audience":["Nam","Nữ"],"level":["Beginner","Intermediate","Advanced"],"image":"images/products/p33-bong-da-training-pro.webp","imageAlt":"Bóng đá Match Training Pro size 5 dành cho tập luyện và thi đấu phong trào","shortDescription":"Bóng đá size 5 dành cho tập luyện và thi đấu phong trào, thiết kế hướng tới độ ổn định khi chuyền, sút và kiểm soát bóng.","description":"Bóng đá Match Training Pro được thiết kế cho các buổi tập kỹ thuật, thi đấu phong trào và hoạt động bóng đá thường xuyên. Kích thước size 5 phù hợp với đa số người chơi trưởng thành. Bề mặt bóng có cấu trúc giúp tăng khả năng kiểm soát khi chuyền, rê bóng và sút, trong khi lớp vỏ ngoài được thiết kế để chịu được tần suất sử dụng lặp lại trên sân tập phổ biến. Sản phẩm phù hợp cho người mới, đội bóng phong trào và các buổi luyện kỹ thuật cơ bản.","highlights":["Kích thước chuẩn size 5.","Phù hợp tập luyện và thi đấu phong trào.","Bề mặt hỗ trợ kiểm soát bóng.","Thiết kế phục vụ chuyền, rê và sút.","Phù hợp nhiều trình độ."],"suitableFor":["Luyện kỹ thuật bóng đá.","Đá giao hữu.","Đội bóng phong trào.","Passing drill.","Shooting practice."],"specifications":{"size":"Size 5","type":"Training / Match ball","use":"Football training","surfaceUse":"Sân tập phổ biến"},"usageGuide":["Bơm bóng đúng mức áp suất khuyến nghị.","Kiểm tra van bóng trước khi sử dụng.","Không bơm quá căng.","Phù hợp tập chuyền, sút và kiểm soát bóng."],"careGuide":["Lau sạch sau khi sử dụng.","Không để bóng dưới nắng gắt trong thời gian dài.","Không bảo quản gần vật sắc.","Kiểm tra áp suất định kỳ."],"tags":["football","soccer","bóng đá","football ball","training ball","match ball"],"seoTitle":"Bóng đá Match Training Pro Size 5 | SPORTHUB","metaDescription":"Bóng đá Match Training Pro size 5 phù hợp tập luyện, chuyền bóng, sút và thi đấu phong trào cho nhiều trình độ."},

    {"id":34,"code":"P34","name":"Giày bóng đá Speed Control","slug":"giay-bong-da-speed-control","sport":"football","sportName":"Bóng đá","category":"Giày bóng đá","type":"shoes","brand":"SPORTHUB","price":1190000,"oldPrice":1390000,"rating":4.8,"reviews":81,"stock":22,"badge":"Speed","sizes":["39","40","41","42","43"],"audience":["Nam","Nữ"],"level":["Beginner","Intermediate"],"image":"images/products/p34-giay-bong-da.webp","imageAlt":"Giày bóng đá Speed Control hỗ trợ di chuyển và kiểm soát bóng","shortDescription":"Giày bóng đá thiết kế gọn nhẹ, upper ôm chân và outsole hỗ trợ bám sân trong các buổi tập và thi đấu phong trào.","description":"Giày bóng đá Speed Control hướng đến người chơi cần một đôi giày cân bằng giữa độ ôm chân, khả năng kiểm soát bóng và sự linh hoạt khi di chuyển. Phần upper được thiết kế gọn để tạo cảm giác tiếp xúc bóng trực tiếp hơn, trong khi outsole sử dụng hệ thống đinh phù hợp với các bề mặt sân phổ biến. Sản phẩm phù hợp cho người mới và người chơi phong trào đang tập trung vào kỹ thuật di chuyển, chuyền bóng và kiểm soát trong các buổi tập thường xuyên.","highlights":["Thiết kế nhẹ.","Upper ôm bàn chân.","Hỗ trợ cảm giác bóng.","Outsole tăng độ bám.","Phù hợp luyện tập và thi đấu phong trào."],"suitableFor":["Football training.","Thi đấu phong trào.","Passing drill.","Dribbling.","Shooting practice."],"specifications":{"type":"Football training shoe","upper":"Synthetic performance upper","outsole":"Studded football outsole","sizes":"39 / 40 / 41 / 42 / 43"},"usageGuide":["Chọn size vừa bàn chân.","Sử dụng trên bề mặt sân phù hợp với loại đinh.","Thắt dây chắc trước khi tập.","Không sử dụng outsole bị hỏng nghiêm trọng."],"careGuide":["Làm sạch đất và bụi sau buổi tập.","Để giày khô tự nhiên.","Không dùng nhiệt cao để làm khô.","Không cất giày còn ẩm trong túi kín."],"tags":["football","giày bóng đá","soccer shoes","football boots","speed control","football training"],"seoTitle":"Giày bóng đá Speed Control tập luyện | SPORTHUB","metaDescription":"Giày bóng đá Speed Control thiết kế nhẹ, upper ôm chân và outsole hỗ trợ độ bám cho tập luyện và thi đấu phong trào."},

    {"id":35,"code":"P35","name":"Bảo vệ ống đồng Football Guard","slug":"bao-ve-ong-dong-football-guard","sport":"football","sportName":"Bóng đá","category":"Bảo hộ bóng đá","type":"accessories","brand":"SPORTHUB","price":249000,"oldPrice":299000,"rating":4.7,"reviews":54,"stock":49,"badge":"Protection","sizes":["M","L"],"audience":["Nam","Nữ"],"level":["Beginner","Intermediate","Advanced"],"image":"images/products/p35-bao-ve-ong-dong-bong-da.webp","imageAlt":"Bảo vệ ống đồng Football Guard dành cho tập luyện bóng đá","shortDescription":"Shin guard bóng đá gọn nhẹ, có lớp vỏ bảo vệ và đệm bên trong hỗ trợ giảm tác động lên vùng cẳng chân.","description":"Football Guard là bảo vệ ống đồng dành cho người chơi bóng đá trong các buổi tập và thi đấu phong trào. Lớp vỏ ngoài tạo thêm lớp chắn trước các va chạm trực tiếp, trong khi lớp đệm bên trong hỗ trợ tăng sự thoải mái khi sử dụng. Thiết kế gọn giúp sản phẩm nằm bên dưới tất bóng đá mà không gây cản trở đáng kể khi chạy, chuyển hướng hoặc kiểm soát bóng.","highlights":["Vỏ bảo vệ vùng ống đồng.","Có lớp đệm phía trong.","Thiết kế gọn nhẹ.","Dễ sử dụng bên dưới tất bóng đá.","Phù hợp tập luyện và thi đấu."],"suitableFor":["Football training.","Thi đấu phong trào.","Technical drills.","Small-sided games.","Match play."],"specifications":{"type":"Football shin guard","protection":"Shin coverage","lining":"Inner comfort padding","sizes":"M / L"},"usageGuide":["Chọn size phù hợp chiều dài cẳng chân.","Đặt shin guard đúng vị trí phía trước ống đồng.","Cố định bằng tất hoặc hệ thống giữ phù hợp.","Không sử dụng nếu phần vỏ bị nứt hoặc hư hỏng."],"careGuide":["Lau sạch sau buổi tập.","Để khô ở nơi thông thoáng.","Không để ẩm lâu trong túi.","Kiểm tra lớp vỏ và đệm định kỳ."],"tags":["football","shin guard","bảo vệ ống đồng bóng đá","soccer protection","football accessories"],"seoTitle":"Bảo vệ ống đồng Football Guard | SPORTHUB","metaDescription":"Bảo vệ ống đồng Football Guard thiết kế gọn nhẹ với lớp vỏ và đệm trong, phù hợp tập luyện và thi đấu bóng đá phong trào."},

    {"id":36,"code":"P36","name":"Bóng rổ Street Court Pro","slug":"bong-ro-street-court-pro","sport":"basketball","sportName":"Bóng rổ","category":"Bóng rổ","type":"equipment","brand":"SPORTHUB","price":599000,"oldPrice":699000,"rating":4.8,"reviews":61,"stock":32,"badge":"Court","sizes":["Size 7"],"audience":["Nam","Nữ"],"level":["Beginner","Intermediate","Advanced"],"image":"images/products/p36-bong-ro-street-court.webp","imageAlt":"Bóng rổ Street Court Pro size 7 dành cho tập luyện","shortDescription":"Bóng rổ size 7 với bề mặt tăng độ bám, phù hợp luyện dribble, passing, shooting và thi đấu phong trào.","description":"Bóng rổ Street Court Pro được thiết kế cho các buổi tập bóng rổ thường xuyên trên sân trong nhà hoặc ngoài trời phù hợp. Bề mặt bóng có kết cấu hỗ trợ độ bám tay khi dribble, chuyền và thực hiện các tình huống kiểm soát bóng. Các rãnh trên bề mặt giúp người chơi định vị tay tốt hơn trong quá trình shooting và passing. Kích thước size 7 phù hợp với nhiều người chơi trưởng thành và các buổi tập bóng rổ phong trào.","highlights":["Kích thước size 7.","Bề mặt hỗ trợ tăng độ bám.","Rãnh bóng rõ giúp kiểm soát tốt hơn.","Phù hợp dribble, passing và shooting.","Dùng được cho tập luyện và thi đấu phong trào."],"suitableFor":["Basketball training.","Dribbling drill.","Passing drill.","Shooting practice.","Thi đấu phong trào."],"specifications":{"size":"Size 7","type":"Training basketball","surface":"Indoor / Outdoor phù hợp","use":"Training / Recreational play"},"usageGuide":["Bơm bóng đúng mức áp suất khuyến nghị.","Kiểm tra độ nảy trước khi tập.","Không bơm quá căng.","Chọn mặt sân phù hợp để hạn chế mài mòn."],"careGuide":["Lau sạch bụi sau khi sử dụng.","Không để bóng dưới nắng gắt lâu.","Không để gần vật sắc.","Kiểm tra áp suất định kỳ."],"tags":["basketball","bóng rổ","basketball ball","street basketball","training basketball","basketball training"],"seoTitle":"Bóng rổ Street Court Pro Size 7 | SPORTHUB","metaDescription":"Bóng rổ Street Court Pro size 7 có bề mặt tăng độ bám, phù hợp luyện dribble, passing, shooting và thi đấu phong trào."},

    {"id":37,"code":"P37","name":"Ống tay Basketball Compression","slug":"ong-tay-basketball-compression","sport":"basketball","sportName":"Bóng rổ","category":"Phụ kiện bóng rổ","type":"accessories","brand":"SPORTHUB","price":199000,"oldPrice":249000,"rating":4.6,"reviews":46,"stock":58,"badge":"Compression","sizes":["M","L"],"audience":["Nam","Nữ"],"level":["Beginner","Intermediate","Advanced"],"image":"images/products/p37-ong-tay-bong-ro.webp","imageAlt":"Ống tay Basketball Compression dành cho tập luyện bóng rổ","shortDescription":"Ống tay compression co giãn, ôm cánh tay và phù hợp cho các buổi tập bóng rổ, gym hoặc hoạt động thể thao.","description":"Basketball Compression Sleeve là phụ kiện thể thao được thiết kế để ôm sát cánh tay trong quá trình tập luyện và thi đấu phong trào. Chất liệu co giãn giúp sản phẩm thích ứng với chuyển động khi chuyền bóng, dẫn bóng và shooting. Bề mặt vải hướng tới khả năng thoát ẩm và cảm giác nhẹ khi sử dụng trong thời gian dài. Sản phẩm có thể sử dụng cho bóng rổ cũng như nhiều hoạt động thể thao khác.","highlights":["Form compression ôm tay.","Chất liệu co giãn.","Hỗ trợ vận động linh hoạt.","Thiết kế thoát ẩm.","Phù hợp nhiều hoạt động thể thao."],"suitableFor":["Basketball.","Gym.","Running.","Cardio.","Hoạt động thể thao."],"specifications":{"type":"Compression arm sleeve","material":"Stretch performance fabric","fit":"Compression fit","sizes":"M / L"},"usageGuide":["Chọn size ôm tay nhưng không gây tê hoặc khó chịu.","Kéo ống tay đều từ cổ tay lên cánh tay.","Không cuộn phần mép quá chặt trong khi sử dụng."],"careGuide":["Giặt sau khi ra nhiều mồ hôi.","Ưu tiên giặt nhẹ.","Không để sản phẩm ẩm lâu trong túi.","Phơi ở nơi thông thoáng."],"tags":["basketball","ống tay bóng rổ","basketball sleeve","compression sleeve","basketball accessories"],"seoTitle":"Ống tay Basketball Compression co giãn | SPORTHUB","metaDescription":"Ống tay Basketball Compression thiết kế ôm, co giãn và thoát ẩm, phù hợp tập bóng rổ và nhiều hoạt động thể thao."},

    {"id":38,"code":"P38","name":"Vợt cầu lông AeroStrike","slug":"vot-cau-long-aerostrike","sport":"badminton","sportName":"Cầu lông","category":"Vợt cầu lông","type":"equipment","brand":"SPORTHUB","price":990000,"oldPrice":1190000,"rating":4.8,"reviews":67,"stock":20,"badge":"Aero","sizes":["4U"],"audience":["Nam","Nữ"],"level":["Beginner","Intermediate"],"image":"images/products/p38-vot-cau-long-aerostrike.webp","imageAlt":"Vợt cầu lông AeroStrike 4U dành cho người mới và người chơi phong trào","shortDescription":"Vợt cầu lông trọng lượng 4U với thiết kế cân bằng, hỗ trợ xoay trở nhanh và phù hợp người mới đến người chơi phong trào.","description":"Vợt cầu lông AeroStrike được thiết kế theo hướng cân bằng giữa khả năng kiểm soát, tốc độ vung vợt và sự linh hoạt trong nhiều tình huống thi đấu. Trọng lượng 4U giúp vợt tương đối nhẹ, phù hợp với người mới làm quen kỹ thuật cũng như người chơi phong trào muốn duy trì tốc độ xử lý cầu trong các pha phản tạt và phòng thủ. Khung vợt có thiết kế khí động học nhằm hỗ trợ giảm lực cản khi vung, trong khi cán vợt cho cảm giác cầm ổn định khi thực hiện clear, drop, drive và smash ở cường độ vừa phải. AeroStrike phù hợp cho người chơi đang tìm một cây vợt đa dụng thay vì một mẫu quá thiên công hoặc quá thiên thủ.","highlights":["Trọng lượng 4U phù hợp nhiều người chơi.","Thiết kế cân bằng giữa công và thủ.","Khung vợt hỗ trợ xoay trở nhanh.","Phù hợp clear, drop, drive và smash.","Dễ làm quen với người mới.","Phù hợp tập luyện và thi đấu phong trào."],"suitableFor":["Người mới chơi cầu lông.","Người chơi phong trào.","Lối chơi công thủ cân bằng.","Tập kỹ thuật cơ bản.","Đánh đơn và đánh đôi phong trào."],"specifications":{"weightClass":"4U","balance":"Even Balance","racketType":"All-round badminton racket","frame":"Lightweight performance frame","grip":"Standard badminton grip","use":"Training / Recreational Match"},"usageGuide":["Kiểm tra dây vợt trước khi sử dụng.","Lựa chọn mức căng dây phù hợp với trình độ và khả năng kiểm soát.","Người mới không nên căng dây quá cao.","Giữ cán vợt vừa đủ chắc, tránh siết tay liên tục.","Sử dụng kỹ thuật đúng khi smash để hạn chế tải không cần thiết lên cổ tay và vai."],"careGuide":["Bảo quản vợt trong bao khi không sử dụng.","Tránh để vợt dưới nhiệt độ cao trong thời gian dài.","Không va khung vợt mạnh xuống mặt sân.","Kiểm tra dây khi xuất hiện dấu hiệu sờn.","Thay grip khi bề mặt mất độ bám."],"tags":["cầu lông","badminton","vợt cầu lông","badminton racket","vợt cầu lông 4u","vợt cầu lông cho người mới","vợt cầu lông phong trào","aerostrike"],"seoTitle":"Vợt cầu lông AeroStrike 4U cho người mới | SPORTHUB","metaDescription":"Vợt cầu lông AeroStrike trọng lượng 4U, thiết kế cân bằng và dễ xoay trở, phù hợp người mới và người chơi cầu lông phong trào."},

    {"id":39,"code":"P39","name":"Cầu lông Feather Pro Pack","slug":"cau-long-feather-pro-pack","sport":"badminton","sportName":"Cầu lông","category":"Cầu lông","type":"accessories","brand":"SPORTHUB","price":299000,"oldPrice":349000,"rating":4.7,"reviews":55,"stock":44,"badge":"Training","sizes":["12 quả"],"audience":["Nam","Nữ"],"level":["Beginner","Intermediate","Advanced"],"image":"images/products/p39-cau-long-feather.webp","imageAlt":"Ống cầu lông Feather Pro Pack 12 quả dành cho tập luyện cầu lông","shortDescription":"Ống cầu lông 12 quả với quỹ đạo ổn định, phù hợp tập kỹ thuật, đánh cầu thường xuyên và thi đấu phong trào.","description":"Feather Pro Pack là bộ cầu lông dành cho các buổi tập kỹ thuật và thi đấu phong trào. Thiết kế phần lông và đế cầu hướng tới khả năng duy trì quỹ đạo tương đối ổn định trong các tình huống phát cầu, clear, drop, drive và smash. Mỗi ống gồm 12 quả giúp người chơi có đủ số lượng cho các buổi luyện tập lặp lại hoặc tập cùng nhóm. Sản phẩm phù hợp cho người mới, câu lạc bộ phong trào và người chơi trung cấp cần một loại cầu phục vụ luyện kỹ thuật thường xuyên.","highlights":["Ống gồm 12 quả cầu.","Quỹ đạo bay ổn định.","Phù hợp tập kỹ thuật.","Sử dụng cho đánh đơn hoặc đánh đôi.","Phù hợp câu lạc bộ và người chơi phong trào."],"suitableFor":["Tập phát cầu.","Clear và drop drill.","Drive và phản tạt.","Smash training.","Thi đấu phong trào.","Tập luyện tại câu lạc bộ."],"specifications":{"quantity":"12 quả / ống","type":"Feather shuttlecock","use":"Training / Recreational Match","sport":"Badminton"},"usageGuide":["Kiểm tra phần lông trước khi sử dụng.","Thay cầu khi lông bị gãy nhiều hoặc quỹ đạo không còn ổn định.","Sử dụng đúng loại cầu cho môi trường tập luyện phù hợp.","Không cố sử dụng cầu đã biến dạng nghiêm trọng."],"careGuide":["Bảo quản cầu trong ống khi không sử dụng.","Tránh nơi quá nóng hoặc quá khô.","Không đè vật nặng lên ống cầu.","Giữ cầu tránh tiếp xúc trực tiếp với nước."],"tags":["cầu lông","badminton","quả cầu lông","shuttlecock","feather shuttlecock","cầu lông tập luyện","cầu lông phong trào","badminton training"],"seoTitle":"Cầu lông Feather Pro Pack 12 quả tập luyện | SPORTHUB","metaDescription":"Cầu lông Feather Pro Pack gồm 12 quả, quỹ đạo ổn định, phù hợp luyện kỹ thuật và thi đấu cầu lông phong trào."},

    {"id":40,"code":"P40","name":"Quấn cán vợt Grip Control","slug":"quan-can-vot-grip-control","sport":"badminton","sportName":"Cầu lông","category":"Phụ kiện vợt","type":"accessories","brand":"SPORTHUB","price":99000,"oldPrice":129000,"rating":4.7,"reviews":92,"stock":96,"badge":"Grip","sizes":["3 cuộn"],"audience":["Nam","Nữ"],"level":["Beginner","Intermediate","Advanced"],"image":"images/products/p40-quan-can-vot-cau-long.webp","imageAlt":"Quấn cán vợt Grip Control hỗ trợ tăng độ bám khi chơi cầu lông","shortDescription":"Grip quấn cán vợt có bề mặt mềm và hỗ trợ tăng độ bám tay, phù hợp cầu lông và nhiều môn thể thao dùng vợt.","description":"Grip Control là bộ quấn cán dành cho người chơi muốn cải thiện cảm giác cầm vợt và hạn chế hiện tượng trượt tay khi vận động. Bề mặt grip có độ mềm và khả năng hút ẩm ở mức phù hợp cho các buổi tập cầu lông thường xuyên. Người chơi có thể điều chỉnh độ dày của cán thông qua cách quấn chồng từng lớp, từ đó tạo cảm giác cầm phù hợp hơn với kích thước bàn tay. Grip Control có thể sử dụng cho vợt cầu lông và một số loại vợt thể thao có cấu trúc cán tương thích.","highlights":["Bộ gồm 3 cuộn grip.","Hỗ trợ tăng độ bám tay.","Bề mặt mềm.","Hỗ trợ kiểm soát mồ hôi lòng bàn tay.","Có thể điều chỉnh độ dày cán khi quấn.","Dễ thay mới khi grip cũ xuống cấp."],"suitableFor":["Vợt cầu lông.","Người ra nhiều mồ hôi tay.","Người muốn tăng độ bám cán vợt.","Người tập và thi đấu phong trào.","Một số loại vợt thể thao tương thích."],"specifications":{"productType":"Racket overgrip","quantity":"3 cuộn","surface":"Soft grip surface","use":"Badminton / Compatible rackets"},"usageGuide":["Tháo lớp grip cũ nếu cần.","Bắt đầu quấn từ cuối cán vợt.","Giữ độ căng vừa phải trong quá trình quấn.","Các vòng grip nên chồng nhẹ lên nhau.","Cố định phần cuối grip bằng băng dán đi kèm hoặc băng phù hợp."],"careGuide":["Thay grip khi bề mặt trở nên trơn.","Không sử dụng grip đã bị rách nhiều.","Giữ cán vợt khô sau buổi tập.","Bảo quản cuộn chưa sử dụng trong bao kín và nơi khô ráo."],"tags":["cầu lông","badminton","quấn cán vợt","grip cầu lông","badminton grip","racket overgrip","phụ kiện cầu lông","grip control"],"seoTitle":"Quấn cán vợt Grip Control tăng độ bám | SPORTHUB","metaDescription":"Quấn cán vợt Grip Control bộ 3 cuộn với bề mặt mềm, hỗ trợ tăng độ bám và kiểm soát cán vợt khi chơi cầu lông."},

    {"id":41,"code":"P41","name":"Vợt Tennis PowerStrike","slug":"vot-tennis-powerstrike","sport":"tennis","sportName":"Tennis","category":"Vợt Tennis","type":"equipment","brand":"SPORTHUB","price":1690000,"oldPrice":1990000,"rating":4.8,"reviews":63,"stock":18,"badge":"Power","sizes":["Grip 2","Grip 3"],"audience":["Nam","Nữ"],"level":["Beginner","Intermediate"],"image":"images/products/p41-vot-tennis-powerstrike.webp","imageAlt":"Vợt Tennis PowerStrike dành cho người mới và người chơi Tennis phong trào","shortDescription":"Vợt Tennis thiết kế cân bằng giữa lực đánh và khả năng kiểm soát, phù hợp người mới đến người chơi phong trào.","description":"Vợt Tennis PowerStrike được phát triển theo hướng đa dụng, phù hợp cho người mới bắt đầu làm quen với Tennis và người chơi phong trào muốn cải thiện kỹ thuật đánh bóng. Thiết kế khung vợt hướng tới sự cân bằng giữa khả năng tạo lực, kiểm soát bóng và độ linh hoạt khi thực hiện các cú forehand, backhand, volley hoặc giao bóng. Trọng lượng tổng thể ở mức dễ tiếp cận giúp người chơi duy trì khả năng xoay trở vợt trong các tình huống phòng thủ và phản công. Mặt vợt có vùng tiếp xúc tương đối rộng, hỗ trợ người mới đạt độ ổn định tốt hơn khi điểm chạm bóng chưa hoàn toàn chính xác. PowerStrike phù hợp cho luyện kỹ thuật cơ bản, rally, đánh đơn và đánh đôi phong trào.","highlights":["Thiết kế cân bằng giữa lực đánh và kiểm soát.","Mặt vợt phù hợp người mới và người chơi phong trào.","Hỗ trợ forehand, backhand, volley và serve.","Khả năng xoay trở linh hoạt.","Có lựa chọn Grip 2 và Grip 3.","Phù hợp tập luyện và thi đấu phong trào."],"suitableFor":["Người mới học Tennis.","Người chơi Tennis phong trào.","Luyện forehand và backhand.","Rally training.","Đánh đơn phong trào.","Đánh đôi phong trào."],"specifications":{"racketType":"All-round tennis racket","balance":"Even balance","headType":"Beginner-friendly head size","gripOptions":"Grip 2 / Grip 3","use":"Training / Recreational Match"},"usageGuide":["Chọn kích thước grip phù hợp với bàn tay.","Kiểm tra dây vợt trước mỗi buổi tập.","Người mới nên sử dụng mức căng dây vừa phải để dễ kiểm soát.","Giữ grip chắc nhưng không siết tay liên tục.","Khởi động cổ tay, khuỷu tay và vai trước khi tập."],"careGuide":["Bảo quản vợt trong bao khi không sử dụng.","Tránh để vợt trong môi trường nhiệt độ quá cao.","Không để khung vợt va đập mạnh xuống mặt sân.","Kiểm tra dây định kỳ.","Thay grip khi bề mặt trở nên trơn hoặc xuống cấp."],"tags":["tennis","vợt tennis","tennis racket","vợt tennis cho người mới","vợt tennis phong trào","powerstrike","tennis training","vợt tennis all round"],"seoTitle":"Vợt Tennis PowerStrike cho người mới tập | SPORTHUB","metaDescription":"Vợt Tennis PowerStrike thiết kế cân bằng giữa lực và kiểm soát, phù hợp người mới, người chơi phong trào và các buổi luyện Tennis thường xuyên."},

    {"id":42,"code":"P42","name":"Bóng Tennis Match Pack","slug":"bong-tennis-match-pack","sport":"tennis","sportName":"Tennis","category":"Bóng Tennis","type":"accessories","brand":"SPORTHUB","price":229000,"oldPrice":279000,"rating":4.7,"reviews":58,"stock":54,"badge":"Match","sizes":["3 quả"],"audience":["Nam","Nữ"],"level":["Beginner","Intermediate","Advanced"],"image":"images/products/p42-bong-tennis.webp","imageAlt":"Bóng Tennis Match Pack 3 quả dành cho tập luyện và thi đấu phong trào","shortDescription":"Bộ 3 bóng Tennis dành cho luyện kỹ thuật, rally, giao bóng và thi đấu phong trào với độ nảy ổn định.","description":"Bóng Tennis Match Pack là bộ bóng dành cho các buổi tập Tennis thường xuyên và thi đấu phong trào. Cấu trúc bóng hướng tới khả năng duy trì độ nảy và quỹ đạo ổn định trong những tình huống cơ bản như groundstroke, rally, volley và serve. Lớp nỉ bên ngoài tạo độ ma sát cần thiết với mặt vợt và mặt sân, giúp người chơi kiểm soát tốc độ và hướng bóng tốt hơn trong quá trình luyện tập. Mỗi hộp gồm 3 quả, phù hợp cho người mới, người chơi trung cấp hoặc các nhóm nhỏ cần bóng để luyện kỹ thuật lặp lại.","highlights":["Bộ gồm 3 quả Tennis.","Độ nảy phù hợp cho luyện tập.","Quỹ đạo bóng ổn định.","Lớp nỉ hỗ trợ cảm giác tiếp xúc bóng.","Phù hợp rally, serve và groundstroke.","Dùng được cho tập luyện và thi đấu phong trào."],"suitableFor":["Tennis training.","Rally practice.","Serve practice.","Groundstroke drill.","Volley training.","Thi đấu phong trào."],"specifications":{"quantity":"3 quả / hộp","type":"Tennis training ball","outerLayer":"Felt surface","use":"Training / Recreational Match","sport":"Tennis"},"usageGuide":["Sử dụng bóng trên mặt sân Tennis phù hợp.","Thay bóng khi độ nảy giảm đáng kể.","Không tiếp tục dùng bóng bị biến dạng.","Khi luyện kỹ thuật nên sử dụng các quả có độ nảy tương đối đồng đều."],"careGuide":["Giữ bóng ở nơi khô ráo.","Không để bóng ngâm nước.","Tránh nhiệt độ quá cao trong thời gian dài.","Bảo quản trong hộp khi chưa sử dụng.","Không đè vật nặng lên bóng."],"tags":["tennis","bóng tennis","tennis ball","tennis training","bóng tennis tập luyện","bóng tennis phong trào","match pack","tennis accessories"],"seoTitle":"Bóng Tennis Match Pack 3 quả tập luyện | SPORTHUB","metaDescription":"Bóng Tennis Match Pack gồm 3 quả với độ nảy và quỹ đạo ổn định, phù hợp luyện rally, serve, kỹ thuật và thi đấu phong trào."},

    {"id":43,"code":"P43","name":"Vợt Pickleball Carbon Control","slug":"vot-pickleball-carbon-control","sport":"pickleball","sportName":"Pickleball","category":"Vợt Pickleball","type":"equipment","brand":"SPORTHUB","price":1490000,"oldPrice":1790000,"rating":4.9,"reviews":76,"stock":21,"badge":"Carbon","sizes":["Standard"],"audience":["Nam","Nữ"],"level":["Beginner","Intermediate"],"image":"images/products/p43-vot-pickleball-carbon.webp","imageAlt":"Vợt Pickleball Carbon Control mặt carbon dành cho người mới và người chơi phong trào","shortDescription":"Vợt Pickleball mặt carbon với thiết kế cân bằng giữa khả năng kiểm soát, cảm giác bóng và lực đánh, phù hợp người mới đến người chơi phong trào.","description":"Vợt Pickleball Carbon Control được thiết kế cho người chơi cần sự cân bằng giữa khả năng kiểm soát bóng, cảm giác tiếp xúc và lực đánh trong các tình huống thi đấu phổ biến. Bề mặt carbon tạo độ cứng và độ ổn định phù hợp khi thực hiện dink, drive, volley và các cú đánh từ cuối sân. Cấu trúc vợt hướng tới vùng sweet spot tương đối rộng, giúp người mới duy trì độ ổn định tốt hơn khi điểm tiếp xúc bóng chưa hoàn toàn chính xác. Trọng lượng được phân bổ theo hướng dễ xoay trở, hỗ trợ phản xạ nhanh ở khu vực kitchen và trong các pha volley tốc độ cao. Carbon Control phù hợp cho người mới chơi Pickleball, người chơi phong trào và người đang phát triển lối đánh thiên về kiểm soát nhưng vẫn muốn duy trì khả năng tạo lực khi cần thiết.","highlights":["Bề mặt carbon hỗ trợ cảm giác tiếp xúc bóng.","Thiết kế cân bằng giữa control và power.","Sweet spot tương đối rộng.","Khả năng xoay trở tốt khi volley.","Phù hợp dink, drive, serve và return.","Dễ làm quen cho người mới và người chơi phong trào."],"suitableFor":["Người mới chơi Pickleball.","Người chơi Pickleball phong trào.","Người ưu tiên khả năng kiểm soát bóng.","Dink và soft game.","Volley gần lưới.","Drive và baseline play."],"specifications":{"paddleType":"All-round Pickleball paddle","faceMaterial":"Carbon surface","playStyle":"Control / All-round","shape":"Standard paddle shape","grip":"Comfort grip","use":"Training / Recreational Match"},"usageGuide":["Cầm vợt vừa đủ chắc, tránh siết grip liên tục.","Khởi động cổ tay, khuỷu tay và vai trước khi chơi.","Người mới nên ưu tiên kiểm soát hướng bóng trước khi tăng lực đánh.","Tập dink, volley và serve riêng biệt để làm quen với cảm giác mặt vợt.","Kiểm tra grip và cạnh vợt định kỳ trước khi sử dụng."],"careGuide":["Lau sạch bề mặt vợt sau khi chơi.","Không dùng vật sắc hoặc hóa chất mạnh để vệ sinh mặt carbon.","Bảo quản vợt trong túi hoặc bao phù hợp.","Không để vợt trong môi trường nhiệt độ quá cao.","Thay grip khi mất độ bám hoặc bị xuống cấp.","Tránh va cạnh vợt mạnh xuống mặt sân."],"tags":["pickleball","vợt pickleball","pickleball paddle","vợt pickleball carbon","carbon paddle","vợt pickleball control","vợt pickleball cho người mới","pickleball phong trào","carbon control"],"seoTitle":"Vợt Pickleball Carbon Control mặt Carbon | SPORTHUB","metaDescription":"Vợt Pickleball Carbon Control có mặt carbon, thiết kế cân bằng giữa kiểm soát và lực đánh, phù hợp người mới và người chơi phong trào."},

    {"id":44,"code":"P44","name":"Bóng Pickleball Outdoor Pack","slug":"bong-pickleball-outdoor-pack","sport":"pickleball","sportName":"Pickleball","category":"Bóng Pickleball","type":"accessories","brand":"SPORTHUB","price":199000,"oldPrice":249000,"rating":4.8,"reviews":69,"stock":68,"badge":"Outdoor","sizes":["3 quả"],"audience":["Nam","Nữ"],"level":["Beginner","Intermediate","Advanced"],"image":"images/products/p44-bong-pickleball.webp","imageAlt":"Bóng Pickleball Outdoor Pack 3 quả dành cho sân ngoài trời","shortDescription":"Bộ 3 bóng Pickleball outdoor với cấu trúc lỗ khí và độ nảy ổn định, phù hợp luyện tập và thi đấu phong trào ngoài trời.","description":"Bóng Pickleball Outdoor Pack là bộ bóng dành cho các buổi luyện tập và thi đấu phong trào trên sân ngoài trời. Cấu trúc thân nhựa cứng cùng hệ thống lỗ khí được thiết kế để duy trì quỹ đạo tương đối ổn định trong điều kiện có gió nhẹ và bề mặt sân cứng. Độ nảy phù hợp giúp người chơi luyện các kỹ thuật phổ biến như serve, return, dink, volley và drive. Mỗi bộ gồm 3 quả, thuận tiện cho người mới, nhóm chơi phong trào hoặc các buổi tập cần thực hiện nhiều lần một bài kỹ thuật.","highlights":["Bộ gồm 3 quả.","Thiết kế dành cho sân ngoài trời.","Cấu trúc lỗ khí hỗ trợ quỹ đạo ổn định.","Độ nảy phù hợp cho luyện tập.","Phù hợp serve, return, dink và volley.","Dùng được cho tập luyện và thi đấu phong trào."],"suitableFor":["Pickleball outdoor.","Luyện serve.","Luyện return.","Dink drill.","Volley drill.","Drive practice.","Thi đấu phong trào."],"specifications":{"quantity":"3 quả / bộ","type":"Outdoor Pickleball","material":"Durable polymer","construction":"Perforated ball","courtUse":"Outdoor court","use":"Training / Recreational Match"},"usageGuide":["Sử dụng bóng trên mặt sân Pickleball phù hợp.","Kiểm tra bóng trước khi chơi.","Thay bóng nếu xuất hiện vết nứt hoặc biến dạng.","Khi tập kỹ thuật nên sử dụng các quả có độ nảy tương đối đồng đều.","Không dùng bóng bị méo vì có thể làm thay đổi quỹ đạo."],"careGuide":["Lau sạch bụi và cát sau khi sử dụng.","Bảo quản ở nơi khô ráo.","Không để gần nguồn nhiệt cao.","Không đè vật nặng lên bóng.","Tránh bảo quản lâu dưới ánh nắng trực tiếp."],"tags":["pickleball","bóng pickleball","pickleball ball","outdoor pickleball","bóng pickleball outdoor","pickleball training","pickleball accessories","bóng pickleball 3 quả"],"seoTitle":"Bóng Pickleball Outdoor Pack 3 quả | SPORTHUB","metaDescription":"Bóng Pickleball Outdoor Pack gồm 3 quả, cấu trúc lỗ khí và độ nảy ổn định, phù hợp tập luyện và thi đấu phong trào ngoài trời."},

    {"id":45,"code":"P45","name":"Gạch Yoga Balance Block","slug":"gach-yoga-balance-block","sport":"yoga","sportName":"Yoga","category":"Dụng cụ Yoga","type":"equipment","brand":"SPORTHUB","price":199000,"oldPrice":249000,"rating":4.8,"reviews":84,"stock":57,"badge":"Yoga","sizes":["Standard"],"audience":["Nam","Nữ"],"level":["Beginner","Intermediate","Advanced"],"image":"images/products/p45-gach-yoga.webp","imageAlt":"Gạch Yoga Balance Block hỗ trợ tư thế Yoga và stretching","shortDescription":"Gạch Yoga nhẹ và chắc chắn, hỗ trợ điều chỉnh khoảng cách, tăng điểm tựa và giúp người tập tiếp cận các tư thế phù hợp hơn với khả năng vận động.","description":"Gạch Yoga Balance Block là dụng cụ hỗ trợ người tập điều chỉnh tư thế khi khả năng linh hoạt hoặc phạm vi chuyển động chưa cho phép thực hiện đầy đủ một động tác. Gạch có thể được đặt dưới bàn tay, hông hoặc các vị trí cần điểm tựa nhằm giúp người tập duy trì tư thế ổn định hơn trong các bài Yoga và stretching. Với người mới, Balance Block giúp giảm khoảng cách giữa cơ thể và mặt sàn khi thực hiện các tư thế như Triangle Pose, Forward Fold hoặc các bài mở hông. Với người tập trung cấp, gạch có thể được sử dụng để tăng độ chính xác, kiểm soát tư thế hoặc tạo thêm biến thể trong buổi tập. Sản phẩm phù hợp cho Yoga tại nhà, studio và các buổi mobility hoặc recovery nhẹ.","highlights":["Hỗ trợ điều chỉnh độ sâu của tư thế.","Tạo điểm tựa khi khả năng linh hoạt còn hạn chế.","Thiết kế nhẹ và dễ mang theo.","Có thể đặt theo nhiều chiều để thay đổi độ cao.","Phù hợp Yoga, mobility và stretching.","Dùng được cho người mới đến người tập lâu năm."],"suitableFor":["Người mới tập Yoga.","Người có độ linh hoạt còn hạn chế.","Yoga tại nhà.","Yoga studio.","Mobility training.","Stretching.","Recovery nhẹ."],"specifications":{"productType":"Yoga block","material":"High-density lightweight foam","size":"Standard","surface":"Textured grip surface","use":"Yoga / Mobility / Stretching"},"usageGuide":["Đặt gạch dưới bàn tay hoặc vị trí cần hỗ trợ trong tư thế.","Có thể xoay gạch theo ba chiều để thay đổi độ cao.","Ưu tiên tư thế ổn định thay vì cố ép cơ thể xuống sâu.","Tăng phạm vi chuyển động từ từ khi cơ thể thích nghi.","Dừng động tác nếu xuất hiện đau sắc hoặc khó chịu bất thường."],"careGuide":["Lau sạch bề mặt sau khi tập.","Để khô trước khi cất.","Không để vật nặng đè lên gạch trong thời gian dài.","Tránh tiếp xúc với nguồn nhiệt cao.","Không sử dụng nếu gạch bị nứt hoặc biến dạng nghiêm trọng."],"tags":["yoga","gạch yoga","yoga block","balance block","dụng cụ yoga","yoga cho người mới","mobility","stretching","yoga accessories"],"seoTitle":"Gạch Yoga Balance Block hỗ trợ tư thế | SPORTHUB","metaDescription":"Gạch Yoga Balance Block nhẹ và chắc chắn, hỗ trợ điều chỉnh tư thế, tăng điểm tựa và cải thiện khả năng tập Yoga, mobility và stretching."},

    {"id":46,"code":"P46","name":"Dây Yoga Stretch Strap","slug":"day-yoga-stretch-strap","sport":"yoga","sportName":"Yoga","category":"Dụng cụ Yoga","type":"accessories","brand":"SPORTHUB","price":169000,"oldPrice":209000,"rating":4.7,"reviews":71,"stock":66,"badge":"Mobility","sizes":["180CM"],"audience":["Nam","Nữ"],"level":["Beginner","Intermediate","Advanced"],"image":"images/products/p46-day-yoga.webp","imageAlt":"Dây Yoga Stretch Strap hỗ trợ kéo giãn và cải thiện độ linh hoạt","shortDescription":"Dây Yoga dài 180cm hỗ trợ stretching, mobility và điều chỉnh tư thế khi người tập chưa đạt đủ phạm vi chuyển động.","description":"Dây Yoga Stretch Strap là phụ kiện hỗ trợ các bài kéo giãn, mobility và Yoga khi người tập chưa thể tiếp cận bàn chân hoặc duy trì tư thế bằng tay một cách thoải mái. Chiều dài 180cm tạo phạm vi sử dụng linh hoạt cho nhiều nhóm cơ như hamstring, vai, lưng và hông. Dây có thể được sử dụng để kéo dài cánh tay một cách an toàn hơn trong một số tư thế, giúp người tập tập trung vào kỹ thuật và vị trí cơ thể thay vì cố gắng đạt biên độ vượt quá khả năng hiện tại. Stretch Strap phù hợp cho người mới, người tập Yoga thường xuyên và những buổi recovery hoặc mobility sau tập luyện.","highlights":["Chiều dài 180cm.","Hỗ trợ tăng phạm vi tiếp cận trong tư thế.","Phù hợp stretching và mobility.","Có thể sử dụng cho nhiều nhóm cơ.","Nhẹ và dễ mang theo.","Hỗ trợ người mới tiếp cận tư thế dễ dàng hơn."],"suitableFor":["Yoga.","Stretching.","Mobility training.","Recovery sau tập.","Người mới tập Yoga.","Người có độ linh hoạt còn hạn chế."],"specifications":{"productType":"Yoga stretch strap","length":"180 cm","material":"Durable woven fabric","adjustment":"Adjustable loop support","use":"Yoga / Stretching / Mobility"},"usageGuide":["Quấn dây quanh bàn chân hoặc vị trí phù hợp với bài tập.","Giữ lực kéo vừa phải, không giật mạnh.","Duy trì nhịp thở đều khi stretching.","Tăng biên độ từ từ thay vì cố ép cơ thể.","Không sử dụng dây để tạo lực kéo gây đau."],"careGuide":["Giặt nhẹ khi dây bám nhiều mồ hôi.","Để khô hoàn toàn trước khi cất.","Không để dây tiếp xúc với vật sắc.","Kiểm tra đường may và phần khóa định kỳ.","Ngưng sử dụng nếu dây bị rách hoặc sờn nghiêm trọng."],"tags":["yoga","dây yoga","yoga strap","stretch strap","stretching","mobility","dụng cụ yoga","yoga cho người mới","recovery"],"seoTitle":"Dây Yoga Stretch Strap 180cm hỗ trợ kéo giãn | SPORTHUB","metaDescription":"Dây Yoga Stretch Strap dài 180cm hỗ trợ stretching, mobility và điều chỉnh tư thế, phù hợp người mới và người tập Yoga thường xuyên."},

    {"id":47,"code":"P47","name":"Vòng Pilates Resistance Ring","slug":"vong-pilates-resistance-ring","sport":"pilates","sportName":"Pilates","category":"Dụng cụ Pilates","type":"equipment","brand":"SPORTHUB","price":329000,"oldPrice":399000,"rating":4.8,"reviews":62,"stock":43,"badge":"Pilates","sizes":["Standard"],"audience":["Nam","Nữ"],"level":["Beginner","Intermediate","Advanced"],"image":"images/products/p47-vong-pilates.webp","imageAlt":"Vòng Pilates Resistance Ring hỗ trợ tập core đùi và thân trên","shortDescription":"Vòng Pilates tạo lực kháng nhẹ đến vừa, phù hợp các bài tập core, đùi trong, mông, ngực và thân trên.","description":"Vòng Pilates Resistance Ring là dụng cụ tạo lực kháng được sử dụng trong nhiều bài Pilates nhằm tăng khả năng kiểm soát cơ bắp và cải thiện chất lượng chuyển động. Vòng có thể được đặt giữa hai đùi, hai đầu gối, hai tay hoặc các vị trí phù hợp để tạo lực ép có kiểm soát. Điều này giúp người tập tăng sự tham gia của các nhóm cơ như adductor, glute, core, ngực và vai tùy từng bài tập. Hai vùng đệm ở hai bên tạo điểm tiếp xúc thoải mái hơn khi ép vòng bằng tay hoặc chân. Resistance Ring phù hợp cho người mới tập Pilates, người tập tại nhà và những buổi tập bổ trợ cần dụng cụ gọn nhẹ.","highlights":["Tạo lực kháng cho các bài Pilates.","Hỗ trợ kích hoạt đùi trong và core.","Có đệm hai bên để tăng sự thoải mái.","Nhẹ và dễ mang theo.","Phù hợp tập tại nhà.","Có thể sử dụng cho thân trên và thân dưới."],"suitableFor":["Pilates.","Core training.","Inner thigh exercises.","Glute activation.","Upper-body Pilates.","Home workout.","Người mới đến người tập lâu năm."],"specifications":{"productType":"Pilates resistance ring","resistance":"Light to moderate resistance","handles":"Dual padded grips","size":"Standard","use":"Pilates / Core / Activation"},"usageGuide":["Đặt vòng đúng vị trí theo bài tập.","Ép vòng từ từ và có kiểm soát.","Không ép mạnh đột ngột.","Giữ thân người ổn định trong quá trình thực hiện.","Ưu tiên kiểm soát chuyển động thay vì số lần lặp quá nhanh."],"careGuide":["Lau phần đệm sau khi tập.","Bảo quản ở nơi khô ráo.","Không đặt vật nặng lên vòng.","Không bẻ vòng vượt quá khả năng đàn hồi.","Kiểm tra hình dạng vòng trước mỗi buổi tập."],"tags":["pilates","vòng pilates","pilates ring","resistance ring","magic circle","core training","home pilates","dụng cụ pilates","glute activation"],"seoTitle":"Vòng Pilates Resistance Ring tập Core tại nhà | SPORTHUB","metaDescription":"Vòng Pilates Resistance Ring tạo lực kháng có kiểm soát, hỗ trợ tập core, đùi trong, mông và thân trên tại nhà hoặc studio."},

    {"id":48,"code":"P48","name":"Bóng Massage Recovery Ball","slug":"bong-massage-recovery-ball","sport":"recovery","sportName":"Phục hồi","category":"Dụng cụ phục hồi","type":"equipment","brand":"SPORTHUB","price":179000,"oldPrice":219000,"rating":4.8,"reviews":74,"stock":61,"badge":"Recovery","sizes":["Standard"],"audience":["Nam","Nữ"],"level":["Beginner","Intermediate","Advanced"],"image":"images/products/p48-bong-massage-recovery.webp","imageAlt":"Bóng Massage Recovery Ball hỗ trợ massage và thư giãn cơ sau tập","shortDescription":"Bóng massage nhỏ gọn hỗ trợ self-massage và tác động vào các vùng cơ khó tiếp cận bằng foam roller.","description":"Bóng Massage Recovery Ball là dụng cụ hỗ trợ self-massage dành cho người tập thể thao, người ngồi nhiều hoặc người muốn bổ sung các bài recovery nhẹ vào thói quen hằng ngày. Kích thước nhỏ giúp bóng tiếp cận các vùng cơ tương đối cụ thể như lòng bàn chân, bắp chân, glute, vùng quanh bả vai và một số nhóm cơ khác mà foam roller lớn khó tác động chính xác. Người dùng có thể đặt bóng giữa cơ thể và sàn hoặc tường để điều chỉnh mức áp lực phù hợp. Recovery Ball phù hợp sử dụng sau tập, trong các buổi mobility hoặc như một phần của routine thư giãn cơ. Sản phẩm không thay thế đánh giá hoặc điều trị y tế khi có đau kéo dài, đau sắc hoặc chấn thương nghiêm trọng.","highlights":["Kích thước nhỏ gọn, dễ mang theo.","Hỗ trợ self-massage tại các vùng cơ cụ thể.","Có thể sử dụng với sàn hoặc tường.","Phù hợp recovery và mobility.","Hỗ trợ thư giãn sau các buổi tập.","Có thể dùng cho bàn chân, bắp chân, glute và vùng quanh vai."],"suitableFor":["Người tập Gym.","Người chạy bộ.","Người chơi thể thao.","Người cần recovery sau tập.","Mobility routine.","Người ngồi nhiều cần thư giãn cơ."],"specifications":{"productType":"Massage recovery ball","firmness":"Medium-firm","size":"Standard","use":"Self-massage / Recovery / Mobility"},"usageGuide":["Đặt bóng tại vùng cơ cần massage, tránh đặt trực tiếp lên khớp hoặc xương.","Bắt đầu với áp lực nhẹ bằng cách sử dụng tường.","Tăng áp lực từ từ nếu cơ thể thích nghi tốt.","Di chuyển chậm quanh vùng cơ thay vì lăn quá nhanh.","Không cố chịu đau mạnh để tăng hiệu quả.","Dừng sử dụng nếu xuất hiện đau sắc, tê hoặc cảm giác bất thường."],"careGuide":["Lau sạch sau khi sử dụng.","Giữ bóng ở nơi khô ráo.","Không để gần nguồn nhiệt cao.","Kiểm tra bề mặt định kỳ.","Không sử dụng nếu bóng bị nứt hoặc biến dạng."],"relatedExercises":["Mobility Flow","Glute Recovery","Calf Release","Foot Recovery"],"tags":["recovery","bóng massage","massage ball","recovery ball","self massage","mobility","phục hồi sau tập","dụng cụ phục hồi"],"seoTitle":"Bóng Massage Recovery Ball hỗ trợ phục hồi cơ | SPORTHUB","metaDescription":"Bóng Massage Recovery Ball nhỏ gọn, hỗ trợ self-massage, mobility và thư giãn các vùng cơ sau tập hoặc trong routine phục hồi."},

    {"id":49,"code":"P49","name":"Dây Stretching Mobility Band","slug":"day-stretching-mobility-band","sport":"recovery","sportName":"Phục hồi","category":"Mobility & Stretching","type":"equipment","brand":"SPORTHUB","price":249000,"oldPrice":299000,"rating":4.8,"reviews":68,"stock":53,"badge":"Mobility","sizes":["Medium Resistance"],"audience":["Nam","Nữ"],"level":["Beginner","Intermediate","Advanced"],"image":"images/products/p49-day-stretching-mobility.webp","imageAlt":"Dây Stretching Mobility Band hỗ trợ mobility kéo giãn và khởi động","shortDescription":"Dây mobility đàn hồi hỗ trợ warm-up, stretching, activation và các bài cải thiện phạm vi chuyển động.","description":"Dây Stretching Mobility Band là dụng cụ đàn hồi đa năng được sử dụng trong các bài warm-up, mobility, stretching và activation trước hoặc sau tập luyện. Lực kháng mức vừa giúp người dùng thực hiện nhiều bài cho vai, hông, chân và thân trên mà không cần dụng cụ cồng kềnh. Dây có thể được sử dụng để hỗ trợ một số động tác kéo giãn, tạo lực kháng trong các bài activation hoặc bổ sung vào routine chuẩn bị vận động trước buổi tập. Với người mới, Mobility Band giúp làm quen với các bài có kiểm soát và phạm vi chuyển động phù hợp. Với người tập có kinh nghiệm, dây có thể được dùng như công cụ warm-up hoặc bổ trợ kỹ thuật trước các bài chính.","highlights":["Lực kháng mức vừa.","Phù hợp warm-up và mobility.","Có thể sử dụng cho vai, hông và chân.","Hỗ trợ stretching và activation.","Nhẹ và dễ mang theo.","Phù hợp tập tại nhà hoặc phòng gym."],"suitableFor":["Warm-up.","Mobility training.","Stretching.","Activation.","Recovery routine.","Gym.","Home workout."],"specifications":{"productType":"Mobility resistance band","resistance":"Medium","material":"Elastic resistance material","use":"Mobility / Stretching / Activation / Warm-up"},"usageGuide":["Kiểm tra dây trước mỗi buổi tập.","Bắt đầu với biên độ và lực kéo vừa phải.","Không kéo dây vượt quá giới hạn đàn hồi an toàn.","Kiểm soát cả chiều kéo và chiều trở về.","Tránh để dây bật trực tiếp vào mặt hoặc cơ thể.","Dừng sử dụng nếu dây có dấu hiệu nứt hoặc rách."],"careGuide":["Lau sạch sau khi sử dụng.","Bảo quản ở nơi khô và mát.","Tránh ánh nắng trực tiếp kéo dài.","Không để gần vật sắc.","Không sử dụng dây đã xuất hiện vết nứt."],"relatedExercises":["Mobility Flow","Shoulder Mobility","Hip Mobility","Dynamic Warm-up"],"tags":["recovery","mobility","stretching","mobility band","resistance band","dây stretching","dây mobility","warm up","activation"],"seoTitle":"Dây Stretching Mobility Band tập Mobility | SPORTHUB","metaDescription":"Dây Stretching Mobility Band lực kháng vừa, phù hợp warm-up, mobility, stretching và activation trước hoặc sau tập luyện."},

    {"id":50,"code":"P50","name":"Dây nhảy Speed Rope Pro X","slug":"day-nhay-speed-rope-pro-x","sport":"cardio","sportName":"Cardio","category":"Dụng cụ Cardio","type":"equipment","brand":"SPORTHUB","price":349000,"oldPrice":429000,"rating":4.9,"reviews":103,"stock":47,"badge":"Cardio","sizes":["Adjustable"],"audience":["Nam","Nữ"],"level":["Beginner","Intermediate","Advanced"],"image":"images/products/p50-day-nhay-speed-rope-pro.webp","imageAlt":"Dây nhảy Speed Rope Pro X điều chỉnh chiều dài dành cho cardio và conditioning","shortDescription":"Dây nhảy tốc độ với chiều dài điều chỉnh và cơ chế xoay mượt, phù hợp cardio, warm-up và conditioning.","description":"Dây nhảy Speed Rope Pro X được thiết kế cho các buổi cardio, conditioning và warm-up cần chuyển động liên tục với nhịp độ linh hoạt. Cơ chế xoay ở tay cầm giúp dây chuyển động mượt hơn khi thực hiện basic jump, alternate step hoặc các bài tốc độ cao. Chiều dài có thể điều chỉnh để phù hợp với nhiều chiều cao người dùng, giúp người tập thiết lập dây theo kỹ thuật cá nhân. Speed Rope Pro X phù hợp cho người mới học nhảy dây, người tập Gym, Boxing, Muay Thai và người muốn bổ sung một hình thức cardio nhỏ gọn vào chương trình tập luyện.","highlights":["Chiều dài dây có thể điều chỉnh.","Cơ chế xoay hỗ trợ chuyển động mượt.","Phù hợp cardio và conditioning.","Dùng được cho warm-up.","Thiết kế nhỏ gọn, dễ mang theo.","Phù hợp nhiều trình độ."],"suitableFor":["Cardio.","Conditioning.","Warm-up.","Boxing training.","Muay Thai training.","Gym.","Home workout."],"specifications":{"productType":"Speed jump rope","length":"Adjustable","handle":"Lightweight handles","rotation":"Smooth rotation mechanism","use":"Cardio / Conditioning / Warm-up"},"usageGuide":["Điều chỉnh chiều dài dây theo chiều cao.","Giữ khuỷu tay gần thân người.","Xoay dây chủ yếu bằng cổ tay thay vì toàn bộ cánh tay.","Tiếp đất nhẹ bằng phần trước hoặc giữa bàn chân.","Người mới nên bắt đầu với các hiệp ngắn.","Tăng thời lượng và tốc độ từ từ khi kỹ thuật ổn định."],"careGuide":["Cuộn dây nhẹ nhàng sau khi sử dụng.","Không gập dây quá mạnh.","Tránh để dây tiếp xúc lâu với bề mặt quá thô.","Lau tay cầm khi bám nhiều mồ hôi.","Kiểm tra dây và cơ chế xoay định kỳ."],"relatedExercises":["Jump Rope","Boxing Conditioning","Cardio Intervals","Dynamic Warm-up"],"tags":["cardio","dây nhảy","jump rope","speed rope","conditioning","boxing cardio","muay thai cardio","dây nhảy tốc độ","home cardio"],"seoTitle":"Dây nhảy Speed Rope Pro X tập Cardio | SPORTHUB","metaDescription":"Dây nhảy Speed Rope Pro X có chiều dài điều chỉnh và cơ chế xoay mượt, phù hợp cardio, conditioning, Boxing, Muay Thai và warm-up."},

    {"id":51,"code":"P51","name":"Túi thể thao MultiSport 40L","slug":"tui-the-thao-multisport-40l","sport":"accessories","sportName":"Phụ kiện","category":"Túi thể thao","type":"accessories","brand":"SPORTHUB","price":649000,"oldPrice":779000,"rating":4.8,"reviews":82,"stock":34,"badge":"MultiSport","sizes":["40L"],"audience":["Nam","Nữ"],"level":["Beginner","Intermediate","Advanced"],"image":"images/products/p51-tui-the-thao-multisport.webp","imageAlt":"Túi thể thao MultiSport 40L nhiều ngăn dành cho Gym và tập luyện","shortDescription":"Túi thể thao dung tích 40L với nhiều ngăn lưu trữ, phù hợp mang quần áo, giày và phụ kiện đến phòng tập hoặc các buổi luyện thể thao.","description":"Túi thể thao MultiSport 40L được thiết kế cho người thường xuyên di chuyển giữa nhà, phòng tập và các địa điểm luyện thể thao. Dung tích 40L cung cấp không gian phù hợp để sắp xếp quần áo tập, khăn, bình nước, phụ kiện cá nhân và nhiều vật dụng cần thiết cho một buổi tập. Hệ thống ngăn được bố trí nhằm giúp người dùng phân chia đồ dùng thay vì để toàn bộ vật dụng trong một khoang lớn. Ngăn riêng dành cho giày hỗ trợ tách giày tập khỏi quần áo và các vật dụng sạch. Quai xách kết hợp dây đeo vai giúp người dùng linh hoạt khi mang túi trong quá trình di chuyển. MultiSport 40L phù hợp cho Gym, Boxing, Muay Thai, bóng đá, bơi lội và nhiều hoạt động thể thao khác.","highlights":["Dung tích 40L phù hợp cho đồ tập hằng ngày.","Nhiều ngăn giúp phân loại vật dụng.","Có khu vực riêng dành cho giày.","Có quai xách và dây đeo vai.","Phù hợp nhiều môn thể thao.","Có thể sử dụng cho phòng tập hoặc chuyến đi ngắn."],"suitableFor":["Gym & Fitness.","Boxing.","Muay Thai.","MMA.","Bóng đá.","Bóng rổ.","Bơi lội.","Người thường xuyên mang nhiều phụ kiện tập luyện.","Các chuyến đi thể thao ngắn."],"specifications":{"productType":"Sports duffle bag","capacity":"40L","compartments":"Multiple storage compartments","shoeCompartment":"Có","carryOptions":"Hand carry / Shoulder strap","use":"Gym / Training / MultiSport / Short trips"},"usageGuide":["Phân loại quần áo, giày và phụ kiện vào các ngăn phù hợp.","Không vượt quá khả năng chứa hợp lý của túi.","Đóng khóa kéo trước khi di chuyển.","Đặt vật nặng ở vị trí giúp túi cân bằng.","Quần áo hoặc khăn ướt nên được lấy ra khỏi túi sau buổi tập.","Không để đồ tập ẩm trong túi kín trong thời gian dài."],"careGuide":["Lấy toàn bộ đồ ẩm ra sau mỗi buổi tập.","Lau sạch bên trong và bên ngoài khi cần.","Để túi thông thoáng trước khi cất.","Không giặt bằng phương pháp có thể làm hỏng khóa hoặc kết cấu túi.","Kiểm tra dây đeo, khóa kéo và đường may định kỳ.","Tránh để vật sắc nhọn trực tiếp trong túi."],"relatedSports":["Gym & Fitness","Boxing","Muay Thai","MMA","Running","Swimming","Football","Basketball"],"tags":["túi thể thao","túi gym","gym bag","sport bag","duffle bag","túi thể thao 40l","túi đựng đồ tập","túi có ngăn giày","multisport","phụ kiện thể thao"],"seoTitle":"Túi thể thao MultiSport 40L nhiều ngăn | SPORTHUB","metaDescription":"Túi thể thao MultiSport 40L có nhiều ngăn và khu vực riêng cho giày, phù hợp mang quần áo, phụ kiện khi tập Gym và nhiều môn thể thao."},

    {"id":52,"code":"P52","name":"Bình giữ nhiệt Sport Thermo","slug":"binh-giu-nhiet-sport-thermo","sport":"accessories","sportName":"Phụ kiện","category":"Bình nước thể thao","type":"accessories","brand":"SPORTHUB","price":429000,"oldPrice":519000,"rating":4.9,"reviews":96,"stock":59,"badge":"Hydration","sizes":["750ML"],"audience":["Nam","Nữ"],"level":["Beginner","Intermediate","Advanced"],"image":"images/products/p52-binh-giu-nhiet-the-thao.webp","imageAlt":"Bình giữ nhiệt Sport Thermo 750ml dành cho tập luyện và thể thao","shortDescription":"Bình giữ nhiệt dung tích 750ml với thân bình chắc chắn, phù hợp mang nước khi tập Gym, chạy bộ, làm việc hoặc di chuyển hằng ngày.","description":"Bình giữ nhiệt Sport Thermo được thiết kế cho người cần mang nước trong quá trình tập luyện, làm việc hoặc di chuyển hằng ngày. Dung tích 750ml tạo sự cân bằng giữa lượng nước mang theo và kích thước tổng thể của bình. Cấu trúc thân bình cách nhiệt hỗ trợ duy trì nhiệt độ đồ uống trong quá trình sử dụng, trong khi nắp đóng kín giúp hạn chế rò rỉ khi được sử dụng đúng cách. Thiết kế đơn giản giúp Sport Thermo phù hợp cho phòng Gym, hoạt động thể thao, văn phòng hoặc các chuyến đi ngắn. Đây cũng là phụ kiện hữu ích cho người đang xây dựng thói quen uống nước đều đặn trong ngày.","highlights":["Dung tích 750ml.","Thân bình có cấu trúc cách nhiệt.","Nắp đóng kín.","Thiết kế phù hợp tập luyện và sử dụng hằng ngày.","Dễ mang theo.","Phù hợp nhiều hoạt động thể thao."],"suitableFor":["Gym & Fitness.","Chạy bộ.","Bóng đá.","Bóng rổ.","Cầu lông.","Tennis.","Pickleball.","Hoạt động ngoài trời.","Văn phòng và sử dụng hằng ngày."],"specifications":{"productType":"Insulated sports bottle","capacity":"750 ml","construction":"Insulated bottle body","lid":"Secure closure","use":"Training / Sport / Daily use"},"usageGuide":["Rửa sạch bình trước lần sử dụng đầu tiên.","Đóng nắp chắc chắn trước khi cho bình vào túi.","Không đổ vượt quá dung tích sử dụng hợp lý.","Kiểm tra nắp trước khi mang theo.","Vệ sinh bình thường xuyên nếu sử dụng mỗi ngày.","Sử dụng đồ uống phù hợp với hướng dẫn của sản phẩm."],"careGuide":["Rửa bình sau mỗi ngày sử dụng.","Vệ sinh kỹ khu vực nắp và miệng bình.","Để bình khô hoàn toàn trước khi đóng nắp và cất.","Không dùng vật sắc làm trầy lớp bên trong.","Không bảo quản đồ uống trong bình quá lâu.","Kiểm tra gioăng và nắp định kỳ."],"relatedSports":["Gym & Fitness","Running","Football","Basketball","Badminton","Tennis","Pickleball"],"tags":["bình giữ nhiệt","bình nước thể thao","sport bottle","water bottle","bình nước 750ml","hydration","bình tập gym","phụ kiện thể thao","sport thermo"],"seoTitle":"Bình giữ nhiệt Sport Thermo 750ml | SPORTHUB","metaDescription":"Bình giữ nhiệt Sport Thermo dung tích 750ml, thiết kế chắc chắn và tiện mang theo khi tập Gym, thể thao, làm việc hoặc di chuyển."}

];



/* =========================================================
   6. GHÉP P13 - P52 VÀO DATABASE CHÍNH
========================================================= */

if (Array.isArray(window.NEW_PRODUCTS)) {

    const existingProductIds =
        new Set(
            products.map(
                product =>
                    Number(product.id)
            )
        );


    window.NEW_PRODUCTS.forEach(product => {

        const productId =
            Number(product.id);


        if (
            !existingProductIds.has(
                productId
            )
        ) {

            products.push(
                product
            );


            existingProductIds.add(
                productId
            );

        }

    });


    products.sort(
        (a, b) =>
            Number(a.id) -
            Number(b.id)
    );

}


/* =========================================================
   6.1. SEO OVERRIDE P01 - P52
   Chuẩn hóa Title / Meta Description
   Không thay đổi:
   - Tên sản phẩm
   - Giá
   - Hình ảnh
   - Stock
   - Rating
   - Nội dung sản phẩm
   - Category
   - Schema
========================================================= */

const SPORTHUB_PRODUCT_SEO_OVERRIDES = {

    P05: {
        seoTitle:
            "Dây kháng lực PowerBand Set 5 mức tập luyện | SPORTHUB"
    },

    P06: {
        seoTitle:
            "Thảm Yoga Premium Pro chống trượt tập luyện | SPORTHUB"
    },

    P07: {
        seoTitle:
            "Quần Short FlexMove co giãn tập Gym Fitness | SPORTHUB"
    },

    P09: {
        seoTitle:
            "Bình nước SportFlow 1L cho Gym thể thao | SPORTHUB"
    },

    P11: {
        seoTitle:
            "Túi Gym Urban 35L nhiều ngăn đựng đồ tập | SPORTHUB"
    },

    P12: {
        seoTitle:
            "Dây nhảy Speed Rope RX tập Cardio Boxing | SPORTHUB"
    },

    P13: {
        metaDescription:
            "Găng Boxing Training Pro cho người mới, phù hợp luyện kỹ thuật, focus mitt và bao cát với nhiều mức trọng lượng."
    },

    P14: {
        seoTitle:
            "Băng quấn tay Boxing Wrap 4.5M tập luyện | SPORTHUB"
    },

    P16: {
        seoTitle:
            "Bao cát Boxing Heavy Bag Pro tập luyện tại nhà | SPORTHUB"
    },

    P19: {
        seoTitle:
            "Bảo vệ ống đồng Muay Thai Shield tập luyện | SPORTHUB"
    },

    P20: {
        seoTitle:
            "Thai Pad Kick Training luyện đòn Muay Thai | SPORTHUB"
    },

    P21: {
        seoTitle:
            "Quần Muay Thai Fight Short tập luyện thi đấu | SPORTHUB"
    },

    P24: {
        seoTitle:
            "Mouthguard Combat Protect cho Boxing Muay Thai | SPORTHUB"
    },

    P26: {
        seoTitle:
            "Đai chạy bộ Running Belt Flex đựng điện thoại | SPORTHUB"
    },

    P27: {
        seoTitle:
            "Bình nước Running Soft Flask 500ml chạy bộ | SPORTHUB"
    },

    P29: {
        seoTitle:
            "Kính bơi AquaVision Anti-Fog chống sương | SPORTHUB"
    },

    P30: {
        seoTitle:
            "Mũ bơi Silicone AquaFit co giãn ôm đầu tập bơi | SPORTHUB"
    },

    P33: {
        seoTitle:
            "Bóng đá Match Training Pro Size 5 tập luyện | SPORTHUB"
    },

    P34: {
        seoTitle:
            "Giày bóng đá Speed Control nhẹ bám sân tập luyện | SPORTHUB"
    },

    P35: {
        seoTitle:
            "Bảo vệ ống đồng Football Guard tập bóng đá | SPORTHUB"
    },

    P36: {
        seoTitle:
            "Bóng rổ Street Court Pro Size 7 tập luyện | SPORTHUB"
    },

    P37: {
        seoTitle:
            "Ống tay Basketball Compression co giãn thể thao | SPORTHUB"
    },

    P40: {
        seoTitle:
            "Quấn cán vợt Grip Control cầu lông tăng bám | SPORTHUB"
    },

    P41: {
        metaDescription:
            "Vợt Tennis PowerStrike cân bằng lực và kiểm soát, phù hợp người mới và người chơi phong trào tập luyện thường xuyên."
    },

    P42: {
        seoTitle:
            "Bóng Tennis Match Pack 3 quả cho tập luyện | SPORTHUB"
    },

    P43: {
        metaDescription:
            "Vợt Pickleball Carbon Control mặt carbon, cân bằng kiểm soát và lực đánh, phù hợp người mới và người chơi phong trào."
    },

    P44: {
        seoTitle:
            "Bóng Pickleball Outdoor Pack 3 quả ngoài trời | SPORTHUB"
    },

    P45: {
        seoTitle:
            "Gạch Yoga Balance Block hỗ trợ tư thế tập | SPORTHUB",

        metaDescription:
            "Gạch Yoga Balance Block nhẹ, chắc chắn, hỗ trợ điều chỉnh tư thế và tăng điểm tựa khi tập Yoga, mobility, stretching."
    },

    P46: {
        metaDescription:
            "Dây Yoga Stretch Strap 180cm hỗ trợ stretching, mobility và điều chỉnh tư thế cho người mới và người tập Yoga thường xuyên."
    },

    P50: {
        seoTitle:
            "Dây nhảy Speed Rope Pro X tập Cardio Boxing | SPORTHUB"
    },

    P51: {
        seoTitle:
            "Túi thể thao MultiSport 40L nhiều ngăn tập luyện | SPORTHUB",

        metaDescription:
            "Túi thể thao MultiSport 40L nhiều ngăn, có khu vực riêng cho giày, phù hợp mang đồ tập Gym và nhiều môn thể thao."
    },

    P52: {
        seoTitle:
            "Bình giữ nhiệt Sport Thermo 750ml cho thể thao | SPORTHUB"
    }

};


/* =========================================================
   ÁP DỤNG SEO OVERRIDE
========================================================= */

products.forEach(product => {

    const productCode =
        product.code ||
        `P${String(product.id).padStart(2, "0")}`;


    const seoOverride =
        SPORTHUB_PRODUCT_SEO_OVERRIDES[
            productCode
        ];


    if (!seoOverride) {
        return;
    }


    if (seoOverride.seoTitle) {

        product.seoTitle =
            seoOverride.seoTitle;

    }


    if (seoOverride.metaDescription) {

        product.metaDescription =
            seoOverride.metaDescription;

    }

});


/* =========================================================
   KIỂM TRA ĐỘ DÀI SEO
   Chỉ cảnh báo Console
   Không làm ảnh hưởng website
========================================================= */

products.forEach(product => {

    const code =
        product.code ||
        `P${String(product.id).padStart(2, "0")}`;


    const seoTitle =
        String(
            product.seoTitle || ""
        );


    const metaDescription =
        String(
            product.metaDescription || ""
        );


    if (
        seoTitle.length < 50 ||
        seoTitle.length > 60
    ) {

        console.warn(
            `[SPORTHUB SEO] ${code} Title có ${seoTitle.length} ký tự:`,
            seoTitle
        );

    }


    if (
        metaDescription.length < 100 ||
        metaDescription.length > 130
    ) {

        console.warn(
            `[SPORTHUB SEO] ${code} Meta Description có ${metaDescription.length} ký tự:`,
            metaDescription
        );

    }

});
/* =========================================================
   7. KIỂM TRA DATABASE CATALOG
   Chỉ cảnh báo trong Console
   Không làm dừng website
========================================================= */

(function validateCatalogData() {

    const categories =
        Array.isArray(
            window.SPORT_CATEGORIES
        )
            ? window.SPORT_CATEGORIES
            : [];


    const allowedSports =
        new Set(
            categories.map(
                category =>
                    category.id
            )
        );


    const ids =
        new Set();


    const codes =
        new Set();


    const slugs =
        new Set();



    products.forEach(product => {

        const id =
            Number(
                product.id
            );


        /* ---------------------------------------------
           ID
        --------------------------------------------- */

        if (
            !Number.isFinite(id) ||
            id <= 0
        ) {

            console.warn(
                "[SPORTHUB] Product ID không hợp lệ:",
                product
            );

        }


        if (
            ids.has(id)
        ) {

            console.warn(
                "[SPORTHUB] Product ID bị trùng:",
                id,
                product
            );

        }


        ids.add(id);



        /* ---------------------------------------------
           PRODUCT CODE
        --------------------------------------------- */

        if (!product.code) {

            console.warn(
                "[SPORTHUB] Sản phẩm thiếu code:",
                product
            );

        }

        else if (
            codes.has(
                product.code
            )
        ) {

            console.warn(
                "[SPORTHUB] Product code bị trùng:",
                product.code,
                product
            );

        }

        else {

            codes.add(
                product.code
            );

        }



        /* ---------------------------------------------
           SLUG
        --------------------------------------------- */

        if (!product.slug) {

            console.warn(
                "[SPORTHUB] Sản phẩm thiếu slug:",
                product
            );

        }

        else if (
            slugs.has(
                product.slug
            )
        ) {

            console.warn(
                "[SPORTHUB] Product slug bị trùng:",
                product.slug,
                product
            );

        }

        else {

            slugs.add(
                product.slug
            );

        }



        /* ---------------------------------------------
           SPORT CATEGORY
        --------------------------------------------- */

        if (
            product.sport &&
            !allowedSports.has(
                product.sport
            )
        ) {

            console.warn(
                "[SPORTHUB] Sport không tồn tại trong SPORT_CATEGORIES:",
                product.sport,
                product
            );

        }



        /* ---------------------------------------------
           IMAGE
        --------------------------------------------- */

        if (!product.image) {

            console.warn(
                "[SPORTHUB] Sản phẩm thiếu ảnh:",
                product
            );

        }



        /* ---------------------------------------------
           SEO
        --------------------------------------------- */

        if (
            !product.seoTitle ||
            !product.metaDescription
        ) {

            console.warn(
                "[SPORTHUB] Sản phẩm thiếu SEO metadata:",
                product
            );

        }

    });



    /* =================================================
       KIỂM TRA SỐ LƯỢNG
    ================================================= */

    if (
        products.length !== 52
    ) {

        console.warn(
            `[SPORTHUB] Số lượng sản phẩm hiện tại là ${products.length}, dự kiến 52.`
        );

    }



    console.info(
        `[SPORTHUB] Catalog loaded: ${products.length} sản phẩm, ${categories.length} danh mục.`
    );

})();

