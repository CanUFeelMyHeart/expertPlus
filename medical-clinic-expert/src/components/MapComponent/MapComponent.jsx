import React from "react";
import "./MapComponent.css";

export const MapComponent = () => {
    return (
        <>
            <div className="MapBlock">
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A72f3878988dbc404df4dd7d0331c51fa9d742d0856ae620c1fe76d1c880d44f4&amp;source=constructor"
                    width="100%"
                    height="400"
                    frameBorder="0"
                ></iframe>
            </div>
        </>
    );
};
