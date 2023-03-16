import React, { useContext, useState } from "react";
import { contextApi } from "../../../contextApi";
import CompCardFly from "../../card fly/comp/CompCardFly";
export default function CompCompany() {
  const valContext = useContext(contextApi);
  const [inp, setInp] = useState("");
  const [select, setSelect] = useState("");
  const [onAir, setOnAir] = useState("");
  let filteredArray = valContext.allFlyes.filter((val) => {
    console.log(val.company.length);
    return val.company.toLowerCase().includes(inp.toLowerCase());
  });
  let filteredOnAir = filteredArray.filter((val) => val.onAir == true);
  let filteredOnGround = filteredArray.filter((val) => val.onAir == false);
  let arrSortAndOnAir = [];

  const showFlyeCompany = () => {
    if (select === "less" && onAir == "" && inp != "") {
      filteredArray.sort((a, b) => a.seats - b.seats);
      return filteredArray.map((val) => {
        return <CompCardFly val={val} />;
      });
    } else if (select === "more" && onAir == "" && inp != "") {
      filteredArray.sort((a, b) => b.seats - a.seats);
      return filteredArray.map((val) => {
        return <CompCardFly val={val} />;
      });
    } else if (select == "" && onAir == "yes" && inp != "") {
      return filteredOnAir.map((val) => {
        return <CompCardFly val={val} />;
      });
    } else if (select == "" && onAir == "no" && inp != "") {
      return filteredOnGround.map((val) => {
        return <CompCardFly val={val} />;
      });
    } else if (select == "more" && onAir == "yes" && inp != "") {
      arrSortAndOnAir = filteredOnAir.sort((a, b) => b.seats - a.seats);
      return arrSortAndOnAir.map((val) => {
        return <CompCardFly val={val} />;
      });
    } else if (select == "less" && onAir == "yes" && inp != "") {
      arrSortAndOnAir = filteredOnAir.sort((a, b) => a.seats - b.seats);
      return arrSortAndOnAir.map((val) => {
        return <CompCardFly val={val} />;
      });
    } else if (select == "more" && onAir == "no" && inp != "") {
      arrSortAndOnAir = filteredOnGround.sort((a, b) => b.seats - a.seats);
      return arrSortAndOnAir.map((val) => {
        return <CompCardFly val={val} />;
      });
    } else if (select == "less" && onAir == "no" && inp != "") {
      arrSortAndOnAir = filteredOnGround.sort((a, b) => a.seats - b.seats);
      return arrSortAndOnAir.map((val) => {
        return <CompCardFly val={val} />;
      });
    } else if (inp != "") {
      return filteredArray.map((val) => {
        return <CompCardFly val={val} />;
      });
    }
  };
  return (
    <div className="sortMain">
      <div className="sortSearch">
        <input
          type="text"
          placeholder="Enter Company"
          onChange={(e) => {
            setInp(e.target.value);
          }}
        />
        <select
          onChange={(e) => {
            setSelect(e.target.value);
          }}
        >
          <option value="" selected disabled>
            show seats
          </option>
          <option value="">default seats</option>

          <option value="less">less seats</option>
          <option value="more">more seats</option>
        </select>
        <select
          onChange={(e) => {
            setOnAir(e.target.value);
          }}
        >
          <option value="" selected disabled>
            on air?
          </option>
          <option value="">all flyes</option>
          <option value="yes">yes</option>
          <option value="no">no</option>
        </select>
      </div>

      <div className="filterFlyes">{showFlyeCompany()}</div>
    </div>
  );
}
