import React from "react";
import { InformationContainerComponent } from "../../../components/InformationContainerComponent/InformationContainerComponent";
import { PriceListComponent } from "../../../components/PriceListComponent/PriceListComponent";
import { ServicesSpecialistsComponent } from "../../../components/ServicesSpecialistsComponent/ServicesSpecialistsComponent";
import { OfertaComponent } from "../../../components/PriceListComponent/OfertaComponent";
import { ServiceSpecialistsInfoComponent } from "../../../components/ServiceSpecialistsInfoComponent/ServiceSpecialistsInfoComponent";
import { SpecialistsInfoOtorhinolaryngologist } from "./SpecialistsInfoOtorhinolaryngologist";
import priceInfoOtorhinolaryngologist from "./PriceInfoOtorhinolaryngologist";

export const OtorhinolaryngologistServicePage = () => {
  return (
    <div className="OtorhinolaryngologistServicePage">
      <InformationContainerComponent header="Оториноларинголог (ЛОР)">
        <ServicesSpecialistsComponent
          specialists={SpecialistsInfoOtorhinolaryngologist}
        />
        <PriceListComponent priceInfo={priceInfoOtorhinolaryngologist} />
      </InformationContainerComponent>
      <OfertaComponent />
      <ServiceSpecialistsInfoComponent>
        <div className="services_doctor_info_container">
          <div className="services_doctor_info_header">
            Оториноларинголог (врач ЛОР) в Волгограде
          </div>
          <div className="services_doctor_info_description">
            Отоларингологи (ЛОР врачи) являются самыми востребованными докторами
            в любое время года, в независимости от жаркого лета или холодной
            зимы. Если вы ищете, где принимают ЛОР врачи в Волгограде, то наша
            медицинская клиника «Эксперт Плюс», в Красноармейском районе, станет
            наилучшим и оптимальным выбором.
          </div>
          <div className="services_doctor_info_header">
            Поводом немедленно прийти на прием врача ЛОРа могут быть:
          </div>
          <div className="services_doctor_info_description">
            <ul>
              <li>
                заложенность и сильные боли в ухе, отдающие в горло, зубы и даже
                глаза (возможен отит);
              </li>
              <li>
                боли в горле при глотании, першение и воспаление (покраснение)
                слизистой оболочки горла (вероятно, ангина);
              </li>
              <li>
                сильный жар, потеря голоса, боль при глотании и головная боль,
                (по симптомам - тонзиллит);
              </li>
              <li>
                головные боли, гнойные выделения из носа, повышенная температура
                (характерно для гайморита).{" "}
              </li>
            </ul>
          </div>
          <div className="services_doctor_info_header" v>
            Услуги ЛОРа в нашей клинике:
          </div>
          <div className="services_doctor_info_description">
            ЛОР в нашей клинике, в Красноармейском районе, очень внимательно и
            тщательно вас осмотрит, назначит необходимые анализы и исследования,
            поставит правильный диагноз и предложит курс соответствующего
            лечения.
          </div>
          <div className="services_doctor_info_description">
            Мы предлагаем высококвалифицированную помощь платного ЛОРа,
            предоставляющего широкий спектр медицинских услуг в Красноармейском
            районе:
          </div>
          <div className="services_doctor_info_description">
            <ul>
              <li>
                врач произведет, при необходимости, вскрытие паратонзиллярного
                абсцесса и фурункула носа;
              </li>
              <li>
                осуществит дренирование абсцесса или фурункула наружного уха;
              </li>
              <li>
                введет лекарственные препараты в наружный слуховой проход, в
                барабанную полость через наружный слуховой проход, в гортань;
              </li>
              <li>
                выполнит удаление инородного тела из глотки, носа, уха, в том
                числе ушной серы;
              </li>
              <li>
                обеспечит промывание верхнечелюстных пазух носа, лакун миндалин
                и глотки;
              </li>
              <li>
                другие оперативные и профилактические медицинские манипуляции.
              </li>
            </ul>
          </div>
          <div className="services_doctor_info_description">
            Полный список услуг отоларингологов медицинской клиники «Эксперт
            Плюс», расположенной в Красноармейском районе Волгограда, вы можете
            узнать на сайте, или воспользовавшись нашими контактными телефонами.
          </div>
        </div>
      </ServiceSpecialistsInfoComponent>
    </div>
  );
};
