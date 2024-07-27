import React from "react";
import { InformationContainerComponent } from "../../../components/InformationContainerComponent/InformationContainerComponent";
import { PriceListComponent } from "../../../components/PriceListComponent/PriceListComponent";
import { ServicesSpecialistsComponent } from "../../../components/ServicesSpecialistsComponent/ServicesSpecialistsComponent";
import { SpecialistsInfoGastroenterologist } from "./SpecialistsInfoGastroenterologist";
import { OfertaComponent } from "../../../components/PriceListComponent/OfertaComponent";
import { ServiceSpecialistsInfoComponent } from "../../../components/ServiceSpecialistsInfoComponent/ServiceSpecialistsInfoComponent";
import priceInfoGastroenterologist from "./PriceInfoGastroenterologist";

export const GastroenterologistServicePage = () => {
    return (
        <div className="GastroenterologistServicePage">
            <InformationContainerComponent header="Гастроэнтеролог">
                <ServicesSpecialistsComponent
                    specialists={SpecialistsInfoGastroenterologist}
                />
                <PriceListComponent priceInfo={priceInfoGastroenterologist} />
            </InformationContainerComponent>
            <OfertaComponent />
            <ServiceSpecialistsInfoComponent>
                <div className="services_doctor_info_container">
                    <div className="services_doctor_info_header">
                        Врач-гастроэнтеролог в Волгограде
                    </div>
                    <div className="services_doctor_info_description">
                        В последнее время проблемы с желудочно-кишечным трактом
                        возникают у большинства населения не только нашей
                        страны, но и всего мира. Не будем анализировать причины
                        таких заболеваний, но отметим,что хороший
                        гастроэнтеролог нужен почти каждому. И если вы
                        нуждаетесь в помощи врача гастроэнтеролога в
                        Красноармейском районе или другой части Волгограда, то
                        имейте в виду, что в медицинской клинике «Эксперт Плюс»
                        практикуют лучшие гастроэнтерологи города.
                    </div>
                    <div className="services_doctor_info_header">
                        Мы поможем в лечении следующих заболеваний:
                    </div>
                    <div className="services_doctor_info_description">
                        <ul>
                            <li>Гастриты и дуодениты;</li>
                            <li>
                                Язвенная болезнь желудка и двенадцатиперстной
                                кишки , диагностика онкологических образований;
                            </li>
                            <li>
                                Проблемы с желчным пузырем: дискинезия,
                                проходимость протоков и сниженная подвижность
                                пузыря;
                            </li>
                            <li>Холецистит, во всех его проявлениях;</li>
                            <li>
                                Болезни поджелудочной железы, в том числе и
                                панкреатит;
                            </li>
                            <li>
                                Другие заболевания желудочно-кишечного тракта.
                            </li>
                        </ul>
                    </div>
                    <div className="services_doctor_info_header" v>
                        Достоинства клиники «Эксперт Плюс»
                    </div>
                    <div className="services_doctor_info_description">
                        - В распоряжении гастроэнтерологов в Красноармейском
                        районе (клиника «Эксперт Плюс») находится все
                        необходимое современное оборудование для диагностики
                        заболеваний органов ЖКТ, приборы ультразвукового
                        исследования.
                    </div>
                    <div className="services_doctor_info_description">
                        - Коллектив врачей-гастроэнтерологов тщательно
                        подбирался и уровень их подготовки соответствует самым
                        высоким стандартам, а внимательное отношение к жалобам
                        пациентов в процессе диагностики, сопутствует правильной
                        постановке диагноза и эффективности лечения.
                    </div>
                    <div className="services_doctor_info_description">
                        - При острых желудочных коликах и невозможности посетить
                        гастроэнтеролога для снятия болезненных симптомов, в
                        нашей клинике предусмотрен вызов врача-гастроэнтеролога
                        в Красноармейском районе Волгограда на дом.
                    </div>
                    <div className="services_doctor_info_description">
                        - Учитывая занятость и загруженность проблемами обычного
                        человека, наша клиника работает без перерыва и выходных.
                    </div>
                    <div className="services_doctor_info_description">
                        Все подробности о записи на прием, стоимости
                        консультации гастроэнтеролога, других услугах клиники –
                        вы можете узнать непосредственно на нашем сайте или
                        позвонить по нашим контактным телефонам.
                    </div>
                </div>
            </ServiceSpecialistsInfoComponent>
        </div>
    );
};
