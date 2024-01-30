import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import skyScene from '../assets/3d/sky.glb'
import { useFrame } from '@react-three/fiber';


// 3D Model from: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
const Sky = ({ isRotating }) => {


  const sky = useGLTF(skyScene);
  const skyRef = useRef()

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.15 * delta
    }
  })

  return (
    <mesh ref={skyRef}>

      <primitive object={sky.scene} />
    </mesh>
  );
}
export default Sky