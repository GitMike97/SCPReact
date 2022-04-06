import { Link } from 'react-router-dom';
import Image from './images/SCPLogo.png';

function Nav()
{
    return(
        
        <nav>
            <ul className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div>
                <img src = {Image} height="50px" width="100px" alt="Logo"/>
            </div>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <Link to="/" className="nav-item" style={{textDecoration: 'none'}}>
                
                    <li className="nav-link text-light">Home</li>

                </Link>
                <Link to="/SCP" className="nav-item" style={{textDecoration: 'none'}}>
                    <li className="nav-link text-light">SCP</li>
                </Link>
            </ul>
        </nav>

    );

}

export default Nav;