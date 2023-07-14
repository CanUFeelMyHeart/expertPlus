import React from "react";
import { InformationContainerComponent } from "../../../components/InformationContainerComponent/InformationContainerComponent";

export const New5 = () => {
  return (
    <div className="specific_new_page">
      <InformationContainerComponent header="Предложение новых комплексов лабораторных исследований со скидкой до 50%">
        <div className="NewPage__text">
          <h3 className="NewPage__text">
            Предложение новых комплексов лабораторных исследований со скидкой до
            50%:
          </h3>
          <ul className="NewPage_list">
            <li>"Сахарный диабет"</li>
            <li>"Здоровая кожа"</li>
            <li>"Свободное дыхание"</li>
            <li>"Предоперационный гинекологический"</li>
            <li>"Кардиологический"</li>
            <li>"Щитовидная железа"</li>
            <li>"Мое дыхание"</li>
            <li>"Хронический тонзиллит"</li>
            <li>"Здоровое сердце"</li>
          </ul>
        </div>
      </InformationContainerComponent>
    </div>
  );
};
