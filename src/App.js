import logo from './logo.svg';
import './App.css';
import Header from "./components/header";
import ProjectList from "./components/projectlist";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
      <div className = "main">
        <Header />
      </div>
      
      <div className = "intro">
			  <p>Hi, I'm Teresa! I am an interdisciplinary designer, programmer, and artist studying <a href="https://www.cmu.edu/information-systems/">Information Systems</a> and <a href="https://www.hcii.cmu.edu/">Human-Computer Interaction</a> at Carnegie Mellon University.</p>
		  </div>

      <ProjectList />
      <Footer />
    </div>
  );
}

export default App;
