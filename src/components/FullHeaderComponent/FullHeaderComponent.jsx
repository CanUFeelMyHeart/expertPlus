import React from "react";
import { HeaderComponent } from "./HeaderComponent/HeaderComponent";
import { UnderHeaderMenuComponent } from "./UnderHeaderMenuComponent/UnderHeaderMenuComponent";
import { UnderHeaderPhoneMenuComponent } from "./UnderHeaderPhoneMenuComponent/UnderHeaderPhoneMenuComponent";
import "./FullHeaderComponent.css";

export const FullHeaderComponent = () => {
   return (
      <>
         <div className="FullHeaderComponent container">
            <HeaderComponent />
            <UnderHeaderPhoneMenuComponent />
         </div>
         <UnderHeaderMenuComponent />
      </>
   );
};
