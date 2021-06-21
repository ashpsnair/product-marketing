import './Navbar.css';
import { ReactComponent as Sfox } from './../../Images/silverfox.svg';


const Navbar = () => {
    return (
        <div>
        <nav className="nav">
                <div className="icon1">
                  <Sfox x="10%" y="10%" width="100%"/>
                </div>
                <ul>
                    <li>EXPLORE</li>
                    <li>SHOP</li>
                    <li>CONTACT</li>
                </ul>
      
        </nav>
        </div>
    )
}

export default Navbar

