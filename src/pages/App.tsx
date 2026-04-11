import React, { useState } from "react"; // usamos o useState para criar variáveis que, quando alteradas, avisam o React que mudou e que é pra atualizsr tela
// O estado atual: O valor que está guardado agora.
// A função de atualização: A única forma correta de mudar esse valor.
import instagramIcon from "../assets/Instagram_icon.png"; // importa cada imagem da pasta assets
import facebookIcon from "../assets/Facebook_logo.png";
import whatsappIcon from "../assets/whatsapp_logo.png";
import Produto from "../components/produto";
import camisaBranca from "../assets/blusabranca.png";
import camisaCinza from "../assets/blusacinza.png";
import adesivos from "../assets/adesivos.png";
import bottomrobo from "../assets/bottomrobodiva.png";
import bottomdiva from "../assets/bottomdiva.png";

import "./App.css"; // importa a estilização de cada coisa (fazer depois)
import SearchBar from "../components/searchbar"; // depois

function App() {
  const [searchTerm, setSearchTerm] = useState(""); //depois 
    //Criação: const [nome, setNome] = useState("João") -> Tela exibe "João".
    //Mudança: Você chama setNome("Maria").
    //Re-renderização: O React limpa a tela, roda a função do componente de novo, e agora o nome vale "Maria".

  const produtosList = [ // nossos dados estáticos
    { image: camisaBranca, price: "40,00", title: "Camisa Branca <div>a" },
    { image: camisaCinza, price: "40,00", title: "Camisa Cinza <div>a" },
    { image: adesivos, price: "6,00", title: "Adesivos <div>a" },
    { image: bottomrobo, price: "4,00", title: "Bottom Robô <div>a" },
    { image: bottomdiva, price: "4,00", title: "Bottom Diva <div>a" },
  ];

  const filteredProdutos = produtosList.filter((produto) => // (produto) => é uma arrow function — produto é cada item do array numa iteração
    produto.title.toLowerCase().includes(searchTerm.toLowerCase()) //  ("camisa" acha "Camisa") // verifica se o título contém o texto digitado
  );

  //arrow function onde (e) é o evento do input 
  // e.target é o elemento <input> em si
  // e.target.value é o texto que está dentro do input naquele momento
  // setSearchTerm(...) atualiza o estado com esse texto

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
              target="_blank" // target="_blank" abre o link numa nova aba
              rel="noreferrer" // rel="noreferrer" é segurança: impede que a página destino saiba de onde o usuário veio,
              
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
          {filteredProdutos.map((produto, index) => ( //.map() transforma cada objeto do array num componente <Produto /> e O produto é o objeto inteiro daquela posição
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
