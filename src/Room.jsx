import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import * as THREE from "three";

export default function Room() {
    const room = useLoader(OBJLoader, "/models/basemodel.obj");
    const material = new THREE.MeshNormalMaterial({ color: "#d7d788" });
    room.children[0].material = material;

    return (
        <>
            <primitive object={room} />
        </>
    );
}
