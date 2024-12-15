'use client'

import Robot from './Client_textured'
import {
  CameraControls,
  // Wireframe,
  Float,
  MeshWobbleMaterial,
  PerspectiveCamera,
  Scroll,
  useScroll,
  Wireframe,
} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'
import { RefObject, Suspense, useRef } from 'react'
import * as THREE from 'three'
import { CylinderGeometry } from 'three'

export default function Scene({ divRef }: { divRef: RefObject<HTMLDivElement> }) {
  const { cameraPosition, lightPosition } = useControls({
    cameraPosition: { value: [0, 0.5, 2.5] },
    lightPosition: { value: [-3, 2, 9] },
    lightPosition2: { value: [1, 0, 1] },
  })

  const botRef = useRef<THREE.Group<THREE.Object3DEventMap>>(null)
//   const floatRef = useRef<THREE.Group<THREE.Object3DEventMap>>(null)
  const scroll = useScroll()
  const cameraRef = useRef<CameraControls>(null)

  const floatHeightRef = useRef(0)

  useFrame(() => {
    const rTotal = scroll.range(0, 1)
    const r1 = scroll.range(0, 1 / 4)
    const rm1 = scroll.curve(0, 1 / 4)
    const r1vis = scroll.visible(0, 1 / 4)
    const r2 = scroll.range(1 / 4, 1 / 4)
    const rm2 = scroll.curve(1 / 4, 1 / 4)
    const r2vis = scroll.visible(1 / 4, 1 / 4)
    const r3 = scroll.range(2 / 4, 1 / 4)
    const rm3 = scroll.curve(2 / 4, 1 / 4)
    const r3vis = scroll.visible(2 / 4, 1 / 4)
    const r4 = scroll.range(3 / 4, 1 / 4)
    const rm4 = scroll.curve(3 / 4, 1 / 4)
    const r4vis = scroll.visible(3 / 4, 1 / 4)

    const botPosition = botRef.current?.position

    // console.log('botPosition', botPosition)

    // cameraRef.current?.moveTo(0, rTotal * 8, -rTotal * 40, true)

    cameraRef.current?.lerpLookAt(
      //positionA
      0,
      0,
      4,
      //targetA
      0,
      3,
      -10,
      //positionB
      8 * rm1 + 12 * rm2,
      8 * r1 + 20 * rm1 + 10 * r2 - 10 * rm2 - 6 * r3,
      -40,
      //targetB
      16 * -rm1 + 4 * rm2,
      14,
      -50,
      // lerp value
      rTotal,
      true
    )
    cameraRef.current?.zoomTo(1 - 0.7 * rm1 - 0.6 * rm2 - 0.5 * rm3 - 0.5 * rm4, true)
    /////////////first step //////////
    if (!r3vis && !r4vis && (r1vis || r2vis)) {
      floatHeightRef.current = r1 * 2
      botRef.current?.position.lerpVectors(
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(-0.5 - 5 * rm1, 2 + 2 * rm1, -12),
        r1
      )
      if (r1vis)
        botRef.current?.rotation.set(
          (Math.PI / 180) * -40 * rm1,
          Math.PI * 2 * r1,
          (Math.PI / 180) * 10 * rm1
        )
    }
    /////////////2nd step //////////
    if (!r1vis && !r4vis) {
      floatHeightRef.current = r2 * 6
      // floatRef.current.
      botRef.current?.position.lerpVectors(
        botPosition!,
        new THREE.Vector3(0.5 + 8 * rm2, 6 - 8 * rm2, -22),
        r2
      )
      if (r2vis)
        botRef.current?.rotation.set(
          (Math.PI / 180) * -80 * rm2,
          Math.PI * 2 * r2,
          (Math.PI / 180) * -40 * rm2
        )
      // console.log('botPosition1', botPosition1)
    }
    // botRef.current?.matrixWorldNeedsUpdate
    // botRef.current?.updateMatrixWorld

    /////////////3rd step //////////

    if (!r1vis && !r2vis) {
      floatHeightRef.current = r3 * 4

      botRef.current?.position.lerpVectors(
        botPosition!,
        new THREE.Vector3(-0.5 + -3 * rm3, 4 + 4 * rm3, -32 - 10 * rm3),
        r3
      )
      if (r3vis)
        botRef.current?.rotation.set(
          (Math.PI / 180) * -80 * rm3,
          Math.PI * 2 * r3,
          (Math.PI / 180) * 10 * r3
        )
      // console.log('botPosition2', botPosition2)
    }

    /////////////4th step //////////
    if (!r1vis && !r2vis) {
      botRef.current?.position.lerpVectors(
        botPosition!,
        new THREE.Vector3(-0.5 + -3 * rm4, 4 + 4 * rm4, -48),
        r4
      )
      if (r4vis)
        botRef.current?.rotation.set(
          (Math.PI / 180) * -80 * rm4,
          Math.PI * 2 * r4,
          (Math.PI / 180) * -40 * r4
        )
      // console.log('botPosition2', botPosition2)
    }
  })

  return (
    <>
      <Suspense fallback="Loading">
        <ambientLight
          intensity={0.5}
          color="#FFFFFF"
        />
        {/* <color
          attach="background"
          args={['#1B43BA']}
          /> */}
        <directionalLight
          // castShadow
          position={lightPosition}
          intensity={1.0}
          color="#fff"
          target={botRef.current ? botRef.current : undefined}
        />
        {/* <spotLight
          position={lightPosition2}
          intensity={1.0}
          color="#fff"
          target={botRef.current}
          /> */}
        <CameraControls
          ref={cameraRef}
          enabled={true}
          // minDistance={0}
          // maxDistance={100}
          verticalDragToForward={false}
          dollyToCursor={false}
          infinityDolly={false}
          domElement={divRef.current!}
          mouseButtons={{
            left: 0,
            middle: 0,
            right: 0,
            wheel: 0,
          }}
          touches={{
            one: 0,
            two: 0,
            three: 0,
          }}
        />
        <Scroll>
          {/* <Float
            floatIntensity={4}
            floatingRange={[-0.02 + floatHeightRef.current, 0.02 + floatHeightRef.current]}
            speed={6}
            ref={floatRef}
            position={[0, 0, 0]}
          > */}
          <Robot
            position={[0, 0, 0]}
            ref={botRef}
          />
          {/* </Float> */}
          <Tunnel />
        </Scroll>

        {/* <OrbitControls /> */}
        <PerspectiveCamera
          makeDefault
          position={cameraPosition}
          // near={0.02}
          // far={2000}
          // fov={70}
        />
      </Suspense>
    </>
  )
}

