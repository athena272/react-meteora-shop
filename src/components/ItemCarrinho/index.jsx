
import Botao from "../Botao";
import Quantidade from "../Quantidade";
import ValorFormatado from "../ValorFormatado";
import InfoItemCarrinho from "./InfoItemCarrinho";

const ItemCarrinho = ({
  itemCarrinho,
  removerProdutoCarrinho,
  adicionarProduto,
  removerProduto,
}) => {
  return (
    <li key={itemCarrinho.id}>
      <>
        <div className="produto">
          <img
            className="imagem__produto"
            src={itemCarrinho.src}
            alt={itemCarrinho.alt}
          />
          <InfoItemCarrinho itemCarrinho={itemCarrinho} />
          <ValorFormatado valor={itemCarrinho.preco} />
          <Quantidade
            itemCarrinho={itemCarrinho}
            adicionarProduto={adicionarProduto}
            removerProduto={removerProduto}
          />
          <Botao
            variant="deleteItem"
            aria-label="Excluir"
            handleClick={() => removerProdutoCarrinho(itemCarrinho.id)}
          >
            delete_forever
          </Botao>
        </div>
        <div className="divisor my-5" />
      </>
    </li>
  );
};

export default ItemCarrinho;
