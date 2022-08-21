const MAX_DECIMAL = 6

export const toFixedString = (number) => {
    // 0-6 decimal only 
    return String(number).toLocaleString('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: MAX_DECIMAL
    });
};

export const toDisplayFormat = (number) => {
    // 0-6 decimal and comma format
    const commaFormatted = Number(number).toLocaleString('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: MAX_DECIMAL
    });
    return number[number.length - 1] == '.' ? commaFormatted.concat('.') : commaFormatted;
};

