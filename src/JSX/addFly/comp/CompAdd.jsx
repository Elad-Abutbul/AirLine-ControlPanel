import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { contextApi } from "../../../contextApi";
import "../../../styles/addFly.css";
import Title from "../../title/Title";
export default function CompAdd(props) {
  const [id, setId] = useState(props.url == "edit" ? props.val.id : "");
  const [company, setCompany] = useState(
    props.url == "edit" ? props.val.company : ""
  );
  const [seats, setSeats] = useState(
    props.url == "edit" ? props.val.seats : ""
  );
  const [onAir, setOnAir] = useState(
    props.url == "edit" ? props.val.onAir : ""
  );
  const nav = useNavigate();
  const valContext = useContext(contextApi);
  const valid = () => {
    if (valContext.allFlyes.find((val) => val.id == id) && props.url == "add") {
      alert("id exixt");
    } else if (id === "" || company === "" || seats === "" || onAir === "") {
      alert("fields are missing");
    } else if (id.length != 5 || !Number(id)) {
      alert("ID must be 5 numbers");
    } else if (!/^[a-zA-Z]+$/.test(company) || company.length > 10) {
      alert("company must be only letters");
    } else if (!Number(seats) || seats < 1 || seats > 500) {
      alert("Seats can range from 1-500");
    } else if (props.url == "add") {
      valContext.getAddFly(id, company, seats, onAir);
      nav("/controlPanel");
    } else if (props.url == "edit") {
      valContext.getEdit(id, company, seats, onAir, props.indexFly);
      nav("/controlPanel");
    }
  };
  return (
    <div>
      {props.url == "edit" && (
        <div>
          <Title />
          <h2>Edit</h2>
        </div>
      )}

      <div className="addFlyMain">
        <div>
          <input
            className="inp"
            type="text"
            placeholder="Enter ID"
            value={id}
            onChange={(e) => {
              {
                setId(e.target.value);
              }
            }}
          />
        </div>
        <div>
          <input
            className="inp"
            type="text"
            placeholder="Enter Company"
            value={company}
            onChange={(e) => {
              setCompany(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            className="inp"
            type="text"
            placeholder="Enter Seats"
            value={seats}
            onChange={(e) => {
              setSeats(e.target.value);
            }}
          />
        </div>
        <div>
          <h4>On Air?</h4>
          <input
            type="radio"
            name="radio"
            id="yes"
            onChange={() => setOnAir(true)}
          />
          <label htmlFor="yes" class="radio">
            YES
          </label>
          <input
            type="radio"
            name="radio"
            id="no"
            onChange={() => setOnAir(false)}
          />
          <label htmlFor="no" class="radio">
            NO
          </label>
        </div>
        <div>
          <button onClick={valid}>
            {props.url == "edit" ? "Edit Fly" : "Add Fly"}
          </button>
        </div>
      </div>
    </div>
  );
}
