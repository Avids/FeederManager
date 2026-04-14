// CSA and ESA Cable Standards and Ampacity Tables

const cableStandards = {
    CSA: {
        "Standards": "Canadian Standards Association",
        "Ampacity": {
            "14 AWG": "15A",
            "12 AWG": "20A",
            "10 AWG": "30A",
            "8 AWG": "40A"
        }
    },
    ESA: {
        "Standards": "Electrical Safety Authority",
        "Ampacity": {
            "14 AWG": "15A",
            "12 AWG": "20A",
            "10 AWG": "30A",
            "8 AWG": "40A"
        }
    }
};

module.exports = cableStandards;