import "./App.scss";
import NavBar from "./components/Nav/NavBar";
import About from "./components/Sections/About/About";
import Project from "./components/Sections/Projects/Project";
import Resume from "./components/Sections/Resume/Resume";

function App() {
	return (
		<div className="App">
			<NavBar />
			<About />
			<Resume />
			<Project />
		</div>
	);
}

export default App;
