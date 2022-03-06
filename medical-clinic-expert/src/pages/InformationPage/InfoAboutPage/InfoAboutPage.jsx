import React from "react";
import { AboutClinicComponent } from "../../../components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from "../../../components/ServicesComponent/ServicesComponent";
import { InformationContainerComponent } from "../../../components/InformationContainerComponent/InformationContainerComponent";
import './InfoAboutPage.css'

export const InfoAboutPage = () => {
    return (
        <div className="InfoAboutPage">
            <InformationContainerComponent header="О клинике">
                <h3 className="InfoAboutPage_text">
                    Клиника «Эксперт плюс» находится в самом центре
                    Красноармейского района и готова оказать профессиональную
                    медицинскую помощь взрослым и детям. Опытные и внимательные
                    врачи, используя оборудование последнего поколения, проведут
                    качественную диагностику, по результатам которой разработают
                    для Вас индивидуальную схему лечения. В клинике практикуют
                    высококвалифицированные специалисты в области гинекологии,
                    неврологии, эндокринологии, терапии, хирургии,
                    травматологии-отротпедии и множество других опытных детских
                    и взрослых врачей.
                </h3>
                <br />
                <h3 className="InfoAboutPage_text">
                    Прием специалистов проводится по предварительной записи по
                    телефону 50-88-77, 50-87-87 или в регистратуре медицинского
                    центра в режиме его работы.
                </h3>
                <br />
                <h3 className="InfoAboutPage_text">
                    Клиника оснащена по последнему слову техники и открыта для
                    жителей южных районов города и области ежедневно без
                    перерыва и выходных — будни: 7:00–20:00, выходные дни:
                    8:00–18:00.
                </h3>
                <br />
                <h3 className="InfoAboutPage_text">В клинике действует социальная система скидок:</h3>
                <br />
                <h3 className="InfoAboutPage_text">
                    5% скидка на все услуги клиники медработникам, пенсионерам,
                    ветеранам и инвалидам ( при предъявлении подтверждающего
                    документа).
                </h3>
                <br />
                <h3 className="InfoAboutPage_text">
                    Ежемесячно в клинике проводятся различные акции и
                    запускаются бонусные программы.
                </h3>
            </InformationContainerComponent>
            <AboutClinicComponent />
            <ServicesComponent />
        </div>
    );
};
