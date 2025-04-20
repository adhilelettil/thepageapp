"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link href="/" className="navbar-brand">
            EZBUY
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link
                  href="/"
                  className={`nav-link ${pathname === "/" ? "active" : ""}`}
                  aria-current={pathname === "/" ? "page" : undefined}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/Product"
                  className={`nav-link ${
                    pathname === "/Product" ? "active" : ""
                  }`}
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/About_us"
                  className={`nav-link ${
                    pathname === "/About_us" ? "active" : ""
                  }`}
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/Contact_us"
                  className={`nav-link ${
                    pathname === "/Contact_us" ? "active" : ""
                  }`}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/Cart" className="nav-link" aria-label="Cart">
                  <img
                    height="25px"
                    width="25px"
                    src="/Screenshot 2025-04-14 194510.png"
                    alt="Cart"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}