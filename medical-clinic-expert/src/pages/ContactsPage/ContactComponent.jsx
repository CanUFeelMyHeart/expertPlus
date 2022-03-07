import React from "react";
import "./ContactsPage.css";

export const ContactPageInfoComponent = (props) => {
    return (
        <>
            <div className="InfoContactPage__info">
                <h3 className="InfoContactPage__info_header">
                    {props.header}
                </h3>
                <h3 className="InfoContactPage__info_desc">
                    {props.info.map((descritpion, index) => (
                        <h3
                            key={index}
                            className="InfoContactPage__info_desc"
                        >
                            {descritpion}
                        </h3>
                    ))}
                </h3>
            </div>
            <hr className={props.hr_classname} />
        </>
    );
};
