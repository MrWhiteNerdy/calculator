// global variables
var ans = "";
var clear = false;
var calc = "";

// load when document is ready
$(document).ready(function() {
    // when a button is clicked
  $("button").click(function() {
      // set text to value of button
    var text = $(this).attr("value");
    // if button value is one of these,
    if (text === "1" || text === "2" || text === "3" || text === "4" || text === "5" || text === "6" || text === "7" || text === "8" || text === "9" || text === "0" ||text === "." || text === "/" || text === "*" || text === "-" || text === "+" || text === "%") {
        // if it hasn't been cleared, add button value to text variable
      if (clear === false) {
        calc += text;
        $(".textbox").val(calc);
        // else clear the box
      } else {
        calc = text;
        $(".textbox").val(calc);
        clear = false;
      }
      // if button is "clear", then clear the screen
    } else if (text === "AC") {
      calc = "";
      $(".textbox").val("");
      // if this, then remove last text value
    } else if (text === "CE") {
      calc = calc.slice(0, -1);
      $(".textbox").val(calc);
      // if they press equal button, evaluate what is in calc variable and show it
    } else if (text === "=") {
      ans = eval(calc);
      $(".textbox").val(ans);
      clear = true;
    }
  });
});
