# 6651071070 – LAB2: ViệcLàm Xanh (Tuyển dụng / tìm việc)

## Biến thể cá nhân hóa (MSSV 6651071070)
- S = 6+6+5+1+0+7+1+0+7+0 = **33**
- D = 33 mod 15 = **3** → Bảng 1: Tuyển dụng / tìm việc (tự tạo data.json)
- F = 70 mod 10 = **0** → Bảng 2: Tìm kiếm + lọc nâng cao (debounce 300ms) · Phân trang · Dark/Light mode (localStorage)
- C = 6 mod 5 = **1** → Bảng 3: Emerald #059669

## Chạy dự án
```bash
npm install
npm run dev        # chạy thử
npx tsc --noEmit   # 0 lỗi
npx eslint .       # 0 lỗi, 0 cảnh báo
npm run test       # test của utils
npm run build
```

## Triển khai
- Vercel/Netlify: import repo, build `npm run build`, output `dist`. Đã có `vercel.json` và `public/_redirects` để route `/item/:id` không bị 404 khi tải lại.

## Lưu ý
- Tailwind chỉ có 2 breakpoint tùy biến (`sm` = 640px, `lg` = 1025px) → đúng 3 vùng: mobile 1 cột, tablet 2 cột, desktop 3 cột.
- `debounce` dùng `never[]` thay cho `any[]` để tuân thủ "không dùng any".
