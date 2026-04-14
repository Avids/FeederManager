class TransformerAnalyzer {
    constructor(primaryKVA, primaryVoltage, secondaryKVA, secondaryVoltage, actualLoad) {
        this.primaryKVA = primaryKVA;
        this.primaryVoltage = primaryVoltage;
        this.secondaryKVA = secondaryKVA;
        this.secondaryVoltage = secondaryVoltage;
        this.actualLoad = actualLoad;
        this.complianceReport = '';
        this.compliantRules = [];
    }

    calculatePrimaryFLA() {
        const primaryFLA = this.primaryKVA * 1000 / (this.primaryVoltage * (this.primaryVoltage > 0 ? 1.732 : 1));
        return primaryFLA;
    }

    applyRule26254() {
        const primaryFLA = this.calculatePrimaryFLA();
        const maxOCP = primaryFLA * 1.25;
        // Assuming some standard breaker sizes for demonstration.
        const standardBreakerSizes = [15, 20, 30, 40, 50, 60, 70, 80, 90, 100, 125, 150, 175, 200];
        const compliantBreaker = standardBreakerSizes.find(size => size >= maxOCP);
        if(compliantBreaker) {
            this.complianceReport += 'Rule 26-254: Compliant with max OCP of ' + maxOCP.toFixed(2) + ' and breaker size ' + compliantBreaker + '\n';
            this.compliantRules.push('Rule 26-254');
        } else {
            this.complianceReport += 'Rule 26-254: Not compliant.\n';
        }
    }

    calculateSecondaryFLA() {
        const secondaryFLA = this.secondaryKVA * 1000 / (this.secondaryVoltage * (this.secondaryVoltage > 0 ? 1.732 : 1));
        return secondaryFLA;
    }

    applyRule26256() {
        const secondaryFLA = this.calculateSecondaryFLA();
        const minAmpacity = secondaryFLA * 1.25;
        // Assuming standard conductor sizes for ampacity for demonstration.
        const standardAmpacitySizes = [10, 15, 20, 25, 30, 40, 50, 60, 70, 80];
        const compliantAmpacity = standardAmpacitySizes.find(size => size >= minAmpacity);
        if(compliantAmpacity) {
            this.complianceReport += 'Rule 26-256: Compliant with min ampacity of ' + minAmpacity.toFixed(2) + ' and conductor size ' + compliantAmpacity + '\n';
            this.compliantRules.push('Rule 26-256');
        } else {
            this.complianceReport += 'Rule 26-256: Not compliant.\n';
        }
    }

    applyRule8104() {
        const primaryFLA = this.calculatePrimaryFLA();
        if(this.actualLoad <= primaryFLA) {
            this.complianceReport += 'Rule 8-104: Transformer sizing is compliant. Actual load is within limits.\n';
            this.compliantRules.push('Rule 8-104');
        } else {
            this.complianceReport += 'Rule 8-104: Not compliant. Actual load exceeds transformer capacity.\n';
        }
    }

    generateReport() {
        this.applyRule26254();
        this.applyRule26256();
        this.applyRule8104();
        this.complianceReport += 'Summary of compliance: ' + this.compliantRules.join(', ') + '\n';
    }

    printReport() {
        console.log(this.complianceReport);
    }
}

// Example usage:
// const analyzer = new TransformerAnalyzer(75, 480, 50, 240, 60);
// analyzer.generateReport();
// analyzer.printReport();