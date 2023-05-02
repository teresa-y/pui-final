import name from '../images/name.png'
import { NavLink } from 'react-router-dom';
import anime from 'animejs/lib/anime.es.js';
import { useRef } from 'react'
  
export default function Header() {

    const elementRef = useRef(null);

    const startAnimation = () => {
        anime({
            targets: elementRef.current,
            rotateX: 20,
            rotateY: -20,
            duration: 500,
            easing: 'easeInOutQuad'
                    });
      };
    
      const resetAnimation = () => {
        anime({
            targets: elementRef.current,
            rotateX: 0,
            rotateY: 0,
            duration: 500,
            easing: 'easeInOutQuad'
                    });
      };
    

    return (

        <div className ="nav">
        <div className = "title" >
            <NavLink to="/pui-final"><img className="img-fluid" src={name} alt="website logo" ref={elementRef} onMouseEnter={startAnimation} onMouseLeave={resetAnimation}/></NavLink>
        </div>
        <div className = "navlinks">
            <NavLink to="/pui-final">work</NavLink>
            <NavLink to="/pui-final/about">about</NavLink>
        </div> 
    </div>

    );
}