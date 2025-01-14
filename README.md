# Smart Agriculture Management System

This is a MERN stack-based **Smart Agriculture Management System** designed to help farmers monitor, manage, and analyze field data. The project includes user authentication, field management, AI integration, data visualization, and a subscription-based payment gateway.

---

## Features

### 1. User Authentication
- Secure login and signup system using **JWT** for token-based authentication.
- Role-based access control (e.g., **Admin**, **Farmer**).

### 2. Field Management
- Dashboard for farmers to **add, update, and delete field data**.
- Includes the following field attributes:
  - Field Name
  - Location (latitude/longitude)
  - Crop Type
  - Area Size

### 3. AI Integration
- Dummy AI endpoint integrated to simulate:
  - **Soil health analysis**
  - **Crop health analysis**
- AI-generated insights displayed on the dashboard.

### 4. Data Visualization
- Charts to visualize:
  - Crop yield trends
  - Health statistics

### 5. Payment Gateway
- Integrated a payment gateway (**Razorpay** or **Stripe**) for subscription-based features.
- Stores transaction history in the database.

### 6. Responsive Design
- Mobile-friendly design.
- UI built using **Tailwind CSS** or **Material-UI**.

---

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Deployment**: Render (for backend), Netlify (for frontend)

## Installation

To run the app locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/thisisnitishyadav/Agriculture-Management-App.git
cd agriculture-app
```
### 2. Set up the Backend

- Go to the `backend` directory:
  
```bash
cd backend
```

- Install Dependencies:
 ```bash
  npm install
 ```

- Create a .env file and add the required environment variables:
```bash
touch .env
```

- Add env variables:
```bash
PORT=5001;
NODE_ENV=development;
MONGO_URI=your-mongo-database-url;
JWT_SECRET=your jwt secret;
RAZORPAY_KEY_ID=your razorpay id;
RAZORPAY_KEY_SECRET=your razorpay secret;
```

- Start the Server
```bash
npm run dev
```
### 3. Setup Frontend

- Go to the `frontend` directory:
```bash
cd frontend
```

- Install Dependencies:
 ```bash
  npm install
 ```

- Create a .env file and environment variable:
```bash
touch .env
```

- Add env variables:
```bash
REACT_APP_URL=http://localhost:5001
```
- Start the frontend
```bash
npm start
```
