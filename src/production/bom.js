
export class BOM{constructor(){this.rows=[]}add(row){this.rows.push({qty:1,unit:'pc',...row});return this}cost(){return this.rows.reduce((a,r)=>a+(+r.qty||0)*(+r.unitCost||0),0)}}
