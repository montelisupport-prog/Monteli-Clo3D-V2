
export const KNITS={
 'Milano':{course:1.00,wale:.72,bend:78,shear:18,recovery:.93},
 'Single Jersey':{course:1.18,wale:.92,bend:34,shear:30,recovery:.86},
 'Interlock':{course:1.08,wale:.88,bend:55,shear:22,recovery:.91},
 '1x1 Rib':{course:1.55,wale:.82,bend:31,shear:34,recovery:.97},
 '2x2 Rib':{course:1.68,wale:.84,bend:29,shear:37,recovery:.96},
 'Double Knit':{course:1.04,wale:.83,bend:68,shear:19,recovery:.94}
};
export function zoneMaterial(base,zone,overrides={}){return {...base,zone,...overrides}}
