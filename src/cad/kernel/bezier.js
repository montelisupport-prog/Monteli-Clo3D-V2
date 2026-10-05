
export const lerp=(a,b,t)=>({x:a.x+(b.x-a.x)*t,y:a.y+(b.y-a.y)*t});
export function cubic(p0,p1,p2,p3,t){
 const a=lerp(p0,p1,t),b=lerp(p1,p2,t),c=lerp(p2,p3,t);
 const d=lerp(a,b,t),e=lerp(b,c,t); return lerp(d,e,t);
}
export function splitCubic(p0,p1,p2,p3,t=.5){
 const a=lerp(p0,p1,t),b=lerp(p1,p2,t),c=lerp(p2,p3,t),d=lerp(a,b,t),e=lerp(b,c,t),m=lerp(d,e,t);
 return [[p0,a,d,m],[m,e,c,p3]];
}
function distPointLine(p,a,b){const dx=b.x-a.x,dy=b.y-a.y,l=dx*dx+dy*dy||1,t=Math.max(0,Math.min(1,((p.x-a.x)*dx+(p.y-a.y)*dy)/l));return Math.hypot(p.x-(a.x+t*dx),p.y-(a.y+t*dy))}
export function flattenCubic(curve,tol=.08,out=[]){
 const [p0,p1,p2,p3]=curve,flat=Math.max(distPointLine(p1,p0,p3),distPointLine(p2,p0,p3));
 if(flat<=tol){if(!out.length)out.push(p0);out.push(p3);return out}
 const [a,b]=splitCubic(...curve,.5);flattenCubic(a,tol,out);out.pop();flattenCubic(b,tol,out);return out;
}
export function polylineLength(pts){let n=0;for(let i=1;i<pts.length;i++)n+=Math.hypot(pts[i].x-pts[i-1].x,pts[i].y-pts[i-1].y);return n}
export function offsetPolyline(pts,d){
 return pts.map((p,i)=>{const a=pts[Math.max(0,i-1)],b=pts[Math.min(pts.length-1,i+1)],dx=b.x-a.x,dy=b.y-a.y,l=Math.hypot(dx,dy)||1;return {x:p.x-dy/l*d,y:p.y+dx/l*d}})
}
export function nearestOnPolyline(pts,p){let best={distance:Infinity,index:0,t:0,point:pts[0]};for(let i=0;i<pts.length-1;i++){const a=pts[i],b=pts[i+1],dx=b.x-a.x,dy=b.y-a.y,l=dx*dx+dy*dy||1,t=Math.max(0,Math.min(1,((p.x-a.x)*dx+(p.y-a.y)*dy)/l)),q={x:a.x+t*dx,y:a.y+t*dy},d=Math.hypot(p.x-q.x,p.y-q.y);if(d<best.distance)best={distance:d,index:i,t,point:q}}return best}
