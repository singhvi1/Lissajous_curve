🎨 Lissajous Curve Visualizer — Full Interactive Web Tool

A Lissajous Curve Visualizer built with HTML, CSS, and JavaScript that lets you visualize how two sine waves combine in orthogonal directions to form intricate patterns. This project simulates the physical behavior of oscilloscopes and wave superposition using Frequency, Phase (Theta), Amplitude (Radius), and Trace Visualization.

🌐 Live Demo
    🔗 https://github.com/singhvi1/Lissajous_curve/tree/main

🖥️ Features
    🎚️ Independent X Wave and Y Wave Controls:

        Theta (Phase Shift)

        Radius (Amplitude)

        Frequency Multiplier

    🐢 Speed Control to slow down motion.

    🟢 Trace Mark Feature to visualize path formation.

    ⏸️ Pause / Resume Animation.

    🧹 Clear Trace Button to reset path.

    🎯 Preset Pattern Buttons (like 2:1, 3:2, etc.).

    🌑 Dark Mode Toggle.

📊 Live Mathematical Equation Display.

    📐 Mathematical Explanation
    Basic Equations:
    The position of a point moving in X and Y directions is defined by:

    cpp
    Copy
    Edit
    X(t) = Rₓ × sin(fₓ × ωt + θₓ)
    Y(t) = Rᵧ × sin(fᵧ × ωt + θᵧ)
    Where:

    Rₓ, Rᵧ → Radius (Amplitude) of oscillation in X and Y.

    fₓ, fᵧ → Frequency multipliers in X and Y.

    θₓ, θᵧ → Phase shift (Theta) in degrees.

    ωt → Angular progression over time (omega × time).

What Happens Visually?
    Two Sine Waves oscillate independently in X and Y directions.

    At each moment t, the combination of X(t) and Y(t) gives a point in 2D space.

    The trace of this point over time forms beautiful patterns:

    If frequencies are equal (1:1) → forms ellipse/circle.

    If frequencies are integer ratios (2:1, 3:2, etc.) → complex loops.

    Phase Difference (Theta) controls the rotation/tilt of the figure.

    Trace marks and projection lines help you visualize wave combination.

    Example Pattern Breakdown:
    Frequency X Frequency Y Theta X Theta Y Result
    1 1 0° 90° Circle
    2 1 0° 0° Horizontal Figure-8
    3 2 0° 0° Complex Lissajous Curve


    The green dot represents the combination of current X(t) & Y(t).

    Projection lines connect X(t) & Y(t) to their sine waves for clarity.

    The trace shows the full path made by these oscillations.

    By adjusting sliders for frequency, phase (theta), and amplitude, you create different Lissajous Figures.

    💡 Learning Objectives
    Visualizing Wave Interference & Superposition.

    Understanding how Phase Differences impact motion.

    How frequency ratios (fₓ : fᵧ) generate Lissajous Figures.

    Simulating an Oscilloscope Lissajous Mode.

✨ Future Ideas
    Export Trace as an Image.

    Animate auto-changing Theta for morphing patterns.

    Advanced Patterns Presets (Golden Ratio, Fibonacci Lissajous).

🤝 Contributing
    Want to improve it? Fork the repo, add enhancements, and raise a PR!

📜 License
    MIT License — Free for personal, educational, and creative use.

👨‍💻 Developed By
    ChatGpt with Vikash_kumar
