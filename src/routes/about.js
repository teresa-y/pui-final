export default function About() {
    return (
        <section id="about">
		<h2>About</h2>
		<div className="container">
			<div className="row">
				<div className = "col-sm-12 col-md-3 col-lg-4 mb-5">
					<img className="img-fluid" src="images/me.png" alt="drawing of teresa yang"/>
				</div>
				<div className="col-sm-12 col-md-8 col-lg-7 mb-5">
					<h3>Hi! I'm Teresa.</h3>
					<p> I am currently a junior studying Information Systems and Human-Computer Interaction at Carnegie Mellon University. 
						I'm interested in connecting with audiences and creating meaningful work and joy, whether it be through designing interactions, building digital spaces, or my artwork.<br/><br/>
						In my free time, I like to draw and play mobile games.<br/><br/>
						Let's connect! Feel free to reach me at tyy@andrew.cmu.edu.</p>
						<a href="resume.pdf" target="_blank" class ="btn btn-outline-primary">Resume</a>
				</div>
			</div>
		</div>
	</section>

    );
}
  