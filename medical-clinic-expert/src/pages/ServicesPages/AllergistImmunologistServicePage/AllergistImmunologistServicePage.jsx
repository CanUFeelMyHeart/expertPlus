import React from "react";
import { InformationContainerComponent } from "../../../components/InformationContainerComponent/InformationContainerComponent";
import { PriceListComponent } from "../../../components/PriceListComponent/PriceListComponent";
import { ServicesSpecialistsComponent } from "../../../components/ServicesSpecialistsComponent/ServicesSpecialistsComponent";
import { SpecialistsInfoAllergist } from "./SpecialistsInfoAllergist";
import { OfertaComponent } from "../../../components/PriceListComponent/OfertaComponent";
import { ServiceSpecialistsInfoComponent } from "../../../components/ServiceSpecialistsInfoComponent/ServiceSpecialistsInfoComponent";
import { priceInfoAllergist } from "./PriceInfoAllergist";
import allergist from "../../../assets/images/services/allergolog1.jpg";

export const AllergistImmunologistServicePage = () => {
  return (
    <div className="AllergistImmunologistServicePage">
      <InformationContainerComponent header="Аллерголог-иммунолог">
        <ServicesSpecialistsComponent specialists={SpecialistsInfoAllergist} />
        <PriceListComponent priceInfo={priceInfoAllergist} />
      </InformationContainerComponent>
      <OfertaComponent />
      <ServiceSpecialistsInfoComponent>
        <div className="services_doctor_info_container">
          <h2 className="services_doctor_info_header">Уважаемые пациенты !</h2>
          <h3 className="services_doctor_info_description">
            Если в сезон активного цветения вас мучает неприятный зуд в носу или
            насморк, то до наступления теплых весенних дней мы рекомендуем вам
            обратиться за консультацией к опытному врачу аллергологу в
            Волгограде для обследования. По результатам такого обследования вам
            будет назначена предсезонная профилактическая терапия, которая
            поможет вам облегчить неприятные симптомы или даже полностью
            избежать проявлений сезонной аллергии.
          </h3>
          <h3 className="services_doctor_info_description">
            Одним из частых видов сезонной аллергии является поллиноз – это
            повышение чувствительности слизистой оболочки глаз и дыхательных
            путей под действием пыльцевых аллергенов.
          </h3>
          <h3 className="services_doctor_info_description">
            Повышенное содержание пыльцы в воздухе в весенний период, а также
            постоянное попадание ее в дыхательные пути, вызывает у детей и
            взрослых состояние, которое называют сенсибилизацией организма.
          </h3>
          <h2 className="services_doctor_info_header" v>
            Симптомы поллиноза
          </h2>
          <h3 className="services_doctor_info_description">
            Начинать бить тревогу нужно, почувствовав зуд в носоглотке, при
            сильном слезотечении, насморке «в три ручья» и частых приступах
            чихания.
          </h3>
          <div className="services_doctor_info_img_container">
            <img className="services_doctor_info_img" src={allergist} alt="" />
          </div>
          <h3 className="services_doctor_info_description">
            Такие приступы начинаются внезапно, на фоне полного благополучия и
            крепкого здоровья. Если вовремя не обратиться к врачу аллергологу,
            то начальные симптомы могут перейти в серьезные осложнения:
            развивается отек слизистой не только носоглотки, но и слуховых труб,
            в процесс вовлекаются голосовые связки, в результате чего у больного
            изменяется голос, снижается слух, возможно затруднение дыхания,
            приступы одышки, а также обострения аллергических дерматитов.
          </h3>
        </div>
      </ServiceSpecialistsInfoComponent>
    </div>
  );
};
