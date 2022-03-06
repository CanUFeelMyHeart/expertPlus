import React from "react";
import "./InformationComponent.css";
// import info from "../../img/bg_fone.png"

export const InformationComponent = () => {
    return (
        
      
        <div className="informationBlock">
            
            <div className="informationTextContainer"> 
                <div className="informationFrame">
                    <h3 className="informationHeading">Частная медицинская клиника «Эксперт Плюс»</h3>
                    <hr className="informationUnderLine"/>
                    <div className="informationAboutClinic">
                        <ul className="informationList">
                            <li className="informationItem">В клинике «Эксперт Плюс» практикуют врачи, специализирующиеся в самых различных областях медицины. 
                            Для полноценного лечения могут быть привлечены терапевты, кардиологи, акушеры-гинекологи, невропатологи, 
                            эндокринологи, хирурги, травматологи, врачи других направлений.</li> <br></br>
                            <li className="informationItem">Доктор, с соответствующей специализацией, проведет осмотр и диагностику заболевания, 
                            разработает индивидуальный план лечения, назначит необходимые процедуры.</li><br></br>
                            <li className="informationItem">С помощью современной ультразвуковой аппаратуры, в клинике произведут полное исследование 
                            органов брюшной полости, почек и надпочечников, печени, желчного и мочевого пузыря, поджелудочные 
                            и молочные железы, лобных и плевральных полостей, состояние сосудов, артерий и суставов, многое другое.</li><br></br>
                            <li className="informationItem">В список услуг «Эксперт Плюс», также, входит функциональная диагностика. Она включает в себя: 
                            снятие электрокардиограммы, осуществление суточного наблюдения (мониторинга) за артериальным давлением, 
                            проведение спирометрии. </li><br></br>
                            <li className="informationItem">Если вам необходимо сделать инъекции (подкожные, внутримышечные, внутривенные), 
                            поставить капельницу, измерить артериальное давление или уровень сахара в крови, то в клинике есть 
                            специальный, процедурный кабинет.</li> <br></br>
                        
                        </ul>
                    </div>
                    <div className="InformationAboutServises">
                        Это лишь малый перечень возможностей медицинской клиники 
                        «Эксперт Плюс», дополнительную информацию вы можете получить по контактным телефонам или электронной 
                        почте, указанных на сайте.
                    </div>
                </div>
            </div>
        </div>
      
    );
};
