import React from "react";
import { InformationContainerComponent } from "../../../components/InformationContainerComponent/InformationContainerComponent";
import { PriceListComponent } from "../../../components/PriceListComponent/PriceListComponent";
import { ServicesSpecialistsComponent } from "../../../components/ServicesSpecialistsComponent/ServicesSpecialistsComponent";
import { OfertaComponent } from "../../../components/PriceListComponent/OfertaComponent";
import { ServiceSpecialistsInfoComponent } from "../../../components/ServiceSpecialistsInfoComponent/ServiceSpecialistsInfoComponent";
import { SpecialistsInfoSurgeon } from "./SpecialistsInfoSurgeon";
import { priceInfoSurgeon } from "./PriceInfoSurgeon";

export const SurgeonServicePage = () => {
    return (
        <div className="SurgeonServicePage">
            <InformationContainerComponent header="Хирург">
                <ServicesSpecialistsComponent
                    specialists={SpecialistsInfoSurgeon}
                />
                <PriceListComponent
                    priceInfo={priceInfoSurgeon}
                />
            </InformationContainerComponent>
            <OfertaComponent />
            <ServiceSpecialistsInfoComponent>
                <div className="services_doctor_info_container">
                    <h2 className="services_doctor_info_header">
                        Врач-хирург в Волгограде
                    </h2>
                    <h3 className="services_doctor_info_description">
                        В медицинской клинике «Эксперт Плюс» лучшие хирурги
                        Волгограда произведут осмотр, поставят диагноз и
                        определят вид заболевания, проведут операбельное
                        вмешательство, устраняющее причину недомогания.
                    </h3>
                    <h2 className="services_doctor_info_header">
                        Хирург в медицинской клинике «Эксперт Плюс»
                        (Красноармейский район):
                    </h2>
                    <h3 className="services_doctor_info_description">
                        <ul>
                            <li>
                                при первичном приеме произведет осмотр пациента
                                и даст направление на сдачу соответствующих
                                анализов, для правильной диагностики
                                заболевания. В экстренном случае проведет
                                оперативное вмешательство, с целью локализации
                                воспалительного процесса;
                            </li>
                            <li>
                                при вторичном приеме хирург назначит необходимый
                                курс лечения с применением медикаментозного или
                                оперативного воздействия, произведет
                                хирургическую обработку послеоперационной раны;{" "}
                            </li>
                            <li>
                                проведет радиохирургическое удаление
                                новообразования 1 категории сложности;
                            </li>
                            <li>
                                сделает медикаментозную блокаду при пяточной
                                шпоре;
                            </li>
                            <li>
                                при операционном вмешательстве использует
                                инфильтрационную анестезию и внутрисуставные
                                инъекции, для обезболивания и лечения
                                пораженного органа;
                            </li>
                        </ul>
                    </h3>
                    <h2 className="services_doctor_info_header">
                        Случаи, когда необходимо срочно обратиться в клинику
                        «Эксперт Плюс»
                    </h2>
                    <h3 className="services_doctor_info_description">
                        <ul>
                            <li>
                                При получении травмы хирургического характера, в
                                любом ее виде (открытая или закрытая),
                                необходимо срочно обратиться к врачу. Если это
                                произошло в Красноармейском районе, то хирурги
                                нашей клиники всегда окажут вам необходимую
                                помощь.
                            </li>
                            <li>
                                В случае быстрого развития инфекционного
                                процесса, когда медикаментозные методы не
                                эффективны, наши специалисты проведут
                                необходимое оперативное вмешательство.
                            </li>
                            <li>
                                Если у вас появились утолщения под кожей или
                                образования, которые прощупываются на теле, то
                                не стоит затягивать с посещением хирурга в
                                Красноармейском районе, только он способен
                                вовремя диагностировать и удалить
                                доброкачественные и злокачественные опухоли.
                            </li>
                            <li>
                                Острые и резкие боли в организме, без каких-либо
                                причин – серьезный повод навестить хирурга в
                                Красноармейском районе, так как неконтролируемый
                                воспалительный процесс может привести к
                                серьезным последствиям.
                            </li>
                        </ul>
                    </h3>
                    <h2 className="services_doctor_info_header">
                        Наши преимущества
                    </h2>
                    <h3 className="services_doctor_info_description">
                        Хирурги, практикующие в клинике, имеют большой и
                        успешный опыт в диагностировании болезней и
                        операбельного их лечения, в не зависимости от сложности
                        проводимого лечения.
                    </h3>
                    <h3 className="services_doctor_info_description">
                        В услугах клиники предусмотрена возможность оказания
                        помощи больным с выездом на дом, в Красноармейском
                        районе, что особенно актуально при резком обострении
                        хронических заболеваний или остром приступе, когда идет
                        неуправляемый воспалительный процесс внутренних органов.
                    </h3>
                </div>
            </ServiceSpecialistsInfoComponent>
        </div>
    );
};
