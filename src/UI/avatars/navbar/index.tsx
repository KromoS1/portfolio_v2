import style from "./styles.module.scss";
import avatar from "../../../img/avatar.jpg"

export function AvatarNavBar (){
    return(
        <div className={style.avatar}>
            <a href="/">
                <img src={avatar} alt="avatar"/>
            </a>
        </div>
    )
}