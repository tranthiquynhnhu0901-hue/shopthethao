# SportHub Pro

## Chạy bằng VS Code
1. Mở thư mục `sporthub-pro` trong Visual Studio Code.
2. Cài extension **Live Server** nếu chưa có.
3. Mở `index.html`.
4. Chuột phải -> **Open with Live Server**.

## Tính năng
- 12 sản phẩm, mỗi sản phẩm có ảnh SVG tự sinh riêng.
- 20 bài Blog có nội dung chi tiết và ảnh SVG riêng, không lặp.
- Trang chi tiết sản phẩm và bài viết.
- Tìm kiếm/lọc sản phẩm và Blog.
- Giỏ hàng, mã `SPORT10`, checkout, thông báo đặt hàng thành công.
- Chatbot offline theo từ khóa.
- Fitness Check: sàng lọc dấu hiệu cần thận trọng, hỏi mục tiêu, kinh nghiệm, số buổi, giấc ngủ và sinh lịch tập tham khảo.

## Ảnh
`js/image-factory.js` tạo ảnh SVG dạng data URI dựa trên title + seed. Vì mỗi mục có seed riêng nên không cần file ảnh ngoài và không trùng hình.
