import React, {useEffect, useState} from "react";
import 'reset-css';
import './styles/App.css';
import Footer from "./components/UI/Footer/Footer";
import Header from "./components/UI/Header/Header";

function App() {
  return (
    <div className="page-wrapper">
      <Header/>
      <main className="page-main main">

      </main>
      <Footer/>
    </div>
  );
}

export default App;
