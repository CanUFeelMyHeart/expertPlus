import React from "react";
import { useNavigate } from "react-router-dom";
import "./MenuButtonsComponent.css";

export const MenuButtonsComponent = (props) => {
    const [openInfo, setOpenInfo] = React.useState(false);

    const setOpenInfoFunction = () => {
        setOpenInfo(!openInfo);
    };

    const navigate = useNavigate();

    function handleClick(ref) {
        navigate(ref);
        setOpenInfo(false);
    }

    return (
        <>
            <div className={props.className}>
                <button onClick={() => setOpenInfoFunction()}>info</button>
                {props.buttons.map((button, index) => (
                    <button
                        key={index}
                        className="menuButton"
                        onClick={(e) => handleClick(button.ref)}
                    >
                        <h4>{button.name}</h4>
                    </button>
                ))}
            </div>
            <div
                className="infoExpandingList"
                style={{
                    display: openInfo ? "block" : "none",
                }}
            >
                <div 
                style={{
                    display: openInfo ? "flex" : "none",
                }}
                className="infoExpandingListContainer">
                    {props.informationButton.map((button, index) => (
                        <button key={index}>
                            <h4>{button.name}</h4>
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
};

// {props.buttons.map((button, index) => (
//     <button
//         key={index}
//         className="menuButton"
//         onClick={(e) => handleClick(button.ref)}
//     >
//         <h4>{button.name}</h4>
//         <img
//             src={button.expandArrow}
//             className="menuButtonExpandArrow"
//         />
//     </button>
// ))}
