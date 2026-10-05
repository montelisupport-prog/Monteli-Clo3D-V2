# CLO3D video workflow reference

Reference: [Clo3d Crash Course - Learn in 1 hour - Beginners Tutorial](https://www.youtube.com/watch?v=lp1nluxiaDg), Stephy Fung. Chapters reviewed:

- 6:54 preset T-shirt; 8:42 draft a T-shirt from scratch
- 15:16 sewing; 17:21 particle distance and mesh; 20:01 sleeves
- 26:22 texture; 27:23 thickness; 29:11 physical properties
- 31:33 internal lines and patches; 35:02 graphics; 37:31 avatar editing
- 38:22 zippers; 40:38 buttons; 42:17 topstitch; 46:19 UVs; 51:00 animation

## Implications
The base workflow is pattern drafting, matching and sewing edges, mesh refinement, then fabric and avatar testing. Details and animation come after the base garment assembles and fits. V12 currently has measurement-linked 2D outlines and an unrelated generic 3D proxy; its thread animation does not sew pattern edges.

## Engineering order
1. Garment-specific drafting from flat-lay measurements.
2. Pattern-edge identities, lengths, orientation, seam allowance and visible matched pairs.
3. Panel assembly with unmatched and length-mismatch diagnostics.
4. Panel triangulation, mesh resolution and swatch-measured fabric properties.
5. Avatar measurements, collision and pose testing.
6. Texture, thickness, artwork, trims, fasteners, topstitch, rendering and export validation.

Do not describe the current 3D proxy as a simulated garment until pattern panels, seam pairs and a cloth solver work together and are checked against physical samples.
