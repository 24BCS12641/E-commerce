ShopZone 🛒
Full Stack E-Commerce Platform
ShopZone is a modern and scalable full-stack e-commerce web application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). It delivers a complete online shopping experience with secure authentication, smooth product browsing, shopping cart management, checkout system, admin controls, and integrated online payments.

Designed with performance, responsiveness, and usability in mind, ShopZone works seamlessly across desktop, tablet, and mobile devices.

🚀 Live Demo
Add your deployed project link here:


https://your-live-demo-link.com
📌 Features
👤 User Features
User Registration & Login

JWT Secure Authentication

Browse All Products

Search Products

Filter by Category / Price

Product Details Page

Add to Cart

Remove from Cart

Update Product Quantity

Save Shipping Address

Checkout Process

Cash on Delivery (COD)

Razorpay Online Payment

Download Invoice as PDF

Order Confirmation

View Order History

Responsive Mobile UI

🛠️ Admin Features
Admin Dashboard

Add New Products

Edit Existing Products

Delete Products

View All Users

Manage Orders

Approve Orders

Cancel Orders

Dashboard Analytics

Inventory Management

🧰 Tech Stack
Frontend
React.js

React Router DOM

Context API

Axios

CSS3

Responsive Design

Backend
Node.js

Express.js

Database
MongoDB Atlas / Local MongoDB

Mongoose ODM

Authentication
JSON Web Token (JWT)

Protected Routes

Payment Integration
Razorpay

Cash on Delivery

Utilities
PDFKit (Invoice Generator)

dotenv

bcryptjs

cors

nodemon

📁 Project Structure

shopzone-ecommerce/
│── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── App.js
│   │   └── index.js
│
│── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
│
│── .env
│── package.json
│── README.md
⚙️ Installation Guide
1️⃣ Clone Repository
Bash

git clone https://github.com/yourusername/shopzone-ecommerce.git
cd shopzone-ecommerce
2️⃣ Install Dependencies
Install Backend
Bash

cd backend
npm install
Install Frontend
Bash

cd ../frontend
npm install
3️⃣ Create Environment Variables
Create a .env file inside backend folder:

env

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
4️⃣ Run Application
Run Backend
Bash

cd backend
npm run server
Run Frontend
Bash

cd frontend
npm start
🌐 Pages Included
Home Page

Products Page

Product Details Page

Cart Page

Checkout Page

Payment Page

Login Page

Register Page

User Orders Page

Admin Dashboard

Product Management Page

🔐 Security Features
JWT Authentication

Password Hashing using bcrypt

Protected API Routes

Secure Payment Verification

Input Validation

Role-Based Access Control

💳 Payment Methods
Cash on Delivery (COD)

Razorpay Online Payment

📄 Invoice System
After successful order placement:

PDF Invoice Generated

Download Invoice

Order Summary Included

📱 Responsive Design
Fully optimized for:

Mobile Devices

Tablets

Laptops

Desktop Screens

📸 Screenshots
Add screenshots inside /screenshots folder.

Markdown

![Home Page](screenshots/home.png)
![Products](screenshots/products.png)
![Cart](screenshots/cart.png)
![Admin Dashboard](screenshots/admin.png)
🚀 Future Enhancements
Wishlist Feature

Product Reviews & Ratings

Coupon Code System

Email Notifications

Real-Time Order Tracking

AI Product Recommendations

Multi Vendor Marketplace

Dark Mode

🤝 Contributing
Contributions are welcome.

Steps:
Bash

1. Fork this repository
2. Create feature branch
git checkout -b feature-name

3. Commit changes
git commit -m "Added new feature"

4. Push branch
git push origin feature-name

5. Open Pull Request
🐞 Known Issues
Add any current bugs here

Example: Razorpay test mode only enabled

📄 License
This project is licensed under the MIT License.

👨‍💻 Author
Sunny Kumar
GitHub: https://github.com/24BCS12641

⭐ Show Your Support
If you like this project, give it a ⭐ on GitHub and share it.

📬 Contact
For any queries or collaboration:

Email: sunnykr851212@gmail.com

GitHub: https://github.com/24BCS12641

