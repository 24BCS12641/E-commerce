const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

dotenv.config();

const app = express();


// ==============================
// MIDDLEWARE
// ==============================
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));


// ==============================
// STATIC UPLOADS FOLDER
// ==============================
app.use(
  "/uploads",
  express.static(
    path.join(
      __dirname,
      "uploads"
    )
  )
);


// ==============================
// DATABASE CONNECTION
// ==============================
mongoose.connect(
  process.env.MONGO_URI
)
.then(() => {
  console.log(
    "MongoDB Connected"
  );
})
.catch((error) => {
  console.log(error);
});


// ==============================
// ROUTES
// ==============================

// USER ROUTES
app.use(
  "/api/users",
  require("./routes/userRoutes")
);

// PRODUCT ROUTES
app.use(
  "/api/products",
  require("./routes/productRoutes")
);

// ORDER ROUTES
app.use(
  "/api/orders",
  require("./routes/orderRoutes")
);
app.use(express.json());
app.use("/api/payment", 
    require("./routes/paymentRoutes")
);

// IMAGE UPLOAD ROUTES
app.use(
  "/api/upload",
  require("./routes/uploadRoutes")
);


// ==============================
// HOME ROUTE
// ==============================
app.get("/", (req, res) => {
  res.send(
    "E-commerce API Running..."
  );
});


// ==============================
// ERROR HANDLER
// ==============================
app.use((req,res)=>{
  res.status(404).json({
    message:"Route Not Found"
  });
});



// ==============================
// SERVER START
// ==============================
const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});