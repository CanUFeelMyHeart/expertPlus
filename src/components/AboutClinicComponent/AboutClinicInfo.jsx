import DoctorIcon from "../../img/aboutClinic/doctor.svg";
import EquipmentIcon from "../../img/aboutClinic/medpack.svg";
import DiscountIcon from "../../img/aboutClinic/discount.svg";
import Scheduleicon from "../../img/aboutClinic/calendar.svg";

export const aboutClinicInfo = [
    {
        image: DoctorIcon,
        header: "Специалисты узкого профиля",
        description: [
            "Онколог-маммолог",
            "Аллерголог-иммунолог",
            "Эндокринолог",
            "Колопроктолог",
            "Дерматолог",
            "Сердечно-сосудистый хирург",
        ],
        ulClassName: "withDots",
        ref: "/doctors",
    },
    {
        image: EquipmentIcon,
        header: "Новейшее оборудование",
        description: [
            "Наша клиника оснащена самым современным медицинским оборудованием, что обеспечивает максимальную точность диагностики.",
        ],
        ulClassName: "noDots",
        ref: "/info/about",
    },
    {
        image: DiscountIcon,
        header: "Социальная система скидок",
        description: [
            "Скидка 5% на все услуги клиники: медработникам, пенсионерам, ветеранам и инвалидам (при предъявлении подтверждающего документа).",
        ],
        ulClassName: "noDots",
        ref: "/info/about",
    },
    {
        image: Scheduleicon,
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
