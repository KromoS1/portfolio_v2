import style from "./styles.module.scss";

export function Home() {
  return (
    <div className={style.particle}>
      <div className={style.container}>
        <div className={style.row}>
          <div className={style.rowContainer}>
            <div className={style.homeContent}>
              <h1>
                Hi, I am
                <span> Roman Shaulinski</span>
              </h1>
              <p>
                I&apos;m someone who is passionate about programming. I have
                experience building SPA with React/Redux/TypeScript and also
                experience building mobile apps using React Native / Expo.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
