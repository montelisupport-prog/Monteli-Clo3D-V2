# MONTELI Atelier Studio V4 architecture

## Goal
Move from a single-file configurator to a real garment-CAD application while keeping the existing V3 interface usable during migration.

## Layers
1. **CAD** — parametric 2D pattern pieces, curves, notches, seam allowance, grainline, grading.
2. **Assembly** — explicit edge-to-edge sewing relationships and seam validation.
3. **Simulation** — solver-neutral cloth kernel; JS reference first, WASM/GPU backends next.
4. **Avatar** — measurements, pose skeleton, collision primitives/mesh.
5. **Materials** — measured physical swatch profiles separated from visual PBR materials.
6. **Analysis** — strain, stress, pressure, ease and collision diagnostics.
7. **Project/Export** — versioned .monteli JSON project, SVG/DXF-ready pattern representation, tech-spec export.

## Accuracy gate
The app must not call a fabric profile production-validated until a real swatch has measured weight, thickness, stretch/shear, bend and friction data and a physical garment sample has been compared with the digital result.


## V5 product systems
V5 adds CAD editing, parametric redrafting, sewing diagnostics, materials/knits, avatar/fit engineering, physical calibration, rendering controls, construction layers, trims, artwork techniques, grading, validation, production packaging, interchange, versioning, sampling, and controlled AI pattern changes.
