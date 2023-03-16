import React, { useContext } from "react";
import { contextApi } from "../../../contextApi";
import CompCardFly from "../../card fly/comp/CompCardFly";

export default function CompHome() {
  const valContext = useContext(contextApi);
  return (
    <div>
      {valContext.allFlyes.map((val) => {
        return <CompCardFly val={val} />;
      })}
    </div>
  );
}
