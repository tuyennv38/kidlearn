Chào bạn, đây là bản tài liệu yêu cầu (Requirement Document) hoàn chỉnh dưới dạng Markdown (`.md`). Bạn có thể copy nội dung này để lưu vào file `README.md` hoặc `REQUIREMENTS.md` trong dự án GitHub của mình.

Tôi cũng đã biên soạn sẵn danh sách **100 từ vựng** cơ bản nhất, phù hợp nhất cho bé 3 tuổi, chia theo các chủ đề gần gũi.

---

# Tài liệu yêu cầu dự án: TinyEnglish - Flashcards cho bé 3 tuổi

## 1. Tổng quan dự án

* **Mục tiêu:** Tạo một ứng dụng web học tiếng Anh đơn giản cho trẻ em 3 tuổi, tập trung vào việc nhận diện hình ảnh và âm thanh.
* **Đối tượng sử dụng:** Trẻ em mầm non (3 tuổi).
* **Nền tảng:** Web (Next.js, Tailwind CSS), deploy lên Vercel.
* **Hình thức chia sẻ:** Mã nguồn mở trên GitHub.

## 2. Tính năng chính

* **Chế độ Đố vui (Quiz Mode):**
* Hệ thống chọn ngẫu nhiên một từ vựng mục tiêu.
* Hiển thị 3-4 hình ảnh để bé lựa chọn (trong đó có 1 đáp án đúng).
* Câu hỏi được phát âm tự động qua Web Speech API: *"Where is the [Word]?"*.


* **Phản hồi tương tác:**
* **Khi chọn đúng:** Hiệu ứng bắn pháo tay (Confetti), phát âm thanh khen ngợi (ví dụ: "Amazing!"), tự động chuyển câu sau 2 giây.
* **Khi chọn sai:** Hình ảnh bé vừa bấm sẽ rung nhẹ (Shake animation) để báo hiệu chọn lại.


* **Dữ liệu:** Quản lý tập trung qua file `data.json`.
* **Âm thanh:** Sử dụng giọng đọc robot có sẵn của trình duyệt (Web Speech API).

## 3. Tech Stack (Công nghệ sử dụng)

* **Framework:** Next.js (App Router).
* **Styling:** Tailwind CSS.
* **Animation:** Framer Motion (để xử lý hiệu ứng rung lắc và chuyển cảnh).
* **Pháo tay:** `canvas-confetti`.
* **Deployment:** Vercel.

## 4. Cấu trúc dữ liệu (`data.json`)

```json
[
  {
    "id": "1",
    "category": "Animals",
    "word": "Dog",
    "image": "/images/animals/dog.png"
  },
  ...
]

```

## 5. Danh sách 100 từ vựng cho bé 3 tuổi

Tôi đã chia 100 từ này thành các nhóm chủ đề quen thuộc để bạn dễ tìm kiếm hình ảnh:

### Nhóm 1: Animals (Động vật - 20 từ)

Dog, Cat, Bird, Fish, Duck, Chicken, Pig, Cow, Horse, Sheep, Lion, Tiger, Elephant, Monkey, Rabbit, Bear, Bee, Frog, Snake, Turtle.

### Nhóm 2: Fruits (Trái cây - 15 từ)

Apple, Banana, Orange, Grapes, Strawberry, Watermelon, Mango, Pineapple, Pear, Peach, Lemon, Coconut, Papaya, Cherry, Kiwi.

### Nhóm 3: Colors (Màu sắc - 10 từ)

Red, Blue, Green, Yellow, Orange, Pink, Purple, Black, White, Brown.

### Nhóm 4: Numbers (Số đếm - 10 từ)

One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten.

### Nhóm 5: Body Parts (Bộ phận cơ thể - 10 từ)

Eye, Nose, Mouth, Ear, Hand, Foot, Head, Arm, Leg, Hair.

### Nhóm 6: Transportation (Phương tiện - 10 từ)

Car, Bus, Bike, Plane, Boat, Train, Truck, Helicopter, Motorbike, Ambulance.

### Nhóm 7: Objects (Đồ vật quanh bé - 15 từ)

Ball, Doll, Book, Pen, Chair, Table, Bed, Cup, Spoon, Hat, Shirt, Shoes, Socks, Umbrella, Key.

### Nhóm 8: Nature & Weather (Tự nhiên - 10 từ)

Sun, Moon, Star, Rain, Cloud, Flower, Tree, Sky, Water, Grass.

---

## 6. Lộ trình triển khai (Roadmap)

1. **Giai đoạn 1:** Khởi tạo project Next.js và thiết lập Tailwind CSS.
2. **Giai đoạn 2:** Tạo file `data.json` với 100 từ vựng trên. Tìm và tải hình ảnh minh họa vào thư mục `/public/images`.
3. **Giai đoạn 3:** Viết Hook `useSpeech` để điều khiển Web Speech API.
4. **Giai đoạn 4:** Xây dựng Component logic cho trò chơi (chọn ngẫu nhiên, kiểm tra đúng/sai).
5. **Giai đoạn 5:** Thêm hiệu ứng Framer Motion (lắc hình) và Confetti.
6. **Giai đoạn 6:** Đẩy mã nguồn lên GitHub và kết nối với Vercel để chạy bản demo web.

---

**Gợi ý nhỏ cho bạn:** Để bé 3 tuổi dễ nhìn, khi làm giao diện bạn nên để các hình ảnh trên nền trắng (hoặc nền tối giản) và kích thước hình ảnh nên chiếm ít nhất 40% màn hình mỗi hình.

Bạn có cần tôi hỗ trợ viết đoạn mã mẫu (code snippet) cho phần **Web Speech API** hoặc hiệu ứng **Rung lắc (Shake)** bằng Tailwind/Framer Motion không?