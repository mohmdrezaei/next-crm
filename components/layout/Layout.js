import Link from "next/link";
import React from "react";

function Layout({ children }) {
  return (
    <>
      <header className="header">
        <h2>next CRM</h2>
        <Link href="/add-customer">Add Customer</Link>
      </header>
      <div className="main">{children}</div>
      <footer className="footer">
       <a>Mohammad Rezaei</a> Next.js Course | CRM Project &copy;
      </footer>
    </>
  );
}

export default Layout;
