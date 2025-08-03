const canvas = document.getElementById("waveCanvas");
const ctx = canvas.getContext("2d");

// Sliders & Labels
const thetaXSlider = document.getElementById("thetaXSlider");
const thetaYSlider = document.getElementById("thetaYSlider");
const radiusXSlider = document.getElementById("radiusXSlider");
const radiusYSlider = document.getElementById("radiusYSlider");
const freqXSlider = document.getElementById("freqXSlider");
const freqYSlider = document.getElementById("freqYSlider");
const speedSlider = document.getElementById("speedSlider");

const thetaXValue = document.getElementById("thetaXValue");
const thetaYValue = document.getElementById("thetaYValue");
const radiusXValue = document.getElementById("radiusXValue");
const radiusYValue = document.getElementById("radiusYValue");
const freqXValue = document.getElementById("freqXValue");
const freqYValue = document.getElementById("freqYValue");
const speedValue = document.getElementById("speedValue");

const pauseButton = document.getElementById("pauseButton");

const xEquation = document.getElementById("xEquation");
const yEquation = document.getElementById("yEquation");
const resultant = document.getElementById("resultant");

let time = 0;
let isPaused = false;
let speed = parseFloat(speedSlider.value);
let tracePoints = [];

// Slider Listeners
thetaXSlider.addEventListener("input", () => { thetaXValue.textContent = thetaXSlider.value + "°"; tracePoints = []; });
thetaYSlider.addEventListener("input", () => { thetaYValue.textContent = thetaYSlider.value + "°"; tracePoints = []; });
radiusXSlider.addEventListener("input", () => { radiusXValue.textContent = radiusXSlider.value; tracePoints = []; });
radiusYSlider.addEventListener("input", () => { radiusYValue.textContent = radiusYSlider.value; tracePoints = []; });
freqXSlider.addEventListener("input", () => { freqXValue.textContent = freqXSlider.value; tracePoints = []; });
freqYSlider.addEventListener("input", () => { freqYValue.textContent = freqYSlider.value; tracePoints = []; });
speedSlider.addEventListener("input", () => { speed = parseFloat(speedSlider.value); speedValue.textContent = speed.toFixed(3); });

pauseButton.addEventListener("click", () => {
    isPaused = !isPaused;
    pauseButton.textContent = isPaused ? "Resume" : "Pause";
    if (!isPaused) draw();
});

function draw() {
    if (isPaused) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const thetaXDeg = parseFloat(thetaXSlider.value);
    const thetaYDeg = parseFloat(thetaYSlider.value);
    const thetaXRad = thetaXDeg * Math.PI / 180;
    const thetaYRad = thetaYDeg * Math.PI / 180;

    const radiusX = parseFloat(radiusXSlider.value);
    const radiusY = parseFloat(radiusYSlider.value);

    const freqX = parseInt(freqXSlider.value);
    const freqY = parseInt(freqYSlider.value);

    // Axes
    ctx.beginPath();
    ctx.strokeStyle = "gray";
    ctx.lineWidth = 1;
    ctx.moveTo(0, centerY);
    ctx.lineTo(canvas.width, centerY);
    ctx.moveTo(centerX, 0);
    ctx.lineTo(centerX, canvas.height);
    ctx.stroke();

    // Sine Wave X (Red)
    ctx.beginPath();
    ctx.strokeStyle = "red";
    const waveAmplitude = 100;
    const waveFrequency = 0.02;
    for (let x = 0; x < canvas.width; x++) {
        const y = centerY / 2 + waveAmplitude * Math.sin(waveFrequency * x * freqX + time + thetaXRad);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Sine Wave Y (Blue)
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    for (let y = 0; y < canvas.height; y++) {
        const x = centerX / 2 + waveAmplitude * Math.sin(waveFrequency * y * freqY + time + thetaYRad);
        if (y === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Moving Dot
    const omegaT = time;
    const xDot = centerX + radiusX * Math.sin(freqX * omegaT + thetaXRad);
    const yDot = centerY + radiusY * Math.sin(freqY * omegaT + thetaYRad);

    // Trace
    tracePoints.push({ x: xDot, y: yDot });
    ctx.beginPath();
    for (let i = 0; i < tracePoints.length; i++) {
        const p = tracePoints[i];
        ctx.fillStyle = "rgba(0, 255, 0, 0.3)";
        ctx.fillRect(p.x - 1, p.y - 1, 2, 2);
    }

    // Moving Dot (Green)
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.arc(xDot, yDot, 8, 0, 2 * Math.PI);
    ctx.fill();

    // Projection Lines
    ctx.beginPath();
    ctx.strokeStyle = "purple";
    ctx.setLineDash([5, 5]);
    ctx.moveTo(xDot, centerY);
    ctx.lineTo(xDot, yDot);
    ctx.lineTo(centerX, yDot);
    ctx.setLineDash([]);
    ctx.stroke();

    // Update Math Equations
    const X_val = (radiusX * Math.sin(freqX * omegaT + thetaXRad)).toFixed(2);
    const Y_val = (radiusY * Math.sin(freqY * omegaT + thetaYRad)).toFixed(2);

    xEquation.innerHTML = `X(t) = ${radiusX} × sin(${freqX}ωt + ${thetaXDeg}°) = <strong>${X_val}</strong>`;
    yEquation.innerHTML = `Y(t) = ${radiusY} × sin(${freqY}ωt + ${thetaYDeg}°) = <strong>${Y_val}</strong>`;
    resultant.innerHTML = `Current Position → (<strong>${X_val}</strong>, <strong>${Y_val}</strong>)`;

    time += speed;
    requestAnimationFrame(draw);
}

draw();
