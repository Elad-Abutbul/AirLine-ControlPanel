import React, { useContext } from "react";
import { contextApi } from "../../contextApi";
import CompHome from "./comp/CompHome";
export default function HomePage() {
  const valContext = useContext(contextApi);
  valContext.setShowNav(true);

  return (
    <div>
      <h2>all the flyes:</h2>
      <CompHome />
    </div>
  );
}
