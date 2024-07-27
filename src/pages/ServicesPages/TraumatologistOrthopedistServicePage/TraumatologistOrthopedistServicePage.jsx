import React from "react";
import { InformationContainerComponent } from "components/InformationContainerComponent/InformationContainerComponent";
import { PriceListComponent } from "components/PriceListComponent/PriceListComponent";
import { ServicesSpecialistsComponent } from "components/ServicesSpecialistsComponent/ServicesSpecialistsComponent";
import { OfertaComponent } from "components/PriceListComponent/OfertaComponent";
import { CardComponent } from "components/CardComponent/CardComponent";
import { SpecialistsInfoTraumatologistOrthopedist } from "./SpecialistsInfoTraumatologistOrthopedist";
import priceInfoTraumatologistOrthopedist from "./PriceInfoTraumatologistOrthopedist";

export const TraumatologistOrthopedistServicePage = () => {
   return (
      <div className="service-page">
         <div className="container">
            <InformationContainerComponent header="Травматолог-ортопед">
               <ServicesSpecialistsComponent
                  specialists={SpecialistsInfoTraumatologistOrthopedist}
               />
               <PriceListComponent
                  priceInfo={priceInfoTraumatologistOrthopedist}
               />
            </InformationContainerComponent>
            <OfertaComponent />
            <CardComponent>
               <div className="block-header">
                  Травматолог-ортопед в Волгограде
               </div>
               <div className="text">
                  Врач травматолог-ортопед в Волгограде может помочь вам не
                  только при лечении различного рода травм (от ушибов и вывихов,
                  до сложных переломов и их последствий), но и в устранении
                  врожденных дефектов опорно-двигательного аппарата.
               </div>
               <div className="text">
                  Если вам нужен травматолог-ортопед в Красноармейском районе
                  Волгограда, то самым лучшим решением станет выбор специалистов
                  медицинской клиники «Эксперт Плюс».
               </div>
               <div className="block-header">
                  Достоинства врачей травматологов, клиники «Эксперт Плюс»
               </div>
               <div className="text">
                  <ul>
                     <li>
                        Наши практикующие врачи травматологи-ортопеды отличаются
                        высокой квалификацией, большим опытом работы и
                        уважительным отношением к пациентам.
                     </li>
                     <li>
                        В их компетенции лечение пациентов, получивших поражения
                        (электрические, механические, химические, радиоактивные)
                        различного рода.
                     </li>
                     <li>
                        Врачи травматологи-ортопеды в Красноармейском районе
                        производят диагностирование и лечение остеоза и
                        паратиреоидной остеодистрофии.
                     </li>
                     <li>
                        Решают проблемы с искривлением позвоночника и
                        исправлением его патологий.
                     </li>
                     <li>
                        Сложные переломы и проблемные вывихи в компетенции наших
                        врачей, которые всегда готовы оказать помощь в
                        Красноармейском районе Волгограда.
                     </li>
                  </ul>
               </div>
               <div className="block-header" v>
                  В каких случаях необходимо обращаться к травматологу-ортопеду
               </div>
               <div className="text">
                  Если вы получили сложный перелом и срастание костей происходит
                  очень долго, с большими болями и дискомфортом, то это повод
                  обратиться к нашему врачу в Красноармейском районе.
               </div>
               <div className="text">
                  Для получения правильного курса лечения после перенесенного
                  полиомиелита необходима консультация у травматолога-ортопеда,
                  рекомендуем клинику «Эксперт Плюс».
               </div>
               <div className="text">
                  При острой, хронической или сильной боли в суставах и
                  позвоночнике рекомендуется обратиться к специалисту в этой
                  области медицины и лучше всего, к травматологу-ортопеду
                  Красноармейского района, который проконсультирует вас и
                  назначит необходимый курс лечения для восстановления
                  правильной работы коленных суставов, тазобедренных суставов и
                  суставов стопы.
               </div>
               <div className="block-header" v>
                  Где получить помощь
               </div>
               <div className="text">
                  Вся подробная информация о предоставляемых услугах врачами
                  медицинской клиники «Эксперт Плюс» находится на сайте, более
                  конкретные данные вы можете узнать, воспользовавшись нашими
                  контактными телефонами.
               </div>
            </CardComponent>
         </div>
      </div>
   );
};
