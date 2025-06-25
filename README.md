# 💪 FitLife - Fitness Web Application

Welcome to **FitLife**, a modern fitness web application designed to help users live a healthier life. This platform allows users to sign up, log in, and explore various fitness programs, classes, blogs, and more.

## 🚀 Features

- User authentication (Sign up/Login)
- Responsive homepage with class offerings
- Informative sections: About Us, Blog, Contact
- Privacy Policy page
- Clean UI using EJS, CSS, and images
- MongoDB integration with Mongoose
- Password hashing with bcrypt

## 📂 Project Structure

project/
├── views/ # EJS templates
  └──images/ # Static image assets
  └──home.ejs
  └──home.css
  └──login.ejs
  └──signup.ejs
  └──abt.ejs
  └──pr.ejs
├── public/ 
  └── style.css
├── src
  └──index.js # Main server file
  └──config.js # MongoDB and schema setup
  └──tempCodeRunnerFile.js



## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, EJS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose)
- **Authentication**: bcrypt for password encryption

## 🧪 Installation & Run

1. Clone the repository:

   ```bash
   git clone https://github.com/Fenil5786/Fitness-Website
   cd Fitness-Website
   
2. Install Dependencies
   ```bash
   npm install

3. Make sure MongoDB is running locally on port 27017:

   ```bash
   mongod

4.Run the server:

   ```bash
   node index.js


## 🔒 Environment Setup
Make sure MongoDB is installed and running on your machine. The database used is Login-tut.

You may choose to extract sensitive credentials to a .env file in production.

## 📄 Pages
login - Login page

signup - User registration

home - Dashboard/homepage after login

abt - About Us page

pr - Privacy Policy
