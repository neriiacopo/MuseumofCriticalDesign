import React, { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { MeshPhongMaterial } from "three";
import * as THREE from "three";

export default function Design({ objPath }) {
    // const objRef = useRef();

    // const obj = useLoader(OBJLoader, objPath);

    // // Apply new Phong material color
    // obj.traverse((child) => {
    //     if (child.isMesh) {
    //         child.material = new MeshPhongMaterial({ color: 0xff0000 }); // Set the desired color here
    //     }
    // });

    // return (
    //     <primitive
    //         object={obj}
    //         ref={objRef}
    //     />
    // );

    // const obj = useLoader(OBJLoader, objPath, (loader) => {
    //     const mtlLoader = new MTLLoader();
    //     mtlLoader.load(mtlUrl, (materials) => {
    //         materials.preload();
    //         loader.setMaterials(materials);
    //     });
    // });

    const design = useLoader(OBJLoader, objPath);
    const material = new THREE.MeshNormalMaterial({ color: "#d7d788" });
    design.children[0].material = material;

    return <primitive object={design} />;
}
