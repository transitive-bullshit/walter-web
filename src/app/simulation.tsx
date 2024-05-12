'use client'

import {
  ContactShadows,
  Environment,
  Float,
  Html,
  Lightformer,
  MeshTransmissionMaterial,
  Text
} from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { EffectComposer, N8AO, TiltShift2 } from '@react-three/postprocessing'
import { easing } from 'maath'
import { createBreakpoint } from 'react-use'

import { bootstrap } from '@/lib/bootstrap'
import inter from '@/lib/inter-regular.woff'

import styles from './page.module.css'

const useBreakpoint = createBreakpoint()

bootstrap()

export function Simulation() {
  const breakpoint = useBreakpoint()

  const initialPosition =
    breakpoint === 'tablet' ? ([0, 0, 200] as const) : ([0, 0, 20] as const)

  return (
    <>
      <Canvas
        shadows
        camera={{ position: initialPosition, fov: 50 }}
        className={styles.canvas}
      >
        <color attach='background' args={['#e0e0e0']} />

        <spotLight
          position={[20, 20, 10]}
          penumbra={1}
          castShadow
          angle={0.2}
        />

        <Status position={[0, 0, -10]} />

        <Float floatIntensity={2}>
          <Knot />
        </Float>

        <ContactShadows
          scale={100}
          position={[0, -7.5, 0]}
          blur={1}
          far={100}
          opacity={0.85}
        />

        <Environment preset='city'>
          <Lightformer
            intensity={8}
            position={[10, 5, 0]}
            scale={[10, 50, 1]}
            onUpdate={(self) => self.lookAt(0, 0, 0)}
          />
        </Environment>

        <EffectComposer>
          <N8AO aoRadius={1} intensity={2} />

          <TiltShift2 blur={0.2} />
        </EffectComposer>

        <Rig breakpoint={breakpoint} />
      </Canvas>
    </>
  )
}

function Rig({ breakpoint }: { breakpoint: string }) {
  useFrame((state, delta) => {
    if (breakpoint === 'tablet') {
      easing.damp3(
        state.camera.position,
        [Math.sin(-state.pointer.x) * 5, state.pointer.y * 3.5, 80],
        0.2,
        delta
      )
    } else {
      easing.damp3(
        state.camera.position,
        [
          Math.sin(-state.pointer.x) * 5,
          state.pointer.y * 3.5,
          15 + Math.cos(state.pointer.x) * 10
        ],
        0.2,
        delta
      )
    }

    state.camera.lookAt(0, 0, 0)
  })

  return null
}

function Knot(props: any) {
  return (
    <mesh receiveShadow castShadow {...props}>
      <torusKnotGeometry args={[3, 1, 256, 32]} />

      <MeshTransmissionMaterial
        samples={10}
        resolution={1024}
        thickness={3.5}
        chromaticAberration={0.06}
      />
    </mesh>
  )
}

function Status(props: any) {
  const text = 'Walter'
  return (
    <Text
      fontSize={14}
      letterSpacing={-0.025}
      font={inter}
      color='black'
      {...props}
    >
      {text}

      <Html style={{ color: 'transparent', fontSize: '33.5em' }} transform>
        {text}
      </Html>
    </Text>
  )
}
