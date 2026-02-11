# Kế hoạch & Thực hiện - KidLearn TinyEnglish

Tài liệu này tổng hợp lại quá trình triển khai dự án dựa trên yêu cầu từ [PRD.md](docs/PRD.md).

## 1. Tổng quan
Dự án **KidLearn TinyEnglish** là ứng dụng web học tiếng Anh qua Flashcard dành cho trẻ 3 tuổi, tập trung vào giao diện đơn giản, màu sắc tươi sáng và tương tác thú vị.

## 2. Công nghệ sử dụng (Đã triển khai)
- **Framework:** React 18 + TypeScript.
- **Build Tool:** Vite (Tối ưu tốc độ dev & build).
- **Styling:** Tailwind CSS (Font Nunito, Custom Animations).
- **Effects:** 
  - `framer-motion`: Animation rung lắc (shake), hover.
  - `canvas-confetti`: Hiệu ứng pháo giấy khi thắng.
- **Audio:** Web Speech API (Giọng đọc native của trình duyệt).
- **Deployment:** Vercel (Frontend Hosting) + GitHub (Source Control).

## 3. Lộ trình đã thực hiện (Execution Log)

### Giai đoạn 1: Khởi tạo & Cấu hình
- [x] Init project với bộ khung React + Vite + TS.
- [x] Cấu hình `package.json`, `tsconfig`, `vite.config.ts`.
- [x] Thiết lập `Tailwind CSS` với bộ màu pastel và font chữ trẻ em.

### Giai đoạn 2: Dữ liệu (Models & Data)
- [x] Định nghĩa Interface `WordItem`.
- [x] Tạo file dữ liệu tĩnh `public/data.json` (100 từ vựng + Emoji chuẩn).
- [x] Tối ưu hóa việc load dữ liệu bằng `fetch` tại `App.tsx`.

### Giai đoạn 3: Core Features (MVP)
- [x] **Hook `useSpeech`:** 
  - Tự động phát âm khi vào câu hỏi.
  - Hỗ trợ click để nghe lại.
- [x] **Component `QuizGame`:** 
  - Logic chọn 1 đáp án đúng + 3 đáp án sai ngẫu nhiên.
  - Xử lý trạng thái Đúng/Sai.
  - Tự động chuyển câu (Delay 1.5s).
- [x] **Component `QuizCard`:**
  - Hiển thị thẻ bài to, rõ ràng.
  - Feedback hình ảnh (Shake animation).

### Giai đoạn 4: UI/UX & Polish
- [x] Thêm hiệu ứng `Confetti` nổ tung khi trả lời đúng.
- [x] Thêm Header hiển thị điểm số (Score) và Số câu (Round).
- [x] Responsive layout (Mobile-first).

### Giai đoạn 5: Deployment
- [x] Tạo Repo GitHub: `https://github.com/tuyennv38/kidlearn`
- [x] Deploy Vercel: `https://kidlearn-tau.vercel.app`

## 4. Cấu trúc thư mục
```
kidlearn/
├── public/
│   └── data.json       # Dữ liệu từ vựng
├── src/
│   ├── components/     # QuizGame, QuizCard, ConfettiEffect
│   ├── hooks/          # useSpeech
│   ├── App.tsx         # Main layout
│   └── index.css       # Tailwind imports & Custom styles
├── docs/               # Tài liệu dự án (PRD, STATUS, etc.)
└── PLAN.md             # File này
```

## 5. Hướng mở rộng (Next Steps)
- [ ] Thêm âm thanh hiệu ứng (Sound FX) cho đúng/sai ngoài giọng đọc.
- [ ] Màn hình "Game Over" hoặc "Hoàn thành bài học".
- [ ] Chế độ chọn chủ đề (Animals, Colors, Numbers).
