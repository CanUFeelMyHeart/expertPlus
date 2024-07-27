import React from "react";
import { InformationContainerComponent } from "components/InformationContainerComponent/InformationContainerComponent";
import { PriceListComponent } from "components/PriceListComponent/PriceListComponent";
import { ServicesSpecialistsComponent } from "components/ServicesSpecialistsComponent/ServicesSpecialistsComponent";
import { OfertaComponent } from "components/PriceListComponent/OfertaComponent";
import { CardComponent } from "components/CardComponent/CardComponent";
import { SpecialistsInfoTherapist } from "./SpecialistsInfoTherapist";
import priceInfoTherapist from "./PriceInfoTherapist";

export const TherapistServicePage = () => {
   return (
      <div className="service-page">
         <div className="container service-page__container">
            <InformationContainerComponent header="Терапевт">
               <ServicesSpecialistsComponent
                  specialists={SpecialistsInfoTherapist}
               />
               <PriceListComponent priceInfo={priceInfoTherapist} />
            </InformationContainerComponent>
            <OfertaComponent />
            <CardComponent>
               <div className="block-header">Врач-терапевт в Волгограде</div>
               <div className="text p">
                  В нашей повседневной жизни, самым универсальным и
                  востребованным доктором является врач терапевт. Если вам нужен
                  хороший терапевт в Волгограде, то в медицинской клинике
                  «Эксперт Плюс» практикуют специалисты, в этой области, самого
                  высокого уровня квалификации.
               </div>
               <div className="block-header">
                  Несколько причин записаться на прием терапевта или позвонить в
                  нашу клинику:
               </div>
               <div className="text p">
                  <ul>
                     <li>
                        уважительное и доверительное отношение врач/пациент, в
                        процессе обследования клиента не запугивают наличием
                        оборудования непонятного назначения;
                     </li>
                     <li>
                        все практикующие терапевты нашей клиники, в
                        Красноармейском районе, имеют высокую квалификацию и
                        многолетний опыт, для диагностики заболеваний врачи не
                        используют зондов и облучающих устройств, используют
                        только перкуссию, аускультацию и пальпацию
                        (простукивание, прослушивание, продавливание);
                     </li>
                     <li>
                        вам не нужно стоять в очереди весь день, достаточно
                        записаться на прием к врачу терапевту в Волгограде, в
                        Красноармейском районе, в нашей клинике «Эксперт Плюс»,
                        и в назначенное время опытный специалист примет вас;
                     </li>
                     <li>
                        предусмотрена возможность экстренного вызова терапевта в
                        Красноармейском районе, который окажет скорую
                        медицинскую помощь.
                     </li>
                  </ul>
               </div>
               <div className="block-header" v>
                  Когда необходимо срочно обратиться к терапевту
               </div>
               <div className="text p">
                  Бывают случаи, когда просто необходимо посетить терапевта в
                  Красноармейском районе, не откладывая в «долгий ящик», и не
                  затягивая посещение:
               </div>
               <div className="text p">
                  <ul>
                     <li>
                        заболевания ОРЗ и грипп, провоцирующие большие
                        осложнения в работе основных органов;
                     </li>
                     <li>
                        острые боли в грудной клетке, слабость и одышка –
                        терапевт окажет необходимую помощь и направит к нужному
                        специалисту (кардиологу, неврологу);
                     </li>
                     <li>
                        общая слабость, усиленное потоотделение, «ломота» в
                        костях, это повод обратиться к терапевту на предмет
                        диагностики сахарного диабета, анемии, нарушения обмена
                        веществ;
                     </li>
                     <li>
                        сильные рези и боли в области живота – терапевт, это тот
                        врач, который поставит первоначальный диагноз, окажет
                        первую помощь и вовремя направит вас, для лечения, к
                        нужному специалисту.
                     </li>
                  </ul>
               </div>
               <div className="block-header" v>
                  Как получить помощь
               </div>
               <div className="text p">
                  Медицинская клиника «Эксперт Плюс» делает все, для того чтобы
                  оказывать своевременную помощь населению в Красноармейском
                  районе с максимальной оперативностью. Мы работаем без выходных
                  и перерыва, достаточно позвонить нам по контактным телефонам
                  или написать по электронной почте.
               </div>
            </CardComponent>
         </div>
      </div>
   );
};
