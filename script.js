var ans = "";
var clear = false;
var calc = "";

$(document).ready(function() {
  $("button").click(function() {
    var text = $(this).attr("value");

    if (
      text === "1" ||
      text === "2" ||
      text === "3" ||
      text === "4" ||
      text === "5" ||
      text === "6" ||
      text === "7" ||
      text === "8" ||
      text === "9" ||
      text === "0" ||
      text === "." ||
      text === "/" ||
      text === "*" ||
      text === "-" ||
      text === "+" ||
      text === "%"
    ) {
      if (clear === false) {
        calc += text;
        $(".textbox").val(calc);
      } else {
        calc = text;
        $(".textbox").val(calc);
        clear = false;
      }
    } else if (text === "AC") {
      calc = "";
      $(".textbox").val("");
    } else if (text === "CE") {
      calc = calc.slice(0, -1);
      $(".textbox").val(calc);
    } else if (text === "=") {
      ans = eval(calc);
      $(".textbox").val(ans);
      clear = true;
    }
  });
});
