import { ResponsiveElement } from "@/utils/responsive-element";
import { ServicesDesktop } from "./desktop";
import { ServicesMobile } from "./mobile";

export default () => (
  <ResponsiveElement breakpoints={{ mobile: <ServicesMobile /> }} content={<ServicesDesktop />} />
);
