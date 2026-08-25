# Trung tâm nội dung SD Group

Toàn bộ nội dung website nằm trong `content/site.ts`:

- `services`: danh sách dịch vụ.
- `products`: danh sách sản phẩm số.
- `posts`: bài viết tiếng Việt và tiếng Anh.
- `copy`: nội dung thương hiệu và thông tin liên hệ.

## Cách cập nhật

1. Mở `https://sdgr.site/admin/`.
2. Chọn khu vực cần sửa.
3. GitHub sẽ mở đúng tệp nội dung; nhấn biểu tượng bút chì nếu cần.
4. Sửa phần chữ nằm trong dấu ngoặc kép, không xóa dấu phẩy hoặc ngoặc.
5. Nhấn **Commit changes**. GitHub Actions sẽ tự build và xuất bản website.

## Thêm bài viết

Sao chép một khối bài viết trong mảng `posts`, đổi `slug` thành đường dẫn không dấu và sửa ngày, chuyên mục, tiêu đề, mô tả cùng các đoạn nội dung. Mỗi `slug` phải là duy nhất.

Không lưu mật khẩu, token hoặc thông tin riêng tư trong repository.
