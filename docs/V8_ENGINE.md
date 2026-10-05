# MONTELI Atelier V8 Engine

This version begins replacing prototype-only behavior with separable engine components.

Implemented:
- adaptive cubic Bézier flattening and curve splitting
- pattern polyline offset/seam allowance operations, edge split, notch and mirror primitives
- WebGPU compute backend that performs GPU particle integration when WebGPU is available
- automatic JS solver fallback
- inverse 3D-fit-to-2D alteration proposal model for chest/waist/hem/shoulder/bicep/length
- measured physical-vs-virtual fabric benchmark with validation threshold
- reusable fabric render profiles
- all V7 precision UX, V6 guided workflow and V5 production systems retained

Important engineering boundary:
The WebGPU backend currently accelerates particle integration. Structural/shear/bending constraints, robust continuous collision detection and self-collision remain on the existing solver path. They must be ported and benchmarked before the GPU backend can replace the full cloth solver.
The inverse-fit system is a constrained alteration proposal system, not a general inverse cloth solver.
