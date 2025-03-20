
# Project Title:  
**E-Commerce Website**

---

## Project Overview:  
This project is all about creating a fully functional e-commerce website where users can browse products, add them to their cart, and complete purchases securely. It’s a platform designed to simulate real-world online shopping experiences while providing a space to learn key web development skills. The project focuses on creating a user-friendly and visually appealing interface backed by a robust and scalable backend.

---

## Key Features:  

- **User Authentication:**  
  Allow users to sign up, log in, and manage their accounts securely.  

- **Product Catalog:**  
  Display a dynamic catalog of products with details like name, price, and description.  

- **Search and Filter:**  
  Enable users to search for products and apply filters like price range or category.  

- **Cart System:**  
  Let users add items to their cart, view the total, and proceed to checkout.  

- **Order Management:**  
  Users can view their order history and track ongoing orders.  

- **Admin Panel:**  
  Admins can add, edit, or delete products and manage user orders.  

- **Interactive Frontend:**  
  A responsive and engaging UI to ensure a smooth shopping experience.  

- **Payment Integration:** *(Optional)*  
  Integrate a payment gateway for secure transactions.  

---

## Tech Stack:  

- **Frontend:** React with Vite for a fast and responsive user interface.  
- **Backend:** Node.js with Express to handle server-side logic.  
- **Database:** MongoDB for storing user and product data.  
- **Authentication:** Secure user authentication using JSON Web Tokens (JWT).  
- **Hosting:** Netlify for the frontend and Render for the backend.  
- **API:** RESTful APIs for communication between the frontend and backend.  


## Milestones

### Milestone 1: Repository Creation

* Created a GitHub repository named "Ecommerce-Follow-Along" with a README file.

### Milestone 2: Initial Setup & Login Page

* Pushed code to the GitHub repository.
* Set up separate folders for frontend and backend.
* Developed a functional Login Page for the frontend.

### Milestone 3: Project Setup & Foundation

* Established project structure, set up database connection, and implemented basic error handling.

### Milestone 4: User Authentication & File Uploads

* Implemented user registration, login, and file upload functionalities.
* Integrated user authentication and authorization middleware.

### Milestone 5: User Signup

* Created the Signup page with form validation.

### Milestone 6: Password Encryption & Data Storage

1. **Encrypt Password:**
    * Hash the user's password with `bcrypt` during signup.
    * Store the hashed password securely in the database.

2. **Store User Data:**
    * Save user data (e.g., name, email) in the database, ensuring the password remains encrypted.

### Milestone 7: Login Endpoint

1. **Accept User Credentials:** Receive email/username and password from the user.
2. **Retrieve User:** Query the database for the user matching the provided credentials.
3. **Password Validation:**
    * Hash the entered password with `bcrypt`.
    * Compare the hashed password with the stored hashed password in the database.
    * Authentication is successful if they match.

### Milestone 8: Product Card & Homepage Layout

* Created a reusable Card Component with props for product details.
* Designed the Homepage layout using a grid or flexbox to display multiple product cards.

### Milestone 9: Product Form Creation

1. **Create Product Form:**
   - Make a form for adding product details like name, description, price, and images.

2. **Image Uploads:**
   - Allow users to upload multiple images for the product.

3. **Form Validation:**
   - Check that the form fields are filled correctly (e.g., price is a number, name is not empty).

### Milestone 10: Product Schema & Endpoint

1. **Product Schema:**
   - Define product details (name, description, price, image URL) using Mongoose with validation.

2. **Endpoint Creation:**
   - Create a POST endpoint to save product data to MongoDB.

3. **Why Validation?**
   - Ensures only valid data is saved, keeping the database accurate.


### Milestone 11: Display Products Dynamically

1. **Backend:**
   - Create an endpoint to send all product data from MongoDB to the frontend.

2. **Frontend:**
   - Write a function to fetch product data from the backend.
   - Pass the fetched data to the product card component.

3. **Dynamic Display:**
   - Use the product card component to display all products dynamically on the page.

### Milestone 12: Filter Products by User Email

1. **Backend:**
   - Create an endpoint to send products filtered by user email from MongoDB.

2. **Frontend:**
   - Write a function to fetch filtered data from the backend.
   - Pass the data to the product card component.

3. **Dynamic Display:**
   - Use the product card component to display the filtered products dynamically.


### Milestone 13: Update Existing Data

1. **Backend:**
   - Create an endpoint to update existing product data in MongoDB.

