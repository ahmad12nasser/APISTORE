import React from "react";
import "../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [pages, setPages] = useState(["Home", "About", "Contact"]);

  function addPage() {
    const newPages = [...pages, "New Page"];
    setPages(newPages);
  }

  return (
    <nav>
      <ul>
        <li>
          <Link to="/" style={{ color: "white", font_Style: "italic" }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" style={{ color: "white", font_Style: "italic" }}>
            Products
          </Link>
        </li>
        <li>
          <Link to="/Cart"></Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
