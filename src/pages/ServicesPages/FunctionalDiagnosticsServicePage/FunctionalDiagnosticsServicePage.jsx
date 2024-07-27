import React from "react";
import { InformationContainerComponent } from "components/InformationContainerComponent/InformationContainerComponent";
import { PriceListComponent } from "components/PriceListComponent/PriceListComponent";
import { ServicesSpecialistsComponent } from "components/ServicesSpecialistsComponent/ServicesSpecialistsComponent";
import { OfertaComponent } from "components/PriceListComponent/OfertaComponent";
import { CardComponent } from "components/CardComponent/CardComponent";
import { SpecialistsInfoFunctionalDiagnostics } from "./SpecialistsInfoFunctionalDiagnostics";
import priceInfoFunctionalDiagnostics from "./PriceInfoFunctionalDiagnostics";

export const FunctionalDiagnosticsServicePage = () => {
   return (
      <div className="service-page">
         <div className="container">
            <InformationContainerComponent header="Функциональная диагностика">
               <ServicesSpecialistsComponent
                  specialists={SpecialistsInfoFunctionalDiagnostics}
               />
               <PriceListComponent priceInfo={priceInfoFunctionalDiagnostics} />
            </InformationContainerComponent>
            <OfertaComponent />
            <CardComponent>
               <div className="block-header">Функциональная диагностика</div>
               <div className="text">
                  Функциональная диагностика в Красноармейском районе поставлена
                  на высоком профессиональном уровне в медицинской клинике
                  «Эксперт Плюс». Диагностика этого вида позволяет исследовать
                  функциональные возможности различных систем и органов
                  человека.
               </div>
               <div className="block-header">Виды услуг</div>
               <div className="text bold no-mb black">
                  <li>Снятие электрокардиограммы</li>
               </div>
               <div className="text">
                  Этот способ исследования сердечной активности получил широкое
                  распространение и является основным методом, используемым при
                  диагностике и лечении заболеваний сердца. Врач функциональной
                  диагностики в Красноармейском районе расшифрует показания
                  электрокардиограммы и укажет на любые ишемические изменения,
                  во время предупредит о возможном возникновении
                  пред-инфарктного состояния.
               </div>
               <div className="text bold no-mb black">
                  <li>Спирометрия</li>
               </div>
               <div className="text">
                  Этот вид исследования позволяет оценить состояние дыхательной
                  системы путем измерения жизненной емкости легких, объемной
                  скорости воздушного потока и других параметров системы. Врач
                  функциональной диагностики по результатам спирометрии способен
                  не только определить наличие заболеваний дыхательной системы,
                  но и выявить сердечнососудистые патологии.
               </div>
               <div className="text bold no-mb black">
                  <li>Суточное мониторирование артериального давления</li>
               </div>
               <div className="text">
                  Для правильного и эффективного лечения гипертонии, в различных
                  ее проявлениях, не достаточно простого измерения давления два
                  или три раза в день. Необходимо контролировать изменение
                  артериального давления на протяжении суток, чтобы иметь полную
                  картину его флуктуаций и знать реакцию организма на применение
                  тех или иных лекарств. Именно для этого применяется
                  специальный прибор, позволяющий производить постоянный
                  мониторинг (контроль) артериального давления в течении суток.
               </div>
               <div className="block-header">Преимущества</div>
               <div className="text">
                  Воспользовавшись услугами, предоставляемыми медицинской
                  клиникой «Эксперт Плюс», вы получите качественное и
                  уважительное обслуживание, без очередей и в комфортной
                  обстановке.
               </div>
               <div className="text">
                  Врачи функциональной диагностики Красноармейского района
                  отличаются высокой квалификацией и имеют огромный опыт работы
                  в расшифровке показаний медицинских приборов и оборудования,
                  диагностировании заболеваний по этим данным.
               </div>
               <div className="text">
                  Все оборудование для проведения функциональной диагностики
                  является аппаратурой последнего поколения, находится в
                  идеальном состоянии и откалибровано в соответствии с
                  международными сертификатами.
               </div>
            </CardComponent>
         </div>
      </div>
   );
};
