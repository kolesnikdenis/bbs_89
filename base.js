"use strict";
var foo = require('./load_array');
function fUpperCase(Str) {
    var Buf = '';
    for (var i = 0; i < Str.length; i++)
        if (Str.charAt(i) >= 'a' && Str.charAt(i) <= 'z' || Str.charAt(i) >= 'A' && Str.charAt(i) <= 'Z')
            Buf = Buf + Str.charAt(i).toUpperCase();
        else
            Buf = Buf + Str.charAt(i);
    return (Buf);
}
function CompStr(Str, Str2) {
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
};
var i = 0;
while (i < foo.user_list.length) {
    var sqluser = foo.user_list[i];
    if (sqluser[3].length > 20) {
        var arr_mac = sqluser[3].split(',');
    }
    else {
        arr_mac[0] = sqluser[3];
    }
    var test_num_user_mac = 0;
    while (test_num_user_mac < arr_mac.length) {
        var length = 0;
        var key;
        for (key in foo.bbsmac) {
            if (foo.bbsmac.hasOwnProperty(key)) {
                ++length;
                var length1 = 0;
                var key1;
                for (key1 in foo.bbsmac[key]) {
                    var iii = false;
                    var ii = 0;
                    var t = false;
                    ++length1;
                    var onu_mac = "";
                    while (ii < foo.bbsmac[key][key1].length) {
                        iii = CompStr(foo.bbsmac[key][key1][ii], arr_mac[test_num_user_mac]);
                        onu_mac += foo.bbsmac[key][key1][ii] + "<br>";
                        if (iii == true) {
                            t = true;
                        }
                        ii++;
                    }
                    if (t == true) {
                        delete (foo.bbsmac[key][key1]); //что не обрабатывать кого уже обработал ( и определить ненайдйнных в ):
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
console.log(af[11][0] + "\n" + af[11][1]);
/*
document.getElementById("11").innerHTML = af[11][0];
document.getElementById("12").innerHTML = af[12][0];
document.getElementById("13").innerHTML = af[13][0];
document.getElementById("14").innerHTML = af[14][0];
document.getElementById("21").innerHTML = af[21][0];
document.getElementById("22").innerHTML = af[22][0];
document.getElementById("23").innerHTML = af[23][0];
document.getElementById("24").innerHTML = af[24][0];
*/
var key;
for (key in foo.bbsmac) {
    if (foo.bbsmac.hasOwnProperty(key)) {
        var length1 = 0;
        var onu_no_description = "";
        var onu_mac = "";
        var key1;
        key1 = "0";
        for (var key1 in foo.bbsmac[key]) {
            ++length1;
            var ii = 0;
            while (ii < foo.bbsmac[key][key1].length) {
                onu_mac += foo.bbsmac[key][key1][ii] + "<br>";
                ii++;
            }
            onu_no_description = "<hr>mac:<br><b> " + onu_mac + "<br> sfp:" + key + "<br> onu num:" + key1 + "</b>  <br>";
        }
        if (key != "") {
            var v = "u" + key;
            document.getElementById(v).innerHTML = onu_no_description;
        }
    }
}
