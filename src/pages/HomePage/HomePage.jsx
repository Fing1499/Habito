import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D } from "@react-three/drei"
import './HomePage.css';
import Font from '../../assets/fonts/Mukta-ExtraBold_Regular.json'
import { useState } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function HomePage({ setUser }) {
  const myMesh = useRef()
  const [button, setButton] = useState('')

  function handleChange(evt) {
    evt.preventDefault()
    setButton(evt.target.value)
  }

  return (
    <>
      <div id="canvas-container" value=''>
      <section className='homepage-header'>
        <section className='hp-left'>
          <h1>HABITO</h1>
        </section>
        <section className="hp-right">
          <button onClick={handleChange} value='login' className='lr'>Login</button>
          <button onClick={handleChange} value='sign-up' className='lr'>Sign Up</button>
        </section>
      </section>
      <section>
        {button === 'login' && (
          <section className="lr-form">
            <LoginForm setUser={setUser} />
          </section>
        )}
        {button === 'sign-up' && (
          <section className="lr-form">
            <SignUpForm setUser={setUser} />
          </section>
        )}
        {button === '' && (
          null
        )}
        </section>
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight color="white" position={[0, 0, 5]} />
          <directionalLight color="blue" position={[3, 10, 20]} />
          <Text3D ref={myMesh} font={Font} size={1.5}>
            H
            <meshPhysicalMaterial color="#bf64ec" attenuationColor={0x34e1eb} attenuationDistance={1} clearcoat={1} reflectivity={1} />
          </Text3D>
          <RotatingMesh mesh={myMesh} />
        </Canvas>
      </div>
    </>
  );
}

function RotatingMesh({ mesh }) {
  useFrame(({ clock }) => {
    // mesh.current.rotation.x = clock.getElapsedTime();
    mesh.current.rotation.y = clock.getElapsedTime() / 2;
    mesh.current.rotation.z = clock.getElapsedTime() / 5;
  });
}
