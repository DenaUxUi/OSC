import useBreakpoint from "use-breakpoint";
import { BREAKPOINTS } from "../constants";

export const useDimensions =()=>{
  const { breakpoint } = useBreakpoint(BREAKPOINTS);
 const isMobile = ["smallMobile", "mobile", "bigMobile"].includes(breakpoint);
 return isMobile;
}
