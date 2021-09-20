import "./App.scss";
import NavBar from "./components/Nav/NavBar";
import About from "./components/Sections/About/About";
import Work from "./components/Sections/Work/Work";

function App() {
	return (
		<div className="App">
			<NavBar />
			<About />
			<Work />
		</div>
	);
}

export default App;
