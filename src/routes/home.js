import ProjectList from "../components/projectlist";

export default function Home() {
    return (
        <div className = "main">
        <div className = "intro">
            <p>hi, i'm teresa! i am a designer, programmer, and artist studying information systems and human-computer interaction at carnegie mellon university.</p>
        </div>
        <h2>Work</h2>
        <ProjectList />
        </div>
    );
}
