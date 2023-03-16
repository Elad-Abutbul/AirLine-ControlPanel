import React from "react";
import { useNavigate } from "react-router-dom";
import CompCardFly from "./comp/CompCardFly";
export default function CardFly(props) {
  const nav = useNavigate();
  return (
    <div>
      <h2>Card Fly</h2>
      <CompCardFly val={props.val} />
      <button
        onClick={() => {
          nav(`/edit/${props.val.id}`);
        }}
      >
        Edit Card Fly
      </button>
    </div>
  );
}
