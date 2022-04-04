import React from "react";
import { useChecked } from "../App";
export function Header() {
  const { checked }: any = useChecked();

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
      <br />
      <label className="checkbox-container">
        <span>Parabéns, você concluiu {checked} de suas atividades</span>
        <input type="checkbox" readOnly checked={checked} />
      </label>
    </header>
  );
}

export default Header;
