'use strict';

const StringManager = require('./index');
const strManager = new StringManager();

function errorColor(str) {
    return '\x1b[31m' + str + ' \x1b[0m';
}

function titleColor(str) {
    return '\x1b[35m' + str + ' \x1b[0m';
}

function descriptionColor(str) {
    return '\x1b[36m' + str + ' \x1b[0m';
}

try {
    strManager.string = 'Hello World!';
    // StringManager#toString
    console.log(titleColor('StringManager#toString :'), strManager.toString());

    strManager.string = 'Hello World!';
    // StringManager#formatUppercase
    strManager.formatUppercase();
    console.log(titleColor('StringManager#formatUppercase :'), strManager.toString());
    

    strManager.string = 'Hello World!';
    // StringManager#formatLowercase
    strManager.formatLowercase();
    console.log(titleColor('StringManager#formatLowercase :'), strManager.toString());

    strManager.string = 'Hello World!';
    // StringManager#formatCapitalize
    strManager.formatPascalCase();
    console.log(titleColor('StringManager#formatPascalCase :'), strManager.toString());

    strManager.string = 'Hello World!';
    // StringManager#formatCamelCase
    strManager.formatCamelCase();
    console.log(titleColor('StringManager#formatCamelCase :'), strManager.toString());

    strManager.string = 'Hello World!';
    // StringManager#formatSnakeCase
    strManager.formatSnakeCase();
    console.log(titleColor('StringManager#formatSnakeCase :'), strManager.toString());

    strManager.string = 'Hello World!';
    // StringManager#formatCapitalize
    strManager.formatCapitalize();
    console.log(titleColor('StringManager#formatCapitalize :'), strManager.toString());
    
    strManager.string = 'Hello World!';
    // StringManager#formatCapitalizeAll
    strManager.formatCapitalizeAll();
    console.log(titleColor('StringManager#formatCapitalizeAll :'), strManager.toString());

    strManager.string = 'Hello World!';
    // StringManager#formatRemoveSpaces
    strManager.formatRemoveSpaces();
    console.log(titleColor('StringManager#formatRemoveSpaces :'), strManager.toString());

    let strToFind = 'hello';
    strManager.string = 'Hello World!';
    // StringManager#includesString
    console.log(titleColor('StringManager#includesString :'), strManager.includesString(strToFind));
    // StringManager#includesString strict mode
    console.log(titleColor('StringManager#includesString avec strict mode :') + descriptionColor('"' + strToFind + '" à tester =>'), strManager.includesString(strToFind, true));

    let arrayStringsToFind = ['hello'];
    // StringManager#includesOneFrom
    console.log(titleColor('StringManager#includesOneFrom : "') + descriptionColor(JSON.stringify(arrayStringsToFind) + '" à tester =>'), strManager.includesOneFrom(arrayStringsToFind));
    // StringManager#includesOneFrom strict mode
    console.log(titleColor('StringManager#includesOneFrom avec strict mode : "') + descriptionColor(JSON.stringify(arrayStringsToFind) + '" à tester =>'), strManager.includesOneFrom(arrayStringsToFind, true));

    // StringManager#containsPhoneNumbers
    strManager.string = 'Cette chaîne comporte t\'elle des numéros de téléphone ? "00.00.00.00.00" et "000-000-0000"';
    console.log(titleColor('StringManager#containsPhoneNumbers : ') + descriptionColor(strManager.toString() + ' =>'), strManager.containsPhoneNumbers());
    strManager.string = 'Les numéros de téléphone à trouver sont "00.00.00.00.00" et "000-000-0000" !';
    // StringManager#extractPhoneNumbers
    console.log(titleColor('StringManager#extractPhoneNumbers : ') + descriptionColor(strManager.toString() + ' =>'), strManager.extractPhoneNumbers());

    // StringManager#containsEmails
    strManager.string = 'Cette chaîne comporte t\'elle des adresses e-mails ? "test@test.com"';
    console.log(titleColor('StringManager#containsEmails : ') + descriptionColor(strManager.toString() + ' =>'), strManager.containsEmails());
    // StringManager#extractEmails
    strManager.string = 'L\'adresse e-mail à trouver est "test@test.com" !';
    console.log(titleColor('StringManager#extractEmails : ') + descriptionColor(strManager.toString() + ' =>'), strManager.extractEmails());

    // StringManager#matchStringPercentage
    let strToCompare = 'Chaîne de caractères !';
    strManager.string = 'Chaîne de caractères';
    console.log(titleColor('StringManager#matchStringPercentage : ') + descriptionColor('Comparaison entre "' + strManager.toString() + '" et "' + strToCompare + '" =>'),  strManager.matchStringPercentage(strToCompare) + '%');
} catch (err) {
    console.error(errorColor(err));
}

