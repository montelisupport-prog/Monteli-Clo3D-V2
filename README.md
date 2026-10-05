# MONTELI Atelier Studio V5 — 20-System Build

V5 adds all 20 requested capability areas as interactive product modules on top of the V4/V3 simulation foundation.

## Run
```bash
python3 -m http.server 8080
```
Then open `http://localhost:8080`.

## What is interactive now
1. 2D pattern CAD point editing, undo/redo, mirror, seam allowance/notch state
2. Parametric redrafting from flat-lay measurements
3. Sewing edge diagnostics layered on existing seam controls
4. Existing multi-panel XPBD-style cloth simulation, self collision and avatar collision
5. Fabric Lab extensions: recovery/compression
6. Knit-specific physical presets
7. Extended avatar measurements + motion presets
8. Fit engineering recommendations
9. Digital/physical sample measurement calibration + photo reference
10. PBR material controls
11. Construction layer library
12. Reusable MONTELI trims library
13. Artwork technique/relief model
14. XS–XXL grading calculations
15. Manufacturing validation
16. One-click manufacturer export bundle (JSON + POM CSV + BOM CSV + SVG)
17. ASCII DXF draft + AAMA/ASTM interchange manifest
18. Local version history and comparison
19. Manufacturer sample tracking
20. Controlled natural-language Pattern Engineer with preview-before-apply

## Accuracy / production gates
This build does **not** claim CLO-grade or production-validated physics. Three areas are intentionally validation-gated:
- cloth physics: browser XPBD foundation; WASM/WebGPU backend remains an engineering milestone
- PBR rendering: interactive roughness surface control; full fiber/normal/HDR pipeline remains a rendering milestone
- DXF/AAMA/ASTM: ASCII DXF draft + interchange manifest; validate in the receiving production CAD system before manufacturing

A physical sample and measured fabric swatch remain required before calling a digital result production-validated.

## V6 Simple Studio UI
The default interface is now a simplified Illustrator-inspired garment workspace:
- narrow left tool rail
- large central 3D/2D canvas
- contextual properties inspector on the right
- persistent guided workflow at the bottom
- eight guided stages: Garment → Measurements → Fabric → Pattern → Sew → Details → Fit & Drape → Production
- advanced V5 controls remain available behind contextual buttons
- Simple Studio is default; Advanced View remains available from the header

## V7 Precision additions
- universal Cmd/Ctrl-Z and redo for measurement state
- named project autosave + visible save state
- Cmd/Ctrl-K searchable command palette
- contextual right-click menu and keyboard tool shortcuts
- workspace ruler / selection breadcrumb / 2D↔3D sync status
- Visual Construction Assistant for collar, shoulder, body, sleeve and hem intent
- MONTELI Garment DNA reusable house blocks
- guided physical swatch calibration protocol
- parametric draft relationship diagnostics
- onboarding tutorial for a first garment
- precision architecture modules for drafting, DNA and fabric calibration

V7 retains all V6 guided workflow and V5 production modules.

## V8 Engine work
V8 starts the deeper engine work rather than adding surface-level buttons. It adds a real WebGPU compute backend for particle integration with fallback, a reusable CAD geometry kernel, inverse fit alteration proposals, fabric physical-vs-virtual benchmarking, and reusable render profiles. See `docs/V8_ENGINE.md` for the exact implementation boundary.

## V9 Complete Platform
V9 consolidates the remaining garment-development systems into one platform architecture and adds a Platform Center to inspect CAD, simulation, materials, fit, production, sampling/versioning and AI systems. Production-equivalence claims remain validation-gated where appropriate.
