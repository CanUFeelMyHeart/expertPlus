import React from "react";
import { InformationContainerComponent } from "components/InformationContainerComponent/InformationContainerComponent";
import { PriceListComponent } from "components/PriceListComponent/PriceListComponent";
import { ServicesSpecialistsComponent } from "components/ServicesSpecialistsComponent/ServicesSpecialistsComponent";
import { SpecialistsInfoGynecologist } from "./SpecialistsInfoGynecologist";
import { OfertaComponent } from "components/PriceListComponent/OfertaComponent";
import { CardComponent } from "components/CardComponent/CardComponent";
import priceInfoGynecologist from "./PriceInfoGynecologist";

export const GynecologistServicePage = () => {
   return (
      <div className="service-page">
         <div className="container service-page__container">
            <InformationContainerComponent header="Акушер-гинеколог">
               <ServicesSpecialistsComponent
                  specialists={SpecialistsInfoGynecologist}
               />
               <PriceListComponent priceInfo={priceInfoGynecologist} />
            </InformationContainerComponent>
            <OfertaComponent />
            <CardComponent>
               <div className="block-header">Акушер-гинеколог в Волгограде</div>
               <div className="text p">
                  Если вам необходим гинеколог в Красноармейском районе г.
                  Волгограда, то смело обращайтесь в медицинскую клинику
                  «Эксперт Плюс». У нас работают лучшие акушеры-гинекологи
                  Волгограда. Это объясняется тем, что мы создали самые лучшие и
                  необходимые условия для того, чтобы врач акушер-гинеколог мог
                  исполнять свои обязанности, с полной самоотдачей и высоким
                  профессионализмом. Гинеколог в частной клинике не может себе
                  позволить формальное обслуживание пациента, у нас вы встретите
                  только доброжелательное общение и уважительное отношение к
                  вашим проблемам.
               </div>
               <div className="text p">
                  В клинике «Эксперт Плюс», акушер-гинеколог, при необходимости,
                  проведет:
               </div>
               <div className="text p">
                  <ul>
                     <li>введение или удаление внутриматочной спирали;</li>
                     <li>биопсию шейки матки, аппаратную или конхотомную;</li>
                     <li>кольпоскопию;</li>
                     <li>
                        забор материала врачом на онкоцитологическое
                        исследование;
                     </li>
                     <li>удаление единичного образования;</li>
                     <li>медикаментозное прерывание беременности.</li>
                  </ul>
               </div>
               <div className="text p">
                  Это самый общий список, предоставляемых услуг. Консультация
                  гинеколога в Красноармейском районе Волгограда позволит вам
                  определиться с необходимыми, лечебными процедурами, которые
                  следует провести для восстановления вашего здоровья.
               </div>
               <div className="block-header">Преимущества</div>
               <div className="text p">
                  - Обследование и лечение в нашей клинике проводится в режиме
                  полной конфиденциальности, мы предоставим полный комплекс
                  обследования, лечения и услуг, назначенных лечащим врачом.
               </div>
               <div className="text p">
                  - Полное сопровождение беременности, от ультразвукового
                  исследования в каждом триместре, до медикаментозной ее
                  поддержки, причем, предусмотрена возможность вызова врача в
                  Красноармейском районе Волгограда, на дом.
               </div>
               <div className="text p">
                  - Все наши врачи, акушеры-гинекологи, подтвердили свою
                  квалификацию, и имею огромный опыт в диагностике и лечении
                  заболеваний такого рода.
               </div>
               <div className="text p">
                  Если вы решили записаться на прием к акушеру-гинекологу нашей
                  клиники «Эксперт Плюс», вам достаточно набрать контактный
                  номер или написать заявку на нашу электронную почту.
               </div>
            </CardComponent>
         </div>
      </div>
   );
};
