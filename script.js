const canvas = document.getElementById("waveCanvas");
const ctx = canvas.getContext("2d");

const thetaSlider = document.getElementById("thetaSlider");
const radiusSlider = document.getElementById("radiusSlider");
const speedSlider = document.getElementById("speedSlider");
const thetaValue = document.getElementById("thetaValue");
const radiusValue = document.getElementById("radiusValue");
const speedValue = document.getElementById("speedValue");
const pauseButton = document.getElementById("pauseButton");

const xEquation = document.getElementById("xEquation");
const yEquation = document.getElementById("yEquation");
const resultant = document.getElementById("resultant");

let time = 0;
let isPaused = false;
let speed = parseFloat(speedSlider.value);

let tracePoints = []; // Store trace points

speedSlider.addEventListener("input", () => {
    speed = parseFloat(speedSlider.value);
    speedValue.textContent = speed.toFixed(3);
});

thetaSlider.addEventListener("input", () => {
    tracePoints = []; // Clear trace when theta changes
});

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

    const thetaDeg = parseFloat(thetaSlider.value);
    const thetaRad = thetaDeg * Math.PI / 180;
    const radius = parseFloat(radiusSlider.value);

    thetaValue.textContent = `${thetaDeg}\u00b0`;
    radiusValue.textContent = `${radius}`;

    const waveAmplitude = 100;
    const waveFrequency = 0.02;

    // Axes
    ctx.beginPath();
    ctx.strokeStyle = "gray";
    ctx.lineWidth = 1;
    ctx.moveTo(0, centerY);
    ctx.lineTo(canvas.width, centerY);
    ctx.moveTo(centerX, 0);
    ctx.lineTo(centerX, canvas.height);
    ctx.stroke();

    // X-axis sine wave
    ctx.beginPath();
    ctx.strokeStyle = "red";
    for (let x = 0; x < canvas.width; x++) {
        const y = centerY / 2 + waveAmplitude * Math.sin(waveFrequency * x + time);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Y-axis sine wave
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    for (let y = 0; y < canvas.height; y++) {
        const x = centerX / 2 + waveAmplitude * Math.sin(waveFrequency * y + time + thetaRad);
        if (y === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Moving Dot
    const omegaT = time;
    const xDot = centerX + radius * Math.sin(omegaT);
    const yDot = centerY + radius * Math.sin(omegaT + thetaRad);

    // Add current dot to trace points
    tracePoints.push({ x: xDot, y: yDot });

    // Draw Trace
    ctx.beginPath();
    for (let i = 0; i < tracePoints.length; i++) {
        const p = tracePoints[i];
        ctx.fillStyle = "rgba(0, 255, 0, 0.3)";
        ctx.fillRect(p.x - 1, p.y - 1, 2, 2);
    }

    // Moving Dot
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

    // Circle Path
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1.5;
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.stroke();

    // Update Math Formulas
    const X_val = (radius * Math.sin(omegaT)).toFixed(2);
    const Y_val = (radius * Math.sin(omegaT + thetaRad)).toFixed(2);

    xEquation.innerHTML = `X(t) = ${radius} \u00d7 sin(\u03c9t) = <strong>${X_val}</strong>`;
    yEquation.innerHTML = `Y(t) = ${radius} \u00d7 sin(\u03c9t + ${thetaDeg}\u00b0) = <strong>${Y_val}</strong>`;
    resultant.innerHTML = `Current Position \u2192 (<strong>${X_val}</strong>, <strong>${Y_val}</strong>)`;

    time += speed;
    requestAnimationFrame(draw);
}

draw();
