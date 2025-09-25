Local Passport Website - RUN BY YOURSELF

Mục đích:  
Test website authentication với Passport.js + EJS views

**SETUP:**

1. Chạy MongoDB:  
    `net start MongoDB`
2. Chạy server:  
    `node app.js` (port 3000)
3. Mở browser:  
    http://localhost:3000

---

**PROJECT OVERVIEW:**

- Full-stack web app với EJS templates  
- Passport.js Local Strategy  
- Session-based authentication  
- Complete user registration/login flow  
- Protected routes with redirects  

---

**CÁCH CHẠY TỰ ĐỘNG:**

**BƯỚC 1: KHỞI ĐỘNG SERVER**  
Chạy: `node app.js`  
Kết quả: Server running on http://localhost:3000  
Database: passportAuth (MongoDB)

**BƯỚC 2: TRUY CẬP WEBSITE**  
Mở browser: http://localhost:3000  
Sẽ tự động redirect đến: http://localhost:3000/login  
![alt text](public/img/1.png)

**BƯỚC 3: THỬ REGISTER USER MỚI**  
Click link "Register" hoặc vào: http://localhost:3000/register  
Register page  
![alt text](public/img/2.png)

Điền form:  
- Username: testuser  
- Password: testpass123  
Click "Register"  
Kết quả: Redirect về login page

Sau khi register  
![alt text](public/img/3.png)

**BƯỚC 4: THỬ LOGIN SAI THÔNG TIN**  
Ở login page:  
- Username: wronguser  
- Password: wrongpass  
Click "Login"  
Kết quả: Quay lại login page (authentication failed)  
![alt text](public/img/4.png)  
![alt text](public/img/5.png)  
Login failed

**BƯỚC 5: LOGIN ĐÚNG THÔNG TIN**  
Ở login page:  
- Username: testuser  
- Password: testpass123  
Click "Login"  
Kết quả: Redirect đến profile page  
![alt text](public/img/6.png)

**BƯỚC 6: XEM PROFILE PAGE (PROTECTED ROUTE)**  
URL: http://localhost:3000/profile  
Hiển thị thông tin user đã login  
Có nút Logout  
![alt text](public/img/7.png)

**BƯỚC 7: TEST DIRECT ACCESS KHI CHƯA LOGIN**  
Mở incognito/private window  
Truy cập: http://localhost:3000/profile  
Kết quả: Tự động redirect về login page  
![alt text](public/img/8.png)  
![alt text](public/img/9.png)

**BƯỚC 8: LOGOUT**  
Ở profile page, click "Logout"  
Kết quả: Redirect về login page  
Session bị xóa  
![alt text](public/img/10.png)  
![alt text](public/img/11.png)

**BƯỚC 9: VERIFY LOGOUT**  
Thử truy cập lại: http://localhost:3000/profile  
Kết quả: Redirect về login page (không còn session)  
![alt text](public/img/12.png)

**BƯỚC 10: KIỂM TRA MONGODB**  
Mở MongoDB Compass  
Database: passportAuth  
Collection: users  
Xem user data đã tạo  
![alt text](public/img/m1.png)

---

**WEBSITE FLOW:**  
`/` (root) → redirect → `/login`  
`/register` → form → POST → redirect `/login`  
`/login` → form → POST → redirect `/profile` (success) hoặc `/login` (failed)  
`/profile` → protected → redirect `/login` (nếu chưa auth)  
`/logout` → destroy session → redirect `/login`

---

**PASSPORT FEATURES TRONG WEBSITE:**

- `successRedirect`: Tự động chuyển trang khi login thành công  
- `failureRedirect`: Quay lại login khi thất bại  
- `isAuthenticated` middleware: Bảo vệ route  
- `req.user`: Available trong EJS templates  
- Session persistence: User login 1 lần, có thể reload page

---

**EJS TEMPLATES:**

- `login.ejs`: Form login với username/password  
- `register.ejs`: Form register user mới  
- `profile.ejs`: Hiển thị user info, có logout button  
