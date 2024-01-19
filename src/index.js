import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
const Header = () => {
  const style = {
    color: "red",
    fontSize: "45px",
    textTransform: "uppercase",
  };
  return (
    <header className="header">
      <h1>Fast React Pizza Company.</h1>
    </header>
  );
};
const Menu = () => {
  return (
    <div>
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
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
    <footer>{new Date().toLocaleTimeString()}. We're currently open</footer>
  );
};

const Pizza = () => {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="not found" />
      <h2>Pizza spinaci</h2>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
