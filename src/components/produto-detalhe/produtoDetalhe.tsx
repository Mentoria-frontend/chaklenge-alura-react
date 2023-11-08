import { useParams } from "react-router-dom"
import Produto, { ProdutoProps } from "../produto/produto"
import { useState, useEffect } from "react"
import { produtoServices } from "../../../services/produto.services"

const ProdutoDetalhe: React.FC = () => {
    const { produtoId } = useParams<{ produtoId: string }>()
    const [produto, setProduto] = useState<ProdutoProps | null>(null)
    
    useEffect(() => {
        async function fetchProduto() {
            try{
                const listaProduto = await produtoServices.listaProdutos()
                const produtoSelecionado = listaProduto.find((produto: any) => produto.id === produtoId) 

                if (produtoSelecionado) {
                    setProduto({
                        imagemSrc: produtoSelecionado.imageUrl,
                        titulo: produtoSelecionado.name,
                        preco: parseFloat(produtoSelecionado.price),
                        descricao: produtoSelecionado.description
                    })
                } else {
                    // Produto não encontrado, tratar o erro depois.
                }
            } catch(erro) {
                console.error("Erro ao buscar a lista de produtos", erro)
            }
        }
        fetchProduto()
    }, [produtoId])

    return (
        <div className="produtoDetalhe">
            {produto ? (
                <Produto {...produto}/>
            ) : (
                <div>Produto não encontrado.</div>
            )}
        </div>
    )
}
export default ProdutoDetalhe