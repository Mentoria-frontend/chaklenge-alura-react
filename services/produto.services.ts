async function listaProdutos(): Promise<any> {
    const listaApi = await fetch("https://651067693ce5d181df5d387c.mockapi.io/api/v1/produtos")
      .then((resposta) => resposta.json())
      .catch((error) => console.log(error));
  
    return listaApi;
  }
  
  async function criaProdutos(
    imageUrl: string,
    section: string,
    name: string,
    price: number,
    description: string
  ): Promise<void> {
    await fetch("https://651067693ce5d181df5d387c.mockapi.io/api/v1/produtos", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        imageUrl: imageUrl,
        section: section,
        name: name,
        alt: "imagem do produto",
        price: `${price}`,
        description: description,
      }),
    })
      .then((resposta) => {
        if (resposta.ok) {
          window.location.href = "./adm.html";
        } else {
          throw new Error("Não foi possível criar o produto.");
        }
      });
  }
  
  async function deletaProdutos(escolhidoNome: string): Promise<void> {
    const nomeProduto = escolhidoNome;
  
    const listaApi = await fetch("https://651067693ce5d181df5d387c.mockapi.io/api/v1/produtos")
      .then((resposta) => resposta.json());
  
    const produtoEscolhido = listaApi.find((produto: any) => produto.name === nomeProduto);
  
    if (!produtoEscolhido) {
      console.log("produto nao encontrado");
    } else {
      console.log("produto", produtoEscolhido, "foi apagado com sucesso! :)");
    }
  
    const produtoId = produtoEscolhido.id;
  
    try {
      const response = await fetch(`https://651067693ce5d181df5d387c.mockapi.io/api/v1/produtos/${produtoId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        window.location.href = "./adm.html";
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  export const produtoServices = {
    listaProdutos,
    criaProdutos,
    deletaProdutos,
  };
  