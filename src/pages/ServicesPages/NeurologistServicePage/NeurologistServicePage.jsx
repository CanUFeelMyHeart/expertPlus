import React from "react";
import { InformationContainerComponent } from "components/InformationContainerComponent/InformationContainerComponent";
import { PriceListComponent } from "components/PriceListComponent/PriceListComponent";
import { ServicesSpecialistsComponent } from "components/ServicesSpecialistsComponent/ServicesSpecialistsComponent";
import { OfertaComponent } from "components/PriceListComponent/OfertaComponent";
import { CardComponent } from "components/CardComponent/CardComponent";
import { SpecialistsInfoNeurologist } from "./SpecialistsInfoNeurologist";
import priceInfoNeurologist from "./PriceInfoNeurologist";

export const NeurologistServicePage = () => {
   return (
      <div className="service-page">
         <div className="container">
            <InformationContainerComponent header="Невролог">
               <ServicesSpecialistsComponent
                  specialists={SpecialistsInfoNeurologist}
               />
               <PriceListComponent priceInfo={priceInfoNeurologist} />
            </InformationContainerComponent>
            <OfertaComponent />
            <CardComponent>
               <div className="block-header">Врач-невролог в Волгограде</div>
               <div className="text">
                  Записаться на прием к хорошему неврологу в Волгограде вы
                  можете, обратившись в частную клинику «Эксперт Плюс». В этом
                  медицинском учреждении практикуют врачи неврологи,
                  оказывающие, в первую очередь, срочную и необходимую помощь
                  пациентам Красноармейского района.
               </div>
               <div className="block-header">
                  Консультация врача невролога настоятельно рекомендуется
               </div>
               <div className="text">
                  пациентам, испытывающим следующие недомогания:
               </div>
               <div className="text">
                  <ul>
                     <li>
                        непрекращающиеся головные боли, сильные и частые,
                        мигрени;
                     </li>
                     <li>
                        заикание, повышенная возбуждаемость, задержка моторного
                        развития;
                     </li>
                     <li>
                        постоянная бессонница или другие нарушения сна (частые
                        пробуждения, тревога);
                     </li>
                     <li>покалывание в руках и ногах, или их онемение;</li>
                     <li>
                        постоянный или периодический шум в ушах, сильное
                        головокружение, обмороки;
                     </li>
                     <li>
                        внезапные и очень острые боли в спине, шее, грудном
                        отделе;
                     </li>
                     <li>
                        ухудшение памяти, состояние повышенной тревожности;
                     </li>
                     <li>
                        другие симптомы, не связанные с хроническими и
                        психическими заболеваниями.
                     </li>
                  </ul>
               </div>
               <div className="block-header" v>
                  Что предлагает клиника «Эксперт Плюс»
               </div>
               <div className="text">
                  При первичной консультации будет произведен осмотр пациента и
                  сбор анамнеза, позволяющего определиться с предварительным
                  диагнозом или назначением дополнительного обследования (МРТ,
                  комплекс анализов).
               </div>
               <div className="text">
                  Во время повторного визита к врачу неврологу в Красноармейском
                  районе, пациенту назначат необходимые процедуры и препараты, в
                  соответствии с поставленным диагнозом и составленной личной
                  картой (планом) лечения.
               </div>
               <div className="text">
                  В услуги нашей клиники входит возможность вызова специалиста
                  невролога в Красноармейском районе, если у ребенка приступ
                  эпилепсии, бессонница, ДЦП, неконтролируемая возбудимость, а у
                  взрослых явные признаки перенесенного инсульта,
                  черепно-мозговая травма, сильное головокружение, остеохондроз
                  или радикулит.
               </div>
               <div className="text">
                  Обо всех услугах, которые предоставляет клиника «Эксперт
                  Плюс», расположенная в Красноармейском районе Волгограда,
                  можно узнать непосредственно на нашем сайте или по контактным
                  телефонам, указанным выше.
               </div>
            </CardComponent>
         </div>
      </div>
   );
};
