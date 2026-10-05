
export function avatarFromMeasurements(m){return {heightCm:+m.height,chestCm:+m.chest,waistCm:+m.waist,hipCm:+m.hip,shoulderCm:+m.shoulder,neckCm:+m.neck||0,armCm:+m.arm||0,shoulderSlopeDeg:+m.shoulderSlope||0,posture:+m.posture||0,collision:'segmented-capsule-ellipsoid'}}
export const POSES={relaxed:{arms:12,elbow:8,lean:0},tpose:{arms:90,elbow:0,lean:0},reach:{arms:105,elbow:18,lean:4},sit:{arms:18,elbow:35,lean:8},walk:{arms:25,elbow:10,lean:2}}
