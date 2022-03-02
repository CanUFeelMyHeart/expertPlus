import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ContactsPage } from "../../pages/ContactsPage/ContactsPage"
import { DmsPage } from "../../pages/DmsPage/DmsPage";
import { DoctorsPage } from "../../pages/DoctorsPage/DoctorsPage";
import { MainPage } from "../../pages/MainPage/MainPage";
import { AllergistImmunologistServicePage } from '../../pages/ServicesPages/AllergistImmunologistServicePage/AllergistImmunologistServicePage'
import { CardiologistServicePage } from '../../pages/ServicesPages/CardiologistServicePage/CardiologistServicePage'
import { CardiovascularSurgeonServicePage } from '../../pages/ServicesPages/CardiovascularSurgeonServicePage/CardiovascularSurgeonServicePage'
import { ColoproctologistServicePage } from '../../pages/ServicesPages/ColoproctologistServicePage/ColoproctologistServicePage'
import { DermatologistServicePage } from '../../pages/ServicesPages/DermatologistServicePage/DermatologistServicePage'
import { EndocrinologistServicePage } from '../../pages/ServicesPages/EndocrinologistServicePage/EndocrinologistServicePage'
import { FunctionalDiagnosticsServicePage } from '../../pages/ServicesPages/FunctionalDiagnosticsServicePage/FunctionalDiagnosticsServicePage'
import { GastroenterologistServicePage } from '../../pages/ServicesPages/GastroenterologistServicePage/GastroenterologistServicePage'
import { GynecologistServicePage } from '../../pages/ServicesPages/GynecologistServicePage/GynecologistServicePage'
import { MassageServicePage } from '../../pages/ServicesPages/MassageServicePage/MassageServicePage'
import { NeurologistServicePage } from '../../pages/ServicesPages/NeurologistServicePage/NeurologistServicePage'
import { OncologistServicePage } from '../../pages/ServicesPages/OncologistServicePage/OncologistServicePage'
import { OtherServicesPage } from '../../pages/ServicesPages/OtherServicesPage/OtherServicesPage'
import { OtorhinolaryngologistServicePage } from '../../pages/ServicesPages/OtorhinolaryngologistServicePage/OtorhinolaryngologistServicePage'
import { PhysiotherapyServicePage } from '../../pages/ServicesPages/PhysiotherapyServicePage/PhysiotherapyServicePage'
import { PsychologistServicePage } from '../../pages/ServicesPages/PsychologistServicePage/PsychologistServicePage'
import { PulmonologistServicePage } from '../../pages/ServicesPages/PulmonologistServicePage/PulmonologistServicePage'
import { RheumatologistServicePage } from '../../pages/ServicesPages/RheumatologistServicePage/RheumatologistServicePage'
import { SurgeonServicePage } from '../../pages/ServicesPages/SurgeonServicePage/SurgeonServicePage'
import { TherapistServicePage } from '../../pages/ServicesPages/TherapistServicePage/TherapistServicePage'
import { TraumatologistOrthopedistServicePage } from '../../pages/ServicesPages/TraumatologistOrthopedistServicePage/TraumatologistOrthopedistServicePage'
import { TreatmentRoomServicePage } from '../../pages/ServicesPages/TreatmentRoomServicePage/TreatmentRoomServicePage'
import { UltrasoundDiagnosticsServicePage } from '../../pages/ServicesPages/UltrasoundDiagnosticsServicePage/UltrasoundDiagnosticsServicePage'
import { UrologistServicePage } from '../../pages/ServicesPages/UrologistServicePage/UrologistServicePage'

export const NavigationRouter = ({children}) => {
    return (
        <Router>
            {children}
                <Routes>
                <Route path="/" exact element={<MainPage />} />
                <Route path="/doctors" element={<DoctorsPage />} />
                <Route path="/dms" element={<DmsPage />} />
                <Route path="/contacts" element={<ContactsPage />} />

                <Route path="/allergolog-immunolog" element={<AllergistImmunologistServicePage />} />
                <Route path="/kardiolog" element={<CardiologistServicePage />} />
                <Route path="/serdechno-sosudistiy-hirurg" element={<CardiovascularSurgeonServicePage />} />
                <Route path="/koloproktolog" element={<ColoproctologistServicePage />} />
                <Route path="/dermatolog" element={<DermatologistServicePage />} />
                <Route path="/endokrinolog" element={<EndocrinologistServicePage />} />
                <Route path="/funkczionalnaya-diagnostika" element={<FunctionalDiagnosticsServicePage />} />
                <Route path="/gastroenterolog" element={<GastroenterologistServicePage />} />
                <Route path="/ginekolog" element={<GynecologistServicePage />} />
                <Route path="/massage" element={<MassageServicePage />} />
                <Route path="/nevrolog" element={<NeurologistServicePage />} />
                <Route path="/onkolog" element={<OncologistServicePage />} />
                <Route path="/prochie-uslugi" element={<OtherServicesPage />} />
                <Route path="/otorinolaringolog" element={<OtorhinolaryngologistServicePage />} />
                <Route path="/fizioterapiya" element={<PhysiotherapyServicePage />} />
                <Route path="/psikholog" element={<PsychologistServicePage />} />
                <Route path="/pulmonolog" element={<PulmonologistServicePage />} />
                <Route path="/revmatolog" element={<RheumatologistServicePage />} />
                <Route path="/xirurg" element={<SurgeonServicePage />} />
                <Route path="/terapevt" element={<TherapistServicePage />} />
                <Route path="/travmatolog-ortoped" element={<TraumatologistOrthopedistServicePage />} />
                <Route path="/proczedurnyij-kabinet" element={<TreatmentRoomServicePage />} />
                <Route path="/ultrazvukovaya-diagnostika" element={<UltrasoundDiagnosticsServicePage />} />
                <Route path="/urolog" element={<UrologistServicePage />} />
            </Routes>
        </Router>
    );
};
