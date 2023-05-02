import Project from "./project";
import market2uimg from "../images/thumbnails/market2u.png"
import vagary from "../images/thumbnails/vagary.png"
import cookies from "../images/thumbnails/cookies.png"
import tp from "../images/thumbnails/tp.png"
import tca from "../images/thumbnails/tca-reel.png"

const projectData = [

    {
        pic: vagary, 
        alt: "thumbnail of vagary screens",
        title: "Vagary",
        skills: "ux research, ux design",
        description: "Trip planning application to help deal with spontaneity during travel.",
        projectLink: "/vagary"
    },

    {
        pic: market2uimg, 
        alt: "thumbnail of market2u screens",
        title: "Market2U",
        skills: "responsive web design, ui/ux design",
        description: "Responsive web design for a grocery shopping service for those who cannot leave their homes.",
        projectLink: "/market2u"
    },

    {
        pic: cookies, 
        alt: "thumbnail of re-designed cookies banner",
        title: "Re-designed Internet Cookies Banner",
        skills: "ux design",
        description: "Re-design of an Internet cookies banner to combat deceptive shopping practices online.",
        projectLink: "/cookies-banner"
    },

    {
        pic: tp, 
        alt: "thumbnail of getting my life together",
        title: "Getting my Life Together",
        skills: "python, ux design",
        description: "Interactive calendar application intended to maximize productivity.",
        projectLink: "/calendar"
    },

    {
        pic: tca, 
        alt: "thumbnail of technical animation reel",
        title: "Technical Character Animation Reel",
        skills: "3d animation, maya",
        description: "3D animation reel utilizing the 12 principles of animation, such as squash and stretch, timing and spacing, arcs, and more.",
        projectLink: "/tca-reel"
    }
       
]

const projects = projectData.map(proj => (
    <Project key = {proj.title} pic={proj.pic} alt={proj.alt} title={proj.title} skills={proj.skills} description={proj.description} projectLink={proj.projectLink}/>
  ));

export default function ProjectList() {
    return (
        <div className = "gallery">
            <div className = "container">
                {projects}
            </div>
        </div>
    );
}