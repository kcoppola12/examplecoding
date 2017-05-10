
let verticalheight = prompt("What is the vertical height of the roof?");
let horizontalheight = prompt("What is the horizontial height of the roof?");
let width = prompt("What is the width of the building?");
let adjustedwidth = parseFloat(width)/ 2;
// document.write("Half of the structure is " + adjustedwidth);
dividedwidth = adjustedwidth/12;
document.write("The horizontial point for the joist is " + adjustedwidth + " inches. ");
let adjustedverticalheight = parseFloat(verticalheight) * dividedwidth;
document.write("The vertical height of the roof is " + adjustedverticalheight + "inches. ");
let csquared =(Math.pow(adjustedverticalheight,2)+ Math.pow(adjustedwidth,2));
joistlength = (Math.sqrt(csquared));
document.write("The joist will need to be cut to " + joistlength + "inches. ");


