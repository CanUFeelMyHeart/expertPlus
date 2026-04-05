import React from "react";
import { InformationContainerComponent } from "../../components/InformationContainerComponent/InformationContainerComponent";
import "./DmsPage.css";

export const DmsPage = () => {
   return (
      <div className="DmsPage">
         <div className="container">
            <InformationContainerComponent header="Добровольное медицинское страхование">
               <div className="DmsPage__header">
                  Клиника «Эксперт Плюс» ведет прием клиентов по полисам ДМС
                  следующих страховых компаний:
               </div>
               <br />
               <ul className="DmsPage_list">
                  <li>СОАО «ВСК»</li>
                  <li>ОСАО «Ингосстрах»</li>
                  <li>ВРФ ООО «Страховая компания «Согласие»</li>
                  <li>ПАО «САК «Энергогарант»</li>
                  <li>Спасские ворота</li>
                  <li>Капитал Лайф</li>
                  <li>Альфастрахование</li>
                  <li>Росгосстрах</li>
                  <li>Ресо</li>
                  <li>ВСК</li>
                  <li>Ренессанс</li>
                  <li>Лучи Здоровья</li>
                  <li>Совкомбанк</li>
                  <li>Зетта</li>
                  <li>Согаз</li>
                  <li>Сбербанк</li>
                  <li>Югория</li>
                  <li>Пари</li>
                  <li>ПСБ</li>
               </ul>
            </InformationContainerComponent>
         </div>
      </div>
   );
};
