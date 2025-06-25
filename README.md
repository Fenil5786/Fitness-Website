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

project/ <br>
├── views/ # EJS templates <br>
  &nbsp └──images/ # Static image assets <br>
  └──home.ejs <br>
  └──home.css <br>
  └──login.ejs <br>
  └──signup.ejs <br>
  └──abt.ejs <br>
  └──pr.ejs <br> <br>
├── public/  <br>
  └── style.css <br> <br>
├── src <br>
  └──index.js # Main server file <br>
  └──config.js # MongoDB and schema setup <br>
  └──tempCodeRunnerFile.js <br>



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
```


## 🔒 Environment Setup
Make sure MongoDB is installed and running on your machine. The database used is Login-tut.


## 📄 Pages
/login - Login page

/signup - User registration

/home - Dashboard/homepage after login

/abt - About Us page

/pr - Privacy Policy
