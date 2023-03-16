import React, { useContext, useState } from "react";
import { contextApi } from "../../../contextApi";
export default function CompDelete() {
  const [id, setId] = useState();
  const valContext = useContext(contextApi);
  const valid = () => {
    if (id.length != 5) {
      alert("ID must be 5 numbers");
    } else if (valContext.allFlyes.find((val) => val.id == id)) {
      {
        valContext.allFlyes.find((val, indexFly) => {
          if (val.id == id) {
            valContext.getDeleteFly(indexFly);
            alert("delete fly complete");
          }
        });
      }
    } else {
      alert("ID dosn't exixt");
    }
  };
  const showAirPlanes = () => {
    let temp = 0;
    valContext.allFlyes.forEach((val) => (temp += val.seats));
    let allFlyesOnAir = valContext.allFlyes.filter((val) => val.onAir == true);
    let allFlyesOnGround = valContext.allFlyes.filter(
      (val) => val.onAir == false
    );

    return (
      <div className="details">
        <p>all the airPlanes are: {valContext.allFlyes.length}</p>
        <p>all the seats are: {temp}</p>
        <p>all flyes on air: {allFlyesOnAir.length}</p>
        <p>all flyes on ground: {allFlyesOnGround.length}</p>
      </div>
    );
  };
  return (
    <div className="mainDelete">
      <div>
        <input
          type="text"
          placeholder="Enter ID"
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
      </div>
      <div>
        <button onClick={valid}>Delete Fly</button>
      </div>
      {showAirPlanes()}
    </div>
  );
}
