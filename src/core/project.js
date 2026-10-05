export const PROJECT_VERSION = 4;
export function createProject(name='Untitled MONTELI Garment') {
  return {
    schema:'monteli.atelier.project', version:PROJECT_VERSION, name,
    units:'cm', garment:{type:'tshirt', measurements:{}}, avatar:{measurements:{}, pose:{}},
    fabric:{profile:null, measured:false}, patterns:[], seams:[], simulation:{quality:'draft', state:'idle'}, assets:[]
  };
}
export function serializeProject(project){ return JSON.stringify(project,null,2); }
export function validateProject(p){
  const errors=[];
  if(!p || p.schema!=='monteli.atelier.project') errors.push('Invalid project schema');
  if(p?.units!=='cm') errors.push('MONTELI production projects must use centimeters');
  if(!Array.isArray(p?.patterns)) errors.push('Patterns must be an array');
  if(!Array.isArray(p?.seams)) errors.push('Seams must be an array');
  return {ok:errors.length===0,errors};
}
