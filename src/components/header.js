import name from '../images/name.png'
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (

        <div className ="nav">
        <div className = "title">
            <img className="img-fluid" src={name} alt="website logo"/>
        </div>
        <div className = "navlinks">
            <NavLink to="/">work</NavLink>
            <NavLink to="/about">about</NavLink>
        </div> 
    </div>

    );
}