import "./App.scss";
import NavBar from "./components/Nav/NavBar";
import About from "./components/Sections/About/About";
import Project from "./components/Sections/Projects/Project";

function App() {
	return (
		<div className="App">
			<NavBar />
			<About />
			<Project />
		</div>
	);
}

export default App;
