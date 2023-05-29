import {
    OrbitControls,
    OrthographicCamera,
    Bounds,
    useBounds,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Suspense } from "react";

import Room from "./Room.jsx";
import Poster from "./Poster.jsx";
import Design from "./Design.jsx";
import * as THREE from "three";

export default function Scene() {
    const cameraRef = useRef();
    const orbitRef = useRef();

    const paths = [
        {
            posterObj: "./models/poster_1.obj",
            posterMtl: "./models/poster_1.mtl",
            designObj: "./models/design_1.obj",
        },
        {
            posterObj: "./models/poster_2.obj",
            posterMtl: "./models/poster_2.mtl",
            designObj: "./models/design_2.obj",
        },
        {
            posterObj: "./models/poster_3.obj",
            posterMtl: "./models/poster_3.mtl",
            designObj: "./models/design_3.obj",
        },
        {
            posterObj: "./models/poster_4.obj",
            posterMtl: "./models/poster_4.mtl",
            designObj: "./models/design_4.obj",
        },
    ];

    return (
        <>
            <Suspense>
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
                        enablePan={false}
                    />
                    <ambientLight intensity={0.6} />

                    <group rotation={[0, 4.5, 0]}>
                        <Room />

                        {paths.map(function f(
                            { posterObj, posterMtl, designObj },
                            index
                        ) {
                            return (
                                <group key={index}>
                                    <Poster
                                        objUrl={posterObj}
                                        mtlUrl={posterMtl}
                                    />
                                    <Design objPath={designObj} />
                                </group>
                            );
                        })}
                    </group>
                </Bounds>
            </Suspense>
        </>
    );
}
