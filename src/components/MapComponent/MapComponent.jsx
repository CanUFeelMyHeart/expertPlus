import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import "./MapComponent.css";

export const MapComponent = () => {
  return (
    <>
      <div className="MapBlock">
        {/* <YMaps>
          <div>
            <Map
            instanceRef={ref => { ref && ref.behaviors.disable('scrollZoom'); }}
              defaultState={{
                center: [48.51228898470847,44.54582523996881],
                zoom: 15,
                controls: ["zoomControl", "fullscreenControl"],
              }}
              modules={["control.ZoomControl", "control.FullscreenControl"]}
              width="100%"
              height="400px"
            >
            <Placemark defaultGeometry={[48.51228898470847,44.54582523996881]} />
            </Map>
          </div>
        </YMaps> */}
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A72f3878988dbc404df4dd7d0331c51fa9d742d0856ae620c1fe76d1c880d44f4&amp;source=constructor&amp;scroll=false"
          width="100%"
          height="400"
          frameBorder="0"
          title="yandexFrame"
        ></iframe>
      </div>
    </>
  );
};
