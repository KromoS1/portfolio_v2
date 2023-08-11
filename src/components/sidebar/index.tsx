import { NavLink } from "react-router-dom";

import style from "./styles.module.scss";

export function SideBar() {
  return (
    <div className={style.navbar}>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"about"}>About Me</NavLink>
      <NavLink to={"resume"}>Resume</NavLink>
      <NavLink to={"projects"}>Portfolios</NavLink>
      <NavLink to={"contacts"}>Contacts</NavLink>
    </div>
  );
}
