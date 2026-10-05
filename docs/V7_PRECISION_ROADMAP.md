# V7 Precision Engine

V7 adds the product-level precision layer: universal undo/redo, autosave/project names, command palette, contextual menus, ruler/smart-workspace cues, visual construction assistant, guided swatch protocol, Garment DNA blocks, precision drafting relationships, and tighter 2D↔3D update signaling.

## Engineering gates still requiring native/high-performance work
- WASM/WebGPU cloth backend with continuous collision detection and production-scale particle counts.
- Full anatomically generated avatar mesh rather than the current parametric collision mannequin.
- True inverse 3D-to-2D pattern alteration from arbitrary cloth pinches.
- CAD-grade Bézier kernel with robust boolean/cut/join/offset operations.
- Physically validated fabric models against controlled lab/physical samples.
- Full fiber-level render pipeline / HDR / offline-quality render mode.

These are deliberately not labeled production-validated until benchmarked.
