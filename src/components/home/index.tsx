import { useCallback, useEffect, useRef } from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import Typed from "typed.js";

import style from "./styles.module.scss";

export function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Roman Shaulinsky", "Full-stack developer"],
      typeSpeed: 80,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  return (
    <>
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#10121b",
            },
          },
          fpsLimit: 120,

          particles: {
            color: {
              value: "#ffffff",
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 2,
              straight: true,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 55,
            },
            opacity: {
              value: 0.6,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 6 },
            },
          },
          detectRetina: true,
        }}
        init={particlesInit}
        loaded={particlesLoaded}
      />
      <div className={style.particle}>
        <div className={style.container}>
          <div className={style.row}>
            <div className={style.rowContainer}>
              <div className={style.homeContent}>
                <h1>
                  Hi, I&apos;m <span ref={el}></span>
                </h1>
                <p>
                  I developer with over two years of experience in mobile app
                  development. I&apos;m also a React and React Native Support
                  Specialist with 1000+ hours of help. My main stack is{" "}
                  <span>Nest.js</span>, <span>Next.js</span>,{" "}
                  <span>React-native</span> / <span>Expo</span> .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
