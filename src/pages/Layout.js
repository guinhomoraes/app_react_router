import { Outlet, Link } from "react-router-dom";

export default function Layout()
{
    return(
        <>
           <nav>
                <div className="navHeader">
                    <h2>Logo</h2>
                </div>
                <div className="navItems">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/servico">Serviços</Link>
                        </li>
                        <li>
                            <Link to="/contato">Contato</Link>
                        </li>
                    </ul>
                </div>
                
           </nav>

           <Outlet />
        </>
    )
}