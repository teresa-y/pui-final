import vagaryprojectpage from "../images/vagary/vagary-projectpage.png"
import reverseassumptions from "../images/vagary/reverseassumptions.png"
import affinitydiagram from "../images/vagary/vagary-affinitydiagram.png"
import empathymap from "../images/vagary/empathymap.png"
import customerjourney from "../images/vagary/customerjourney.png"
import collab from "../images/vagary/collab.png"
import schedule from "../images/vagary/schedule.png"
import tripinfo from "../images/vagary/tripinfo.png"
import suggestions from "../images/vagary/suggestions.png"

export default function Vagary() {
    return (
        <div className="project-content">
            <div className = "row">
                <div className="project-page-img">
                <img className="img-fluid" src={vagaryprojectpage} alt="vagary screens"/>
                </div>
            </div>
            <h2>Vagary</h2>
        <div className="project-desc">
            <p>Fall 2022 <br/>
            Team Members: Stephen Tao, Jessica Lai, Yifei Chen<br/>
            Tools: Figma<br/>
            <a href="#final-vagary" className ="btn btn-outline-primary">Jump to Final Product</a>
        </p>
        <h3>Problem Space</h3>
            <p>Trip planning can be a stressful and arduous process, and even with the most experienced in planners, 
                unforeseen circumstances may still arise. As risk-taking and spontaneity are a natural part of the travel process, 
                we asked the questions:<br/> </p>
                <ul>
                    <li>How can we help people reduce the pressure of going through a vast amount of resources when making plans for a trip?</li>
                    <li>How can we help people be informed and prepared for unexpected circumstances during travel?</li>
                    <li>How can we help add a little more spontaneity in people’s trips?</li>
                </ul>
           
        <h3>Research</h3>
            <p>We started off our research project by conducting a reverse assumptions session to reframe the problem and ideate potential areas for 
                improvement in the travel planning space. We reflected on common considerations during travel planning such as transportation, social, financial, 
                technical, and legal aspects. This is when we started to recognize the assumption and myth that “people always plan trips”, and began focusing on the question 
                How might we support spontaneity by providing more assistance for pressured and last minute travel planning?
.</p>
                <img className="img-fluid" src={reverseassumptions} alt="screenshot of reverse assumptions exercise"></img>
            <p>Using directed storytelling as our contextual method, we interviewed four undergraduate students who have previously travelled and had to or wanted to make 
                spontaneous decisions, and asked them to walk through their decision making process on a previous trip they had. Here are some quotes that stood out to us:<br/><br/>

                <div className = "evidence">
                    "Compromises come from companions, language barriers, safety issues, and luck, which adds more time and effort into the decision making process."<br/>
                    "Spontaneity is less stressful because planning can be too much, planning is just to not waste time and the unexpected is inevitable" <br/>
                    "I think a general structure and outline of a travel plan is still needed but could leave out space and time for free exploration." <br/>
                </div>
                
                <br/>Following these interview sessions, we built several models to analyze and synthesize our findings, which included an affinity diagram, an empathy map,
                and a customer journey map.</p>
                <img className="img-fluid" src={affinitydiagram} alt="screenshot of affinity diagram"></img>
                <img className="img-fluid" src={empathymap} alt="screenshot of empathy map"></img>
                <img className="img-fluid" src={customerjourney} alt="screenshot of customer journey diagram"></img>
        <h3>Insights</h3>
        <ul>
            <li>Small-scale spontaneity with a loose-structured plan is preferred by participants.</li>
            <li>The main hesitancy against spontaneous travel is the perception of induced risks in safety, time, and budget.</li>
            <li>The main drive for spontaneous travel is internal: freedom, relaxation, excitement and the unexpected reward afterwards.</li>
            <li>Users decide to make a spontaneous decision by weighting the different factors involved to create a rough idea of the benefits potential risks.</li>
        </ul>
        <h3 id="final-vagary">Solution</h3>
        <p>From our insights, we designed a lo-fi prototype, focusing creating an application that catered to the desire for flexibility for spontaneity and adaptation to
            unexpected circumstances. <br/>       
        <a href="https://www.figma.com/proto/o5lfZsr4SnawCfHDV1fnqb/Prototype?page-id=125%3A643&node-id=125-1612&viewport=553%2C-366%2C0.25&scaling=scale-down&starting-point-node-id=125%3A1612" className ="btn btn-outline-primary">Try it Out!</a><br/></p>

        <div className="solution-images">
            <div className="row">
				<div className = "col-sm-12 col-md-6 col-lg-4 mb-5">
					<img className="img-fluid" src= {tripinfo} alt="part of prototype that shows trip information tracking"/>
				</div>
				<div className="col-sm-12 col-md-8 col-lg-6 mb-5">
					<p>Track your trip information and be prepared for the unexpected.</p>
				</div>	
			</div>

            <div className="row">
				<div className = "col-sm-12 col-md-6 col-lg-4 mb-5">
					<img className="img-fluid" src= {suggestions} alt="part of prototype that shows trip suggestion generation"/>
				</div>
				<div className="col-sm-12 col-md-8 col-lg-6 mb-5">
					<p>An algorithm that can generate suggestions based on your current emotions and interests.</p>
				</div>	
			</div>

            <div className="row">
				<div className = "col-sm-12 col-md-6 col-lg-4 mb-5">
					<img className="img-fluid" src= {schedule} alt="part of prototype that shows trip schedule"/>
				</div>
				<div className="col-sm-12 col-md-8 col-lg-6 mb-5">
					<p>A flexible framework and modular schedule to organize your trip.</p>
				</div>	
			</div>

            <div className="row">
				<div className = "col-sm-12 col-md-6 col-lg-4 mb-5">
					<img className="img-fluid" src= {collab} alt="part of prototype that shows trip schedule"/>
				</div>
				<div className="col-sm-12 col-md-8 col-lg-6 mb-5">
					<p>Collaborate with your friends to plan your newest adventure.</p>
				</div>	
			</div>
        </div>

        </div>
        </div>
    );
}