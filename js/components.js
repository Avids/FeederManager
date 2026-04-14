// Electrical Component Definitions

class Panel {
    constructor(name, voltage) {
        this.name = name;
        this.voltage = voltage;
    }
}

class Cable {
    constructor(type, length) {
        this.type = type;
        this.length = length;
    }
}

class Breaker {
    constructor(rating) {
        this.rating = rating;
    }
}

class FuseDisconnect {
    constructor(rating, name) {
        this.rating = rating;
        this.name = name;
    }
}

class Transformer {
    constructor(rating, inputVoltage, outputVoltage) {
        this.rating = rating;
        this.inputVoltage = inputVoltage;
        this.outputVoltage = outputVoltage;
    }
}