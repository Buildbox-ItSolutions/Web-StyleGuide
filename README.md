# The Buildbox JavaScript Style Guide

Welcome to the Buildbox!

Now as a developer that will be responsible to make other people's dream come true, you should always strive for quality in our projects. Due to the increased amount of projects that you're going to work with, this guide was created to make sure that anyone in our team can hop between projects without problems to understand what is being done.

## Table of Contents

## 1 - Setup VSCode

**1.1** Download [VSCode](https://code.visualstudio.com/)

**1.2** Install Extensions on VSCode - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint),  [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)

**1.3** Install Extensions Packages Globally
```
npm install -g tslint
npm install -g eslint
```

**1.4** VSCode Default Config
```
"editor.tabSize": 4,
"editor.detectIndentation": false,
"editor.insertSpaces": false,
"editor.renderWhitespace": "all",
"editor.renderControlCharacters": true,
"editor.tabCompletion": "on",
"eslint.enable": true,
"files.eol": "\r\n",
"editor.formatOnSave": true,
"prettier.semi": false,
"prettier.printWidth": 120,
"prettier.useTabs": true,
"prettier.tabWidth": 4,
"prettier.singleQuote": true,
"prettier.jsxBracketSameLine": true,
"prettier.eslintIntegration": true,
"prettier.tslintIntegration": true
 ```
 
**1.5** Optional Font with Ligatures [Fira Code](https://github.com/tonsky/FiraCode)
 ```
"editor.fontSize": 16,
"editor.lineHeight": 24,
"terminal.integrated.fontSize": 14,
"editor.fontFamily": "Fira Code",
"editor.fontLigatures": true,
```

## 2 - Guidelines

**2.1.1** Do not use Semicolon unless necessary... :x:

**2.1.2** Do not use Double Quotes :x:

**2.1.3** Do not use ```var``` :x:

**2.1.4** Prefer ```const``` over ```let``` :heavy_check_mark:

**2.1.5** When on a concatenation situation prefer the use of [Template Literal](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/template_strings) :relieved:


```
// bad
var bad = 'Some text' + anything 

// good
const bad = `Some text ${anything}`
```

**2.1.6** Declare variables on [**lowerCamelCase**](https://pt.wikipedia.org/wiki/CamelCase) style: *e.g* :speak_no_evil:
```
const oneThing = 'Whats up?'
```

**2.1.7** Avoid ```else``` :bangbang:

```
// bad
if (smart) {
  return true
} else if (almost) {
  return true
} else {
  return false
} 

// bad
if (smart) {
  if (almost) {
    return true
  } else {
    return false
  }
} else {
  return false
} 


// good
if (smart || almost) {
 return true
}

return false

// good
if (smart && almost) {
 return true
}

return false
```
