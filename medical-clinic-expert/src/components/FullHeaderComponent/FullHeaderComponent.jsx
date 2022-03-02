import React from "react";
import { HeaderComponent } from "./HeaderComponent/HeaderComponent";
import { UnderHeaderMenuComponent } from "./UnderHeaderMenuComponent/UnderHeaderMenuComponent";
import "./FullHeaderComponent.css";

export const FullHeaderComponent = () => {
    return (
        <>
            <div className="FullHeaderComponent">
                <div className="FullHeaderComponent__container">
                    <HeaderComponent />
                    <UnderHeaderMenuComponent />
                </div>
            </div>
        </>
    );
};
