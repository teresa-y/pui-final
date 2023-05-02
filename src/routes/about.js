import me from "../images/me.png"

export default function About() {
    return (
        <div className="about">
		<h2>About</h2>
		<div className="container">
			<div className="row">
				<div className = "col-sm-12 col-md-3 col-lg-4 mb-5">
					<img className="img-fluid" src={me} alt="drawing of teresa yang"/>
				</div>
				<div className="col-sm-12 col-md-8 col-lg-7 mb-5">
					<h3>Hi! I'm Teresa.</h3>
					<p> I am currently a junior studying <a href="https://www.cmu.edu/information-systems/" rel="noreferrer" target="_blank">Information Systems</a> and <a href="https://www.hcii.cmu.edu/" rel="noreferrer" target="_blank">Human-Computer Interaction</a> at Carnegie Mellon University. 
						I'm interested in connecting with audiences and creating meaningful work and joy, whether it be through designing interactions, building digital spaces, or my artwork.<br/><br/>
						In my free time, I like to draw and play mobile games.<br/><br/>
						Let's connect! Feel free to reach me at tyy@andrew.cmu.edu.</p>
						<a href="https://drive.google.com/file/d/1e5VWRqBDJri9SH5SaiGZ6bYa65kzPazo/view?usp=sharing" rel="noreferrer" target="_blank" className ="btn btn-outline-primary">Resume</a>
				</div>
			</div>
		</div>
		<br/><br/><br/><br/>
	</div>

    );
}
  