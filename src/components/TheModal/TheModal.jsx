import React, { useState, useEffect } from "react";
import "./TheModal.css";

export const TheModal = ({ isOpen, onClose }) => {
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (isOpen) {
            fetch(process.env.REACT_APP_FETCH_CSRF, {
                method: "GET",
                credentials: "include",
            }).catch(err => console.error("Ошибка CSRF init:", err));
        } else {
            setPhone('');
            setError('');
        }
    }, [isOpen]);

    function getCookie(name) {
        const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
        return match ? decodeURIComponent(match[2]) : null;
    }

    const csrfToken = getCookie("csrftoken");

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(process.env.REACT_APP_MAKE_APPOINTMENT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": csrfToken,
            },
            credentials: "include",
            body: JSON.stringify({ phone }),
        })
            .then(res => res.json())
            .then(data => {
                onClose();
            })
            .catch(err => {
                console.error("Ошибка при отправке номера:", err);
                setError('Ошибка отправки');
            });
    };

    if (!isOpen) return null;

    return (
        <div className="TheModal">
            <div className="TheModal__backdrop" onClick={onClose}></div>
            <div className="TheModal__content">
                <h2>Введите номер телефона</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        className="TheModal__input"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+7 (___) ___-__-__"
                        required
                    />
                    <div className="TheModal__error">
                    {error}
                    </div>
                    <button className="TheModal__submit" type="submit">Отправить</button>
                </form>
                <button className="TheModal__close" onClick={onClose}>×</button>
            </div>
        </div>
    );
};
