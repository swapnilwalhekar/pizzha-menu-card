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
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza data={props} />
    </main>
  );
};

const Pizza = (props) => {
  const storedPizzaData = props.data.pizzaData;
  return (
    <>
      {storedPizzaData.map((item, index) => (
        <div key={index}>
          <img src={item.photoName} alt="not found" />
          <h3>{item.name}</h3>
          <p>{item.ingredients}</p>
        </div>
      ))}
    </>
  );
};

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 12;
  const isOpen = hour >= openHour && hour <= closeHour;

  // if (hour >= openHour && hour <= closeHour) {
  //   alert("Pizzha shop opened");
  // } else {
  //   alert("Pizzha shop closed");
  // }

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. We're currently open
    </footer>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
