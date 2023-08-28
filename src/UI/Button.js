import { useState } from "react";
import classes from "./Button.module.css";
function Button() {
  const [isBtnHover, setIsBTnHover] = useState(false);
  let styleClass = isBtnHover ? "bookBtnHovered" : "bookBtn";
  const btnHoverHandler = () => {
    setIsBTnHover(true);
  };
  const btnRemoveHoverHandler = () => {
    setIsBTnHover(false);
  };
  return (
    <div className={classes.btnSection}>
      <button
        onMouseEnter={btnHoverHandler}
        onMouseLeave={btnRemoveHoverHandler}
        className={styleClass}
      >
        Explore
      </button>
    </div>
  );
}
export default Button;
