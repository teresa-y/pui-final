import name from '../images/name.png'

export default function Header() {
    return (

        <div className ="nav">
        <div className = "title">
            <img class="img-fluid" src={name} alt="website logo"/>
        </div>
        <div className = "navlinks">
                work
                about
        </div> 
    </div>

    );
}