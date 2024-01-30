import { Home } from "./pages/home/Home";
import "./App.css";
import { Waitlist } from "./pages/waitlist/Waitlist";
import { About } from "./about/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path='/Home' element={<Home />} />
					<Route path='/waitlist' element={<Waitlist />} />
					<Route path='/About' element={<About />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
