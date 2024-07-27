import React from "react";
import "./InfoControlOrgPage.css";

export const ControlOrgComponent = (props) => {
    return (
        <>
            <div className="InfoControlOrgPage__info">
                <div className="InfoControlOrgPage__info_header">
                    {props.header}
                </div>
                <div className="InfoControlOrgPage__info_desc">
                    {props.info.map((descritpion, index) => (
                        <div
                            key={index}
                            className="InfoControlOrgPage__info_desc"
                        >
                            {descritpion}
                        </div>
                    ))}
                </div>
            </div>
            <hr className={props.hr_classname} />
        </>
    );
};
