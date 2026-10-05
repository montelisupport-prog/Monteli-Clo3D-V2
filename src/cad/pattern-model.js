export class PatternPiece {
  constructor({id,name,points=[],cut=1,mirror=false,grainline=null}){
    this.id=id; this.name=name; this.points=points; this.cut=cut; this.mirror=mirror; this.grainline=grainline;
    this.internalLines=[]; this.notches=[]; this.seamAllowance=1; this.materialZone='shell';
  }
  addPoint(x,y,curve={type:'line'}){ this.points.push({x,y,curve}); return this; }
  addNotch(edgeIndex,t=.5,type='single'){ this.notches.push({edgeIndex,t,type}); return this; }
}
export class SewingRelationship {
  constructor({id,a,b,type='stitch',strength=1}){ this.id=id; this.a=a; this.b=b; this.type=type; this.strength=strength; this.enabled=true; }
}
export function cmToMeters(v){ return v/100; }
export function polygonArea(points){
  let a=0; for(let i=0;i<points.length;i++){const p=points[i],q=points[(i+1)%points.length];a+=p.x*q.y-q.x*p.y;} return Math.abs(a)/2;
}