const Tunnel = () => {
  const meshRef = useRef<THREE.Mesh<THREE.BufferGeometry<THREE.NormalBufferAttributes>, THREE.Material | THREE.Material[], THREE.Object3DEventMap>> (null)
  const cylinderRef = useRef<
    CylinderGeometry & {
      radiusTop: number
      radiusBottom: number
      height: number
      radialSegments: number
      heightSegments: number
      openEnded: boolean
      thetaStart: number
      thetaLength: number
    }
  >(null)

  const scroll = useScroll()

  useFrame(() => {
    // const { gl, scene, camera } = state
    // if (cylinderRef.current) {
    //   cylinderRef.current.radiusTop = 2
    //   cylinderRef.current.radiusBottom = 8
    // }
    const rt = scroll.range(0,1)
    meshRef.current?.rotation.set(
      -(Math.PI / 180) * 90,
      (Math.PI / 180) * 45 - (Math.PI ) * rt,
      0
    )
  })

  return (
    <group>
      <mesh
        position={[0, 4, -26]}
        rotation={[-(Math.PI / 180) * 90, (Math.PI / 180) * 45, 0]}
        ref={meshRef}
      >
        {/* <meshBasicMaterial
          color={'black'}
          side={THREE.BackSide}
        /> */}
        <MeshWobbleMaterial
          factor={0.1}
          speed={3}
          side={THREE.BackSide}
          color={'#222153'}
          wireframe
          wireframeLinewidth={3}
          // wireframeLinecap="round"
          forceSinglePass={true}
        />
        {/* <Wireframe
          simplify={true}
          fill={'black'}
          fillMix={0.5}
          stroke={'#909090'}
          wireframeLinewidth={0.2}
          dash
          dashLength={0.5}
          dashRepeats={2.5}
          // side={THREE.BackSide}
        /> */}
        <cylinderGeometry
          ref={cylinderRef}
          args={[4, 80, 80, 4, 80, true, 0, 6.28]}
        />
      </mesh>
      <Float
        floatIntensity={1}
        floatingRange={[-0.001, 0.001]}
        rotationIntensity={0.1}
        speed={3}
      >
        <mesh
          rotation={[(Math.PI / 180) * 90, (Math.PI / 180) * 0, (Math.PI / 180) * 90]}
          position={[0, 8, -32.5]}
        >
          <boxGeometry args={[6, 1, 0.1]} />
          <meshBasicMaterial color={'purple'} />
          <Wireframe
            simplify={true}
            fill={'black'}
            fillMix={0}
            stroke={'black'}
          />
        </mesh>
      </Float>

      <Float
        floatIntensity={1}
        floatingRange={[-0.001, 0.003]}
        rotationIntensity={0.2}
        speed={2}
      >
        <mesh
          rotation={[0, (Math.PI / 180) * 90, 0]}
          position={[2.5, -1, -10.5]}
        >
          <boxGeometry args={[3, 1.5, 0.1]} />
          <meshToonMaterial color={'#b5b5b5'} />
          <Wireframe
            simplify={true}
            fill={'black'}
            fillMix={0}
            stroke={'black'}
          />
        </mesh>
      </Float>

      {/* left 1 */}
      <Float
        floatIntensity={1}
        floatingRange={[-0.001, 0.001]}
        rotationIntensity={0.1}
        speed={3}
      >
        <mesh
          rotation={[(Math.PI / 180) * 90, -(Math.PI / 180) * 35, (Math.PI / 180) * 90]}
          position={[-2.5, -2, -10.5]}
        >
          <boxGeometry args={[4, 1.2, 0.2]} />
          <meshToonMaterial color={'blue'} />
          <Wireframe
            simplify={true}
            fill={'black'}
            fillMix={0}
            stroke={'white'}
          />
        </mesh>
      </Float>

      <Float
        floatIntensity={1}
        floatingRange={[-0.001, 0.001]}
        rotationIntensity={0.2}
        speed={1}
      >
        <mesh
          rotation={[0, -(Math.PI / 180) * 90, (Math.PI / 180) * -3]}
          position={[-4, 0.8, -20.5]}
        >
          <boxGeometry args={[6, 1.9, 0.3]} />
          <meshBasicMaterial color={'black'} />
          <Wireframe
            simplify={true}
            fill={'black'}
            fillMix={0}
            stroke={'white'}
          />
        </mesh>
      </Float>

      {/* right 2 */}
      <Float
        floatIntensity={1}
        floatingRange={[-0.001, 0.001]}
        rotationIntensity={0.1}
        speed={2}
      >
        <mesh
          rotation={[(Math.PI / 180) * 97, (Math.PI / 180) * 0, -(Math.PI / 180) * 90]}
          position={[0.5, -1, -35.5]}
        >
          <boxGeometry args={[24, 2, 0.1]} />
          <meshBasicMaterial color={'#b5b5b5'} />
          <Wireframe
            simplify={true}
            fill={'black'}
            fillMix={0}
            stroke={'black'}
          />
        </mesh>
      </Float>

      <Float
        floatIntensity={1}
        floatingRange={[-0.001, 0.001]}
        rotationIntensity={0.1}
        speed={2}
      >
        <mesh
          rotation={[0, (Math.PI / 180) * 90, (Math.PI / 180) * 5]}
          position={[4, 3, -36.5]}
        >
          <boxGeometry args={[16, 2, 0.3]} />
          <meshBasicMaterial color={'black'} />
          <Wireframe
            simplify={true}
            fill={'black'}
            fillMix={0}
            stroke={'white'}
          />
          {/* <Outlines
          thickness={3.0}
          color="white"
          angle={0}
        /> */}
        </mesh>
      </Float>

      {/* left 2 */}
      <Float
        floatIntensity={1}
        floatingRange={[-0.001, 0.001]}
        rotationIntensity={0.1}
        speed={1}
      >
        <mesh
          rotation={[(Math.PI / 180) * 0, -(Math.PI / 180) * 90, (Math.PI / 180) * -5]}
          position={[-4, 4, -29.5]}
        >
          <boxGeometry args={[8, 1.6, 0.3]} />
          <meshToonMaterial color={'purple'} />
          <Wireframe
            simplify={true}
            fill={'black'}
            fillMix={0}
            stroke={'black'}
          />
          {/* <Outlines
            thickness={3.0}
            color="black"
            angle={0}
          /> */}
        </mesh>
      </Float>

      <Float
        floatIntensity={1}
        floatingRange={[-0.001, 0.001]}
        rotationIntensity={0.1}
        speed={2}
      >
        <mesh
          rotation={[(Math.PI / 180) * 90, (Math.PI / 180) * -80, (Math.PI / 180) * 87]}
          position={[-3, 2, -40.5]}
        >
          <boxGeometry args={[20, 1.5, 0.2]} />
          <meshBasicMaterial color={'blue'} />
          <MeshWobbleMaterial
            factor={0.05}
            speed={3}
            dithering
            forceSinglePass
            color={'#fff'}
          />
        </mesh>
      </Float>
    </group>
  )
}
