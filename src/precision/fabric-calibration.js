export function gsmFromSwatch({widthCm,heightCm,weightG}){return weightG/((widthCm/100)*(heightCm/100));}
export function calibration({warp,weft,bias,bend,recovery,friction}){return {warpStretch:warp,weftStretch:weft,shear:bias,bending:bend,recovery,friction,measured:true};}
