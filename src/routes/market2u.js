import market2uprojectpage from "../images/market2u/market2u-projectpage.png"

export default function Market2U() {
    return (
        <div className="project-content">
            <div className = "row">
                <div className="project-page-img">
                <img className="img-fluid" src={market2uprojectpage} alt="select market2u screens"/>
                </div>
            </div>
            <h2>Market2U</h2>
        <div className="project-desc">
            <p>Fall 2022 <br/>
            Team Members: Ankitha Vasudev, Parvathy Anand, Alice Nie<br/>
            Tools: Figma<br/>
            </p>
            <div className="ratio ratio-16x9">
                <iframe src="https://drive.google.com/file/d/14YPCJAGhRF3TNB0GTv_Tw5RLvnqrfhGg/preview" 
                width="640" height="480" allow="autoplay" title="Market2U Process"></iframe>
            </div>
        </div>
        </div>
    );
}
  