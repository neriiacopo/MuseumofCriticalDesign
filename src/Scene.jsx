import {
    OrbitControls,
    OrthographicCamera,
    Bounds,
    useBounds,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";

import Room from "./Room.jsx";
import Poster from "./Poster.jsx";
import Design from "./Design.jsx";
import * as THREE from "three";

export default function Scene() {
    const cameraRef = useRef();
    const orbitRef = useRef();

    return (
        <>
            <Bounds
                fit
                clip
                observe
                damping={6}
                margin={1}
            >
                <OrthographicCamera
                    ref={cameraRef}
                    makeDefault
                    position={[2, 10, 5]}
                />
                <OrbitControls
                    ref={orbitRef}
                    makeDefault
                    maxPolarAngle={Math.PI / 2}
                    target={[0, 0, 0]}
                    minZoom={30}
                    maxZoom={100}
                />
                <ambientLight intensity={0.3} />

                <group rotation={[0, 4.5, 0]}>
                    <Room />
                    <Poster
                        objUrl="/models/poster_1.obj"
                        mtlUrl="/models/poster_1.mtl"
                    />
                    )
                    <Design objPath="/models/design_1.obj" />
                    <Poster
                        objUrl="/models/poster_2.obj"
                        mtlUrl="/models/poster_2.mtl"
                    />
                    <Design objPath="/models/design_2.obj" />
                    <Poster
                        objUrl="/models/poster_3.obj"
                        mtlUrl="/models/poster_3.mtl"
                    />
                    <Design objPath="/models/design_3.obj" />
                    <Poster
                        objUrl="/models/poster_4.obj"
                        mtlUrl="/models/poster_4.mtl"
                    />
                    <Design objPath="/models/design_4.obj" />
                </group>
            </Bounds>
        </>
    );
}
