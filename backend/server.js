const express =require('express');
const app=express();
const connectDB =require('./config/db');
const dotenv=require('dotenv');
const cors=require('cors');
const morgan = require('morgan');
const authRoutes=require('./routes/authRoutes');
const fieldRoutes=require('./routes/fieldRoutes');
const paymentRoutes=require('./routes/paymentRoutes');

//load env
dotenv.config();

//connect db
connectDB();

//set port no
const PORT= process.env.PORT || 5001;

//middleware
app.use(cors());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());

//routes
app.use('/api/auth',authRoutes);
app.use('/api/field',fieldRoutes);
app.use('/api/payment',paymentRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Server error', error: err.message });
  });

//start server
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})