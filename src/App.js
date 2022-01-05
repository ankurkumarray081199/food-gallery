import React from "react";
import Dish from "./components/Dish";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

function App() {
  return (
    <>
      <Header />
      <Dish />
      <div className="mb-0">
        <Footer />
      </div>
    </>
  );
}

export default App;
