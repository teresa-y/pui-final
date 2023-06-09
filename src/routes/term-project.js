import tpprojectpage from "../images/tp/tp-projectpage.png"
import tpstoryboard from "../images/tp/tp-storyboard.jpg"

export default function TermProject(){
    return (
        <div className="project-content">
        <div className = "row">
            <div className="project-page-img">
                <img className="img-fluid" src = {tpprojectpage} alt="screenshot of calendar application"/>
            </div>
        </div>
        
        <div className="project-desc">
            <h2>Getting my Life Together</h2>
            <p>Spring 2021 <br/>
            Tools: Python, Tkinter<br/>
            <a href="pui-final/calendar#final-tp" className ="btn btn-outline-primary">Jump to Final Product</a>
        </p>
            <p>"Getting my Life Together" is a productivity
                application that allows the user to schedule their tasks and events and
                have a visual view of their calendar, helping them to keep their school and
                personal lives organized and assisting them in properly maximizing their time
                spent. In addition to manually scheduling events, this application features a function that can
                automatically schedule tasks for you, working around already scheduled tasks 
                and based on duration, rest time, and priority of the task.<br/><br/>
                I created this for the CMU 15-112 term project, a 2.5-week long coding project
             to create an application focused on user experience and algorithmic complexity.</p>
            <h3>Wireframes</h3>
            <img className="img-fluid" src = {tpstoryboard} alt = "prelimary storyboard of getting my life together"/><br/>
            <h3 id="final-tp">Final Product</h3><br/>
            <div className="ratio ratio-16x9">
                <iframe src="https://www.youtube.com/embed/qRM2Cz4dwMU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>

        </div>
    );
}