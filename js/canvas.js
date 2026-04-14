// js/canvas.js

// Importing Konva library
const Konva = require('konva');

// Create a stage
const stage = new Konva.Stage({
    container: 'container', // id of container <div>
    width: window.innerWidth,
    height: window.innerHeight,
});

// Create a layer
const layer = new Konva.Layer();
stage.add(layer);

// Add shapes to the layer
function addShape(type) {
    let shape;
    if (type === 'rectangle') {
        shape = new Konva.Rect({
            x: stage.width() / 2 - 50,
            y: stage.height() / 2 - 25,
            width: 100,
            height: 50,
            fill: 'red',
            draggable: true,
        });
    } else if (type === 'circle') {
        shape = new Konva.Circle({
            x: stage.width() / 2,
            y: stage.height() / 2,
            radius: 40,
            fill: 'blue',
            draggable: true,
        });
    }
    layer.add(shape);
    layer.draw();
}

// Function to clear the canvas
function clearCanvas() {
    layer.destroyChildren();
    layer.draw();
}

// Event listener for adding shapes
document.getElementById('add-rectangle').addEventListener('click', () => addShape('rectangle'));
document.getElementById('add-circle').addEventListener('click', () => addShape('circle'));
document.getElementById('clear-canvas').addEventListener('click', clearCanvas);

// Adjust the stage on window resize
window.addEventListener('resize', () => {
    stage.width(window.innerWidth);
    stage.height(window.innerHeight);
});
