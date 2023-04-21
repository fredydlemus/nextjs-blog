import { FaHome, FaAngular } from "react-icons/fa";
import { BsPersonBadge } from "react-icons/bs";

export const categories = [
  {
    name: "Inicio",
    slug: "/",
    icon: <FaHome />,
    show: true,
  },
  {
    name: "Angular",
    slug: "/angular",
    icon: <FaAngular />,
    show: false,
  },
  {
    name: "Acerca de",
    slug: "/about-me",
    icon: <BsPersonBadge />,
    show: true,
  },
];
