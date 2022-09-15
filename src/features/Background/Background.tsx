import Particles from 'react-particles';
import { Engine } from "tsparticles-engine";
import { loadFull } from 'tsparticles';



export const Background: React.FC = () => {
  return (
    <Particles
    init={async (engine: Engine) => {
      await loadFull(engine);
    }}
    id="tsparticles"
    options={{
      background: {
        color: {
          value: "#030303",
        },
      },
      fpsLimit: 150,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "bottom",
          enable: true,
          outModes: {
            default: "out",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 100,
        },
        opacity: {
          value: 0.2,
        },
        shape: {
          type: "square",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }}
  />
  );
};
