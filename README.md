# stringManager
Un module qui permet d'ajouter des méthodes complémentaires pour la manipulation des strings en javascript.

## Méthodes
- [<stringManager>.formatSpacesBeforeUpper()](https://github.com/Mathieu-PVP/stringManager/blob/main/lib/stringManager.js#L18) - Formatte une chaîne de caractères en ajoutant un espace avant chaque caractère en majuscule.
- [<stringManager>.formatSpacesBeforeLower()](https://github.com/Mathieu-PVP/stringManager/blob/main/lib/stringManager.js#L28) - Formatte une chaîne de caractères en ajoutant un espace avant chaque caractère en minuscule.
- [<stringManager>.formatUppercase()](https://github.com/Mathieu-PVP/stringManager/blob/main/lib/stringManager.js#L38) - Formatte une chaîne de caractères en changeant les mots en minuscules en majuscules.
- [<stringManager>.formatLowercase()](https://github.com/Mathieu-PVP/stringManager/blob/main/lib/stringManager.js#L48) - Formatte une chaîne de caractères en changeant les mots en majuscules en minuscules.
- [<stringManager>.formatPascalCase()](https://github.com/Mathieu-PVP/stringManager/blob/main/lib/stringManager.js#L58) - Formatte une chaîne de caractères en PascalCase.
- [<stringManager>.formatCamelCase()](https://github.com/Mathieu-PVP/stringManager/blob/main/lib/stringManager.js#L71) - Formatte une chaîne de caractères en camelCase.
- [<stringManager>.formatSnakeCase()](https://github.com/Mathieu-PVP/stringManager/blob/main/lib/stringManager.js#L84) - Formatte une chaîne de caractères en snake_case.
- [<stringManager>.formatRemoveSpaces()](https://github.com/Mathieu-PVP/stringManager/blob/main/lib/stringManager.js#L94) - Formatte une chaîne de caractères en supprimant chaque espace.
- [<stringManager>.formatCapitalize()](https://github.com/Mathieu-PVP/stringManager/blob/main/lib/stringManager.js#L104) - Formatte une chaîne de caractères en changeant le premier caractère de celle-ci en majuscule.
- [<stringManager>.formatCapitalizeAll()](https://github.com/Mathieu-PVP/stringManager/blob/main/lib/stringManager.js#L114) - Formatte une chaîne de caractères en changeant le premier caractère de chaque mot de celle-ci en majuscule.
- [<stringManager>.includesString(\<string\>)](https://github.com/Mathieu-PVP/stringManager/blob/main/lib/stringManager.js#L128) - Verifie si une chaîne de caractères B est présente dans la chaîne de caractères A.
- [<stringManager>.includesOneFrom(\<Array\<string\>\>)](https://github.com/Mathieu-PVP/stringManager/blob/main/lib/stringManager.js#L142) - Verifie si une chaîne de caractères présente dans un tableau se trouve dans la chaîne de caractères A.
- [<stringManager>.matchStringPercentage(\<string\>)](https://github.com/Mathieu-PVP/stringManager/blob/main/lib/stringManager.js#L155) - Calcule le pourcentage de concordance entre deux chaînes de caractères.
- [<stringManager>.containsPhoneNumbers()](https://github.com/Mathieu-PVP/stringManager/blob/main/lib/stringManager.js#L177) - Permet de savoir si la chaîne de caractères contient des numéros de téléphone.
- [<stringManager>.extractPhoneNumbers()](https://github.com/Mathieu-PVP/stringManager/blob/main/lib/stringManager.js#L187) - Permet d'extraire des numéros de téléphone présents dans une chaîne de caractères.
- [<stringManager>.containsEmails()](https://github.com/Mathieu-PVP/stringManager/blob/main/lib/stringManager.js#L197) - Permet de savoir si la chaîne de caractères contient des adresses emails.
- [<stringManager>.extractEmails()](https://github.com/Mathieu-PVP/stringManager/blob/main/lib/stringManager.js#L207) - Permet d'extraire des adresses e-mails présentes dans une chaîne de caractères.
- [<stringManager>.toString()](https://github.com/Mathieu-PVP/stringManager/blob/main/lib/stringManager.js#L226) - Méthode permettant de récupérer la chaîne de caractères à manipuler.

## Installation
```
npm install https://github.com/Mathieu-PVP/stringManager.git
```
## Exemples
Importer la class `stringManager` avec Node.js
```JS
import StringManager from 'stringmanager';
const strManager = new StringManager();
```
Ou avec Javascript Vanilla (avoir live-server d'installé si les CORS bloquent l'accès)
```HTML
<script type="module">
    import StringManager from './node_modules/stringmanager/index.js';
    const stringManager = new StringManager();
</script>
```
1) Mettre une chaîne de caractères en capitales
```JS
strManager.string = 'Ma chaîne de caractères';
strManager.formatCapitalizeAll();
console.log(strManager.toString()); // Output : "Ma Chaîne De Caractères"
```
2) Vérifer si une chaîne de caractères contient des emails
```JS
strManager.string = 'Voici ci-joint mon adresse mail : fakeadress@fakedomain.com';
console.log(strManager.containsEmails()); // Output : true
```
3) Récupérer tous les numéros de téléphones présents dans une chaîne de caractères
```JS
strManager.string = 'Voici mes numéros de téléphones 00.00.00.00.00 ou 000.000.0000';
console.log(strManager.extractPhoneNumbers()); // Output : [ '00.00.00.00.00', '000-000-0000' ]
```

4) Calculer le pourcentage de concordance entre 2 chaînes de caractères
```JS
strManager.string = 'Un exemple original';
console.log(strManager.matchStringPercentage('Un exemple ordinaire') + '%'); // 65.00%
```

# Licence
MIT License

Copyright (c) 2024 Mathieu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Credits
[@Mathieu-PVP](https://github.com/Mathieu-PVP/) - Intégrateur Web à [Alibee](https://alibee.fr)
