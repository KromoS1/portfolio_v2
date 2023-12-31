import avatar from "@/assets/img/avatar.jpg";

import style from "./styles.module.scss";

export function AvatarNavBar() {
  return (
    <div className={style.avatar}>
      <a href="/">
        <img src={avatar} alt="avatar" />
      </a>
    </div>
  );
}
