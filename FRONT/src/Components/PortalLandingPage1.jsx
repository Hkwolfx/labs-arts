import React from "react";
import "./style.css"
import logo from "../Layouts/hmgbg.jpeg";

export default function PortalLandingPage1() {
  return (
    <div className="card">
      <img class="card__img" src={logo} alt="" />
      <div class="text">
        <div class="red card__title">
          <h3>Labs-Arts</h3>
        </div>
        <div class="dark card__title">
          <h3 class="small">Vers le Hall d'Entrée</h3>
        </div>
      </div>
    </div>
  );
}
