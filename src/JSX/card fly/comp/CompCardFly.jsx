import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/cardFly.css";
export default function CompCardFly(props) {
  let onAir = props.val.onAir ? "green" : "red";
  return (
    <div className="container">
      <Link to={`/cardFly/${props.val.id}`}>
        <div style={{ background: onAir }} className="iteam">
          <h3 className="h3Margin">id: {props.val.id}</h3>
          <h3 className="h3Margin">company: {props.val.company}</h3>
          <h3 className="h3Margin">seats: {props.val.seats}</h3>
        </div>
      </Link>
    </div>
  );
}
