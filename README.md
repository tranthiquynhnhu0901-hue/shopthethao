# SPORTHUB

Website bán đồ thể thao kết hợp nội dung Fitness, Blog và hệ thống kế hoạch cá nhân.

## Cấu trúc hệ thống

SPORTHUB hiện được tách thành 2 module trên GitHub Pages:

### V1 — Website chính

Repo:

`shopthethao`

URL:

`https://tranthiquynhnhu0901-hue.github.io/shopthethao/`

Bao gồm:

- Trang chủ
- Giới thiệu
- Sản phẩm
- Chi tiết sản phẩm
- Blog
- Chi tiết bài viết
- Liên hệ
- Giỏ hàng
- Thanh toán
- Chatbot hỗ trợ

### V2 — Fitness & Personal Plan

Repo:

`shop-the-thao-v2`

URL:

`https://tranthiquynhnhu0901-hue.github.io/shop-the-thao-v2/`

Bao gồm:

- Fitness Check
- Kế hoạch cá nhân
- Kế hoạch sức khỏe
- Kế hoạch tập luyện
- Kế hoạch dinh dưỡng
- Workout Session
- Video hướng dẫn bài tập

Hai module cùng chạy trên domain:

`tranthiquynhnhu0901-hue.github.io`

nên có thể sử dụng chung dữ liệu `localStorage`.

---

## Chạy bằng VS Code

1. Mở thư mục dự án trong Visual Studio Code.
2. Cài extension **Live Server** nếu chưa có.
3. Mở `index.html`.
4. Chuột phải và chọn **Open with Live Server**.

Khi kiểm tra bản tích hợp đầy đủ, cần đảm bảo cả hai repo V1 và V2 đều có thể được truy cập đúng đường dẫn tương ứng.

---

## Tính năng V1

### Sản phẩm

- 52 sản phẩm từ `P01` đến `P52`.
- Trang danh sách sản phẩm.
- Trang chi tiết sản phẩm.
- Tìm kiếm và lọc sản phẩm.
- SEO động cho từng sản phẩm.
- Canonical chuẩn dạng:

`product.html?id=P01`

đến:

`product.html?id=P52`

### Blog

- 20 bài Blog.
- Trang danh sách bài viết.
- Trang chi tiết bài viết.
- Tìm kiếm và lọc Blog.
- SEO động theo từng bài viết.

### Giỏ hàng & thanh toán

- Thêm sản phẩm vào giỏ hàng.
- Điều chỉnh số lượng.
- Mã giảm giá:

`SPORT10`

- Trang checkout.
- Hỗ trợ phương thức thanh toán theo giao diện hiện tại.
- Hiển thị thông báo đặt hàng thành công.

### Chatbot

Chatbot hỗ trợ tra cứu và tư vấn dựa trên dữ liệu website, bao gồm:

- sản phẩm;
- giá;
- size;
- tồn kho;
- giỏ hàng;
- thông tin sản phẩm hiện tại.

---

## Fitness Check

Fitness Check chính thức nằm tại V2:

`https://tranthiquynhnhu0901-hue.github.io/shop-the-thao-v2/health-check.html`

Fitness Check gồm 7 bước thu thập thông tin về:

- thông tin cơ bản;
- sàng lọc an toàn;
- mức vận động;
- mục tiêu;
- kinh nghiệm và điều kiện tập;
- dinh dưỡng;
- giấc ngủ và phục hồi.

Sau khi hoàn tất, dữ liệu cần thiết được lưu vào `localStorage` để các trang Personal Plan sử dụng.

---

## Personal Plan

Trang tổng quan:

`https://tranthiquynhnhu0901-hue.github.io/shop-the-thao-v2/`

Personal Plan gồm 3 phần chính:

### Kế hoạch sức khỏe

Hiển thị các thông tin tổng quan được tạo từ Fitness Check, bao gồm các chỉ số nền tảng, năng lượng, trạng thái phục hồi và thông tin an toàn.

### Kế hoạch tập luyện

Bao gồm:

- lịch tập 7 ngày;
- danh sách bài tập;
- set;
- reps;
- thời gian nghỉ;
- RPE;
- video hướng dẫn;
- Workout Session tương tác.

Hệ thống hiện có mapping cho 20 video bài tập.

### Kế hoạch dinh dưỡng

Bao gồm:

- mục tiêu năng lượng;
- protein;
- chất béo;
- carbohydrate;
- thực đơn 7 ngày;
- danh sách thực phẩm;
- hướng dẫn ăn uống thực tế.

---

## Dữ liệu Personal Plan

Các dữ liệu chính được lưu bằng `localStorage`, gồm:

- `sporthub_fitness_profile`
- `sporthub_fitness_analysis`
- `sporthub_workout_plan`
- `sporthub_nutrition_plan`

Các trang kế hoạch đọc dữ liệu đã lưu và không tự ý chạy lại toàn bộ Fitness Engine khi chỉ cần hiển thị kế hoạch.

---

## Hình ảnh

`js/image-factory.js` hỗ trợ tạo hình SVG dạng Data URI dựa trên nội dung và seed.

Ngoài ra website hiện sử dụng thêm các tài nguyên hình ảnh và banner trong thư mục `images/`.

V2 cũng chứa các video hướng dẫn bài tập trong:

`images/exercises/`

---

## Liên kết V1 và V2

Từ V1:

- Fitness Check → `/shop-the-thao-v2/health-check.html`
- Kế hoạch cá nhân → `/shop-the-thao-v2/`

Từ V2:

- Trang chủ → `/shopthethao/`
- Giới thiệu → `/shopthethao/gioi-thieu/`
- Sản phẩm → `/shopthethao/shop.html`
- Blog → `/shopthethao/blog.html`
- Liên hệ → `/shopthethao/lien-he/`
- Giỏ hàng → `/shopthethao/cart.html`

---

## URL Fitness cũ trong V1

Các URL Fitness/Personal Plan cũ tại V1 chỉ được giữ để chuyển người dùng sang V2:

- `/shopthethao/health-check.html`
- `/shopthethao/ke-hoach-suc-khoe.html`
- `/shopthethao/ke-hoach-tap-luyen.html`
- `/shopthethao/ke-hoach-dinh-duong.html`

Các trang này không còn là phiên bản chính thức của Fitness module.

Phiên bản chính thức nằm trong repo:

`shop-the-thao-v2`