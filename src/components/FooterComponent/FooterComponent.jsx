import React from "react";
import stat_img from "../../img/footer_statistics.png";
import "./FooterComponent.css";

export const FooterComponent = () => {
  return (
    <div className="footerBlock">
      <div className="footerContainer">
        <div className="footerContainer__inside">
          <div className="footerContainer__statistic">
            <a
              href="https://www.liveinternet.ru/stat/508877.ru/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={stat_img}
                className="footerContainer_statImage"
                alt=""
              />
            </a>
            <h3>2024 © ООО «КМП»</h3>
          </div>
          <h4 className="footerContainer_info">
            Лицензия №ЛО-34-01-003669 от 07 марта 2018 г. выдана Комитетом
            здравоохранения Волгоградской области
          </h4>
        </div>
      </div>
    </div>
  );
};
