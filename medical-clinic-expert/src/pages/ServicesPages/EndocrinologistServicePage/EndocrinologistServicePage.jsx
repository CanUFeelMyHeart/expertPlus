import React from "react";
import { InformationContainerComponent } from "../../../components/InformationContainerComponent/InformationContainerComponent";
import { PriceListComponent } from "../../../components/PriceListComponent/PriceListComponent";
import { ServicesSpecialistsComponent } from "../../../components/ServicesSpecialistsComponent/ServicesSpecialistsComponent";
import { OfertaComponent } from "../../../components/PriceListComponent/OfertaComponent";
import { ServiceSpecialistsInfoComponent } from "../../../components/ServiceSpecialistsInfoComponent/ServiceSpecialistsInfoComponent";
import { SpecialistsInfoEndocrinologist } from "./SpecialistsInfoEndocrinologist";
import { priceInfoEndocrinologist } from "./PriceInfoEndocrinologist";

export const EndocrinologistServicePage = () => {
    return (
        <div className="EndocrinologistServicePage">
            <InformationContainerComponent header="Эндокринолог">
                <ServicesSpecialistsComponent
                    specialists={SpecialistsInfoEndocrinologist}
                />
                <PriceListComponent priceInfo={priceInfoEndocrinologist} />
            </InformationContainerComponent>
            <OfertaComponent />
            <ServiceSpecialistsInfoComponent>
                <div className="services_doctor_info_container">
                    <h2 className="services_doctor_info_header">
                        Врач-эндокринолог в Волгограде
                    </h2>
                    <h3 className="services_doctor_info_description">
                        Эндокринолог в Красноармейском районе работает в такой
                        медицинской сфере, с особой специализацией, которая
                        занимается определением степени работоспособности и
                        повышением эффективности функционирования эндокринной
                        системы, обеспечивающей правильную работу всего
                        организма человека в целом, и конкретных органов в
                        отдельности.
                    </h3>
                    <h3 className="services_doctor_info_description">
                        В медицинской клинике «Эксперт Плюс» практикуют самые
                        опытные специалисты в этой области, способные произвести
                        диагностирование и лечение любых заболеваний, в
                        Красноармейском районе Волгограда, связанных с
                        проблемами в работе эндокринной системы.
                    </h3>
                    <h2 className="services_doctor_info_header">
                        Что нужно знать
                    </h2>
                    <h3 className="services_doctor_info_description">
                        Врач эндокринолог вплотную занимается с таким
                        распространенным заболеванием, как сахарный диабет.
                        Специалист в области деабетологии способен поставить
                        правильный диагноз, назначить курс лечения и
                        контролировать процесс стабилизации состояния пациента.
                    </h3>
                    <h3 className="services_doctor_info_description">
                        При планировании беременности, с целью определения
                        возможных осложнений, просто необходимо посетить
                        эндокринолога, который проконсультирует вас и даст
                        необходимые рекомендации по соблюдению диеты и возможной
                        медикаментозной подготовке к зачатию.
                    </h3>
                    <h2 className="services_doctor_info_header">
                        Преимущества клиники
                    </h2>
                    <h3 className="services_doctor_info_description">
                        У нас, в Красноармейском районе, вы не найдете длинных
                        очередей и деревянных скамеек (как в обычных городских
                        больницах), мы обеспечим комфортные условия и
                        уважительное отношение к каждому пациенту, а
                        предварительная запись к эндокринологу обеспечит быстрое
                        и качественное обслуживание.
                    </h3>
                    <h3 className="services_doctor_info_description">
                        Наши специалисты эндокринологи являются лучшими в
                        Волгограде, что подтверждается их большим опытом в
                        лечении заболеваний эндокринной системы и высокой
                        квалификацией, подтвержденной соответствующими
                        комиссиями.
                    </h3>
                    <h3 className="services_doctor_info_description">
                        В распоряжении нашей клиники в Красноармейском районе
                        находится самое современное оборудование, позволяющее
                        качественно и своевременно выявлять все вредоносные
                        явления и процессы в организме человека.
                    </h3>
                    <h3 className="services_doctor_info_description">
                        Любую, интересующую вас, информацию, вы можете узнать на
                        сайте или, воспользовавшись нашими контактными номерами,
                        по телефону.
                    </h3>
                </div>
            </ServiceSpecialistsInfoComponent>
        </div>
    );
};
