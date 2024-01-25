import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { pizzaData } from "./data";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu pizzaData={pizzaData} />
      <Footer />
    </div>
  );
}

const Header = () => {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
};

const Menu = (props) => {
  const allPizzaData = props.pizzaData;
  // const allPizzaData = [];
  const pizzaCounts = allPizzaData.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzaCounts > 0 ? (
        <ul className="pizzas">
          <Pizza allPizzaData={allPizzaData} />
        </ul>
      ) : (
        <p>We're still working on our menu. Please come back later🙁</p>
      )}
    </main>
  );
};

const Pizza = (props) => {
  const storedPizzaData = props.allPizzaData;
  return (
    <>
      {storedPizzaData.map((item, index) => (
        <li key={index} className="pizza">
          <img src={item.photoName} alt="not found" />
          <div>
            <h3>{item.name}</h3>
            <p>{item.ingredients}</p>
            <span>{item.price + "0"}</span>
          </div>
        </li>
      ))}
    </>
  );
};

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  console.log("ok isOpen:", isOpen);

  // if (hour >= openHour && hour <= closeHour) {
  //   alert("Pizzha shop opened");
  // } else {
  //   alert("Pizzha shop closed");
  // }

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>We're open until {closeHour}:00. Come visit us or order online.</p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          We're happy to welcome you in between {openHour}:00 and {closeHour}
          :00.
        </p>
      )}
    </footer>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
