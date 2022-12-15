import {initGraph, setPoints} from "./graphPrint.js"
import {TABLE_URL} from "./constants.js";
import {bindSendData} from "./dataSending.js";

initGraph();
window.onload = function () {
    bindSendData((tableData) => {
        // console.log(tableData);
        setPoints(tableData);
        fillTable(tableData);
    }, TABLE_URL);
}
$.ajax({
    url: TABLE_URL,
    type: "get",
    success: function(response) {
        setPoints(JSON.parse(response));
        fillTable(JSON.parse(response));
    },
    error: function(xhr) {
        console.log("Error while requesting points data");
    }
});

function fillTable(tableData) {
    const tbody = document.getElementById("results");
    tbody.innerHTML = "";
    tableData.forEach((row) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${row.attampt}</td><td>${row.x}</td><td>${row.y}</td><td>${row.r}</td><td>${row.result}</td><td>${row.time}</td><td>${row.duration}</td>`;
        tbody.appendChild(tr);
    });
}