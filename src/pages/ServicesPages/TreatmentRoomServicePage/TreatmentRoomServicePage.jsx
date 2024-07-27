import React from "react";
import { InformationContainerComponent } from "../../../components/InformationContainerComponent/InformationContainerComponent";
import { PriceListComponent } from "../../../components/PriceListComponent/PriceListComponent";
import { OfertaComponent } from "../../../components/PriceListComponent/OfertaComponent";
import { ServiceSpecialistsInfoComponent } from "../../../components/ServiceSpecialistsInfoComponent/ServiceSpecialistsInfoComponent";
import priceInfoTreatmentRoom from "./PriceInfoTreatmentRoom";

export const TreatmentRoomServicePage = () => {
    return (
        <div className="TreatmentRoomServicePage">
            <InformationContainerComponent header="Процедурный кабинет">
                <PriceListComponent priceInfo={priceInfoTreatmentRoom} />
            </InformationContainerComponent>
            <OfertaComponent />
            <ServiceSpecialistsInfoComponent>
                <div className="services_doctor_info_container">
                    <div className="services_doctor_info_header">
                        Процедурный кабинет
                    </div>
                    <div className="services_doctor_info_description">
                        Процедурный кабинет в медицинской клинике «Эксперт Плюс»
                        может предложить вам самые разнообразные процедуры,
                        выполняемые специалистами высокой квалификации и с
                        большим опытом работы, который включает в себя
                        обслуживание пациентов с младенческого возраста и до
                        глубокой старости.
                    </div>
                    <div className="services_doctor_info_header">
                        В функциональные обязанности медицинского персонала
                        процедурного кабинета входят:
                    </div>
                    <div className="services_doctor_info_description">
                        <ul>
                            <li>
                                первичное (перед приемом к врачу) и
                                профилактическое измерение артериального
                                давления;
                            </li>
                            <li>
                                взятие на анализ мазков и крови (биоматериалов),
                                для дальнейшего исследования;
                            </li>
                            <li>
                                оперативное измерение уровня сахара в крови, для
                                скорейшей постановки диагноза;
                            </li>
                            <li>
                                проведение теста на определение наличие бактерий
                                Хеликобактер пилори;
                            </li>
                            <li>
                                инъекции, с различной степенью проникновения
                                иглы и скоростью введения препарата, от
                                подкожных и внутримышечных уколов, до
                                внутривенных инъекций и инфузорных капельниц;
                            </li>
                        </ul>
                    </div>
                    <div className="services_doctor_info_description">
                        Кроме того, в функции процедурного кабинета включена
                        услуга "Врач на дом" - запись на прием в Волгограде
                        производится в любое время, без перерыва и выходных, что
                        позволит вызвать врача на дом, в красноармейском районе,
                        в случае, когда нужна скорая медицинская помощь.
                    </div>
                    <div className="services_doctor_info_header" v>
                        Достоинства процедурного кабинета нашей клиники
                    </div>
                    <div className="services_doctor_info_description">
                        Наш медицинский персонал, в процедурном кабинете клиники
                        Красноармейского района, качественно и профессионально,
                        по возможности без боли, обеспечит отбор необходимых
                        биологических материалов, для дальнейшего их
                        исследования.
                    </div>
                    <div className="services_doctor_info_description">
                        Если вы решили, что есть необходимость сделать вызов
                        платного врача на дом, то специалисты нашей клиники в
                        Красноармейском районе прибудут в кратчайшие сроки и
                        окажут необходимую, скорую, медицинскую помощь, в полном
                        объеме.
                    </div>
                </div>
            </ServiceSpecialistsInfoComponent>
        </div>
    );
};
