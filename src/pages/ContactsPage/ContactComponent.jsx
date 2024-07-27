import React from "react";
import "./ContactsPage.css";

export const ContactPageInfoComponent = (props) => {
  return (
    <>
      <div className="InfoContactPage__info">
        <div className="InfoContactPage__info_header">{props.header}</div>
        <div className="InfoContactPage__info_desc">
          {props.info.map((descritpion, index) => (
            <h4 key={index} className="InfoContactPage__info_desc">
              {descritpion}
            </h4>
          ))}
        </div>
      </div>
      <hr className={props.hr_classname} />
    </>
  );
};
