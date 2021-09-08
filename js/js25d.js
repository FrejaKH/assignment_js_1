'use strict';
console.log('Truth table for disjunction');
console.log('var1\tvar2\tvar1 || var2')
let var3 = true;
let var4 = true;
let outcome2 = true;
console.log(var3 + '\t' + var4 + '\t' + outcome2);
var3 = true;
var4 = false;
outcome2 = true;
console.log(var3 + '\t' + var4 + '\t' + outcome2);
var3 = false;
var4 = true;
outcome2 = true;
console.log(var3 + '\t' + var4 + '\t' + outcome2);
var3 = false;
var4 = false;
outcome2 = false;
console.log(var3 + '\t' + var4 + '\t' + outcome2);