2. **Frontend:**
   - Add an edit button to the product card.
   - On click, send the product data to a form, auto-fill the fields, and allow editing.

3. **Dynamic Update:**
   - After editing, save the updated data back to MongoDB.


### Milestone 14: Delete Product by ID

1. **Backend:**
   - Create an endpoint to delete a product from MongoDB using its ID.

2. **Frontend:**
   - Add a delete button to the product card.
   - On click, send the product ID to the backend for deletion.

3. **Dynamic Update:**
   - Remove the deleted product from the UI without refreshing the page.


### Milestone 15: Responsive Navbar  

1. **Create Navbar Component:**  
   - Add links for Home, My Products, Add Product, and Cart.  

2. **Make It Responsive:**  
   - Ensure the navbar works well on all screen sizes.  

3. **Integrate with Pages:**  
   - Add the navbar to all pages for smooth navigation.  


## Milestone 16: Product Info Page

### Learning Goals  
- Create a new page to display product details.  
- Add a quantity selector and "Add to Cart" button.  

### Steps  
1. Build a new page to display product data.  
2. Add quantity selection and "Add to Cart" button.  

---

## Milestone 17: Add to Cart Backend

### Learning Goals  
- Modify the user schema to store cart products.  
- Create an endpoint to add products to the cart.  

### Steps  
1. Update the user schema to include cart products.  
2. Write an endpoint to store product details in the cart.  

---

## Milestone 18: Fetch Cart Products

### Learning Goals  
- Create an endpoint to retrieve products from the user's cart.  

### Steps  
1. Build a backend endpoint to fetch cart products using the user’s email.  
2. Integrate with the cart page.  

---

## Milestone 19: Cart Page UI & Quantity Update  

### Learning Goals  
- Create a frontend cart page to display products.  
- Add + and - buttons to adjust quantity.  
- Write an endpoint to update quantity.  

### Steps  
1. Design the cart UI and display cart products.  
2. Implement + and - buttons for quantity control.  
3. Write an endpoint to update product quantity in the cart.  

---

## Milestone 20: Profile Page  

### Learning Goals  
- Build a backend endpoint to fetch user data.  
- Create a frontend profile page to display user info.  

### Steps  
1. Develop a backend endpoint to send user data.  
2. Create a profile page displaying photo, name, and email.  
3. Show address section with an "Add Address" button.  
4. If no address is found, display "No address found."  


## Milestone 21: Address Form Page  

### Learning Goals  
- Create a form to collect address details.  
- Store input values using React state.  
- Navigate to the form when "Add Address" is clicked.  

### Steps  
1. **Create Address Form Page** – Add fields for country, city, address1, address2, zip code, and address type.  
2. **Manage State** – Store input values using state.  
3. **Navigation** – Clicking "Add Address" in the profile page should open this form.  


## Milestone 22: Save Address in Database  

### Learning Goals  
- Create a backend endpoint to store the address in the user profile.  

### Steps  
1. **Create Backend Endpoint** – Receive address data from the frontend form.  
2. **Update User Collection** – Add the address to the address array inside the user collection.  

## Milestone 23: Select Address & Order Schema  

### Learning Goals  
- Add a "Place Order" button in the cart.  
- Create a select address page in the frontend.  
- Write an order schema in the backend.  

### Steps  
1. **Add Place Order Button** – Inside the cart page, navigate to the select address page when clicked.  
2. **Create Select Address Page** – Display all saved addresses and allow the user to choose one.  
3. **Backend Endpoint** – Create an endpoint to fetch all addresses of the user.  
4. **Write Order Schema** – Define a schema in Mongoose to store order details.  

# Milestone 24: Select Address Page  

## Learning Goals  
- Fetch and display saved addresses.  
- Allow users to select a delivery address.  
- Integrate address selection with order placement.  

## Steps  
1. **Fetch Addresses** – Get user addresses using `/api/v1/profile/getProfile`.  
2. **Display Addresses** – Show addresses with radio buttons for selection.  
3. **Confirm Selection** – Add a "Confirm Address" button to proceed to order confirmation.  

---

# Milestone 25: Order Confirmation Page  

## Learning Goals  
- Show selected address and cart details.  
- Provide an option to place an order.  

## Steps  
1. **Fetch Cart Items** – Display cart products using `/getCart`.  
2. **Show Address** – Display the selected delivery address.  
3. **Place Order** – Add a "Place Order" button to send order data to `/api/v1/orders/create`.  

