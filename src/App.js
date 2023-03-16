import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./JSX/home page/HomePage";
import LogIn from "./JSX/log in/LogIn";
import AddFly from "./JSX/addFly/AddFly";
import DeleteFly from "./JSX/deleteFly/DeleteFly";
import Sort from "./JSX/sort/Sort";
import Nav from "./JSX/NAV/Nav";
import { useState } from "react";
import { contextApi } from "./contextApi";
import CardFly from "./JSX/card fly/CardFly";
import CompAdd from "./JSX/addFly/comp/CompAdd";
import Title from "./JSX/title/Title";
function App() {
  const [showNav, setShowNav] = useState(false);
  const [allFlyes, setAllFlyes] = useState([]);
  const getAddFly = (id, company, seats, onAir) => {
    seats = Number(seats);
    allFlyes.push({ id: id, company: company, seats: seats, onAir: onAir });
    setAllFlyes([...allFlyes]);
  };
  const getDeleteFly = (indexFly) => {
    allFlyes.splice(indexFly, 1);
    setAllFlyes([...allFlyes]);
  };
  const getEdit = (id, company, seats, onAir, indexFly) => {
    seats = Number(seats);
    allFlyes[indexFly].id = id;
    allFlyes[indexFly].company = company;
    allFlyes[indexFly].seats = seats;
    allFlyes[indexFly].onAir = onAir;
    setAllFlyes([...allFlyes]);
  };
  return (
    <div className="App">
      <div class="container">
        <div class="background-image"></div>
        <div class="color-overlay"></div>
      </div>

      <BrowserRouter>
        <Title />
        {showNav && <Nav />}
        <contextApi.Provider
          value={{ setShowNav, allFlyes, getAddFly, getDeleteFly, getEdit }}
        >
          <Routes>
            <Route path="*" element={<LogIn />} />
            <Route path="/controlPanel" element={<HomePage />} />
            <Route path="/addFly" element={<AddFly />} />
            <Route path="/deleteFly" element={<DeleteFly />} />
            <Route path="/sort" element={<Sort />} />
            {allFlyes.map((val, indexFly) => {
              return (
                <Route
                  path={`/edit/${val.id}`}
                  element={<CompAdd url="edit" indexFly={indexFly} val={val} />}
                />
              );
            })}
            {allFlyes.map((val) => {
              return (
                <Route
                  path={`/cardFly/${val.id}`}
                  element={<CardFly val={val} />}
                />
              );
            })}
          </Routes>
        </contextApi.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
