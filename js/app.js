// Main application logic for FeederManager

class FeederManager {
    constructor() {
        this.feeders = [];
    }

    addFeeder(feeder) {
        this.feeders.push(feeder);
    }

    getFeeders() {
        return this.feeders;
    }

    feedAll() {
        this.feeders.forEach(feeder => {
            feeder.feed();
        });
    }
}

// Example usage:
const feederManager = new FeederManager();

class Feeder {
    constructor(name) {
        this.name = name;
    }

    feed() {
        console.log(`${this.name} is being fed.`);
    }
}

feederManager.addFeeder(new Feeder('Feeder 1'));
feederManager.addFeeder(new Feeder('Feeder 2'));
feederManager.feedAll();