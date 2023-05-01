import { Link } from 'react-router-dom';

export default function Project(props) {
    return (
		<div id = "project">
			<div className="row">
				<div className = "col-sm-12 col-md-6 col-lg-4 mb-5">
					<img className="img-fluid" src= {props.pic} alt={props.alt}/>
				</div>
				<div className="col-sm-12 col-md-8 col-lg-6 mb-5">
					<div className="skill">{props.skills}</div>
					<h3>{props.title}</h3>
					<p>{props.description}</p>
					<Link to={props.projectLink} className ="btn btn-outline-primary">Learn more</Link>
				</div>	
			</div>
		</div>
    );
}