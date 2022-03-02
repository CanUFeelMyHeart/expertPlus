import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FullHeaderComponent as Header } from "./components/FullHeaderComponent/FullHeaderComponent";
import { AboutClinicComponent as AboutClinic } from "./components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from "./components/ServicesComponent/ServicesComponent";
import { ContactsPage } from "./pages/ContactsPage/ContactsPage";
import { DmsPage } from "./pages/DmsPage/DmsPage";
import { DoctorsPage } from "./pages/DoctorsPage/DoctorsPage";
import { MainPage } from "./pages/MainPage/MainPage";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" exact element={<MainPage />} />
                    {/* <Route path="/info" element={<InformationPage/>} />
                    <Route path="/services" element={<MedicalServicesPage/>} /> */}
                    <Route path="/doctors" element={<DoctorsPage />} />
                    <Route path="/dms" element={<DmsPage />} />
                    <Route path="/contacts" element={<ContactsPage />} />
                </Routes>
                <AboutClinic />
                <ServicesComponent />
            </div>
        </Router>
    );
}

export default App;
