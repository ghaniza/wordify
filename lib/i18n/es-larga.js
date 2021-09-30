"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpanishLarga = void 0;
exports.SpanishLarga = {
    unitSeparator: ' y ',
    orderSeparator: ' ',
    ignoreHundredsSeparator: true,
    units: {
        0: 'cero',
        1: {
            male: 'uno',
            female: 'una',
            neutral: 'uno'
        },
        2: {
            male: 'dos',
            female: 'dos',
            neutral: 'dos'
        },
        3: "tres",
        4: "cuatro",
        5: "cinco",
        6: "seis",
        7: "siete",
        8: "ocho",
        9: "nueve",
        10: "diez",
        11: "once",
        12: "doce",
        13: "trece",
        14: "catorze",
        15: "quince",
        16: "dieciséis",
        17: "diecisiete",
        18: "dieciocho",
        19: "diecinueve",
        20: "veinte",
        21: "veintiuno",
        22: "veintidós",
        23: "veintitrés",
        24: "veinticuatro",
        25: "veinticinco",
        26: "veintiséis",
        27: "veintisiete",
        28: "veintiocho",
        29: "veintinueve",
    },
    tenths: {
        20: "veinte",
        30: "treinta",
        40: "cuarenta",
        50: "cincuenta",
        60: "sesenta",
        70: "setenta",
        80: "ochenta",
        90: "noventa",
    },
    hundreds: {
        100: "cien",
        200: "doscientos",
        300: "trescientos",
        400: "cuatrocientos",
        500: "quinientos",
        600: "seiscientos",
        700: "setecientos",
        800: "ochocientos",
        900: "novecientos",
    },
    other: [
        {
            exponent: 2,
            all: 'cien'
        },
        {
            exponent: 3,
            all: "mil",
        },
        {
            exponent: 6,
            singular: "millón",
            plural: "millones"
        },
        {
            exponent: 9,
            singular: "billón",
            plural: "billones"
        },
        {
            exponent: 12,
            singular: "trillón",
            plural: "trillones"
        },
        {
            exponent: 15,
            singular: "quatrillón",
            plural: "quadrillones"
        },
        {
            exponent: 18,
            singular: "quintillón",
            plural: "quintillones"
        },
    ],
    exceptions: [
        {
            type: 'post',
            func: function (value) {
                return value
                    .replace(/\buno mil\b/gi, 'mil')
                    .replace(/\buno cien\b/gi, 'ciento');
            }
        }
    ]
};
//# sourceMappingURL=es-larga.js.map