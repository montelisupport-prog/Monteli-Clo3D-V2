
export function estimateMarker(pieces,fabricWidthCm,gapCm=1){
 const sorted=[...pieces].sort((a,b)=>b.height-a.height);let x=0,y=0,rowH=0,maxY=0;
 const placed=[];for(const p of sorted){if(x+p.width>fabricWidthCm){x=0;y+=rowH+gapCm;rowH=0}placed.push({...p,x,y});x+=p.width+gapCm;rowH=Math.max(rowH,p.height);maxY=Math.max(maxY,y+p.height)}
 const used=pieces.reduce((a,p)=>a+p.width*p.height,0),area=fabricWidthCm*Math.max(maxY,1);return {placed,lengthCm:maxY,utilization:used/area}
}
