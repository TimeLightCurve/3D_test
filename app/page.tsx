'use client'

// import { motion } from 'motion/react'
import Scene from '../components/scene'
import { Leva } from 'leva'
import { Canvas } from '@react-three/fiber'
import { ScrollControls } from '@react-three/drei'
import { useRef } from 'react'

export default function Home() {
  const divRef = useRef<HTMLDivElement>(null)
  return (
    <div className=" w-screen h-screen bg-black">
      <div 
      ref={divRef}
      className="relative bg-black flex flex-col gap-4 justify-start items-center w-full h-screen  overflow-x-hidden font-kdam">
        <Leva collapsed />
        <Canvas
          shadows
          // dpr={[1, 2]}
        >
          <ScrollControls
            pages={4}
            damping={0.3}
          >
            <Scene divRef={divRef}/>
          </ScrollControls>
        </Canvas>
      </div>
    </div>
  );
}
