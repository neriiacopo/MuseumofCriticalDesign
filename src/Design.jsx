import React, { useEffect, useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export default function Design({ objPath }) {
    const design = useLoader(OBJLoader, objPath);
    const material = new THREE.MeshNormalMaterial({});
    design.children[0].material = material;

    // Calculate centroid
    const geometry = design.children[0].geometry;
    geometry.computeBoundingBox();
    const centroid = new THREE.Vector3();
    centroid.addVectors(geometry.boundingBox.min, geometry.boundingBox.max);
    centroid.multiplyScalar(0.5);

    // rotate camera effect
    const ref = useRef();
    useFrame((_, delta) => {
        ref.current.position.set(centroid.x, centroid.y, centroid.z);
        ref.current.rotation.y += 0.05;
    });

    return (
        <group ref={ref}>
            <primitive
                object={design}
                position={[-centroid.x, -centroid.y, -centroid.z]}
            />
        </group>
    );
}
