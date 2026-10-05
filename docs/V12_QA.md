# V14 QA

The V14 release was checked for inline JavaScript syntax, existing module syntax, duplicate DOM IDs, and required controls/wiring for side-by-side 2D/3D rendering, avatar presets and camera buttons, keyboard editing, measurement-driven drafting, assembly, and activity guidance.

The app's local HTTP server could not start in the sandbox, and no local Chromium binary was available, so a live browser interaction pass was not possible here. Startup and assembly states are surfaced in Activity with actionable status text. The avatar and cloth rendering changes have therefore had static checks only in this environment.
