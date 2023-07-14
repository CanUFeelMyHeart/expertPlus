import React from "react";
import { InformationContainerComponent } from "../../components/InformationContainerComponent/InformationContainerComponent";
import './DmsPage.css'

export const DmsPage = () => {
    return (
        <div className="DmsPage">
            <InformationContainerComponent header="Добровольное медицинское страхование">
                <h3 className="DmsPage__header">
                    Клиника «Эксперт Плюс» ведет прием клиентов по полисам ДМС
                    следующих страховых компаний:
                </h3>
                <br/>
                <ul className="DmsPage_list">
                    <li>СОАО «ВСК»</li>
                    <li>ОСАО «Ингосстрах»</li>
                    <li>ВРФ ООО «Страховая компания «Согласие»</li>
                    <li>ПАО «САК «Энергогарант»</li>
                    <li>Спасские ворота</li>
                    <li>Капитал Лайф</li>
                    <li>Альфастрахование</li>
                    <li>Росгосстрах</li>
                </ul>
            </InformationContainerComponent>
        </div>
    );
};
