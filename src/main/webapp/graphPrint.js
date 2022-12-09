
import {TABLE_URL, backgroungFigColor, figColor, lineColor, dotsColor, textColor, cursorColor, RMax} from "./constants.js"

var graph = null;
var ctx = null;
var graphSize = 0;
var currentR = 2; // TODO: get from URL
var dotsArray = [];

export function initGraph() {
    /*
    инициализирует переменные
     */
    graph = document.getElementById("mycanvas");
    ctx = graph.getContext("2d");
    graphSize = (graph.width < graph.height ? graph.width : graph.height);
    graphSize = (graphSize > 480 ? graphSize : 480); // TODO: зависимость от размера окна
    graph.width = graphSize;
    graph.height = graphSize;
    drawGraph();
    setMouseActions();
}

function drawGraph() {
    /*
    Заново прорисовывает график canvas
     */
    ctx.clearRect(0, 0, graphSize, graphSize);
    ctx.fillStyle = backgroungFigColor;
    ctx.fillRect(0, 0, graphSize, graphSize);
    ctx.fillStyle = figColor;
    ctx.strokeStyle = lineColor;
    let arrowBoxSize = graphSize / 40;

    drawFigures(currentR);

    // Ox
    ctx.beginPath();
    ctx.moveTo(0, graphSize/2);
    ctx.lineTo(graphSize, graphSize/2);
    ctx.lineTo(graphSize - arrowBoxSize, graphSize/2 - arrowBoxSize / 2);
    ctx.moveTo(graphSize, graphSize/2);
    ctx.lineTo(graphSize - arrowBoxSize, graphSize/2 + arrowBoxSize / 2);
    ctx.stroke();
    ctx.closePath();
    //Oy
    ctx.beginPath();
    ctx.moveTo(graphSize/2, graphSize);
    ctx.lineTo(graphSize/2, 0);
    ctx.lineTo(graphSize/2 - arrowBoxSize/2, arrowBoxSize);
    ctx.moveTo(graphSize/2, 0);
    ctx.lineTo(graphSize/2 + arrowBoxSize/2, arrowBoxSize);
    ctx.stroke();
    ctx.closePath();
    // R - Ox
    ctx.beginPath();
    ctx.moveTo(graphSize/2 + graphSize*4/10, graphSize/2 + arrowBoxSize/2);
    ctx.lineTo(graphSize/2 + graphSize*4/10, graphSize/2 - arrowBoxSize/2);
    ctx.stroke();
    ctx.closePath();
    // R/2 - Ox
    ctx.beginPath();
    ctx.moveTo(graphSize/2 + graphSize*2/10, graphSize/2 + arrowBoxSize/2);
    ctx.lineTo(graphSize/2 + graphSize*2/10, graphSize/2 - arrowBoxSize/2);
    ctx.stroke();
    ctx.closePath();
    // -R/2 - Ox
    ctx.beginPath();
    ctx.moveTo(graphSize/2 - graphSize*2/10, graphSize/2 + arrowBoxSize/2);
    ctx.lineTo(graphSize/2 - graphSize*2/10, graphSize/2 - arrowBoxSize/2);
    ctx.stroke();
    ctx.closePath();
    // -R - Ox
    ctx.beginPath();
    ctx.moveTo(graphSize/2 - graphSize*4/10, graphSize/2 + arrowBoxSize/2);
    ctx.lineTo(graphSize/2 - graphSize*4/10, graphSize/2 - arrowBoxSize/2);
    ctx.stroke();
    ctx.closePath();
    // R - Oy
    ctx.beginPath();
    ctx.moveTo(graphSize/2 - arrowBoxSize/2, graphSize/2 - graphSize*4/10);
    ctx.lineTo(graphSize/2 + arrowBoxSize/2, graphSize/2 - graphSize*4/10);
    ctx.stroke();
    ctx.closePath();
    // R/2 - Oy
    ctx.beginPath();
    ctx.moveTo(graphSize/2 - arrowBoxSize/2, graphSize/2 - graphSize*2/10);
    ctx.lineTo(graphSize/2 + arrowBoxSize/2, graphSize/2 - graphSize*2/10);
    ctx.stroke();
    ctx.closePath();
    // -R/2 - Oy
    ctx.beginPath();
    ctx.moveTo(graphSize/2 - arrowBoxSize/2, graphSize/2 + graphSize*2/10);
    ctx.lineTo(graphSize/2 + arrowBoxSize/2, graphSize/2 + graphSize*2/10);
    ctx.stroke();
    ctx.closePath();
    // -R - Oy
    ctx.beginPath();
    ctx.moveTo(graphSize/2 - arrowBoxSize/2, graphSize/2 + graphSize*4/10);
    ctx.lineTo(graphSize/2 + arrowBoxSize/2, graphSize/2 + graphSize*4/10);
    ctx.stroke();
    ctx.closePath();

    // labels
    ctx.beginPath();
    ctx.fillStyle = textColor;
    ctx.font = "bold 10pt sans-serif";
    ctx.fillText("X", graphSize- arrowBoxSize, graphSize/2 - arrowBoxSize);
    ctx.fillText("Y", graphSize/2 + arrowBoxSize, arrowBoxSize);
    ctx.fillText("" + RMax, graphSize/2 + graphSize*4/10 - arrowBoxSize/2, graphSize/2 - arrowBoxSize);
    ctx.fillText("" + RMax/2, graphSize/2 + graphSize*2/10 - arrowBoxSize/2, graphSize/2 - arrowBoxSize);
    ctx.fillText("-" + RMax/2, graphSize/2 - graphSize*2/10 - arrowBoxSize/2, graphSize/2 - arrowBoxSize);
    ctx.fillText("-" + RMax, graphSize/2 - graphSize*4/10 - arrowBoxSize/2, graphSize/2 - arrowBoxSize);
    ctx.fillText("-" + RMax, graphSize/2 + arrowBoxSize, graphSize/2 + graphSize*4/10);
    ctx.fillText("-" + RMax/2, graphSize/2 + arrowBoxSize, graphSize/2 + graphSize*2/10);
    ctx.fillText("" + RMax/2, graphSize/2 + arrowBoxSize, graphSize/2 - graphSize*2/10);
    ctx.fillText("" + RMax, graphSize/2 + arrowBoxSize, graphSize/2 - graphSize*4/10);
    ctx.closePath();

    // drawDots();
}

