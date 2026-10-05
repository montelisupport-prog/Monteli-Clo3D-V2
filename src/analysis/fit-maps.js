
export function fitMetrics(vertices,rest,contacts=[],fabric={stretchLimit:.15}){
 let strain=0,maxStrain=0;for(let i=0;i<vertices.length;i++){const d=Math.hypot(vertices[i].x-rest[i].x,vertices[i].y-rest[i].y,vertices[i].z-rest[i].z);strain+=d;maxStrain=Math.max(maxStrain,d)}
 const avg=vertices.length?strain/vertices.length:0,pressure=contacts.reduce((a,c)=>a+(c.penetration||0),0)/(contacts.length||1);
 return {strain:avg,maxStrain,pressure,fit:maxStrain>fabric.stretchLimit?'tight':'wearable',stressProxy:avg*(fabric.stiffness||1)}
}
