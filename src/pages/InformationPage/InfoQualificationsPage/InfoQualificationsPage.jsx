import React from "react";
import { InformationContainerComponent } from "../../../components/InformationContainerComponent/InformationContainerComponent";
import qualificationsInfoData from "../../../data/qualificationsInfo.json";
import "./InfoQualificationsPage.css";

const qualificationsInfo = qualificationsInfoData;

export const InfoQualificationsPage = () => {
   return (
      <div className="InfoQualificationsPage">
         <div className="container">
            <InformationContainerComponent header="Сведения о квалификации медицинских работников, участвующих в предоставлении платных медицинских услуг">
               <div className="overrrrrrrr">
                  <table className="InfoQualificationsPage__table">
                     <thead>
                        <tr className="InfoQualificationsPage__thead">
                           <td className="InfoQualificationsPage__thead_td">
                              Ф.И.О. врача
                           </td>
                           <td className="InfoQualificationsPage__thead_td">
                              Специальность
                           </td>
                           <td className="InfoQualificationsPage__thead_td">
                              Год выдачи, город
                           </td>
                           <td className="InfoQualificationsPage__thead_td">
                              Срок действия сертификата
                           </td>
                        </tr>
                     </thead>
                     <tbody>
                        {qualificationsInfo.map((info, index) => (
                           <>
                              <tr
                                 key={index}
                                 className="InfoQualificationsPage__trow"
                              >
                                 <td className="InfoQualificationsPage__trow_td name">
                                    {info.name}
                                 </td>
                                 <td className="InfoQualificationsPage__trow_td">
                                    {info.speciality}
                                 </td>
                                 <td className="InfoQualificationsPage__trow_td">
                                    {info.yearSity}
                                 </td>
                                 <td className="InfoQualificationsPage__trow_td">
                                    {info.time}
                                 </td>
                              </tr>
                           </>
                        ))}
                     </tbody>
                  </table>
               </div>
            </InformationContainerComponent>
         </div>
      </div>
   );
};
