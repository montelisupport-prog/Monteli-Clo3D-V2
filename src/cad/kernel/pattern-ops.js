
import {offsetPolyline,polylineLength} from './bezier.js';
export function mirrorPiece(piece,axisX=0){return {...piece,points:piece.points.map(p=>({...p,x:2*axisX-p.x})).reverse()}}
export function addSeamAllowance(piece,cm){return {...piece,seamAllowanceCm:cm,seamOutline:offsetPolyline(piece.points,cm)}}
export function splitEdge(piece,edgeIndex,t=.5){const pts=piece.points.slice(),a=pts[edgeIndex],b=pts[(edgeIndex+1)%pts.length],p={x:a.x+(b.x-a.x)*t,y:a.y+(b.y-a.y)*t,type:'smooth'};pts.splice(edgeIndex+1,0,p);return {...piece,points:pts}}
export function edgeLength(piece,start,end){const pts=piece.points.slice(start,end+1);return polylineLength(pts)}
export function addNotch(piece,edgeIndex,t=.5,depthCm=.4){return {...piece,notches:[...(piece.notches||[]),{edgeIndex,t,depthCm}]}}
export function grainline(piece,angleDeg=90){return {...piece,grainline:{angleDeg}}}
