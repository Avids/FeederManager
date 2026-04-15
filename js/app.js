// Browser entrypoint for the FeederManager canvas UI.

(function initFeederManager() {
    const toolbox = document.getElementById('components-list');
    const canvasHost = document.getElementById('canvas');

    if (!toolbox || !canvasHost) {
        console.error('FeederManager failed to initialize: missing required DOM nodes.');
        return;
    }

    const hasKonva = typeof window.Konva !== 'undefined';
    const componentTypes = [
        {
            id: 'panel',
            name: 'Panel',
            create() {
                return new window.Konva.Rect({
                    x: 60,
                    y: 60,
                    width: 180,
                    height: 90,
                    fill: '#2563eb',
                    cornerRadius: 8,
                    shadowColor: 'black',
                    shadowBlur: 8,
                    shadowOpacity: 0.15,
                    draggable: true
                });
            }
        },
        {
            id: 'transformer',
            name: 'Transformer',
            create() {
                return new window.Konva.Circle({
                    x: 160,
                    y: 160,
                    radius: 50,
                    fill: '#16a34a',
                    shadowColor: 'black',
                    shadowBlur: 8,
                    shadowOpacity: 0.15,
                    draggable: true
                });
            }
        },
        {
            id: 'breaker',
            name: 'Breaker',
            create() {
                return new window.Konva.Rect({
                    x: 280,
                    y: 80,
                    width: 130,
                    height: 60,
                    fill: '#f59e0b',
                    cornerRadius: 6,
                    shadowColor: 'black',
                    shadowBlur: 8,
                    shadowOpacity: 0.15,
                    draggable: true
                });
            }
        }
    ];

    if (!hasKonva) {
        const warning = document.createElement('p');
        warning.textContent = 'Canvas engine failed to load (Konva unavailable).';
        warning.className = 'error';
        canvasHost.appendChild(warning);
        return;
    }

    const width = Math.max(canvasHost.clientWidth || 900, 900);
    const height = Math.max(canvasHost.clientHeight || 520, 520);

    const stage = new window.Konva.Stage({
        container: 'canvas',
        width,
        height
    });

    const layer = new window.Konva.Layer();
    stage.add(layer);

    const addLabel = (shape, labelText) => {
        const group = new window.Konva.Group({ draggable: true });
        group.add(shape);

        const shapeBounds = shape.getClientRect();
        const label = new window.Konva.Text({
            x: shapeBounds.x,
            y: shapeBounds.y + shapeBounds.height + 8,
            text: labelText,
            fontSize: 14,
            fontFamily: 'Arial',
            fill: '#111827'
        });
        group.add(label);
        return group;
    };

    const addComponent = (component) => {
        const element = addLabel(component.create(), component.name);
        layer.add(element);
        layer.draw();
    };

    componentTypes.forEach((component) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'component-button';
        button.textContent = `Add ${component.name}`;
        button.addEventListener('click', () => addComponent(component));
        toolbox.appendChild(button);
    });

    const resetButton = document.createElement('button');
    resetButton.type = 'button';
    resetButton.className = 'component-button secondary';
    resetButton.textContent = 'Clear Canvas';
    resetButton.addEventListener('click', () => {
        layer.destroyChildren();
        layer.draw();
    });
    toolbox.appendChild(resetButton);
})();
