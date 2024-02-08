'use strict';

module.exports = class StringManager {
    /**
     * Formatte une chaîne de caractères en ajoutant un espace avant chaque caractère en majuscule.
     * @constructor
     * @param {string} str la chaine de caractère à formater.
     */
    constructor(str = '') {
        if (typeof str !== 'string') { throw new Error('StringManager# : "string" attendue, reçu "' + typeof str + '"'); }
        this.str = str;
    }

    /**
     * Formatte une chaîne de caractères en ajoutant un espace avant chaque caractère en majuscule.
     * @returns {string} retourne la chaine de caractère formattée.
     */
    formatSpacesBeforeUpper() {
        if (typeof this.str !== 'string') { throw new Error('StringManager#formatSpacesBeforeUpper : "string" attendue, reçu "' + typeof this.str + '"'); }
        this.str = this.str.split(/(?=[A-Z])/).join(' ');
        return this;
    }

    /**
     * Formatte une chaîne de caractères en ajoutant un espace avant chaque caractère en minuscule.
     * @returns {string} retourne la chaine de caractère formattée.
     */
    formatSpacesBeforeLower() {
        if (typeof this.str !== 'string') { throw new Error('StringManager#formatSpacesBeforeLower : "string" attendue, reçu "' + typeof this.str + '"'); }
        this.str = this.str.split(/(?=[a-z])/).join(' ');
        return this;
    }

    /**
     * Formatte une chaîne de caractères en changeant les mots en minuscules en majuscules.
     * @returns {string} retourne la chaine de caractère formattée.
     */
    formatUppercase() {
        if (typeof this.str !== 'string') { throw new Error('StringManager#formatUppercase : "string" attendue, reçu "' + typeof this.str + '"'); }
        this.str = this.str.toUpperCase();
        return this;
    }

    /**
     * Formatte une chaîne de caractères en changeant les mots en majuscules en minuscules.
     * @returns {string} retourne la chaine de caractère formattée.
     */
    formatLowercase() {
        if (typeof this.str !== 'string') { throw new Error('StringManager#formatLowercase : "string" attendue, reçu "' + typeof this.str + '"'); }
        this.str = this.str.toLowerCase();
        return this;
    }

    /**
     * Formatte une chaîne de caractères en PascalCase.
     * @returns {string} retourne la chaine de caractère formattée.
     */
    formatPascalCase() {
        if (typeof this.str !== 'string') { throw new Error('StringManager#formatPascalCase : "string" attendue, reçu "' + typeof this.str + '"'); }
        this.str = this.str.replace(/(?:^\w|\b\w)/g, function(match) {
            return match.toUpperCase();
        });
        this.formatRemoveSpaces();
        return this;
    }

    /**
     * Formatte une chaîne de caractères en camelCase.
     * @returns {string} retourne la chaine de caractère formattée.
     */
    formatCamelCase() {
        if (typeof this.str !== 'string') { throw new Error('StringManager#formatCamelCase : "string" attendue, reçu "' + typeof this.str + '"'); }
        this.str = this.str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
            if (+match === 0) return '';
            return index === 0 ? match.toLowerCase() : match.toUpperCase();
        });
        return this;
    }

    /**
     * Formatte une chaîne de caractères en snake_case.
     * @returns {string} - Retourne la chaîne de caractères formatée.
     */
    formatSnakeCase() {
        if (typeof this.str !== 'string') { throw new Error('StringManager#formatSnakeCase : "string" attendue, reçu "' + typeof this.str + '"'); }
        this.str = this.str.replace(/\s+/g, '_').toLowerCase();
        return this;
    }

    /**
     * Formatte une chaîne de caractères en supprimant chaque espace.
     * @returns {string} retourne la chaine de caractère formattée.
     */
    formatRemoveSpaces() {
        if (typeof this.str !== 'string') { throw new Error('StringManager#formatRemoveSpaces : "string" attendue, reçu "' + typeof this.str + '"'); }
        this.str = this.str.replace(/\s/g, '');
        return this;
    }

    /**
     * Formatte une chaîne de caractères en changeant le premier caractère de celle-ci en majuscule.
     * @returns {string} retourne la chaine de caractère formattée.
     */
    formatCapitalize() {
        if (typeof this.str !== 'string') { throw new Error('StringManager#formatCapitalize : "string" attendue, reçu "' + typeof this.str + '"'); }
        this.str = this.str.charAt(0).toUpperCase() + this.str.slice(1);
        return this;
    }

    /**
     * Formatte une chaîne de caractères en changeant le premier caractère de chaque mot de celle-ci en majuscule.
     * @returns {string} retourne la chaine de caractère formattée.
     */
    formatCapitalizeAll() {
        if (typeof this.str !== 'string') { throw new Error('StringManager#formatCapitalizeAll : "string" attendue, reçu "' + typeof this.str + '"'); }
        this.str = this.str.split(' ').map((s) => {
            return s.charAt(0).toUpperCase() + s.slice(1);
        }).join(' ');
        return this;
    }

    /**
     * Verifie si une chaîne de caractère B est présente dans la chaîne de caractère A.
     * @param {string} str la chaine de caractère à vérifier.
     * @param {boolean} [strict=false] si le mode strict est activé, il vérifie si la case est identique
     * @returns {boolean} retourne le pourcentage de concordance.
     */
    includesString(str, strict = false) {
        if (typeof this.str !== 'string') { throw new Error('StringManager#includesString : "string" attendue, reçu "' + typeof this.str + '"'); }
        if (typeof str !== 'string') { throw new Error('StringManager#includesString : "string" attendue pour str, reçu "' + typeof str + '"'); }
        if (typeof strict !== 'boolean') { throw new Error('StringManager#includesStrings : "boolean" attendue pour strict, reçu "' + typeof this.str + '"'); }
        const targetString = strict ? this.str : this.str.toLowerCase();
        return targetString.includes(strict ? str : str.toLowerCase());
    }

    /**
     * Verifie si une chaîne de caractère présente dans un tableau se trouve dans la chaîne de caractère A.
     * @param {Array<String>} stringArray la chaine de caractère à vérifier.
     * @param {boolean} [strict=false] si le mode strict est activé, il vérifie si la case est identique
     * @returns {boolean} retourne le pourcentage de concordance.
     */
    includesOneFrom(stringArray, strict = false) {
        if (typeof this.str !== 'string') { throw new Error('StringManager#includesOneFrom : "string" attendue, reçu "' + typeof this.str + '"'); }
        if (typeof stringArray !== 'object' || !Array.isArray(stringArray) || stringArray.some((s) => typeof s !== 'string')) { throw new Error('StringManager#includesOneFrom : "Array<String>" attendue pour stringArray, reçu "' + typeof stringArray + '"'); }
        if (typeof strict !== 'boolean') { throw new Error('StringManager#includesOneFrom : "boolean" attendue pour strict, reçu "' + typeof this.str + '"'); }
        const targetString = strict ? this.str : this.str.toLowerCase();
        return stringArray.some((s) => targetString.includes(strict ? s : s.toLowerCase()));
    }

    /**
     * Calcule le pourcentage de concordance entre deux chaînes de caractères.
     * @param {string} strToCompare la chaine de caractère à comparer.
     * @returns {number} retourne le pourcentage de concordance.
     */
    matchStringPercentage(strToCompare) {
        if (typeof this.str !== 'string') { throw new Error('StringManager#matchStringPercentage : "string" attendue, reçu "' + typeof this.str + '"'); }
        if (typeof strToCompare !== 'string') { throw new Error('StringManager#matchStringPercentage : "string" attendue pour strToCompare, reçu "' + typeof this.str + '"'); }

        let str1 = this.str.toLowerCase();
        let str2 = strToCompare.toLowerCase();

        const maxLength = Math.max(str1.length, str2.length);

        let matchingChars = 0;
        for (let i = 0; i < maxLength; i++) {
            if (str1[i] && str2[i] && str1[i] === str2[i]) { matchingChars++; }
        }

        const matchRate = (matchingChars / maxLength) * 100;
        return matchRate.toFixed(2);
    }

    /**
     * Permet de savoir si la chaîne de caractères contient des numéros de téléphone.
     * @returns {boolean} retourne true si la chaîne comporte au moins 1 numéro de téléphone.
     */
    containsPhoneNumbers() {
        if (typeof this.str !== 'string') { throw new Error('StringManager#containsPhoneNumbers : "string" attendue, reçu "' + typeof this.str + '"'); }
        const phonesArray = this.extractPhoneNumbers();
        return phonesArray.length > 0;
    }

    /**
     * Permet d'extraire des numéros de téléphone présents dans une chaîne de caractères.
     * @returns {Array<string>} retourne un tableau comportant tous les numéros de téléphone trouvés.
     */
    extractPhoneNumbers() {
        if (typeof this.str !== 'string') { throw new Error('StringManager#extractPhoneNumbers : "string" attendue, reçu "' + typeof this.str + '"'); }
        const phoneRegex = /\b(?:\d{3}-\d{3}-\d{4}|\d{2}\.\d{2}\.\d{2}\.\d{2}\.\d{2})\b/g;
        return this.str.match(phoneRegex) || [];
    }

    /**
     * Permet de savoir si la chaîne de caractères contient des adresses emails.
     * @returns {boolean} retourne true si la chaîne comporte au moins 1 adresse e-mail.
     */
    containsEmails() {
        if (typeof this.str !== 'string') { throw new Error('StringManager#containsEmails : "string" attendue, reçu "' + typeof this.str + '"'); }
        const emailsArray = this.extractEmails();
        return emailsArray.length > 0;
    }
    
    /**
     * Permet d'extraire des adresses e-mails présentes dans une chaîne de caractères.
     * @returns {Array<string>} retourne un tableau comportant toutes les adresses emails trouvées.
     */
    extractEmails() {
        if (typeof this.str !== 'string') { throw new Error('StringManager#extractEmails : "string" attendue, reçu "' + typeof this.str + '"'); }
        const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;
        return this.str.match(emailRegex) || [];
    }

    /**
     * Méthode permettant de changer la chaîne de caractère à manipuler.
     * @param {string} str La nouvelle chaîne de caractère.
     */
    set string(str) {
        if (typeof str !== 'string') { throw new Error('StringManager : "string" attendue, reçu "' + typeof str + '"'); }
        return this.str = str;
    }

    /**
     * Méthode permettant de récupérer la chaîne de caractère à manipuler.
     * @returns {string} retourne la chaîne de caractère.
     */
    toString() {
        return this.str;
    }
};