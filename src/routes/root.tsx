import { Link, Outlet } from "react-router-dom";

export default function Root() {
    return (
        <>
            <div><p>Hello World!</p></div>
            <button><Link to="/produtos">Lista de Produtos</Link></button>
            <div><Outlet /></div>
        </>
    )
}