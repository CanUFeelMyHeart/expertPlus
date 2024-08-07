import React from "react";
import { InformationContainerComponent } from "components/InformationContainerComponent/InformationContainerComponent";
import { PriceListComponent } from "components/PriceListComponent/PriceListComponent";
import { ServicesSpecialistsComponent } from "components/ServicesSpecialistsComponent/ServicesSpecialistsComponent";
import { SpecialistsInfoAllergist } from "./SpecialistsInfoAllergist";
import { OfertaComponent } from "components/PriceListComponent/OfertaComponent";
import { CardComponent } from "components/CardComponent/CardComponent";
import priceInfoAllergist from "./PriceInfoAllergist";
import allergist from "assets/images/services/allergolog1.jpg";
import "../../PagesBackgroundStyles.css";

export const AllergistImmunologistServicePage = () => {
   return (
      <div className="service-page">
         <div className="container service-page__container">
            <InformationContainerComponent header="Аллерголог-иммунолог">
               <ServicesSpecialistsComponent
                  specialists={SpecialistsInfoAllergist}
               />
               <PriceListComponent priceInfo={priceInfoAllergist} />
            </InformationContainerComponent>
            <OfertaComponent />
            <CardComponent>
               <div className="block-header">Уважаемые пациенты !</div>
               <div className="text p">
                  Если в сезон активного цветения вас мучает неприятный зуд в
                  носу или насморк, то до наступления теплых весенних дней мы
                  рекомендуем вам обратиться за консультацией к опытному врачу
                  аллергологу в Волгограде для обследования. По результатам
                  такого обследования вам будет назначена предсезонная
                  профилактическая терапия, которая поможет вам облегчить
                  неприятные симптомы или даже полностью избежать проявлений
                  сезонной аллергии.
               </div>
               <div className="text p">
                  Одним из частых видов сезонной аллергии является поллиноз –
                  это повышение чувствительности слизистой оболочки глаз и
                  дыхательных путей под действием пыльцевых аллергенов.
               </div>
               <div className="text p">
                  Повышенное содержание пыльцы в воздухе в весенний период, а
                  также постоянное попадание ее в дыхательные пути, вызывает
                  состояние, которое называют сенсибилизацией организма.
               </div>
               <div className="block-header" v>
                  Симптомы поллиноза
               </div>
               <div className="text p">
                  Начинать бить тревогу нужно, почувствовав зуд в носоглотке,
                  при сильном слезотечении, насморке «в три ручья» и частых
                  приступах чихания.
               </div>
               <div className="card__img">
                  <img
                     src={allergist}
                     alt="allergologist"
                  />
               </div>
               <div className="text p">
                  Такие приступы начинаются внезапно, на фоне полного
                  благополучия и крепкого здоровья. Если вовремя не обратиться к
                  врачу аллергологу, то начальные симптомы могут перейти в
                  серьезные осложнения: развивается отек слизистой не только
                  носоглотки, но и слуховых труб, в процесс вовлекаются
                  голосовые связки, в результате чего у больного изменяется
                  голос, снижается слух, возможно затруднение дыхания, приступы
                  одышки, а также обострения аллергических дерматитов.
               </div>
            </CardComponent>
         </div>
      </div>
   );
};
