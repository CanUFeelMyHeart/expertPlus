import aboutClinicPic1 from "../../img/aboutClinic/clinicIcon1.svg";
import aboutClinicPic2 from "../../img/aboutClinic/clinicIcon2.svg";
import aboutClinicPic3 from "../../img/aboutClinic/clinicIcon3.svg";
import aboutClinicPic4 from "../../img/aboutClinic/clinicIcon4.svg";

export const aboutClinicInfo = [
    {
        image: aboutClinicPic1,
        header: "Специалисты узкого профиля",
        description: [
            "Онколог-маммолог",
            "Аллерголог-иммунолог, пульмонолог",
            "Колопроктолог",
            "Дерматолог",
            "Сердечно-сосудистый хирург",
        ],
        ulClassName: "withDots",
        ref: "/doctors",
    },
    {
        image: aboutClinicPic2,
        header: "Новейшее оборудование",
        description: [
            "Наша клиника оснащена самым современным медицинским оборудованием, что обеспечивает максимальную точность диагностики.",
        ],
        ulClassName: "noDots",
        ref: "/info/about",
    },
    {
        image: aboutClinicPic3,
        header: "Социальная система скидок",
        description: [
            "Скидка 5% на все услуги клиники: медработникам, пенсионерам, ветеранам и инвалидам (при предъявлении подтверждающего документа).",
        ],
        ulClassName: "noDots",
        ref: "/info/about",
    },
    {
        image: aboutClinicPic4,
        header: "Без перерывов и выходных",
        description: [
            "Наша клиника открыта для наших пациентов ежедневно, без перерыва и выходных —",
            "будни: 7:00–20:00,",
            "выходные дни: 8:00–18:00.",
        ],
        ulClassName: "noDots",
        ref: "/contacts",
    },
];
