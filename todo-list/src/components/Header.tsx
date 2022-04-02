import React from "react";

export function Header() {
  const today = new Date();
  const nowDate = today.toLocaleDateString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return (
    <header>
      <img src="" alt="" />
      <h1>Todo-list</h1>
      <span className="date">{nowDate}</span>
    </header>
  );
}

export default Header;
