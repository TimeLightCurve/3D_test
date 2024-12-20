/* eslint-disable @typescript-eslint/no-unused-vars */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 client_textured.glb --transform --keepnames --keepgroups --types --keepmeshes --keepmaterials 
Files: client_textured.glb [653.26KB] > H:\dev\gitiNext-telegram\gitiBot-front\public\client_textured-transformed.glb [72.78KB] (89%)
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { MeshTransmissionMaterial, Outlines, useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useControls } from 'leva'
import { useFrame } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    holes: THREE.Mesh
    arm: THREE.Mesh
    hand: THREE.Mesh
    shoulder: THREE.Mesh
    wrist: THREE.Mesh
    wrist001: THREE.Mesh
    arm001: THREE.Mesh
    shoulder001: THREE.Mesh
    hand001: THREE.Mesh
    Circle: THREE.Mesh
    eye_left: THREE.Mesh
    eye_right: THREE.Mesh
    lamp_body: THREE.Mesh
    lamp_light: THREE.Mesh
    top_body: THREE.Mesh
    bottom_body: THREE.Mesh
    hatch: THREE.Mesh
    Cube: THREE.Mesh
    engine_hole: THREE.Mesh
    outer_flame: THREE.Mesh
    inner_flame: THREE.Mesh
  }
  materials: {
    ['Material.001']: THREE.MeshPhysicalMaterial
    MI_DisplayTV_01_Inst: THREE.MeshStandardMaterial
    ['MI_Metal_05_Inst.003']: THREE.MeshStandardMaterial
    ['MI_DisplayTV_01_Inst.003']: THREE.MeshStandardMaterial
    Material: THREE.MeshPhysicalMaterial
    ['Material.004']: THREE.MeshStandardMaterial
    ['MI_DisplayTV_01_Inst.002']: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshStandardMaterial
    ['Material.003']: THREE.MeshPhysicalMaterial
  }
}

