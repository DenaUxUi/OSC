import React from "react";
import ReactTooltip from "react-tooltip";
import useBreakpoint from "use-breakpoint";
import Info from "../../assets/icons/Info";
import { BREAKPOINTS } from "../../constants";
import styles from "./style.module.css";

const infoBottom = {
  place: "bottom",
  type: "light",
  effect: "solid",
};

const Tooltip = ({ getContent, id, ...rest }) => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS);

  const isMobile = ["smallMobile", "mobile"].includes(breakpoint);

  return (
    <>
      <p
        {...(isMobile && { "data-event": "click focus" })}
        data-for={id}
        data-tip
      >
        <button aria-label="info">
          <Info />
        </button>
      </p>
      <ReactTooltip
        {...infoBottom}
        globalEventOff="click"
        arrowColor="transparent"
        className={styles.tooltipContainer}
        getContent={getContent}
        id={id}
        {...rest}
      />
    </>
  );
};

export default Tooltip;
