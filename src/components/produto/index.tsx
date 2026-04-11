import "./style.css";

// propriedades do produto que queremos ter e que tipo ela é
interface ProdutoProps {
  title: string;
  price: string;
  image: string;
}
// Declara o componente como arrow function. : ProdutoProps diz pro TypeScript que props tem exatamente aquelas 3 chaves definidas acima.
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
