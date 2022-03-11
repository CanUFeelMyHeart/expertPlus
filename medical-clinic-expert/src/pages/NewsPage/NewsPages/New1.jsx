import React from "react";
import { InformationContainerComponent } from "../../../components/InformationContainerComponent/InformationContainerComponent";
import "./NewStyles.css";
export const New1 = () => {
  return (
    <InformationContainerComponent header="В клинике ведет прием врач аллерголог-иммунолог, пульмонолог Романенко Марина Александровна">
      <div className="NewPage__text">
        <h3 className="NewPage__text">
          Аллерголог-иммунолог, пульмонолог - это врач, который занимается
          диагностикой, лечением и профилактикой заболеваний дыхательных путей.
        </h3>
        <h3 className="NewPage__text">
          Консультация пульмонолога-аллерголога показана пациентам страдающим
          от:
        </h3>
        <ul className="NewPage_list">
          <li>затрудненного дыхания через нос</li>
          <li>кашля различного характера (сухого или с отделением мокроты)</li>
          <li>
            одышки, возникающей при физической нагрузке и в состоянии покоя
          </li>
          <li>болей в грудной клетке</li>
          <li>частых ОРЗ</li>
          <li>высыпаний на коже и кожного зуда</li>
        </ul>
        <h3 className="NewPage__text">
          Заболевания ,которые лечит пульмонолог-аллерголог:
        </h3>
        <ul className="NewPage_list">
          <li>Сезонный аллергический ринит (поллиноз)</li>
          <li>Аллергический ринит круглогодичный</li>
          <li>Бронхиальная астма</li>
          <li>Аллергический дерматит</li>
          <li>Хроническая,острая крапивница</li>
          <li>Аллергия на солнце (солнечная крапивница)</li>
          <li>Аллергия на укусы насекомых (инсектная аллергия)</li>
          <li>Пищевая аллергия</li>
          <li>
            Вторичные иммунодефицитные состояния (хронический тонзиллит,
            хронический синусит, хронический отит), фурункулез
          </li>
          <li>
            Рецидивирующие вирусные инфекции (вызванные герпесом,
            цитомегаловирусом и т.д.)
          </li>
          <li>
            Рецидивирующие бронхиты, пневмонии, бронхолегочная дисплазия у детей
          </li>
          <li>Бронхоэктазы, эмфизема легких</li>
        </ul>
      </div>
    </InformationContainerComponent>
  );
};
