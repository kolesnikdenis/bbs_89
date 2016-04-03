
function fUpperCase(Str: string) {
  var Buf: string = '';
  for (var i: number = 0; i < Str.length; i++)
    if (Str.charAt(i) >= 'a' && Str.charAt(i) <= 'z' || Str.charAt(i) >= 'A' && Str.charAt(i) <= 'Z')
      Buf = Buf + Str.charAt(i).toUpperCase();
    else
      Buf = Buf + Str.charAt(i);
  return (Buf);
}

function CompStr(Str: string, Str2: string) {
  return fUpperCase(Str.toString()) == fUpperCase(Str2.toString());

}
var af = {
  11: [],
  12: [],
  13: [],
  14: [],
  21: [],
  22: [],
  23: [],
  24: []
}

//import foo = require('load_array');
imort moo = module('load_array');

var i: number  = 0;
while (i < user_list[].length) {
  var sqluser: string = user_list[][i];
  if (sqluser[3].length > 20) {
    var arr_mac = sqluser[3].split(',');
  } else {
    var arr_mac = [];
    arr_mac[0] = sqluser[3];
  }
  var test_num_user_mac: number = 0;
  while (test_num_user_mac < arr_mac.length) {
    var length: number = 0;
    for (var key: string in bbsmac) {
      if (bbsmac.hasOwnProperty(key)) {
        ++length;
        var length1: number = 0;
        for (var key1: string in bbsmac[key]) {
          var iii: number  = false;
          var ii: number = 0;
          var t: number = false;
          ++length1;
          onu_mac = "";
          while (ii < bbsmac[key][key1].length) {
            iii = CompStr(bbsmac[key][key1][ii], arr_mac[test_num_user_mac]);
            onu_mac += bbsmac[key][key1][ii] + "<br>";
            if (iii == true) {
              t = true;
            }
            ii++;
          }
          if (t == true) {
            delete(bbsmac[key][key1]); //что не обрабатывать кого уже обработал ( и определить ненайдйнных в ):
            af[key].push("<hr>" + sqluser[0] + " <br>ip:" + sqluser[4] + "<br>mac:<b><br> " + onu_mac + "</b><br> sfp:" + key + "<br> onu num:" + key1 + "  <br>");
            iii = false;
          }
        }
      }
      if (t == true) {
        break;
      }
    }
    test_num_user_mac++;
  }
  i++;
}

document.getElementById("11").innerHTML = af['11'];
document.getElementById("12").innerHTML = af['12'];
document.getElementById("13").innerHTML = af['13'];
document.getElementById("14").innerHTML = af['14'];
document.getElementById("21").innerHTML = af['21'];
document.getElementById("22").innerHTML = af['22'];
document.getElementById("23").innerHTML = af['23'];
document.getElementById("24").innerHTML = af['24'];


for (var key in bbsmac) {
  if (bbsmac.hasOwnProperty(key)) {
    var length1: number = 0;
    var onu_no_description: string = "";
    var onu_mac: string = "";
    var key1: string  = 0;
    for (var key1 in bbsmac[key]) {
      ++length1;
      var ii: number = 0;
      while (ii < bbsmac[key][key1].length) {
        onu_mac += bbsmac[key][key1][ii] + "<br>";
        ii++;
      }
      onu_no_description = "<hr>mac:<br><b> " + onu_mac + "<br> sfp:" + key + "<br> onu num:" + key1 + "</b>  <br>";
    }
    if (key > 0) {
      var v: string = "u" + key;
      document.getElementById(v).innerHTML = onu_no_description;
    }
  }

}
