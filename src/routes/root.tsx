import { Link, Outlet } from "react-router-dom";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";

export default function Root() {
    return (
        <>
            <div><p>Hello World!</p></div>
            <button><Link to="/">Home</Link></button>
            <button><Link to="/produtos">Lista de Produtos</Link></button>
            <div><Header/></div>
            <div><Outlet /></div>
            <div><Footer /></div>
        </>
    )
}