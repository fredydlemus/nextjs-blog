import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaMailBulk,
  FaStackOverflow,
} from "react-icons/fa";

export const links = [
  {
    title: "Redes Sociales",
    links: [
      {
        href: "https://twitter.com/fredydlemus",
        label: "Twitter",
        icon: <FaTwitter />,
      },
      {
        href: "https://www.linkedin.com/in/fredydlemus/",
        label: "LinkedIn",
        icon: <FaLinkedin />,
      },
      {
        href: "https://github.com/fredydlemus",
        label: "GitHub",
        icon: <FaGithub />,
      },
      {
        href: "https://stackoverflow.com/users/20992045/fredy-lemus",
        label: "Stack Overflow",
        icon: <FaStackOverflow />,
      },
      {
        href: "https://www.instagram.com/fredydlemus/",
        label: "Instagram",
        icon: <FaInstagram />,
      },
    ],
  },
  {
    title: "Correo",
    links: [
      {
        href: "mailto: hello@fredydlemus.com",
        label: "hello@fredydlemus.com",
        icon: <FaMailBulk />,
      },
    ],
  },
];
