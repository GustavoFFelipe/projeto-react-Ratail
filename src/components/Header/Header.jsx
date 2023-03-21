import {Link} from 'react-router-dom';
import './Header.scss'

function Header(){
    return(
        <div className="headerContainer">
            <div className="wrapper">
            <div className="logo"><li>Logo</li></div>
            <div className="links">
                <Link to="/"><li>Home</li></Link>
                <Link to="/products"><li>Produtos</li></Link>
                <Link to="about"><li>A empresa</li></Link>
                <Link to="contact"><li>Contato</li></Link>
                <Link to="/auth"><li>Login</li></Link>

            </div>
            </div>
        </div>
    )
}
export default Header;