import React from "react";
import '../public/app.css';

import NavBar from "./NavBar";
import Hero from "./Hero";
import Features from "./Features";
import Testimonials from "./Testimonials";

const App = () => {
	return (
		<>
			<NavBar />
			<Hero />
			<Features />
			<Testimonials />
		</>
	)
}

export default App