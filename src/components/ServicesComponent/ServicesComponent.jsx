import React from "react";
import { ServicesColumnComponent as Column } from "./ServicesColumnComponent/ServicesColumnComponent";
import { services1 } from "./ServicesColumnsText/ServicesColumnOne";
import { services2 } from "./ServicesColumnsText/ServicesColumnTwo";
import { services3 } from "./ServicesColumnsText/ServicesColumnThree";
import "./ServicesComponent.css";

export const ServicesComponent = () => {
    return (
            <div className="servicesBlock">
                <h2 className="servicesBlock__header">Оказываемые услуги</h2>
                <h3 className="servicesBlock__description">
                    В клинике практикуют высококвалифицированные специалисты в
                    области гинекологии, неврологии, эндокринологии, терапии,
                    хирургии, травматологии-ортопедии, врачи с большим опытом
                    УЗИ и функциональной (ЭЭГ, Холтер) диагностики.
                </h3>

                <div className="servicesBlock__availableServices">
                    <Column services={services1} />
                    <Column services={services2} />
                    <Column services={services3} />
                </div>
            </div>
    );
};
