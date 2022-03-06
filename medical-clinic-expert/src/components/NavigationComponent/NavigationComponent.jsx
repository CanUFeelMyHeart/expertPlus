import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FooterComponent } from '../../components/FooterComponent/FooterComponent'
import { MapComponent } from '../../components/MapComponent/MapComponent'
import ScrollToTop from './ScrollToTop'

import { ContactsPage } from "../../pages/ContactsPage/ContactsPage"
import { DmsPage } from "../../pages/DmsPage/DmsPage";
import { DoctorsPage } from "../../pages/DoctorsPage/DoctorsPage";
import { MainPage } from "../../pages/MainPage/MainPage";

import { InfoAboutPage } from '../../pages/InformationPage/InfoAboutPage/InfoAboutPage'
import { InfoControlOrgPage } from '../../pages/InformationPage/InfoControlOrgPage/InfoControlOrgPage'
import { InfoLegFramPage } from '../../pages/InformationPage/InfoLegFramPage/InfoLegFramPage'
import { InfoLicencePage } from '../../pages/InformationPage/InfoLicencePage/InfoLicencePage'
import { InfoMapPage } from '../../pages/InformationPage/InfoMapPage/InfoMapPage'
import { InfoOffDocumentsPage } from '../../pages/InformationPage/InfoOffDocumentsPage/InfoOffDocumentsPage'
import { InfoQualificationsPage } from '../../pages/InformationPage/InfoQualificationsPage/InfoQualificationsPage'
import { InfoRegulationsPage } from '../../pages/InformationPage/InfoRegulationsPage/InfoRegulationsPage'
import { InfoVacanciesPage } from '../../pages/InformationPage/InfoVacanciesPage/InfoVacanciesPage'

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
            <ScrollToTop/>
            {children}
                <Routes>
                <Route path="/" exact element={<MainPage />} />
                <Route path="/doctors" element={<DoctorsPage />} />
                <Route path="/dms" element={<DmsPage />} />
                <Route path="/contacts" element={<ContactsPage />} />

                <Route path="/info/about" element={<InfoAboutPage />} />
                <Route path="/info/control-org" element={<InfoControlOrgPage />} />
                <Route path="/info/docs" element={<InfoLegFramPage />} />
                <Route path="/info/licence" element={<InfoLicencePage />} />
                <Route path="/info/sitemap" element={<InfoMapPage />} />
                <Route path="/info/oficialnyie-dokumenty" element={<InfoOffDocumentsPage />} />
                <Route path="/info/svedeniya-o-kvalifikaczii-mediczinskix-rabotnikov" element={<InfoQualificationsPage />} />
                <Route path="/info/polozhenie-o-predostavlenii-platnyix-mediczinskix-uslug" element={<InfoRegulationsPage />} />
                <Route path="/info/jobs" element={<InfoVacanciesPage />} />

                <Route path="/services/allergolog-immunolog" element={<AllergistImmunologistServicePage />} />
                <Route path="/services/kardiolog" element={<CardiologistServicePage />} />
                <Route path="/services/serdechno-sosudistiy-hirurg" element={<CardiovascularSurgeonServicePage />} />
                <Route path="/services/koloproktolog" element={<ColoproctologistServicePage />} />
                <Route path="/services/dermatolog" element={<DermatologistServicePage />} />
                <Route path="/services/endokrinolog" element={<EndocrinologistServicePage />} />
                <Route path="/services/funkczionalnaya-diagnostika" element={<FunctionalDiagnosticsServicePage />} />
                <Route path="/services/gastroenterolog" element={<GastroenterologistServicePage />} />
                <Route path="/services/ginekolog" element={<GynecologistServicePage />} />
                <Route path="/services/massage" element={<MassageServicePage />} />
                <Route path="/services/nevrolog" element={<NeurologistServicePage />} />
                <Route path="/services/onkolog" element={<OncologistServicePage />} />
                <Route path="/services/prochie-uslugi" element={<OtherServicesPage />} />
                <Route path="/services/otorinolaringolog" element={<OtorhinolaryngologistServicePage />} />
                <Route path="/services/fizioterapiya" element={<PhysiotherapyServicePage />} />
                <Route path="/services/psikholog" element={<PsychologistServicePage />} />
                <Route path="/services/pulmonolog" element={<PulmonologistServicePage />} />
                <Route path="/services/revmatolog" element={<RheumatologistServicePage />} />
                <Route path="/services/xirurg" element={<SurgeonServicePage />} />
                <Route path="/services/terapevt" element={<TherapistServicePage />} />
                <Route path="/services/travmatolog-ortoped" element={<TraumatologistOrthopedistServicePage />} />
                <Route path="/services/proczedurnyij-kabinet" element={<TreatmentRoomServicePage />} />
                <Route path="/services/ultrazvukovaya-diagnostika" element={<UltrasoundDiagnosticsServicePage />} />
                <Route path="/services/urolog" element={<UrologistServicePage />} />
            </Routes>
            <MapComponent/>
            <FooterComponent/>
        </Router>
    );
};
