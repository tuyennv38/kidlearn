# PRD — TinyEnglish: Flashcards cho bé 3 tuổi

## 1. Tổng quan

| Hạng mục | Chi tiết |
|----------|---------|
| **Sản phẩm** | TinyEnglish — ứng dụng web học tiếng Anh qua flashcard |
| **Đối tượng** | Trẻ em 3 tuổi (mầm non) |
| **Mục tiêu** | Nhận diện từ vựng qua hình ảnh + âm thanh |
| **Nền tảng** | Web (responsive, mobile-first) |
| **Mã nguồn** | Open-source trên GitHub |

## 2. Vấn đề cần giải quyết

Trẻ 3 tuổi cần phương pháp học tiếng Anh trực quan, đơn giản, không cần phụ huynh hướng dẫn liên tục. Ứng dụng dùng hình ảnh + giọng đọc tự động để bé tự tương tác.

## 3. Tính năng

### 3.1 Quiz Mode (MVP)
| Yếu tố | Mô tả |
|--------|-------|
| Câu hỏi | Phát âm tự động: *"Where is the [Word]?"* |
| Lựa chọn | 3–4 hình ảnh (1 đúng) |
| Chọn đúng | ✅ Confetti + âm khen ("Amazing!") + auto next (2s) |
| Chọn sai | ❌ Shake animation → cho chọn lại |
| Dữ liệu | Random từ `data.json`, không lặp liên tiếp |

### 3.2 Dữ liệu từ vựng
- **100 từ**, chia **8 chủ đề**: Animals (20), Fruits (15), Colors (10), Numbers (10), Body Parts (10), Transportation (10), Objects (15), Nature (10).
- Lưu trong `public/data.json`.
- Hình ảnh: SVG/PNG icon miễn phí, lưu tại `public/images/{category}/`.

## 4. Tech Stack

| Layer | Công nghệ |
|-------|----------|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Confetti | canvas-confetti |
| Speech | Web Speech API (built-in browser) |
| Data | JSON tĩnh (`data.json`) |
| Deploy | Vercel |
| Dev Port | `3456` |

## 5. Kiến trúc & Cấu trúc thư mục

```
kidlearn/
├── public/
│   ├── data.json              # 100 từ vựng
│   └── images/{category}/     # Icon theo chủ đề
├── src/
│   ├── App.tsx                # Root component
│   ├── main.tsx               # Entry point
│   ├── components/
│   │   ├── QuizCard.tsx       # Card hiển thị hình
│   │   ├── QuizGame.tsx       # Logic quiz chính
│   │   └── ConfettiEffect.tsx # Hiệu ứng pháo hoa
│   └── hooks/
│       └── useSpeech.ts       # Hook Web Speech API
├── docs/                      # Tài liệu dự án
├── index.html                 # Vite entry HTML
├── vite.config.ts
└── tailwind.config.ts
```

## 6. Data Schema

```json
{
  "id": "1",
  "category": "Animals",
  "word": "Dog",
  "image": "/images/animals/dog.png"
}
```

## 7. UX Guidelines

- **Mobile-first**, responsive.
- Hình ảnh chiếm **≥ 40% màn hình** mỗi card.
- Nền tối giản (trắng/pastel), màu sắc tươi sáng.
- Font lớn, bo tròn, thân thiện trẻ em.
- Không quảng cáo, không link ngoài.

## 8. Roadmap

| Phase | Nội dung | Trạng thái |
|-------|---------|-----------|
| 1 | Khởi tạo React + TypeScript (Vite) + Tailwind CSS | ⬜ |
| 2 | Tạo `data.json` + tải icon 100 từ | ⬜ |
| 3 | Hook `useSpeech` (Web Speech API) | ⬜ |
| 4 | Component Quiz Mode (logic đố vui) | ⬜ |
| 5 | Hiệu ứng Framer Motion + Confetti | ⬜ |
| 6 | Deploy GitHub + Vercel | ⬜ |

## 9. Tiêu chí hoàn thành (Definition of Done)

- [ ] Quiz chạy đúng logic: random, kiểm tra đúng/sai.
- [ ] Phát âm tự động hoạt động trên Chrome/Safari.
- [ ] Confetti + shake animation mượt.
- [ ] Responsive trên mobile (≥ 320px).
- [ ] Lighthouse Performance ≥ 80.
- [ ] Deploy thành công trên Vercel.

## 10. Rủi ro & Giới hạn

| Rủi ro | Giải pháp |
|--------|----------|
| Web Speech API không hỗ trợ mọi browser | Fallback: hiển thị text thay vì đọc |
| Bé bấm lung tung | UI đơn giản, chỉ có vùng bấm hình |
| Tốc độ tải hình | Dùng SVG/icon nhẹ, lazy load |
