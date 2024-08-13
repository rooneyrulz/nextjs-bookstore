import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthProvider from "./context/AuthProvider";
import Navbar from "./navbar/Navbar";
import "./globals.css";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bookstore",
  description: "Simple E-commerce Bookstore",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar/>
        <main className="p-4 max-w-7xl m-auto min-w-[300px]">{children}</main>
        </AuthProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
