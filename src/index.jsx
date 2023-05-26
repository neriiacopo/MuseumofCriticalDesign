import ReactDOM from "react-dom/client";
import React, { StrictMode, Suspense } from "react";
import Scene from "./Scene.jsx";
import { Canvas } from "@react-three/fiber";
const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
    <>
        <Canvas
            gl={{
                alpha: true,
                antialias: true,
            }}
        >
            <Scene />
        </Canvas>
    </>
);
