import React, { useState } from "react";
import instagramIcon from "./assets/Instagram_icon.png";
import facebookIcon from "./assets/Facebook_logo.png";
import whatsappIcon from "./assets/whatsapp_logo.png";
import Produto from "./components/produto";
import camisaBranca from "./assets/blusabranca.png";
import camisaCinza from "./assets/blusacinza.png";
import adesivos from "./assets/adesivos.png";
import bottomrobo from "./assets/bottomrobodiva.png";
import bottomdiva from "./assets/bottomdiva.png";

import "./App.css";
import SearchBar from "./components";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const produtosList = [
    { image: camisaBranca, price: "40,00", title: "Camisa Branca <div>a" },
    { image: camisaCinza, price: "40,00", title: "Camisa Cinza <div>a" },
    { image: adesivos, price: "6,00", title: "Adesivos <div>a" },
    { image: bottomrobo, price: "4,00", title: "Bottom Robô <div>a" },
    { image: bottomdiva, price: "4,00", title: "Bottom Diva <div>a" },
  ];

  const filteredProdutos = produtosList.filter((produto) =>
    produto.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <header className="header">
        <p className="title">Lojinha do &lt;div&gt;a</p>
      </header>
      <div className="content">
        <div className="search-bar-container">
          <SearchBar onChange={(e) => setSearchTerm(e.target.value)} />
          
          <p className="title2">Loja dos produtos do &lt;div&gt;a!</p>

          <div className="social-bar">
            <a
              href="https://www.instagram.com/diva.citi/"
              className="social-button"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagramIcon} alt="Instagram" className="social-icon" />
            </a>
            <a
              href="https://www.facebook.com"
              className="social-button"
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebookIcon} alt="Facebook" className="social-icon" />
            </a>
            <a
              href="https://wa.me/"
              className="social-button"
              aria-label="WhatsApp"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsappIcon} alt="WhatsApp" className="social-icon" />
            </a>
          </div>
          
        </div>
        <div className="produtos-container">
          {filteredProdutos.map((produto, index) => (
            <Produto
              key={index}
              image={produto.image}
              price={produto.price}
              title={produto.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
