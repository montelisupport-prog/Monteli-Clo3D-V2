
export function addDart(piece,{apex,legA,legB,intakeCm}){return {...piece,darts:[...(piece.darts||[]),{apex,legA,legB,intakeCm}]}}
export function addPleat(piece,{lineA,lineB,depthCm,type='knife'}){return {...piece,pleats:[...(piece.pleats||[]),{lineA,lineB,depthCm,type}]}}
export function slashSpread(piece,{pivot,angleDeg}){const a=angleDeg*Math.PI/180,c=Math.cos(a),s=Math.sin(a);return {...piece,points:piece.points.map(p=>{if(p.x<pivot.x)return p;const x=p.x-pivot.x,y=p.y-pivot.y;return {...p,x:pivot.x+x*c-y*s,y:pivot.y+x*s+y*c}})}}
