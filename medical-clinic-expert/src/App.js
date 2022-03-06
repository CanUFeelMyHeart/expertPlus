import React from "react";
import { FullHeaderComponent as Header } from "./components/FullHeaderComponent/FullHeaderComponent";
<<<<<<< HEAD
import { AboutClinicComponent as AboutClinic } from "./components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from "./components/ServicesComponent/ServicesComponent";
import { ContactsPage } from "./pages/ContactsPage/ContactsPage";
import { DmsPage } from "./pages/DmsPage/DmsPage";
import { DoctorsPage } from "./pages/DoctorsPage/DoctorsPage";
import { MainPage } from "./pages/MainPage/MainPage";
import {InformationComponent} from "./components/InformationComponent/InformationComponent"
<<<<<<< Updated upstream
import {MapComponent} from "./components/MapComponent/MapComponent"
=======
=======
import { NavigationRouter as Router } from "./components/NavigationComponent/NavigationComponent";

>>>>>>> main
>>>>>>> Stashed changes
function App() {
    return (
        <div className="App">
            <Router>
                <Header />
<<<<<<< HEAD
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
                <InformationComponent />
                <MapComponent/>
            </div>
        </Router>
=======
            </Router>
        </div>
>>>>>>> main
    );
}

export default App;
