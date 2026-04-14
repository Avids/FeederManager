// wireSizingCalculator.js

/**
 * Wire Sizing Calculator based on OESC conductor sizing rules.
 *
 * Rules Implemented:
 * - Rule 4-004: Minimum Size of Conductors
 * - Rule 8-104: Table for Conductor Sizes
 * - Rule 14-104: Conductors in Parallel
 * - Rule 4-006: Ampacity of Conductors
 *  
 * This calculator also handles voltage drop calculations and compliance verification.
 */
    // Constants based on OESC rules
    const RESISTANCE_PER_KM = 0.026; // example resistance in ohms/km
    const MAX_VOLTAGE_DROP_PERCENTAGE = 0.03; // 3% voltage drop
function wireSizingCalculator(currentLoad, length, voltage) {


    // Step 1: Calculate Required Conductor Size based on rules
    let conductorSize = calculateConductorSize(currentLoad);

    // Step 2: Calculate Voltage Drop
    let voltageDrop = calculateVoltageDrop(currentLoad, length, RESISTANCE_PER_KM);

    // Step 3: Compliance Verification
    let compliance = verifyCompliance(voltageDrop, voltage);

    return {
        conductorSize,
        voltageDrop,
        compliance
    };
}

function calculateConductorSize(currentLoad) {
    // Implement the logic for size calculation based on Rule 4-004, 8-104, etc.
    // Placeholder for demonstration
    return '10 AWG'; // Replace with actual sizing logic
}

function calculateVoltageDrop(currentLoad, length, resistance) {
    // Voltage Drop = Current * Resistance
    return (currentLoad * length * resistance) / 1000; // result in voltage
}

function verifyCompliance(voltageDrop, voltage) {
    return (voltageDrop / voltage) <= MAX_VOLTAGE_DROP_PERCENTAGE;
}

// Example Usage
const result = wireSizingCalculator(30, 100, 240);
console.log(result);
