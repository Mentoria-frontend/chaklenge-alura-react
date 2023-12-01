import { Link } from "react-router-dom";

export interface ProdutoProps {
    produtoId: string;
    imagemSrc: string;
    titulo: string;
    preco: number;
    descricao?: string;
}

const Produto: React.FC<ProdutoProps> = ({imagemSrc, titulo, preco, descricao, produtoId}) => {
    return (
        <section>
            <div className="imagem-produto"><img src={imagemSrc}></img></div>
            <div className="detalhe-produto">
                <h2><Link to={`/produto/${produtoId}`}>{titulo}</Link></h2>
                <p>{preco.toFixed(2)}</p>
                <p>{descricao}</p>
            </div>
        </section>
    )
}
export default Produto