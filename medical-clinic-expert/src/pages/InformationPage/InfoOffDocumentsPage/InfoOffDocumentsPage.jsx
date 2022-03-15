import React from "react";
import { InformationContainerComponent } from "../../../components/InformationContainerComponent/InformationContainerComponent";
import {AboutClinicComponent} from "../../../components/AboutClinicComponent/AboutClinicComponent"
import {ServicesComponent} from "../../../components/ServicesComponent/ServicesComponent"
export const InfoOffDocumentsPage = () => {
    return (
        <div className="InfoOffDocumentsPage">
            <InformationContainerComponent header="Официальные документы">
                <a href="https://drive.google.com/file/d/1L3pXTZcerpMdX204pVcEK1SZYjd0ysy3/view?usp=sharing">Правила внутреннего распорядка для пациентов ООО "Квалифицированная медицинская помощь"</a>
                <br></br>
                <a href="https://drive.google.com/file/d/1nMLQEAL5bQEaG3ISUbncV1VXYlwoDhzI/view?usp=sharing">Федеральный закон "Об основах охраны здоровья граждан в РФ"</a>
                <br></br>
                <a href="https://drive.google.com/file/d/1J0MZAKJr73x3md1m8KHy6l0HYAghTa0Q/view?usp=sharing">Постановление Правительства РФ от 04.10.2012 N 1006 </a>
                <br></br>
            </InformationContainerComponent>
            
            <AboutClinicComponent />
            <ServicesComponent />
        </div>
    );
};
