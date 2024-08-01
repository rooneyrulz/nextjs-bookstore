# Bookstore

Welcome to the [Bookstore](https://nextjs-bookstore-hazel.vercel.app/) web application! This project is a responsive web application designed to allow users to browse, search, and purchase books. It features modern web technologies and libraries to ensure a smooth and efficient user experience.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Usage Guide](#usage-guide)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Features:**
  - Browse a list of books with titles, authors, covers, and other relevant information.
  - Search functionality to find books by title or author.
  - Sorting options for the book list by title, author, or other criteria.
  - Filter options to refine the book list by category, price range, or other relevant criteria.
  - View detailed information about each book.
  - Add books to the shopping cart, view the contents, update quantities, and remove items.
  - Checkout process with form validation for shipping details using Zod.
  - Payment options including Stripe checkout with card, Google Pay, and iPay methods.
  
- **Admin Features:**
  - Login as admin to manage the bookstore.
  - Publish new books and update existing book details.

## Technologies Used

- **Next.js 14**: For SSR, CSR, server actions, and overall framework support
- **React**: For building the user interface
- **Prisma ORM**: For interacting with MongoDB Atlas
- **NextAuth**: For authentication, including Google SSO login and admin login
- **Zustand**: For efficient state management
- **Mantine UI**: For UI components, styled with TailwindCSS
- **React-Hook-Form and Zod**: For robust form validation
- **Stripe**: For payment processing

## Setup Instructions

- **Prerequisites**

Ensure you have the following installed:

- [Node.js (>= 18.x)](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

- **Installation**

1. Clone the repository:

```bash

git clone https://github.com/rooneyrulz/nextjs-bookstore.git
cd nextjs-bookstore

```

2. Install dependencies:

```bash

npm install

OR

yarn install

```

3. Set up environment variables:

- Rename the env.example file to .env or .env.local and set up all the following environment variables according to your configuration:

```bash

DATABASE_URL=

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

NEXT_PUBLIC_STRIPE_PUBLIC_KEY=
STRIPE_SECRET_KEY=

```

- Do not forget to setup your Auth profile on [Google Cloud Console](https://console.cloud.google.com) if you want to use Google Auth Login.

4. Running the Application

- Start the development server:

```bash

npm run dev

OR

yarn run dev

```

5. Open your favorite browser

- Navigate to http://localhost:3000 to see the application in action.

## Usage Guide

- **Browsing Books**

- The homepage displays a list of books with titles, authors, covers, and other relevant information.
- Use the search bar to find books by title or author.
- Use the sort and filter options to refine the book list based on your criteria.
- Click on a book to view detailed information.

- **Shopping Cart**

- Add books to the shopping cart by clicking the "Add to Cart" button.
- View the contents of your cart, update quantities, or remove items as needed.
Checkout
- Proceed to checkout by clicking the "Checkout" button in the cart.
- Complete the purchase using Stripe, Google Pay, or iPay methods.

- **Admin Login**

To login as admin:

- Username: admin
- Password: admin

## Deployment

- The application is hosted on Vercel. You can view the live demo at [Bookstore](https://nextjs-bookstore-hazel.vercel.app/).

### Deploying to Vercel

1. Install Vercel CLI:

```bash

npm i -g vercel

```

2. Deploy:

```bash

vercel

```

## Contributing

- Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Commit your changes (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature-branch).
5. Open a pull request.

## License

- This project is licensed under the MIT License. See the LICENSE file for more information.