import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { contextApi } from "../../../contextApi";

export default function CompLogIn() {
  const [id, setId] = useState("");
  const valContext = useContext(contextApi);
  const nav = useNavigate();
  const valid = () => {
    if (id == "12345") {
      nav("/controlPanel");
    } else {
      alert("ID not exixt");
    }
  };
  valContext.setShowNav(false);

  return (
    <div className="logInMain">
      <p>To enter, press 12345</p>
      <input
        type="text"
        placeholder="Enter ID"
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <button onClick={valid}>Enter</button>
    </div>
  );
}
