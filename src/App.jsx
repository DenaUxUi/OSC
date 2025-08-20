import React from "react";
import smoothscroll from "smoothscroll-polyfill";
import Modal from "react-modal";
import Advantages from "./components/advantages/Advantages";
import Configuration from "./components/configuration-tabs/Configuration";
import Calculator from "./components/calculator/Calculator";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import FooterForm from "./components/forms/FooterForm";
import StatisticsReviews from "./components/statistics-reviews/StatisticsReviews";

smoothscroll.polyfill();

Modal.setAppElement("#root");

const App = () => {
  return (
    <div>
      <Header />
      <Advantages />
      <Calculator />
      <StatisticsReviews />
      <Configuration />
      <FooterForm />
      <Footer />
    </div>
  );
};

export default App;
