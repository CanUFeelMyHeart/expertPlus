import React from "react";
import "./PriceListComponent.css";

export const PriceListComponent = (props) => {
  return (
    <div className="PriceListBlock">
      <h2 className="PriceListBlock_header">Прайс-лист</h2>
      <table className="PriceListComponent__table">
        <thead>
          <tr className="PriceListComponent__thead">
            <td className="PriceListComponent__thead_td">Код</td>
            <td className="PriceListComponent__thead_td">Наименование</td>
            <td className="PriceListComponent__thead_td_price ">Цена, руб.</td>
          </tr>
        </thead>
        <tbody>
          {props.priceInfo.map((info, index) => (
            <>
              <tr key={index} className="PriceListComponent__trow">
                <td
                  className="PriceListComponent__trow_td name"
                  style={
                    info.price
                      ? { fontWeight: "normal" }
                      : { fontWeight: "bold" }
                  }
                >
                  {info.code}
                </td>
                <td
                  className="PriceListComponent__trow_td"
                  style={
                    info.price
                      ? { fontWeight: "normal" }
                      : { fontWeight: "bold" }
                  }
                >
                  {info.name}
                </td>
                <td className="PriceListComponent__trow_td">{info.price}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};
