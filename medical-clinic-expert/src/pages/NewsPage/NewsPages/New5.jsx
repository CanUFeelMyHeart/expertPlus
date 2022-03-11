import React from "react";
import { InformationContainerComponent } from "../../../components/InformationContainerComponent/InformationContainerComponent";

export const New5 = () => {
    return (
        <div className="DmsPage">
            <InformationContainerComponent header="Предложение новых комплексов лабораторных исследований со скидкой до 50%">
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
