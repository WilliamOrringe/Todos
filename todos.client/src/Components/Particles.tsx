// ParticlesComponent.tsx

import React, { useCallback } from 'react';

import type { Container, Engine } from 'tsparticles-engine';
import Particles from 'react-particles'; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from 'tsparticles-slim';

const ParticlesComponent = () => {
  const particlesInit = useCallback(
    async (engine: Engine) => {
      console.log(engine);
      await loadSlim(engine);
    },
    []
  );

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );
  return (
    <Particles
      id='tsparticles'
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 60,
        particles: {
          color: {
            value: '#A23CDA',
          },

          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: true,
            speed: 6,
            straight: true,
          },
          number: {
            density: {
              enable: true,
              area: 400,
            },
            value: 0,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesComponent;
