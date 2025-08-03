# Lissajous_curve
This project is a web-based interactive simulator that visually demonstrates how two perpendicular sine waves combine to form circles or Lissajous figures. It helps users understand wave superposition, phase difference (theta), and harmonic motion in a visual and interactive way.


🎯 Project Overview
This is an interactive web-based simulator that visualizes how two perpendicular sine waves (X & Y axis) combine to form a circle or Lissajous figure. It’s a physics-math educational tool where users can:

Adjust Theta (phase difference).

Control the Radius (amplitude).

Adjust the animation speed.

Pause/Resume animation.

Trace the path being created.

Click on the moving green dot to see its real-time X, Y, Time values.

✨ Features
Feature	Description
🎚 Theta Slider	Change phase difference between X and Y waves (0° to 360°).
🎚 Radius Slider	Control the amplitude (size) of the resultant figure.
🎚 Speed Control	Adjust how fast the animation plays.
⏸ Pause/Resume	Freeze or resume animation anytime.
🟢 Trace Path	A light green trail shows the figure being formed.
🖱 Click Dot	Click on green dot to display its exact (X, Y, t) values.
➕ Axes & Projections	X/Y axes and projection lines visualize component waves.
📐 Live Math Equations	Displays real-time formulas and values (X(t), Y(t)).

📂 File Structure
bash
Copy
Edit
/project-folder
    |-- index.html        # Main HTML Structure
    |-- style.css         # All Styles for Canvas, Controls, Math Equations
    |-- script.js         # Core JavaScript for Animation & Interactions
    |-- README.md         # Project Description & Documentation
🚀 How to Run
Clone/download this project.

Open index.html in any modern web browser (Chrome, Edge, Firefox).

Adjust sliders and click buttons to interact.

🧮 Mathematical Background
The visualization is based on:

X(t) = R × sin(ωt)

Y(t) = R × sin(ωt + θ)
Where:

R = Radius (Amplitude)

ωt = Angular frequency × Time

θ = Phase difference (Theta)

Combining these two orthogonal sine waves forms Lissajous figures:

θ = 90° → Perfect Circle

θ ≠ 90° → Ellipses or complex Lissajous patterns

🛠️ Next Planned Features
 Clear Trace Button

 Step-by-Step Frame Controls (Next/Prev)

 Auto Animate Theta (Morphing Lissajous Figures)

 Export data points (Time, X, Y) as CSV file

 Vector Addition Visualizer (Component Arrows)

📚 Educational Use-Case
This tool helps understand:

How sine waves add vectorially.

Phase difference effects on resultant figures.

Physics behind Lissajous curves & Oscilloscope patterns.

Visualization of harmonic motion in 2D.

📖 License
Feel free to use and modify this project for educational and personal learning purposes.

🙌 Author
Made with 💡 ChatGPT by Vikash
