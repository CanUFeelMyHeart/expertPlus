import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeaderComponent.css";
import logo from "../../../img/logo.svg";

export const HeaderComponent = () => {
   const navigate = useNavigate();

   return (
      <>
         <div className="mainHeaderComponent">
            <div className="header">
               <div className="header__mainButtonContainer">
                  <button
                     className="header__expertButton"
                     onClick={(e) => navigate("/")}
                  >
                     <div className="header__expertLogo">ЭКСПЕРТ</div>
                     <img
                        className="header__expertButton_logo"
                        src={logo}
                        alt=""
                     />
                  </button>
                  <div className="header__expertButton_description">
                     ООО «КВАЛИФИЦИРОВАННАЯ МЕДИЦИНСКАЯ ПОМОЩЬ»
                  </div>
               </div>
               <div className="header__informationContainer">
                  <div className="header__informationContainer_address">
                     400026 г. Волгоград, пр-кт Героев Сталинграда, д. 44а, пом.
                     XXV
                  </div>
                  <div className="header__informationContainer_phoneNumber">
                     50-88-77, 50-87-87
                  </div>
                  <div className="header__informationContainer_timetable">
                     Пн.–Пт.: 7:00–20:00, Сб., Вс.: 8:00–15:00
                  </div>
               </div>
            </div>
            <hr className="header__underline" />
         </div>
      </>
   );
};
