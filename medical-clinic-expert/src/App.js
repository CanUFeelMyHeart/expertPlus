import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContactsPage } from "./pages/ContactsPage/ContactsPage";
import { DmsPage } from "./pages/DmsPage/DmsPage";
import { DoctorsPage } from "./pages/DoctorsPage/DoctorsPage";
import { InformationPage } from "./pages/InformationPage/InformationPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { MedicalServicesPage } from "./pages/MedicalServicesPage/MedicalServicesPage";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" exact element={<MainPage/>} />
                    <Route path="/info" element={<InformationPage/>} />
                    <Route path="/services" element={<MedicalServicesPage/>} />
                    <Route path="/doctors" element={<DoctorsPage/>} />
                    <Route path="/dms" element={<DmsPage/>} />
                    <Route path="/contacts" element={<ContactsPage/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
