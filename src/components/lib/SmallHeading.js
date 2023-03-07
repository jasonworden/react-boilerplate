import styles from "./SmallHeading.module.scss";
import cn from "classnames";

export function SmallHeading({ children, className }) {
  return <div className={cn([styles.SmallHeading, className])}>{children}</div>;
}
