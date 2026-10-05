/* Solver-neutral cloth kernel API. The browser UI can target JS today and a WASM/GPU backend later. */
export const SolverBackend = Object.freeze({JS:'js-xpbd',WASM:'wasm-xpbd',GPU:'webgpu'});
export class ClothKernel {
  constructor({backend=SolverBackend.JS}={}){ this.backend=backend; this.meshes=new Map(); this.constraints=[]; this.colliders=[]; this.running=false; }
  addPanel(id,mesh,material){ this.meshes.set(id,{mesh,material}); }
  addSewingConstraint(a,b,params={}){ this.constraints.push({kind:'sew',a,b,stiffness:params.stiffness??.98}); }
  addCollider(collider){ this.colliders.push(collider); }
  setMaterial(id,physical){ const p=this.meshes.get(id); if(p)p.material={...p.material,...physical}; }
  step(dt){ if(!this.running)return; /* backend implementation hook: XPBD/WASM/WebGPU */ return {dt,backend:this.backend}; }
  start(){this.running=true;} pause(){this.running=false;} reset(){this.running=false;}
}
export const physicalFabricFields = [
  'arealDensityGsm','thicknessMm','warpStretch','weftStretch','biasShear','warpBend','weftBend','friction','damping','compression','recovery'
];
