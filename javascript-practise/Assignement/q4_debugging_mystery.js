"use strict";

function showMessage() {
    // 1. Identifed Issue: In strict mode, you cannot assign a value to an undeclared variable. 
    // It prevents implicit global variable creation.
    
    // 2. Fix: Declare with let, const, or var
    let greeting = "Welcome"; 
    console.log(greeting);
}

showMessage();

// 3. Debug observation: Setting a breakpoint on 'let greeting' shows 'greeting' as undefined in the local scope block before initialization, whereas before it would secretly attach to the global 'window' or 'global' object.