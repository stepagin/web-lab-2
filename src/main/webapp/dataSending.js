import {graphSize, setR} from "./graphPrint.js";
import {RMax} from "./constants.js";

export function bindSendData(callback, URL) {
    var [x, y, r] = getXYR();


    $("#form").submit(function (evt) {
        evt.preventDefault();
        [x, y, r] = getXYR();
        let warning = document.getElementById("warning");
        warning.innerHTML = "";
        if(validateTextNumber(y)
            && -3 < y && y < 5
            && -5 <= x && x <= 3
            && 0 < r && r <= RMax) {
            sendPoint(x, y, r);
        } else {
            if(!(validateTextNumber(y) && -3 < y && y < 5))
                warning.innerHTML = "number Y is invalid";
            else if (!(-5 <= x && x <= 3))
                warning.innerHTML = "number X is invalid";
            else if (!(0 < r && r <= RMax))
                warning.innerHTML = "number R is invalid";
        }
    });



    $("#input_r").click(function () {
        if (getXYR()[2] != 0)
            setR(getXYR()[2]);
        else
            document.getElementById("warning").innerHTML = "Select at least one R value";
    });



    $("#mycanvas").mousedown(function (evt) {
        let warning = document.getElementById("warning");
        warning.innerHTML = "";
        if(!(0 < r && r <= RMax)) {
            warning.innerHTML = "number R is invalid";
            return;
        }
        r = getXYR()[2];
        if (!(0 < r && r <= RMax)){
            warning.innerHTML = "number R is invalid";
            return;
        }
        y = ((graphSize/2 - evt.offsetY) * 2.5 * RMax / graphSize).toFixed(2);
        x = ((evt.offsetX - graphSize/2) * 2.5 * RMax / graphSize).toFixed(2);

        sendPoint(x, y, r);
    })


    function getXYR() {
            let x = $("#input_x").val(),
                y = $("#input_y").val();
            if(y == "")
                y = null;
            else
                y = y.replace(",", ".");
            if($("#R3").is(":checked"))
                return [x, y, 3];
            else if($("#R25").is(":checked"))
                return [x, y, 2.5];
            else if($("#R2").is(":checked"))
                return [x, y, 2];
            else if($("#R15").is(":checked"))
                return [x, y, 1.5];
            else if($("#R1").is(":checked"))
                return [x, y, 1];
            else
                return [x, y, 0];
    }



    function validateTextNumber(text) {
        const numberPattern = /^[+-]?(\d*[.])?\d+$/;
        const number = parseFloat(text);
        if (Number.isNaN(number) || !numberPattern.test(text)) {
            return false;
        } else {
            return true;
        }
    }



    function sendPoint(x, y, r) {
        // console.log(x + " " + y + " " + r);
        $.ajax({
            url: URL + "?x=" + x + "&y=" + y + "&r=" + r,
            type: "get",
            success: function (data) {
                callback(JSON.parse(data));
            },
            error: function (xhr) {
                console.log("Some error has occurred while sending data to the table");
            }
        });
    }
}