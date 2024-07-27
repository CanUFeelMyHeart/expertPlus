import React from "react";
import { InformationContainerComponent } from "components/InformationContainerComponent/InformationContainerComponent";
import { PriceListComponent } from "components/PriceListComponent/PriceListComponent";
import { ServicesSpecialistsComponent } from "components/ServicesSpecialistsComponent/ServicesSpecialistsComponent";
import { OfertaComponent } from "components/PriceListComponent/OfertaComponent";
import { CardComponent } from "components/CardComponent/CardComponent";
import { SpecialistsInfoCardiologist } from "./SpecialistsInfoCardiologist";
import priceInfoCardiologist from "./PriceInfoCardiologist";
import "../../PagesBackgroundStyles.css";

export const CardiologistServicePage = () => {
   return (
      <div className="service-page">
         <div className="container service-page__container">
            <InformationContainerComponent header="Кардиолог">
               <ServicesSpecialistsComponent
                  specialists={SpecialistsInfoCardiologist}
               />
               <PriceListComponent priceInfo={priceInfoCardiologist} />
            </InformationContainerComponent>
            <OfertaComponent />
            <CardComponent>
               <div className="block-header">Врач-кардиолог в Волгограде</div>
               <div className="text p">
                  Для лечения и реабилитации, после различных болезней сердца,
                  необходимо постоянно консультироваться у врача. Кардиолог в
                  Волгограде ведет прием, как в муниципальных больницах, так и в
                  частных клиниках, но лучшие кардиологи Волгограда практикуют в
                  медицинской клинике «Эксперт Плюс».
               </div>
               <div className="block-header" v>
                  Здесь вы можете получить необходимую помощь в лечении
                  заболеваний:
               </div>
               <div className="text p">
                  <ul>
                     <li>ИБС (ишемическая болезнь сердца);</li>
                     <li>пороки сердца (приобретенные и врожденные);</li>
                     <li>стенокардия;</li>
                     <li>аритмия и аневризма;</li>
                     <li>тромбозы и тромбофлебиты;</li>
                     <li>
                        разнообразные воспалительные поражения мышц сердца и
                        сосудов.
                     </li>
                  </ul>
               </div>
               <div className="text p">
                  Понять, что вам нужна консультация кардиолога можно по
                  основным симптомам и ощущениям: боли в области грудной клетки,
                  а особенно в левой ее части, головокружение и слабость, одышка
                  и гипертоническая болезнь, ревматические проявления и резкое
                  увеличение веса. При этом врача желательно посетить на
                  минимальном удалении от места проживания, например, кардиолога
                  в Красноармейском районе, в нашей клинике.
               </div>
               <div className="text p">
                  Кроме того, необходимость записаться на прием врача кардиолога
                  в красноармейском районе возникает в случае диагностирования
                  сахарного диабета (любой степени, даже очень легкой) и
                  повышенного уровня холестерина в крови. Кстати, анализ крови
                  на сахар и холестерин производится в медицинской клинике
                  «Эксперт Плюс» очень оперативно, благодаря современному
                  оборудованию и высокому профессионализму медицинских
                  работников.
               </div>
               <div className="block-header">Наши преимущества</div>
               <div className="text p">
                  - При острых сердечных болях у пациентов, в медицинской
                  клинике «Эксперт Плюс» предусмотрена услуга выезда кардиолога
                  в Красноармейском районе на дом, наш врач окажет скорую помощь
                  и произведет предварительную диагностику заболевания.
               </div>
               <div className="text p">
                  - Для диагностирования и лечения заболеваний сердца наши
                  кардиологи применяют оборудование, разработанное с применением
                  инновационных технологий, и новейшие методы лечения, изученные
                  на международных конференциях кардиологов.
               </div>
               <div className="text p">
                  - Комфортабельная обстановка, отсутствие очередей,
                  уважительное и доброжелательное отношение персонала, в
                  медицинской клинике «Эксперт Плюс», позволит людям с болезнями
                  сердца, на приеме у врача кардиолога в Красноармейском районе,
                  максимально оградить свое сердце от лишних нагрузок и
                  отрицательных переживаний.
               </div>
               <div className="text p">
                  Если вы уже решили воспользоваться услугами нашей клиники
                  «Эксперт Плюс», находящейся в Красноармейском районе
                  Волгограда, то стоимость консультации врача кардиолога можно
                  узнать непосредственно на нашем сайте, либо воспользовавшись
                  нашими контактными телефонами.
               </div>
            </CardComponent>
         </div>
      </div>
   );
};
