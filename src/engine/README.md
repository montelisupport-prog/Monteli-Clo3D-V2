# Cloth engine roadmap

The UI is deliberately decoupled from the solver. `ClothKernel` is the contract for:
- triangulated pattern panels
- XPBD stretch/shear/bend constraints
- seam constraints
- avatar collision
- cloth self-collision
- material calibration

Production path: JS reference solver -> WASM multithreaded solver -> optional WebGPU compute backend. Continuous collision detection and deterministic project replay are required before production-fit claims.
