
export const FABRIC_RENDER_PROFILES={
 'Milano knit':{roughness:.86,sheen:.22,normalScale:.16,fuzz:.20,anisotropy:.08},
 'Jersey knit':{roughness:.82,sheen:.12,normalScale:.22,fuzz:.10,anisotropy:.04},
 'Cashmere blend':{roughness:.92,sheen:.30,normalScale:.12,fuzz:.42,anisotropy:.06},
 'Woven':{roughness:.76,sheen:.08,normalScale:.18,fuzz:.05,anisotropy:.12}
};
export function applyFabricProfile(material,profile){if(!material||!profile)return;for(const k of ['roughness','sheen','anisotropy'])if(k in material&&k in profile)material[k]=profile[k];material.needsUpdate=true}
