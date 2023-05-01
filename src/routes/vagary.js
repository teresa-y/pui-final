import vagaryprojectpage from "../images/vagary/vagary-projectpage.png"

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
        </p>
            <p><strong>Note: This page is currently under construction.</strong></p><br/>
        </div>
        </div>
    );
}