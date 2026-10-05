export class GarmentDNA{constructor(data){Object.assign(this,data)} apply(project){return {...project,measurements:{...project.measurements,...this.measurements},houseRules:{...this.rules}}}}
