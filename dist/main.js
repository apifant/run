#!/usr/bin/env node
"use strict";
// 1. Mit ANSI Escape Codes (keine Dependencies)
Object.defineProperty(exports, "__esModule", { value: true });
// 8. Kombiniert mit dem Elefanten
function logApifant() {
    const orange = '\x1b[38;5;202m';
    const reset = '\x1b[0m';
    console.log(`${orange}   
      ___________        __  
     |          /|\      |
     |         / | \     |       A P I F A N T
     |        /__|______|       Unsere Mission: Ihr Entwicklungsprojekt beschleunigen.
     |   _____   |
     |___|   |___|

Findet Sie Mehr heraus auf https://apifant.com/
${reset}`);
}
logApifant();
//# sourceMappingURL=main.js.map