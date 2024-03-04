import "./navbar.css"
import { Link } from 'react-router-dom';
export default function Navbar() {

     return <nav className="nav">
         <Link to="/" className="nombre-sitio">
             Tienda
         </Link>
         <ul className="navegacion">
             <li>
                 <Link to="/iniciarsesion"> Iniciar Sesion</Link>
                 <Link to="/registrarse"> Registrar Usuario</Link>
             </li>
         </ul>
     </nav>
}
