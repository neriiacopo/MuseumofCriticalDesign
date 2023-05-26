import React from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { useLoader } from "@react-three/fiber";

export default function Poster({ objUrl, mtlUrl }) {
    const obj = useLoader(OBJLoader, objUrl, (loader) => {
        const mtlLoader = new MTLLoader();
        mtlLoader.load(mtlUrl, (materials) => {
            materials.preload();
            loader.setMaterials(materials);
        });
    });

    return <primitive object={obj} />;
}
