---
trigger: manual
---

# KidLearn - TinyEnglish Flashcards

## Tech Stack
- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Confetti:** canvas-confetti
- **Speech:** Web Speech API (browser built-in)
- **Deploy:** Vercel
- **Data:** `public/data.json` (100 từ vựng, 8 chủ đề)

## Project Directory
```
d:\Company\Cscmobi\Projects\kidlearn
├── docs/              # Tài liệu (yêu cầu, STATUS.md, CHANGE LOG.md)
├── public/images/     # Hình ảnh flashcard theo category
├── public/data.json   # Dữ liệu từ vựng
├── src/               # React + TypeScript source
│   ├── App.tsx        # Root component
│   ├── main.tsx       # Entry point
│   ├── components/    # React components
│   └── hooks/         # Custom hooks (useSpeech...)
└── .agent/            # Agent rules & workflows
```

## Quy tắc BẮT BUỘC trước & sau mỗi task

### 1. Trước khi code
- **Đọc `docs/STATUS.md`** để biết trạng thái hiện tại của dự án, tránh làm trùng hoặc sai thứ tự.
- **`docs/PRD.md` là tài liệu chính thống.** Đọc lại khi bắt đầu **tính năng mới**. KHÔNG cần đọc lại khi fix bug, refactor, hay edit nhỏ — đừng lãng phí context.

### 2. Sau khi code xong
- **Cập nhật `docs/STATUS.md`** — đánh dấu task vừa hoàn thành, ghi rõ trạng thái mới.
- **Cập nhật `docs/CHANGE LOG.md`** — ghi ngắn gọn: ngày, thay đổi gì, file nào, lý do. Giúp truy vết về sau.
- **Cập nhật `docs/DONE.md`** — ghi lại task đã hoàn thành.

### 3. Test kỹ trước khi trả kết quả
- **LUÔN chạy build & test** trước khi báo hoàn thành.
- Nếu có lỗi, fix xong mới trả kết quả cho user.

### 4. Port mặc định
- **Dùng port `3456`** để chạy dev server local.
- Nếu port đã bị chiếm → **kill process cũ** rồi chạy lại.
- Lệnh: `npx vite --port 3456` hoặc set trong `vite.config.ts`.

### 5. Nguồn hình ảnh / Icon
- Dùng **emoji** hoặc **SVG icon miễn phí** thay vì ảnh thật để nhẹ và dễ quản lý.
- Nguồn icon gợi ý (miễn phí, không cần API key):
  - **OpenMoji**: `https://openmoji.org/` — emoji dạng SVG/PNG, phong cách dễ thương.
  - **Twemoji (Twitter)**: `https://twemoji.twitter.com/` — emoji chuẩn, rõ ràng.
  - **SVG Repo**: `https://www.svgrepo.com/` — kho SVG miễn phí khổng lồ.
  - **Flaticon**: `https://www.flaticon.com/` — icon đa dạng (cần ghi nguồn).
- Lưu vào `public/images/{category}/` theo đúng cấu trúc `data.json`.

### 6. Ghi chú thêm
- Giao diện cho bé 3 tuổi: hình to (≥40% màn hình), nền tối giản, màu sắc tươi sáng.
- Quiz Mode: 3-4 hình, 1 đúng, phát âm "Where is the [Word]?".
- Đúng → confetti + khen + auto next (2s). Sai → shake animation.