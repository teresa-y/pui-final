import ProjectList from "../components/projectlist";
import homepage from "../images/homepage.png"

export default function Home() {
    return (
        <div className = "main">
        <div className = "intro">
            <div className = "col-sm-12 col-md-3 col-lg-4 mb-5">
                <p>hi, i'm teresa!<br/><br/> i am a designer, programmer, and artist studying information systems and human-computer interaction at carnegie mellon university.
                <br/><br/>feel free to check out my work below!</p>
            </div>
            <div className = "col-sm-12 col-md-3 col-lg-4 mb-5">
                <img className="fluid" src={homepage} alt="drawing of teresa yang for the home page"></img>
			</div>
        </div>
        <h2>Work</h2>
        <ProjectList />
        </div>
    );
}
