import "./style.css";

interface ProdutoProps {
  title: string;
  price: string;
  image: string;
}

const Produto = (props: ProdutoProps) => {
  return (
    <div className="produto-box">
      <img src={props.image} alt="imagem" className="image" />
      <div className="product-info">
        <h1>{props.title}</h1>
        <p>R$ {props.price}</p>
      </div>
    </div>
  );
};

export default Produto;
