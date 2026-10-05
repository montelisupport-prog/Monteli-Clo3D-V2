
export class WebGPUClothBackend{
 constructor(){this.device=null;this.ready=false;this.pipeline=null;this.buffers={};this.particleCount=0}
 static supported(){return typeof navigator!=='undefined' && !!navigator.gpu}
 async init(){
  if(!WebGPUClothBackend.supported())throw new Error('WebGPU unavailable');
  const adapter=await navigator.gpu.requestAdapter({powerPreference:'high-performance'});
  if(!adapter)throw new Error('No WebGPU adapter');
  this.device=await adapter.requestDevice();
  const shader=this.device.createShaderModule({code:`
struct Particle { pos: vec4<f32>, prev: vec4<f32> };
struct Params { dt:f32, gravity:f32, damping:f32, count:u32 };
@group(0) @binding(0) var<storage,read_write> particles:array<Particle>;
@group(0) @binding(1) var<uniform> params:Params;
@compute @workgroup_size(128)
fn main(@builtin(global_invocation_id) id:vec3<u32>){
 let i=id.x;if(i>=params.count){return;}
 var p=particles[i]; if(p.pos.w>0.5){return;}
 let vel=(p.pos.xyz-p.prev.xyz)*params.damping;
 let old=p.pos.xyz;
 p.pos=vec4<f32>(old+vel+vec3<f32>(0.0,params.gravity*params.dt*params.dt,0.0),p.pos.w);
 p.prev=vec4<f32>(old,p.prev.w); particles[i]=p;
}`});
  this.pipeline=this.device.createComputePipeline({layout:'auto',compute:{module:shader,entryPoint:'main'}});
  this.ready=true;return this;
 }
 uploadParticles(floatData){
  this.particleCount=floatData.length/8;
  this.buffers.particles=this.device.createBuffer({size:floatData.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});
  this.device.queue.writeBuffer(this.buffers.particles,0,floatData);
  this.buffers.params=this.device.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});
  this.bind=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.buffers.particles}},{binding:1,resource:{buffer:this.buffers.params}}]});
 }
 step({dt=1/60,gravity=-9.81,damping=.985}={}){
  if(!this.ready||!this.bind)return;
  const ab=new ArrayBuffer(16),dv=new DataView(ab);dv.setFloat32(0,dt,true);dv.setFloat32(4,gravity,true);dv.setFloat32(8,damping,true);dv.setUint32(12,this.particleCount,true);this.device.queue.writeBuffer(this.buffers.params,0,ab);
  const enc=this.device.createCommandEncoder(),pass=enc.beginComputePass();pass.setPipeline(this.pipeline);pass.setBindGroup(0,this.bind);pass.dispatchWorkgroups(Math.ceil(this.particleCount/128));pass.end();this.device.queue.submit([enc.finish()]);
 }
}
