
export function compareFabricBenchmark(virtual,physical){
 const keys=['warpStretch','weftStretch','biasStretch','bendOverhang','recovery'];
 const errors={};let total=0,n=0;
 for(const k of keys){if(Number.isFinite(+virtual[k])&&Number.isFinite(+physical[k])){const base=Math.max(Math.abs(+physical[k]),1e-6);errors[k]=Math.abs(+virtual[k]-+physical[k])/base;total+=errors[k];n++}}
 return {errors,meanRelativeError:n?total/n:null,validated:n>=4 && total/n<=.1,tests:n};
}
