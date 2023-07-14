import React from "react";
import { InformationContainerComponent } from "../../../components/InformationContainerComponent/InformationContainerComponent";
import { PriceListComponent } from "../../../components/PriceListComponent/PriceListComponent";
import { ServicesSpecialistsComponent } from "../../../components/ServicesSpecialistsComponent/ServicesSpecialistsComponent";
import { OfertaComponent } from "../../../components/PriceListComponent/OfertaComponent";
import { ServiceSpecialistsInfoComponent } from "../../../components/ServiceSpecialistsInfoComponent/ServiceSpecialistsInfoComponent";
import { SpecialistsInfoUltrasoundDiagnostics } from "./SpecialistsInfoUltrasoundDiagnostics";
import { priceInfoUltrasoundDiagnostics } from "./PriceInfoUltrasoundDiagnostics";

export const UltrasoundDiagnosticsServicePage = () => {
    return (
        <div className="UltrasoundDiagnosticsServicePage">
            <InformationContainerComponent header="Ультразвуковая диагностика (УЗИ)">
                <ServicesSpecialistsComponent
                    specialists={SpecialistsInfoUltrasoundDiagnostics}
                />
                <PriceListComponent
                    priceInfo={priceInfoUltrasoundDiagnostics}
                />
            </InformationContainerComponent>
            <OfertaComponent />
            <ServiceSpecialistsInfoComponent>
                <div className="services_doctor_info_container">
                    <h2 className="services_doctor_info_header">
                        Ультразвуковая диагностика
                    </h2>
                    <h3 className="services_doctor_info_description">
                        Ультразвуковая диагностика в Волгограде получила самое
                        большое распространение и применяется как в городских
                        больницах, так и в частных клиниках.
                    </h3>
                    <h3 className="services_doctor_info_description">
                        Такой вид обследования дает очень хорошие результаты при
                        диагностировании различных заболеваний внутренних
                        органов и широко используется специалистами медицинской
                        клиники «Эксперт Плюс».
                    </h3>
                    <h2 className="services_doctor_info_header">Возможности</h2>
                    <h3 className="services_doctor_info_description">
                        С помощью ультразвуковой диагностики в Красноармейском
                        районе стало доступным:
                    </h3>
                    <h3 className="services_doctor_info_description">
                        <ul>
                            <li>
                                наблюдение за течением беременности на всех
                                сроках;
                            </li>
                            <li>цервикометрия и фолликулогенез;</li>
                            <li>
                                обследование всех органов брюшной полости
                                (печень, селезенка, поджелудочная железа,
                                желчный пузырь);
                            </li>
                            <li>
                                диагностика заболеваний поджелудочной и молочных
                                желез;
                            </li>
                            <li>
                                исследование гайморовых и лобных пазух,
                                плевральных полостей;
                            </li>
                            <li>
                                проведение доплерографии сосудов, артерий и вен
                                (головной мозг, шея, конечности);
                            </li>
                            <li>обследование коленных суставов;</li>
                            <li>другие виды исследований.</li>
                        </ul>
                    </h3>
                    <h2 className="services_doctor_info_header" v>
                        Достоинства
                    </h2>
                    <h3 className="services_doctor_info_description">
                        Используя ультразвуковую диагностику в Красноармейском
                        районе, стало возможным не только выявление камней и
                        различных объемных образований в органах, но и
                        наблюдение за течением хронических заболеваний,
                        определение травматических повреждений мягких тканей,
                        выявление воспалительных процессов в различных органах.
                    </h3>
                    <h3 className="services_doctor_info_description">
                        Пройти УЗИ в Красноармейском районе вы можете,
                        воспользовавшись услугами медицинской клиники «Эксперт
                        Плюс», как по направлению врачей практикующих в клинике,
                        так и по назначению врачей из других больниц и
                        поликлиник.
                    </h3>
                    <h3 className="services_doctor_info_description">
                        Более подробную информацию о видах ультразвуковой
                        диагностики в Красноармейском районе и ценах на услуги,
                        вы можете узнать на сайте, а также воспользовавшись
                        контактными телефонами.
                    </h3>
                </div>
            </ServiceSpecialistsInfoComponent>
        </div>
    );
};
