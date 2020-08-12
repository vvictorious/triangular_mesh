var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');
console.log('hi')

var size = window.innerWidth;
var dpr = window.devicePixelRatio;
canvas.width = size * dpr;
canvas.height = size * dpr;
context.scale(dpr, dpr);
context.lineJoin = 'bevel';