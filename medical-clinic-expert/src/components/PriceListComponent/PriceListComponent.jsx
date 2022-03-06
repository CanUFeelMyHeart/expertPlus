import React from "react";
import "./PriceListComponent.css";

export const PriceListComponent = (props) => {
    return (
        <div className="PriceListBlock">
            <table className="PriceListComponent__table">
                <thead>
                    <tr className="PriceListComponent__thead">
                        <td className="PriceListComponent__thead_td">Код</td>
                        <td className="PriceListComponent__thead_td">
                            Наименование
                        </td>
                        <td className="PriceListComponent__thead_td">
                            Цена, руб.
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {props.priceInfo.map((info, index) => (
                        <>
                            <tr
                                key={index}
                                className="PriceListComponent__trow"
                            >
                                <td className="PriceListComponent__trow_td name">
                                    {info.code}
                                </td>
                                <td className="PriceListComponent__trow_td">
                                    {info.name}
                                </td>
                                <td className="PriceListComponent__trow_td">
                                    {info.price}
                                </td>
                            </tr>
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
