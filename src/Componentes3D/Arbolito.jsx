/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ./public/Modelos3D/Arbolito.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Arbol(props) {
  const { nodes, materials } = useGLTF('./Modelos3D/Arbolito.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.group1620243302.geometry} material={materials.mat11} />
      <mesh geometry={nodes.group210757748.geometry} material={materials.mat11} />
      <mesh geometry={nodes.group1123699727.geometry} material={materials.mat11} />
      <mesh geometry={nodes.group1806331986.geometry} material={materials.mat20} />
      <mesh geometry={nodes.group1180046920.geometry} material={materials.mat11} />
      <mesh geometry={nodes.group2073524885.geometry} material={materials.mat11} />
      <mesh geometry={nodes.group109289143.geometry} material={materials.mat11} />
      <mesh geometry={nodes.group1622083029.geometry} material={materials.mat11} />
      <mesh geometry={nodes.group987925662.geometry} material={materials.mat11} />
      <mesh geometry={nodes.group1187125581.geometry} material={materials.mat11} />
      <mesh geometry={nodes.group1251244104.geometry} material={materials.mat11} />
      <mesh geometry={nodes.group504213433.geometry} material={materials.mat11} />
      <mesh geometry={nodes.group1231135656.geometry} material={materials.mat11} />
      <mesh geometry={nodes.group1023453669.geometry} material={materials.mat11} />
      <mesh geometry={nodes.group1926080183.geometry} material={materials.mat20} />
      <mesh geometry={nodes.group283251858.geometry} material={materials.mat20} />
      <mesh geometry={nodes.group289453191.geometry} material={materials.mat20} />
      <mesh geometry={nodes.group1778507930.geometry} material={materials.mat11} />
      <mesh geometry={nodes.group2077936539.geometry} material={materials.mat20} />
      <mesh geometry={nodes.group445661304.geometry} material={materials.mat20} />
      <mesh geometry={nodes.group32141848.geometry} material={materials.mat20} />
      <mesh geometry={nodes.group1086463980.geometry} material={materials.mat20} />
      <mesh geometry={nodes.group545397719.geometry} material={materials.mat20} />
      <mesh geometry={nodes.group830127808.geometry} material={materials.mat20} />
      <mesh geometry={nodes.group739050560.geometry} material={materials.mat20} />
      <mesh geometry={nodes.group1643052579.geometry} material={materials.mat20} />
      <mesh geometry={nodes.group2096790074.geometry} material={materials.mat20} />
    </group>
  )
}

useGLTF.preload('./Modelos3D/Arbolito.glb')
