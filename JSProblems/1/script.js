function swaps(){
var a = document.getElementsByName("var1")[0].value;
var b = document.getElementsByName("var2")[0].value;

//-----------------------------------------------------
// Usage of mathematical operations to swap the numbers
a = (Number(a) + Number(b));
b = (Number(a) - Number(b));
a = (Number(a) - Number(b));
document.getElementsByName('var3')[0].value = a;
document.getElementsByName('var4')[0].value = b;
}