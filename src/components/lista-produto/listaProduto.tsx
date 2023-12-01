import { useEffect, useState } from "react"
import Produto from "../produto/produto"
import { produtoServices } from "../../../services/produto.services"

const ListaProduto: React.FC = () => {
    const [produtos, setProdutos] = useState<any[]>([]) 
    useEffect(() => {
        async function fetchProdutos() {
            try{
                const listaDeProdutos = await produtoServices.listaProdutos()
                setProdutos(listaDeProdutos)
            } catch(erro) {
                console.error("Erro ao buscar a lista de produtos", erro)
            }
        }
        fetchProdutos()
    }, [])
    return (
        <div className="lista-produto">
            {produtos.map((produto: any) => (
                <Produto
                    produtoId={produto.id}
                    key={produto.id} 
                    imagemSrc={produto.imageUrl} 
                    titulo={produto.name} 
                    preco={parseFloat(produto.price)} 
                    descricao={produto.description} 
                />
            ))}
        </div>
    )
}
export default ListaProduto