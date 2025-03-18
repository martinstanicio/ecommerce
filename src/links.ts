import { siFacebook, siInstagram, SimpleIcon, siX } from "simple-icons";

type NavigationItem = {
  title: string;
  href: string;
};

export const navigation: NavigationItem[] = [
  {
    title: "Inicio",
    href: "/",
  },
  {
    title: "Productos",
    href: "/productos",
  },
  {
    title: "Contacto",
    href: "/contacto",
  },
];

type SocialItem = {
  name: string;
  href: string;
  icon: SimpleIcon;
};

export const social: SocialItem[] = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: siInstagram,
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: siFacebook,
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: siX,
  },
];
