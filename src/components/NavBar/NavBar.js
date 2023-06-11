import CartWidget from "../CartWidget/CartWidget"
import "bulma/css/bulma.css";

const NavBar = () => {
    return (
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <h3 class="navbar-brand">Tecnologicos del mar</h3>       
            <div class="navbar-menu">
                <button class="buttons">Celulares</button>
                <button class="buttons">Tablets</button>
                <button class="buttons">Notebooks</button>
            </div>
            <CartWidget class="navbar-item"/>
        </nav>
    )
}
export default NavBar 