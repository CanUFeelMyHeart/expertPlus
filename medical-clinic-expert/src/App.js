import React from "react";
import { FullHeaderComponent as Header } from "./components/FullHeaderComponent/FullHeaderComponent";
import { AboutClinicComponent as AboutClinic } from "./components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from "./components/ServicesComponent/ServicesComponent";
import { NavigationRouter as Router } from "./components/NavigationComponent/NavigationComponent";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <AboutClinic />
                <ServicesComponent />
            </Router>
        </div>
    );
}

export default App;
