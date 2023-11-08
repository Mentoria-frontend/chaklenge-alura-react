import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './routes/root'
import ListaProduto from './components/lista-produto/listaProduto'
import ProdutoDetalhe from './components/produto-detalhe/produtoDetalhe'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "produtos", 
        element: <ListaProduto />,
        children: [
          {
            path: "produto/:produtoId",
            element: <ProdutoDetalhe/>,
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>,
)
