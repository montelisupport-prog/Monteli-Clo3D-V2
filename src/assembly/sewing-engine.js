
export class SewingEngine{
 constructor(){this.seams=[]}
 sew(a,b,options={}){const seam={id:crypto.randomUUID?.()||String(Date.now()),a,b,direction:options.direction||1,gatherRatio:options.gatherRatio||1,elastic:options.elastic||0,type:options.type||'standard'};this.seams.push(seam);return seam}
 validate(lengthOf){return this.seams.map(s=>{const A=lengthOf(s.a),B=lengthOf(s.b)*s.gatherRatio,delta=Math.abs(A-B);return {...s,lengthA:A,lengthB:B,deltaCm:delta,status:delta<=.3?'pass':delta<=1?'review':'fail'}})}
}
