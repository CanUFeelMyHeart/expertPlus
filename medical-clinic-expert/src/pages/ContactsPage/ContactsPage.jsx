import React from "react";
import { InformationContainerComponent } from "../../components/InformationContainerComponent/InformationContainerComponent";
import { ContactPageInfoComponent } from "./ContactComponent";
import { contactPageInformation } from "./ContactInfo";
import "./ContactsPage.css";

export const ContactsPage = () => {
  return (
    <div className="ContactsPageComponent">
      <InformationContainerComponent header="Контакты">
        <div className="ContactsPageComponent__container">
          <div className="ContactsPageComponent__info">
            {contactPageInformation.map((controlInfo, index) => (
              <ContactPageInfoComponent
                key={index}
                header={controlInfo.header}
                info={controlInfo.info}
                hr_classname={controlInfo.hr_classname}
              />
            ))}
          </div>
          <div className="ContactsPageComponent__map">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A72f3878988dbc404df4dd7d0331c51fa9d742d0856ae620c1fe76d1c880d44f4&amp;source=constructor"
              width="100%"
              height="400"
              frameBorder="0"
              title="yandexFrame"
            ></iframe>
          </div>
        </div>
      </InformationContainerComponent>
    </div>
  );
};
