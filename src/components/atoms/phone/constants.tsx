import Data from "@/constants/";

export default {
  phone: Data.phone,
  link: {
    href: `tel:${Data.phone}`,
    title: "Telefon",
  },
};
