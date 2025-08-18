import React from 'react';
import amta from '../../assets/amta.jpg';
import { Canvas } from '@react-three/fiber';
import { Float, Html } from '@react-three/drei';
import ImATalent from '../Buttons/ImATalent';
import FindATalent from '../Buttons/FindATalent';
import {Link} from 'react-router-dom'

const Amta = () => {
  return (
    <div className="flex flex-col xl:flex-row items-center justify-center px-5 py-10 gap-3">
      
      <div className="w-full xl:w-3/4 text-center xl:text-left">
        <h1 className="xl:text-[50px] text-[40px] font-bold mb-4 leading-tight">
          Create an account in minutes.
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Share your profile with the world and get discovered.
        </p>
        <div className="flex flex-row gap-2 justify-center xl:justify-start">
          <Link to="/signup"><button 
              className="w-[200px] p-5 m-3 bg-primary hover:bg-foreground hover:text-primary text-foreground rounded-4xl transition-colors"
          >
              Get Started
          </button></Link>
        </div>
      </div>

      <div className="w-full xl:w-1/2 h-[500px] relative z-[10]">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={5} />
          <directionalLight position={[2, 2, 2]} />

          <Float speed={3} rotationIntensity={1} floatIntensity={2}>
            <mesh>
              <meshStandardMaterial color="#e8f5e9" />
              <Html
                position={[0, 0, 0.2]}
                transform
                occlude
                zIndexRange={[100, 0]}
                distanceFactor={3.5}
                className="w-full flex justify-center"
              >
                <div className="w-[320px] h-[400px] bg-primary rounded-xl shadow-lg p-3 overflow-y-auto">
                  <img
                    src={amta}
                    alt="Amta"
                    className="size-30 rounded-full mb-2 mx-auto"
                  />
                  <h2 className="text-2xl font-bold text-center">Amta</h2>
                  <p className="text-sm italic text-white text-center">Founder of AmtaPro</p>
                  <hr className="my-2 border-green-300" />

                  <div className="text-xs space-y-1">
                    <p><strong>📍 Location:</strong> Nigeria</p>
                    <p><strong>⚽ Position:</strong> Striker</p>
                    <p><strong>🎂 Age:</strong> 24</p>
                    <p><strong>📏 Height:</strong> 6'1"</p>
                    <p><strong>🦶 Preferred Foot:</strong> Right</p>
                    <p><strong>🏟️ Current Club:</strong> Rising Stars FC</p>
                    <p><strong>🏆 Achievements:</strong> 2023 Golden Boot Winner, 2022 Youth League MVP</p>
                  </div>

                  <p className="text-xs mt-3 text-gray-700 leading-snug">
                    Amta is a dynamic forward known for explosive pace, clinical finishing, and visionary leadership on and off the pitch. His journey from grassroots football to founding AmtaPro is a testament to passion, grit, and purpose.
                  </p>
                </div>
              </Html>
            </mesh>
          </Float>
        </Canvas>
      </div>
    </div>
  );
};

export default Amta;
