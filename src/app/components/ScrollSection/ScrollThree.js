"use client"
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Html } from '@react-three/drei';
import Spline from '@splinetool/react-spline';

export default function ScrollThree() {
  return (
    <Spline scene="https://prod.spline.design/ShnmOlaePhgL49pm/scene.splinecode" />
  );
}