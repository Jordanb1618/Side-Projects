
function generatePassword(length, includeLower, includeUpper, includeNum, includeSymbols){
    const lowercaseChars = 'qwertyuiopasdfghjklzxcvbnm'
    const uppercaseChars = 'QWERTYUIOPASDFGHJKLZXCVBNM'
    const numberChars = '1234567890'
    const symbolChars = '!@#$%&()_-=+'

    let allowedChars = "";
    let password = "";

    allowedChars += includeLower ? lowercaseChars : "";
    allowedChars += includeUpper ? uppercaseChars : "";
    allowedChars += includeNum ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if (length <= 0){
        return `Must be at least one`;
    }
    if (allowedChars.length === 0){
        return `AT least one set a characters needs to be selected`;
    }
    for (i = 0 ; i < passwordLen; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}



const passwordLen = 12;
const includeLower = true;
const includeUpper = true;
const includeNum = true;
const includeSymbols = true;

const password = generatePassword(passwordLen, includeLower, includeUpper, includeNum, includeSymbols);

console.log(`Generated password: ${password}`);