import React from 'react';
import amta from '../../assets/amta.jpg';
import { Canvas } from '@react-three/fiber';
import { Float, Html, OrbitControls } from '@react-three/drei';
import ImATalent from '../Buttons/ImATalent';
import FindATalent from '../Buttons/FindATalent';

const Amta = () => {
  return (
    <div className='flex xl:flex-row flex-col'>
      <div>
        <h1 className=''>Create an account in minutes.</h1>
        <p className=''>Share your profile to the world.</p>
      </div>
      <div className="w-full h-[600px] relative z-[10]">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={50} />
          <directionalLight position={[2, 2, 2]} />
          <OrbitControls enableZoom={false} />

          <Float speed={10} rotationIntensity={2} floatIntensity={5}>
            <mesh>
              <boxGeometry args={[4, 3.2, 0.2]} />
              <meshStandardMaterial color="#e8f5e9" />
              <Html
                position={[0, 0, 0.21]}
                transform
                occlude
                zIndexRange={[100, 0]}
                distanceFactor={5}
                className="w-full h-full"
              >
                <div className="w-[320px] h-[300px] bg-yellow-300 rounded-xl shadow-lg p-4 text-green-800 overflow-y-auto">
                  <img
                    src={amta}
                    alt="Amta"
                    className="size-25 rounded-full object-cover mb-2"
                  />
                  <h2 className="text-xl font-bold">Amta</h2>
                  <p className="text-sm italic text-gray-500">Founder of AmtaPro</p>
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
