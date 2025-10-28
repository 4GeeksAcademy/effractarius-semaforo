import React from "react";

//include images into your bundle
import Semaforo from "./Semaforo.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
            <Semaforo />					
		</div>
	);
};

export default Home;