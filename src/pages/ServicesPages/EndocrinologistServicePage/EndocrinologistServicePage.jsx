import React from "react";
import { InformationContainerComponent } from "components/InformationContainerComponent/InformationContainerComponent";
import { PriceListComponent } from "components/PriceListComponent/PriceListComponent";
import { ServicesSpecialistsComponent } from "components/ServicesSpecialistsComponent/ServicesSpecialistsComponent";
import { OfertaComponent } from "components/PriceListComponent/OfertaComponent";
import { CardComponent } from "components/CardComponent/CardComponent";
import { SpecialistsInfoEndocrinologist } from "./SpecialistsInfoEndocrinologist";
import priceInfoEndocrinologist from "./PriceInfoEndocrinologist";

export const EndocrinologistServicePage = () => {
   return (
      <div className="service-page">
         <div className="container">
            <InformationContainerComponent header="Эндокринолог">
               <ServicesSpecialistsComponent
                  specialists={SpecialistsInfoEndocrinologist}
               />
               <PriceListComponent priceInfo={priceInfoEndocrinologist} />
            </InformationContainerComponent>
            <OfertaComponent />
            <CardComponent>
               <div className="block-header">
                  Врач-эндокринолог в Волгограде
               </div>
               <div className="text">
                  Эндокринолог в Красноармейском районе работает в такой
                  медицинской сфере, с особой специализацией, которая занимается
                  определением степени работоспособности и повышением
                  эффективности функционирования эндокринной системы,
                  обеспечивающей правильную работу всего организма человека в
                  целом, и конкретных органов в отдельности.
               </div>
               <div className="text">
                  В медицинской клинике «Эксперт Плюс» практикуют самые опытные
                  специалисты в этой области, способные произвести
                  диагностирование и лечение любых заболеваний, в
                  Красноармейском районе Волгограда, связанных с проблемами в
                  работе эндокринной системы.
               </div>
               <div className="block-header">Что нужно знать</div>
               <div className="text">
                  Врач эндокринолог вплотную занимается с таким распространенным
                  заболеванием, как сахарный диабет. Специалист в области
                  деабетологии способен поставить правильный диагноз, назначить
                  курс лечения и контролировать процесс стабилизации состояния
                  пациента.
               </div>
               <div className="text">
                  При планировании беременности, с целью определения возможных
                  осложнений, просто необходимо посетить эндокринолога, который
                  проконсультирует вас и даст необходимые рекомендации по
                  соблюдению диеты и возможной медикаментозной подготовке к
                  зачатию.
               </div>
               <div className="block-header">Преимущества клиники</div>
               <div className="text">
                  У нас, в Красноармейском районе, вы не найдете длинных
                  очередей и деревянных скамеек (как в обычных городских
                  больницах), мы обеспечим комфортные условия и уважительное
                  отношение к каждому пациенту, а предварительная запись к
                  эндокринологу обеспечит быстрое и качественное обслуживание.
               </div>
               <div className="text">
                  Наши специалисты эндокринологи являются лучшими в Волгограде,
                  что подтверждается их большим опытом в лечении заболеваний
                  эндокринной системы и высокой квалификацией, подтвержденной
                  соответствующими комиссиями.
               </div>
               <div className="text">
                  В распоряжении нашей клиники в Красноармейском районе
                  находится самое современное оборудование, позволяющее
                  качественно и своевременно выявлять все вредоносные явления и
                  процессы в организме человека.
               </div>
               <div className="text">
                  Любую, интересующую вас, информацию, вы можете узнать на сайте
                  или, воспользовавшись нашими контактными номерами, по
                  телефону.
               </div>
            </CardComponent>
         </div>
      </div>
   );
};
