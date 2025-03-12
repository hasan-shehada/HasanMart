HasanMart - E-Commerce Web Application

Project Overview

HasanMart is a web-based e-commerce application built using React.js for the frontend and Express.js for the backend. The application provides users with a seamless shopping experience, allowing them to browse products, add items to their cart, and complete purchases.

Since my primary expertise is in frontend development, I created a simple backend using Node.js, Express.js, and a local JSON file to simulate a product database. This setup allowed me to build a functional API for fetching product data without requiring a full-fledged database.

To handle cross-origin requests, I used CORS (Cross-Origin Resource Sharing) to allow the frontend to communicate with the backend without restrictions.

Technologies Used

Frontend

React.js – Main framework for building the user interface.

Material-UI (MUI) – Used for styling and UI components.

Context API + useReducer – State management for handling user data and shopping cart logic.

Backend

Express.js – Lightweight Node.js framework for handling API requests.

body-parser – Middleware for parsing request bodies.

nodemon – Used for automatic server restarts during development.

CORS – Middleware to handle cross-origin requests.

Data Storage

A local JSON file acts as a mock database containing approximately 90 product objects.

localStorage is used to store user data, including authentication and purchase history.

Application Features

Authentication

The app starts with a Login/Sign-Up page.

Users must provide:

First name (required)

Last name (optional)

Unique username

Valid email

Password (minimum 8 characters)

If any field is invalid, an error message is displayed.

Upon successful registration, a user object is stored in localStorage.

Returning users are automatically recognized via localStorage authentication.

Homepage & Product Listing

The homepage consists of:

Navigation bar

Banner section

Product grid with category filters

Pagination (maximum 12 products per page)

Clicking on a product image or title navigates to a detailed product page.

Footer

A footer section is present on all pages, containing:

Quick links for navigation.

Social media icons for external connections.

Shopping Cart

Users can add products to their cart (only if logged in).

Inside the Cart Page, users can:

Increase/decrease the quantity of items.

Remove products from the cart.

Proceed to checkout.

Checkout & Order History

Upon checkout, the purchased items are added to the user's order history in localStorage.

A confirmation page appears after checkout or logout, implemented using react-confirm-alert.

The Profile Page displays:

User details.

Purchase history (with total spending).

Options to update first name, last name, and email (username and password cannot be changed).

Challenges & Solutions

1. Managing Reducer Logic

Initially, I included excessive logic inside my reducer function, breaking the principle of pure reducers.

I refactored by moving complex logic into React components, keeping the reducer clean.

2. Image Display Handling

Ensuring that product images were displayed correctly on different screen sizes was tricky.

I experimented with various CSS properties to maintain aspect ratios and prevent excessive cropping.

3. Backend Development as a Frontend Developer

Since backend development is not my main expertise, setting up API endpoints was a learning experience.

I faced some difficulties handling Express routes but managed to build a basic but functional REST API.

Deployment Process

To make HasanMart accessible online, I deployed both the frontend and backend using the following services:

Backend: Deployed on Render, as it provides free hosting and is accessible in my region (Syria).

Frontend: Deployed on Cloudflare Pages for reliable and fast static hosting.

Version Control: The full project (both frontend and backend) was uploaded to GitHub using Git Bash for version control and deployment.

Feature Decisions & Future Improvements

Initially, I planned to include product addition, editing, and deletion features.

However, I decided to focus solely on purchasing functionality for the following reasons:

A buy-only store structure made more sense for an e-commerce platform.

Managing image uploads and database storage for new products would require a more advanced backend solution.

Given my limited backend experience, implementing a secure and scalable API for CRUD operations was beyond the scope of this project.

These advanced features may be added in a future update or as a separate project.