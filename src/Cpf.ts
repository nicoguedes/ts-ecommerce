// @ts-nocheck

const removeSpecialCharacters = (text) => {
    return text.replace(/[^\w\s]/gi, "");
}

const getVerificationDigit = (cpfText) => {
    let d1, d2, dg1, dg2, rest, digito;
    d1 = d2 = 0;
    dg1 = dg2 = rest = 0;

    for (let nCount = 1; nCount < cpfText.length - 1; nCount++) {
        digito = parseInt(cpfText.substring(nCount - 1, nCount));
        d1 = d1 + (11 - nCount) * digito;
        d2 = d2 + (12 - nCount) * digito;
    };

    rest = (d1 % 11);
    dg1 = (rest < 2) ? dg1 = 0 : 11 - rest;
    d2 += 2 * dg1;
    rest = (d2 % 11);
    if (rest < 2)
        dg2 = 0;
    else
        dg2 = 11 - rest;

    return `${dg1}${dg2}`;
}

const validateVerificationDigit = (cpfText, digitResult) => {
    let nDigVerific = cpfText.substring(cpfText.length - 2, cpfText.length);
    return nDigVerific == digitResult;
}

export function validate(cpfText) {
    if (!cpfText || cpfText.length < 11 || cpfText.length > 14)
        return false;
    cpfText = removeSpecialCharacters(cpfText);
    if (cpfText.split("").every(c => c === cpfText[0])) return false;
    try {
        const verificationDigit = getVerificationDigit(cpfText);
        return validateVerificationDigit(cpfText, verificationDigit);
    }
    catch (e) {
        console.error("Erro !" + e);
        return false;
    }
}