import {initGraph} from "./graphPrint.js"
import {TABLE_URL} from "./constants.js";

initGraph();

var w = document.getElementById("warning");
var table = document.getElementById("form");
$("#form").submit(function (e){
    w.innerHTML = $("#input_r").val();
})

// $.ajax(TABLE_URL, {
//     type: "get",
//     success: function (data) {
//         console.log(data.toString());
//     },
//     error: function (err) {
//         console.log("error !!!");
//     }
// });