import React from "react";
import { InformationContainerComponent } from "../../../components/InformationContainerComponent/InformationContainerComponent";

export const New4 = () => {
  return (
    <div className="specific_new_page">
      <InformationContainerComponent header="С января в клинике принимает замечательный врач онколог-маммолог Безверхий Алексей Владимирович">
        <div className="NewPage__text">
          <h3 className="NewPage__text">
            Что делает врач онколог? Работа такого врача заключается в
            диагностике и лечении опухолей любых видов и на любых стадиях
            развития.
          </h3>
          <h3 className="NewPage__text">
            Показаться специалисту незамедлительно необходимо в следующих
            случаях:
          </h3>
          <ul className="NewPage_list">
            <li>лицам достигшим 45 летнего возраста</li>
            <li>
              если поставлены такие диагнозы как цирроз печени, мастопатия,
              полипоз кишечника
            </li>
            <li>если есть онкологические заболевания по родственной линии</li>
            <li>
              в анамнезе перенесена операция по поводу удаления раковой опухоли
            </li>
            <li>
              если вы работаете на производстве с повышенным уровнем загрязнения
              (пылевым, газовым, радиационным)
            </li>
            <li>если вы курите и часто посещаете солярий</li>
          </ul>
        </div>
      </InformationContainerComponent>
    </div>
  );
};
