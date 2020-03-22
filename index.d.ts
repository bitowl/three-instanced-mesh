/*declare module 'three-instanced-mesh';
namespace THREE {
export class InstancedMesh {

};
}*/
export = index;

declare interface ThreeInstancedMesh extends THREE.Mesh {
  new(geometry: THREE.BufferGeometry, material: THREE.Material, numInstances: number,
    dnymic: boolean,
    colors: boolean,
    uniformScale: boolean): ThreeInstancedMesh;

  setPositionAt(index: number, position: THREE.Vector3): void;
  setQuaternionAt(index: number, quat: THREE.Quaternion): void;
  setScaleAt(index: number, scale: THREE.Vector3): void;
  setColorAt(index: number, color: THREE.Color): void;

  needsUpdate(attribute: 'position' | 'quaternion' | 'scale' | 'colors' | undefined): void;
}

declare function index(THREE: any): ThreeInstancedMesh;