function setMouseActions() {
    graph.onmousemove = (e) => {
        drawGraph();
        ctx.fillStyle = cursorColor;
        ctx.beginPath();
        ctx.arc(e.offsetX, e.offsetY, graphSize/200, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
    }

    graph.onclick = (e) => {
        drawGraph();
        ctx.fillStyle = dotsColor;
        ctx.beginPath();
        ctx.arc(e.offsetX, e.offsetY, graphSize/200, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
    }
}

function drawFigures(R) {
    drawRectangle(0, 0, R/2, R)
    drawTriangle(0, R, -R, 0)
    drawCircle(R, 3);
}

function drawRectangle(x1, y1, x2, y2) {
    ctx.translate(graphSize/2, graphSize/2);
    ctx.fillStyle = figColor;

    // (x1,y1) - begin, (x2,y2) - sizes
    if (x1 > x2)
        [x1,x2] = [x2,x1];
    if (y1 > y2)
        [y1, y2] = [y2, y1];

    [x2, y2] = [Math.abs(x1-x2), Math.abs(y1-y2)];

    ctx.fillRect(x1* graphSize*4/10/RMax, -y1 * graphSize*4/10/RMax, x2 * graphSize*4/10/RMax, -y2 * graphSize*4/10/RMax);

    ctx.translate(-graphSize/2, -graphSize/2);
}

function drawCircle(radius, part) {
    part = Math.round(part + 3) % 4;
    ctx.translate(graphSize/2, graphSize/2);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.fillStyle = figColor;
    ctx.arc(0, 0, radius * graphSize*4/10/RMax, Math.PI * (part - 1) / 2, Math.PI * (part) / 2)
    ctx.fill();
    ctx.closePath();
    ctx.translate(-graphSize/2, -graphSize/2);
}

function drawTriangle(x1, y1, x2, y2) {
    ctx.translate(graphSize/2, graphSize/2);
    ctx.beginPath();
    ctx.fillStyle = figColor;
    ctx.moveTo(0, 0);
    ctx.lineTo(x1 * graphSize*4/10/RMax, -y1 * graphSize*4/10/RMax);
    ctx.lineTo(x2 * graphSize*4/10/RMax, -y2 * graphSize*4/10/RMax);
    ctx.lineTo(0, 0);
    ctx.fill();
    ctx.closePath();
    ctx.translate(-graphSize/2, -graphSize/2);
}

function drawDots() {

}