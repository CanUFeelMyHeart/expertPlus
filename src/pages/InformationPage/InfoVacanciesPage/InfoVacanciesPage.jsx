import React from "react";
import { InformationContainerComponent } from "../../../components/InformationContainerComponent/InformationContainerComponent";
import "./InfoVacanciesPage.css";

export const InfoVacanciesPage = () => {
   return (
      <div className="InfoVacanciesPage">
         <div className="container">
            <InformationContainerComponent header="Вакансии">
               <div className="InfoVacanciesPage__header">
                  На данный момент в клинике открыты вакансии:
               </div>
               <br />
               <ul className="InfoVacanciesPage_list">
                  <li>Врач эндокринолог</li>
                  <li>Врач ревматолог</li>
                  <li>Врач аллерголог пульмонолог</li>
                  <li>Врач - гинеколог</li>
                  <li>Кардиолог</li>
                  <li>Терапевт и медсестра</li>
               </ul>
            </InformationContainerComponent>
         </div>
      </div>
   );
};
