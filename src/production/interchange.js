export function dxfLine(a,b,layer='PATTERN'){return ['0','LINE','8',layer,'10',a.x,'20',a.y,'30','0','11',b.x,'21',b.y,'31','0'].join('\n');}
