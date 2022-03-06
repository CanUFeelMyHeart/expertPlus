import React from "react";
import { FullHeaderComponent as Header } from "./components/FullHeaderComponent/FullHeaderComponent";
import { NavigationRouter as Router } from "./components/NavigationComponent/NavigationComponent";


function App() {
    return (
        <div className="App">
            <Router>
                <Header />
            </Router>
        </div>
    );
}

export default App;
