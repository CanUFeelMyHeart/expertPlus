import React from "react";
import { InformationContainerComponent } from "../../../components/InformationContainerComponent/InformationContainerComponent";
import { PriceListComponent } from "../../../components/PriceListComponent/PriceListComponent";
import { ServicesSpecialistsComponent } from "../../../components/ServicesSpecialistsComponent/ServicesSpecialistsComponent";
import { OfertaComponent } from "../../../components/PriceListComponent/OfertaComponent";
import { ServiceSpecialistsInfoComponent } from "../../../components/ServiceSpecialistsInfoComponent/ServiceSpecialistsInfoComponent";
import { SpecialistsInfoTraumatologistOrthopedist } from "./SpecialistsInfoTraumatologistOrthopedist";
import { priceInfoTraumatologistOrthopedist } from "./PriceInfoTraumatologistOrthopedist";

export const TraumatologistOrthopedistServicePage = () => {
    return (
        <div className="TraumatologistOrthopedistServicePage">
            <InformationContainerComponent header="Травматолог-ортопед">
                <ServicesSpecialistsComponent
                    specialists={SpecialistsInfoTraumatologistOrthopedist}
                />
                <PriceListComponent
                    priceInfo={priceInfoTraumatologistOrthopedist}
                />
            </InformationContainerComponent>
            <OfertaComponent />
            <ServiceSpecialistsInfoComponent>
                <div className="services_doctor_info_container">
                    <h2 className="services_doctor_info_header">
                        Травматолог-ортопед в Волгограде
                    </h2>
                    <h3 className="services_doctor_info_description">
                        Врач травматолог-ортопед в Волгограде может помочь вам
                        не только при лечении различного рода травм (от ушибов и
                        вывихов, до сложных переломов и их последствий), но и в
                        устранении врожденных дефектов опорно-двигательного
                        аппарата.
                    </h3>
                    <h3 className="services_doctor_info_description">
                        Если вам нужен травматолог-ортопед в Красноармейском
                        районе Волгограда, то самым лучшим решением станет выбор
                        специалистов медицинской клиники «Эксперт Плюс».
                    </h3>
                    <h2 className="services_doctor_info_header">
                        Достоинства врачей травматологов, клиники «Эксперт Плюс»
                    </h2>
                    <h3 className="services_doctor_info_description">
                        <ul>
                            <li>
                                Наши практикующие врачи травматологи-ортопеды
                                отличаются высокой квалификацией, большим опытом
                                работы и уважительным отношением к пациентам.
                            </li>
                            <li>
                                В их компетенции лечение пациентов, получивших
                                поражения (электрические, механические,
                                химические, радиоактивные) различного рода.
                            </li>
                            <li>
                                Врачи травматологи-ортопеды в Красноармейском
                                районе производят диагностирование и лечение
                                остеоза и паратиреоидной остеодистрофии.
                            </li>
                            <li>
                                Решают проблемы с искривлением позвоночника и
                                исправлением его патологий.
                            </li>
                            <li>
                                Сложные переломы и проблемные вывихи в
                                компетенции наших врачей, которые всегда готовы
                                оказать помощь в Красноармейском районе
                                Волгограда.
                            </li>
                            <li>
                                Наши специалисты помогут в лечении плоскостопия
                                и исправления неправильной осанки у детей в
                                Красноармейском районе.
                            </li>
                        </ul>
                    </h3>
                    <h2 className="services_doctor_info_header" v>
                        В каких случаях необходимо обращаться к
                        травматологу-ортопеду
                    </h2>
                    <h3 className="services_doctor_info_description">
                        Если вы получили сложный перелом и срастание костей
                        происходит очень долго, с большими болями и
                        дискомфортом, то это повод обратиться к нашему врачу в
                        Красноармейском районе.
                    </h3>
                    <h3 className="services_doctor_info_description">
                        Для получения правильного курса лечения после
                        перенесенного полиомиелита необходима консультация у
                        травматолога-ортопеда, рекомендуем клинику «Эксперт
                        Плюс».
                    </h3>
                    <h3 className="services_doctor_info_description">
                        При острой, хронической или сильной боли в суставах и
                        позвоночнике рекомендуется обратиться к специалисту в
                        этой области медицины и лучше всего, к
                        травматологу-ортопеду Красноармейского района, который
                        проконсультирует вас и назначит необходимый курс лечения
                        для восстановления правильной работы коленных суставов,
                        тазобедренных суставов и суставов стопы.
                    </h3>
                    <h2 className="services_doctor_info_header" v>
                        Где получить помощь
                    </h2>
                    <h3 className="services_doctor_info_description">
                        Вся подробная информация о предоставляемых услугах
                        врачами медицинской клиники «Эксперт Плюс» находится на
                        сайте, более конкретные данные вы можете узнать,
                        воспользовавшись нашими контактными телефонами.
                    </h3>
                </div>
            </ServiceSpecialistsInfoComponent>
        </div>
    );
};
