import React from "react";
import { InformationContainerComponent } from "../../../components/InformationContainerComponent/InformationContainerComponent";
import { PriceListComponent } from "../../../components/PriceListComponent/PriceListComponent";
import { ServicesSpecialistsComponent } from "../../../components/ServicesSpecialistsComponent/ServicesSpecialistsComponent";
import { OfertaComponent } from "../../../components/PriceListComponent/OfertaComponent";
import { ServiceSpecialistsInfoComponent } from "../../../components/ServiceSpecialistsInfoComponent/ServiceSpecialistsInfoComponent";
import { SpecialistsInfoFunctionalDiagnostics } from "./SpecialistsInfoFunctionalDiagnostics";
import { priceInfoFunctionalDiagnostics } from "./PriceInfoFunctionalDiagnostics";

export const FunctionalDiagnosticsServicePage = () => {
    return (
        <div className="FunctionalDiagnosticsServicePage">
            <InformationContainerComponent header="Функциональная диагностика">
                <ServicesSpecialistsComponent
                    specialists={SpecialistsInfoFunctionalDiagnostics}
                />
                <PriceListComponent
                    priceInfo={priceInfoFunctionalDiagnostics}
                />
            </InformationContainerComponent>
            <OfertaComponent />
            <ServiceSpecialistsInfoComponent>
                <div className="services_doctor_info_container">
                    <h2 className="services_doctor_info_header">
                        Функциональная диагностика
                    </h2>
                    <h3 className="services_doctor_info_description">
                        Функциональная диагностика в Красноармейском районе
                        поставлена на высоком профессиональном уровне в
                        медицинской клинике «Эксперт Плюс». Диагностика этого
                        вида позволяет исследовать функциональные возможности
                        различных систем и органов человека.
                    </h3>
                    <h2 className="services_doctor_info_header">Виды услуг</h2>
                    <h3 className="services_doctor_info_description services_li">
                        <li>Снятие электрокардиограммы</li>
                    </h3>
                    <h3 className="services_doctor_info_description">
                        Этот способ исследования сердечной активности получил
                        широкое распространение и является основным методом,
                        используемым при диагностике и лечении заболеваний
                        сердца. Врач функциональной диагностики в
                        Красноармейском районе расшифрует показания
                        электрокардиограммы и укажет на любые ишемические
                        изменения, во время предупредит о возможном
                        возникновении пред-инфарктного состояния.
                    </h3>
                    <h3 className="services_doctor_info_description services_li">
                        <li>Спирометрия</li>
                    </h3>
                    <h3 className="services_doctor_info_description">
                        Этот вид исследования позволяет оценить состояние
                        дыхательной системы путем измерения жизненной емкости
                        легких, объемной скорости воздушного потока и других
                        параметров системы. Врач функциональной диагностики по
                        результатам спирометрии способен не только определить
                        наличие заболеваний дыхательной системы, но и выявить
                        сердечнососудистые патологии.
                    </h3>
                    <h3 className="services_doctor_info_description services_li">
                        <li>Суточное мониторирование артериального давления</li>
                    </h3>
                    <h3 className="services_doctor_info_description">
                        Для правильного и эффективного лечения гипертонии, в
                        различных ее проявлениях, не достаточно простого
                        измерения давления два или три раза в день. Необходимо
                        контролировать изменение артериального давления на
                        протяжении суток, чтобы иметь полную картину его
                        флуктуаций и знать реакцию организма на применение тех
                        или иных лекарств. Именно для этого применяется
                        специальный прибор, позволяющий производить постоянный
                        мониторинг (контроль) артериального давления в течении
                        суток.
                    </h3>
                    <h2 className="services_doctor_info_header">
                        Преимущества
                    </h2>
                    <h3 className="services_doctor_info_description">
                        Воспользовавшись услугами, предоставляемыми медицинской
                        клиникой «Эксперт Плюс», вы получите качественное и
                        уважительное обслуживание, без очередей и в комфортной
                        обстановке.
                    </h3>
                    <h3 className="services_doctor_info_description">
                        Врачи функциональной диагностики Красноармейского района
                        отличаются высокой квалификацией и имеют огромный опыт
                        работы в расшифровке показаний медицинских приборов и
                        оборудования, диагностировании заболеваний по этим
                        данным.
                    </h3>
                    <h3 className="services_doctor_info_description">
                        Все оборудование для проведения функциональной
                        диагностики является аппаратурой последнего поколения,
                        находится в идеальном состоянии и откалибровано в
                        соответствии с международными сертификатами.
                    </h3>
                </div>
            </ServiceSpecialistsInfoComponent>
        </div>
    );
};
