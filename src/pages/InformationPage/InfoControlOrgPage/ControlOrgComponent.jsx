import React from "react";
import "./InfoControlOrgPage.css";

export const ControlOrgComponent = (props) => {
    return (
        <>
            <div className="InfoControlOrgPage__info">
                <h3 className="InfoControlOrgPage__info_header">
                    {props.header}
                </h3>
                <h3 className="InfoControlOrgPage__info_desc">
                    {props.info.map((descritpion, index) => (
                        <h3
                            key={index}
                            className="InfoControlOrgPage__info_desc"
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