const Robot = React.forwardRef(
  (props: JSX.IntrinsicElements['group'], ref: React.Ref<THREE.Group<THREE.Object3DEventMap>>) => {
    const { nodes, materials } = useGLTF('/client_textured-transformed.glb') as GLTFResult

    const flameRef =
      useRef<
        THREE.Mesh<
          THREE.BufferGeometry<THREE.NormalBufferAttributes>,
          THREE.Material | THREE.Material[],
          THREE.Object3DEventMap
        >
      >(null)
    const flameBodyRef =
      useRef<
        THREE.Mesh<
          THREE.BufferGeometry<THREE.NormalBufferAttributes>,
          THREE.Material | THREE.Material[],
          THREE.Object3DEventMap
        >
      >(null)
    const leftHandRef = useRef<THREE.Group<THREE.Object3DEventMap>>(null)
    const elapsedTimeRef = useRef(0)

    const config = useControls({
      meshPhysicalMaterial: false,
      transmissionSampler: true,
      backside: false,
      samples: { value: 10, min: 1, max: 32, step: 1 },
      resolution: { value: 2048, min: 256, max: 2048, step: 256 },
      transmission: { value: 1, min: 0, max: 1 },
      roughness: { value: 0.33, min: 0, max: 1, step: 0.01 },
      thickness: { value: 0.04, min: 0, max: 10, step: 0.01 },
      ior: { value: 1.5, min: 1, max: 5, step: 0.01 },
      chromaticAberration: { value: 0.06, min: 0, max: 1 },
      anisotropy: { value: 0.1, min: 0, max: 1, step: 0.01 },
      distortion: { value: 0.0, min: 0, max: 1, step: 0.01 },
      distortionScale: { value: 0.3, min: 0.01, max: 1, step: 0.01 },
      temporalDistortion: { value: 0.5, min: 0, max: 1, step: 0.01 },
      clearcoat: { value: 1, min: 0, max: 1 },
      attenuationDistance: { value: 0.5, min: 0, max: 10, step: 0.01 },
      attenuationColor: '#ffffff',
      color: '#049BEF',
      bg: '#fff',
    })

    useFrame((state, delta) => {
      const { gl, scene, camera } = state

      elapsedTimeRef.current += delta

      flameRef.current?.scale.setY(Math.sin(elapsedTimeRef.current * 15) / 20 + 1)
      flameBodyRef.current?.scale.setY(Math.sin(elapsedTimeRef.current * 12) / 14 + 1)
      // leftHandRef.current?.rotateY(-Math.PI/180*1)
      const rotationAngle = (Math.PI / 180) * 40 * Math.sin(elapsedTimeRef.current * 2) // Adjust frequency as needed
      leftHandRef.current?.rotation.set(rotationAngle, 0, 0)
    })

    return (
      <group
        {...props}
        dispose={null}
      >
        <group
          ref={ref}
          name="Scene"
        >
          <mesh
            name="holes"
            geometry={nodes.holes.geometry}
            // material={materials['Material.001']}
          >
            <meshToonMaterial color={'#404040'} />
            <Outlines
              thickness={3.0}
              color="black"
              angle={0}
            />
          </mesh>
          <mesh
            name="arm"
            geometry={nodes.arm.geometry}
            // material={materials.MI_DisplayTV_01_Inst}
          >
            <meshToonMaterial color={'#404040'} />
            <Outlines
              thickness={3.0}
              color="black"
              angle={0}
            />
          </mesh>
          <mesh
            name="hand"
            geometry={nodes.hand.geometry}
            // material={materials.MI_DisplayTV_01_Inst}
          >
            <meshToonMaterial color={'#B5B5B5'} />
            <Outlines
              thickness={3.0}
              color="black"
              angle={0}
            />
          </mesh>
          <mesh
            name="shoulder"
            geometry={nodes.shoulder.geometry}
            // material={materials['MI_Metal_05_Inst.003']}
          >
            <meshToonMaterial color={'#B5B5B5'} />
            <Outlines
              thickness={3.0}
              color="black"
              angle={0}
            />
          </mesh>
          <mesh
            name="wrist"
            geometry={nodes.wrist.geometry}
            // material={materials['MI_Metal_05_Inst.003']}
            position={[-0.254, -0.15, 0.008]}
            scale={[0.038, 0.023, 0.038]}
          >
            <meshToonMaterial color={'#909090'} />
            <Outlines
              thickness={3.0}
              color="black"
              angle={0}
            />
          </mesh>
          <group ref={leftHandRef}>
            <mesh
              name="wrist001"
              geometry={nodes.wrist001.geometry}
              // material={materials['MI_Metal_05_Inst.003']}
              position={[0.266, 0.163, 0.137]}
              rotation={[0.782, 0.036, -0.095]}
              scale={[0.038, 0.023, 0.038]}
            >
              <meshToonMaterial color={'#909090'} />
              <Outlines
                thickness={3.0}
                color="black"
                angle={0}
              />
            </mesh>
            <mesh
              name="arm001"
              geometry={nodes.arm001.geometry}
              // material={materials.MI_DisplayTV_01_Inst}
            >
              <meshToonMaterial color={'#404040'} />
              <Outlines
                thickness={3.0}
                color="black"
                angle={0}
              />
            </mesh>
            <mesh
              name="shoulder001"
              geometry={nodes.shoulder001.geometry}
              // material={materials['MI_Metal_05_Inst.003']}
            >
              <meshToonMaterial color={'#B5B5B5'} />
              <Outlines
                thickness={3.0}
                color="black"
                angle={0}
              />
            </mesh>
            <mesh
              name="hand001"
              geometry={nodes.hand001.geometry}
              // material={materials.MI_DisplayTV_01_Inst}
              position={[0.278, 0.203, 0.183]}
            >
              <meshToonMaterial color={'#B5B5B5'} />
              <Outlines
                thickness={3.0}
                color="black"
                angle={0}
              />
            </mesh>
          </group>
          <mesh
            name="Circle"
            geometry={nodes.Circle.geometry}
            // material={materials['MI_DisplayTV_01_Inst.003']}
          >
            <meshToonMaterial color={'white'} />
            <Outlines
              thickness={5.0}
              color="black"
              angle={0}
            />
          </mesh>
          <mesh
            name="eye_left"
            geometry={nodes.eye_left.geometry}
            // material={materials['MI_DisplayTV_01_Inst.003']}
          >
            <meshToonMaterial color={'black'} />
            <Outlines
              thickness={3.0}
              color="white"
              angle={0}
            />
          </mesh>
          <mesh
            name="eye_right"
            geometry={nodes.eye_right.geometry}
            // material={materials['MI_DisplayTV_01_Inst.003']}
          >
            <meshToonMaterial color={'black'} />
            <Outlines
              thickness={3.0}
              color="white"
              angle={0}
            />
          </mesh>
          <mesh
            name="lamp_body"
            geometry={nodes.lamp_body.geometry}
            // material={materials.Material}
          >
            <MeshTransmissionMaterial {...config} />
            {/* <Outlines
            thickness={0.2}
            color="black"
            angle={0}
          /> */}
          </mesh>
          <mesh
            name="lamp_light"
            geometry={nodes.lamp_light.geometry}
            material={materials['Material.004']}
          >
            {/* <Outlines
            thickness={3.0}
            color="black"
            angle={Math.PI / 4}
          /> */}
          </mesh>
          <mesh
            name="top_body"
            geometry={nodes.top_body.geometry}
            // material={materials['MI_Metal_05_Inst.003']}
            castShadow
            receiveShadow
          >
            <meshToonMaterial color={'#B5B5B5'} />
            <Outlines
              thickness={3.0}
              color="black"
              angle={(Math.PI / 180) * 120}
            />
          </mesh>
          <mesh
            name="bottom_body"
            geometry={nodes.bottom_body.geometry}
          >
            {/* <MeshTransmissionMaterial {...config} roughness={0.15} thickness={0.04} color={'#404040'} /> */}
            <Outlines
              thickness={3.0}
              color="black"
              angle={0}
            />
          </mesh>
          <mesh
            name="hatch"
            geometry={nodes.hatch.geometry}
            material={materials['Material.001']}
          >
            <Outlines
              thickness={3.0}
              color="black"
              angle={0}
            />
          </mesh>
          <mesh
            name="Cube"
            geometry={nodes.Cube.geometry}
            material={materials.MI_DisplayTV_01_Inst}
            position={[-0.002, 0.038, 0.217]}
            rotation={[-0.005, 0, 0]}
            scale={[0.532, 0.641, 0.031]}
          >
            {/* <Outlines
            thickness={1.0}
            color="black"
            angle={0}
          /> */}
          </mesh>
          <mesh
            name="engine_hole"
            geometry={nodes.engine_hole.geometry}
            // material={materials['MI_DisplayTV_01_Inst.002']}
          >
            <Outlines
              thickness={3.0}
              color="black"
              angle={(Math.PI / 180) * 100}
            />
          </mesh>
          <mesh
            ref={flameBodyRef}
            name="outer_flame"
            geometry={nodes.outer_flame.geometry}
            // material={materials['Material.002']}
          >
            <MeshTransmissionMaterial {...config} />
            {/* <Outlines
            thickness={3.0}
            color="black"
            angle={0}
          /> */}
          </mesh>
          <mesh
            name="inner_flame"
            ref={flameRef}
            geometry={nodes.inner_flame.geometry}
            material={materials['Material.003']}
          >
            <Outlines
              thickness={3.0}
              color="black"
              angle={0}
            />
          </mesh>
        </group>
      </group>
    )
  }
)

Robot.displayName = 'Robot'

export default Robot



useGLTF.preload('/client_textured-transformed.glb')
