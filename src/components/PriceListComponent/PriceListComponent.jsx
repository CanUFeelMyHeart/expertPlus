import React from "react";
import "./PriceListComponent.css";

export const PriceListComponent = (props) => {
   return (
      <div className="PriceListBlock">
         <div className="block-header">Прайс-лист</div>
         <table className="PriceListComponent__table">
            <thead>
               <tr>
                  <td className=" text bold">Код</td>
                  <td className=" text bold">Наименование</td>
                  <td className=" text bold">Цена, руб.</td>
               </tr>
            </thead>
            <tbody>
               {props.priceInfo.map((info, index) => (
                  <>
                     <tr key={index} className="PriceListComponent__trow">
                        <td
                           className="text"
                           style={
                              info.price
                                 ? { fontWeight: "normal" }
                                 : { fontWeight: "bold" }
                           }
                        >
                           {info.code}
                        </td>
                        <td
                           className="text"
                           style={
                              info.price
                                 ? { fontWeight: "normal" }
                                 : { fontWeight: "bold" }
                           }
                        >
                           {info.name}
                        </td>
                        <td className="text">{info.price}</td>
                     </tr>
                  </>
               ))}
            </tbody>
         </table>
      </div>
   );
};
