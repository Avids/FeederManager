// calculations.js

/**
 * Calculate Voltage Drop
 * @param {number} current - The current in amperes
 * @param {number} resistance - The resistance in ohms
 * @param {number} length - The length of the cable in meters
 * @returns {number} - The voltage drop in volts
 */
function calculateVoltageDrop(current, resistance, length) {
    return current * resistance * length;
}

/**
 * Calculate Cable Sizing
 * @param {number} current - The current in amperes
 * @param {number} length - The length of the cable in meters
 * @param {number} voltageDrop - The allowable voltage drop in volts
 * @returns {string} - The recommended cable size
 */
function calculateCableSizing(current, length, voltageDrop) {
    // Dummy implementation, replace with real calculation logic
    // Assume a simplistic approach where every 10 Amps requires 1 mm² of cable
    const requiredSize = Math.ceil(current / 10);
    return `${requiredSize} mm²`;
}

// Export functions for use in other modules
module.exports = { calculateVoltageDrop, calculateCableSizing };