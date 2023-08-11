import { Footer } from "@/components";
import { AvatarNavBar } from "@/UI";

import style from "./styles.module.scss";

export function NavBar() {
  return (
    <div className={style.navigate}>
      <div className={style.container}>
        <AvatarNavBar />
        <Footer />
      </div>
    </div>
  );
}
