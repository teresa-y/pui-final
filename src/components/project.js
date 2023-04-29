export default function Project(props) {
    return (
        <div className ="container">
				<div className="row">
					<div className = "col-sm-12 col-md-6 col-lg-4 mb-5">
						<img className="img-fluid" src= {props.image} alt={props.alt}/>
					</div>
					<div className="col-sm-12 col-md-8 col-lg-6 mb-5">
						<h3>{props.title}</h3>
						<span className="skill">{props.skills}</span>
						<p>{props.description}
						</p>
						<a href= {props.projectlink} className ="btn btn-outline-primary">Learn more</a>
					</div>	
			    </div>
        </div>
    );
}