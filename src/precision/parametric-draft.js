export function draftRelations(m){return {armholeSleeveRatio:(m.bicepWidth*2.1)/(m.armholeDepth*2.08),shoulderToChest:m.shoulderWidth/m.chestWidth,neckToShoulder:m.neckOpening/m.shoulderWidth};}
export function redraft(m,change){const out={...m,...change};return {measurements:out,relations:draftRelations(out)};}