---

# Milestone 26: Fetch User Orders  

## Learning Goals  
- Retrieve user orders using email.  
- Display past orders in the frontend.  

## Steps  
1. **Backend Update** – Modify `/api/v1/orders/user-orders` to accept `userEmail`.  
2. **Fetch Orders** – Retrieve orders using `_id` mapped from `userEmail`.  
3. **Sort & Display** – Sort orders by `createdAt` and populate product details.  

---

# Milestone 27: My Orders Page  

## Learning Goals  
- Show order history for users.  
- Provide easy access to past orders.  

## Steps  
1. **Create MyOrders Page** – Fetch and display user orders.  
2. **Navigation** – Add a "My Orders" link in the navbar.  
3. **Improve UI** – Show order status, date, and total amount.  

---

# Milestone 28: Order Cancellation  

## Learning Goals  
- Allow users to cancel orders.  
- Update order status dynamically.  

## Steps  
1. **Update MyOrders Page** – Add a "Cancel Order" button for eligible orders.  
2. **Create Backend Endpoint** – Add `PUT /api/v1/orders/cancel/:orderId`.  
3. **Update Status** – Change order status to "Cancelled" upon request.  

---

# Milestone 29: Payment Options Setup  

## Learning Goals  
- Prepare for payment integration.  
- Navigate users to a payment options page.  

## Steps  
1. **Modify Order Confirmation** – Navigate to `/payment-options` on "Place Order".  
2. **Pass Order Details** – Send cart items, subtotal, and address to the payment page.  
3. **Prepare UI** – Add radio buttons for "Cash on Delivery" and "Online Payment".  

---

# Milestone 30: Payment Integration  

## Learning Goals  
- Implement PayPal payment integration.  
- Support multiple payment methods.  

## Steps  
1. **Create PaymentOptions Page** – Show payment choices to users.  
2. **Integrate PayPal** – Use `@paypal/react-paypal-js` for online payments.  
3. **Save Order on Success** – Call `/api/v1/orders/create` after successful payment.  
4. **Redirect on Completion** – Navigate to `/order-success` after order placement.  


# Milestone 31: Redux Setup  

## Learning Goals  
- Implement Redux for global state management.  
- Store user email in Redux instead of localStorage.  

## Steps  
1. **Install Redux** – Installed `react-redux` and created a `store` folder.  
2. **Configure Store** – Set up `store.js` with `userReducer` to manage email state.  
3. **Define Actions** – Created `setEmail` function in `userActions.js`.  
4. **Integrate Redux** – Wrapped `App` with `Provider` in `main.jsx`.  

---

# Milestone 32: Redux Email Management  

## Learning Goals  
- Store and retrieve user email using Redux.  
- Eliminate redundant email storage in localStorage and URL params.  

## Steps  
1. **Update Login Page** – Used `useDispatch` to store email in Redux after login.  
2. **Use Redux in Components** – Modified `OrderConfirmation`, `PaymentOptions`, and `MyOrders` to access email via `useSelector`.  
3. **Remove Redundant Storage** – Removed `localStorage.setItem("userEmail")`.  
4. **Add Authentication Check** – Redirected unauthenticated users to login.  

---

# Milestone 33: JWT Authentication  

## Learning Goals  
- Implement JWT-based authentication with cookies.  
- Secure authentication using `httpOnly` cookies.  

## Steps  
1. **Install jsonwebtoken** – Added `jsonwebtoken` to the backend.  
2. **Generate JWT** – Updated `loginUser` to create a token with `jwt.sign`.  
3. **Set Expiration & Cookie** – Configured a 1-hour expiration and sent the token via `res.cookie`.  
4. **Update Frontend** – Removed `localStorage.setItem("token")`, relying on cookies instead.  

---

# Milestone 34: Cookie-Based Authentication  

## Learning Goals  
- Secure authentication with middleware and `httpOnly` cookies.  
- Persist Redux state across refreshes.  

## Steps  
1. **Create Middleware** – Added `authenticateToken` to validate `authToken`.  
2. **Protect Routes** – Applied middleware to `/getCart` and `/getProfile`.  
3. **Update Profile Feature** – Used `req.user.id` to fetch profile data.  
4. **Enable Cookies in Requests** – Set `credentials: "include"` in fetch calls.  
5. **Persist Redux State** – Added `redux-persist` to store user email across refreshes.  
6. **Handle Unauthorized Access** – Redirected users to login on `401/403` errors.  


