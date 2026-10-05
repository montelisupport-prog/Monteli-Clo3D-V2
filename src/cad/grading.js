
export class GradeRuleSet{
 constructor(base='M',sizes=['XS','S','M','L','XL','XXL']){this.base=base;this.sizes=sizes;this.rules={}}
 set(pointId,size,dx,dy){this.rules[pointId]??={};this.rules[pointId][size]={dx,dy};return this}
 apply(piece,size){return {...piece,points:piece.points.map(p=>{const r=this.rules[p.id]?.[size]||{dx:0,dy:0};return {...p,x:p.x+r.dx,y:p.y+r.dy}})}}
}
export function nestGrades(piece,ruleSet){return ruleSet.sizes.map(size=>({size,piece:ruleSet.apply(piece,size)}))}
