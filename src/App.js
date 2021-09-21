import "./App.scss";
import NavBar from "./components/Nav/NavBar";
import About from "./components/Sections/About/About";
import Contact from "./components/Sections/Contact/Contact";
import Project from "./components/Sections/Projects/Project";
import Resume from "./components/Sections/Resume/Resume";

function App() {
	return (
		<div className="App">
			<NavBar />
			<div className="wrapper">
				<About />
				<Resume />
				<Project />
				<Contact />
			</div>
		</div>
	);
}

export default App;
