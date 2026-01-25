import React, { useState, useMemo } from "react";
import "./PriceListComponent.css";

const ITEMS_PER_PAGE = 50;

export const PriceListComponent = ({ priceInfo }) => {
    const [page, setPage] = useState(1);

    const totalPages = Math.ceil(priceInfo.length / ITEMS_PER_PAGE);

    const visibleItems = useMemo(() => {
        const start = (page - 1) * ITEMS_PER_PAGE;
        return priceInfo.slice(start, start + ITEMS_PER_PAGE);
    }, [page, priceInfo]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const onClickPrev = () => {
        setPage(page - 1);
        scrollToTop();
    }

    const onClickNext = () => {
        setPage(page + 1);
        scrollToTop();
    }

    return (
        <div className="PriceListBlock">
            <div className="block-header">Прайс-лист</div>

            <table className="PriceListComponent__table">
                <thead>
                <tr>
                    <td className="text bold code">Код</td>
                    <td className="text bold name">Наименование</td>
                    <td className="text bold price">Цена, руб.</td>
                </tr>
                </thead>

                <tbody>
                {visibleItems.map((info, index) => (
                    <tr key={index} className="PriceListComponent__trow">
                        <td
                            className="text code"
                            style={{
                                fontWeight: info.price ? "normal" : "bold",
                            }}
                        >
                            {info.code}
                        </td>
                        <td
                            className="text name"
                            style={{
                                fontWeight: info.price ? "normal" : "bold",
                            }}
                        >
                            {info.name}
                        </td>
                        <td className="text price">{info.price}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            { totalPages > 1 && (
                <div className="pagination">
                    <button disabled={page === 1} onClick={onClickPrev}>
                        ←
                    </button>

                    <span> {page} / {totalPages} </span>

                    <button
                        disabled={page === totalPages}
                        onClick={onClickNext}
                    >
                        →
                    </button>
                </div>
            )}
        </div>
    );
};
