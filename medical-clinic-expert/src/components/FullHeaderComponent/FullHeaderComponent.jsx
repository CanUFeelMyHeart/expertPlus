import React from "react";
import { HeaderComponent } from './HeaderComponent/HeaderComponent'
import { UnderHeaderMenuComponent } from './UnderHeaderMenuComponent/UnderHeaderMenuComponent'

export const FullHeaderComponent = () => {
    return (
        <>
            <div>
                <HeaderComponent/>
                <UnderHeaderMenuComponent/>
            </div>
        </>
    );
};