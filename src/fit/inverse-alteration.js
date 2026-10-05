
export function proposeAlteration({region,delta3Dcm,measurements}){
 const d=Math.max(-3,Math.min(3,delta3Dcm));
 const map={
  chest:{key:'chestWidth',factor:.5,reason:'3D chest displacement distributed across half-pattern width'},
  waist:{key:'waistWidth',factor:.5,reason:'3D waist displacement distributed across half-pattern width'},
  hem:{key:'hemWidth',factor:.5,reason:'3D hem displacement distributed across half-pattern width'},
  shoulder:{key:'shoulderWidth',factor:1,reason:'Shoulder endpoint alteration'},
  bicep:{key:'bicepWidth',factor:.5,reason:'Sleeve circumference translated to flat width'},
  length:{key:'bodyLength',factor:1,reason:'Vertical hem displacement'}
 };
 const r=map[region];if(!r)return null;
 const from=+measurements[r.key],change=+(d*r.factor).toFixed(1);
 return {region,key:r.key,from,to:+(from+change).toFixed(1),changeCm:change,reason:r.reason,confidence:'prototype'};
}
