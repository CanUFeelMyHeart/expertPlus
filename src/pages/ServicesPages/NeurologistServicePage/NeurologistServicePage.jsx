import React from "react";
import { InformationContainerComponent } from "../../../components/InformationContainerComponent/InformationContainerComponent";
import { PriceListComponent } from "../../../components/PriceListComponent/PriceListComponent";
import { ServicesSpecialistsComponent } from "../../../components/ServicesSpecialistsComponent/ServicesSpecialistsComponent";
import { OfertaComponent } from "../../../components/PriceListComponent/OfertaComponent";
import { ServiceSpecialistsInfoComponent } from "../../../components/ServiceSpecialistsInfoComponent/ServiceSpecialistsInfoComponent";
import { SpecialistsInfoNeurologist } from "./SpecialistsInfoNeurologist";
import { priceInfoNeurologist } from "./PriceInfoNeurologist";

export const NeurologistServicePage = () => {
    return (
        <div className="NeurologistServicePage">
            <InformationContainerComponent header="Невролог">
                <ServicesSpecialistsComponent
                    specialists={SpecialistsInfoNeurologist}
                />
                <PriceListComponent priceInfo={priceInfoNeurologist} />
            </InformationContainerComponent>
            <OfertaComponent />
            <ServiceSpecialistsInfoComponent>
                <div className="services_doctor_info_container">
                    <h2 className="services_doctor_info_header">
                        Врач-невролог в Волгограде
                    </h2>
                    <h3 className="services_doctor_info_description">
                        Записаться на прием к хорошему неврологу в Волгограде вы
                        можете, обратившись в частную клинику «Эксперт Плюс». В
                        этом медицинском учреждении практикуют не только врачи
                        неврологи для взрослого населения, но и лучшие детские
                        неврологи Волгограда, оказывающие, в первую очередь,
                        срочную и необходимую помощь маленьким пациентам
                        Красноармейского района.
                    </h3>
                    <h2 className="services_doctor_info_header">
                        Консультация врача невролога настоятельно рекомендуется
                    </h2>
                    <h3 className="services_doctor_info_description">
                        пациентам, испытывающим следующие недомогания:
                    </h3>
                    <h3 className="services_doctor_info_description">
                        <ul>
                            <li>
                                непрекращающиеся головные боли, сильные и
                                частые, мигрени;
                            </li>
                            <li>
                                заикание, повышенная возбуждаемость, задержка
                                моторного развития;
                            </li>
                            <li>
                                постоянная бессонница или другие нарушения сна
                                (частые пробуждения, тревога);
                            </li>
                            <li>
                                покалывание в руках и ногах, или их онемение;
                            </li>
                            <li>
                                постоянный или периодический шум в ушах, сильное
                                головокружение, обмороки;
                            </li>
                            <li>
                                внезапные и очень острые боли в спине, шее,
                                грудном отделе;
                            </li>
                            <li>
                                ухудшение памяти, состояние повышенной
                                тревожности;
                            </li>
                            <li>
                                другие симптомы, не связанные с хроническими и
                                психическими заболеваниями.
                            </li>
                        </ul>
                    </h3>
                    <h3 className="services_doctor_info_description">
                        Нужно отметить, что главным условием успешного лечения
                        неврологических заболеваний, является их выявление на
                        ранней стадии. Вот почему посещение детского врача
                        невролога в Волгограде, или другом регионе, нельзя
                        откладывать при любых проявлениях болезненных симптомов
                        у ребенка, указанных выше.
                    </h3>
                    <h2 className="services_doctor_info_header" v>
                        Что предлагает клиника «Эксперт Плюс»
                    </h2>
                    <h3 className="services_doctor_info_description">
                        При первичной консультации будет произведен осмотр
                        пациента и сбор анамнеза, позволяющего определиться с
                        предварительным диагнозом или назначением
                        дополнительного обследования (МРТ, комплекс анализов).
                    </h3>
                    <h3 className="services_doctor_info_description">
                        Во время повторного визита к врачу неврологу в
                        Красноармейском районе, пациенту назначат необходимые
                        процедуры и препараты, в соответствии с поставленным
                        диагнозом и составленной личной картой (планом) лечения.
                    </h3>
                    <h3 className="services_doctor_info_description">
                        В услуги нашей клиники входит возможность вызова
                        специалиста невролога в Красноармейском районе, если у
                        ребенка приступ эпилепсии, бессонница, ДЦП,
                        неконтролируемая возбудимость, а у взрослых явные
                        признаки перенесенного инсульта, черепно-мозговая
                        травма, сильное головокружение, остеохондроз или
                        радикулит.
                    </h3>
                    <h3 className="services_doctor_info_description">
                        Обо всех услугах, которые предоставляет клиника «Эксперт
                        Плюс», расположенная в Красноармейском районе
                        Волгограда, можно узнать непосредственно на нашем сайте
                        или по контактным телефонам, указанным выше.
                    </h3>
                </div>
            </ServiceSpecialistsInfoComponent>
        </div>
    );
};
