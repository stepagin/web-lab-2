<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="desctiption" content="ITMO 3 sem laboratory work Web 2">
    <meta name="keywords" content="ITMO, lab, web">
    <meta name="author" content="Ponamarev Stepan">
    <title>Lab 2 Web</title>
    <link rel="stylesheet" href="./main.css" type="text/css">
    <link rel="icon" href="./favicon.ico">
</head>

<body>
    <table>
        <tr id="header" class="gradient">
            <td id="group" class="shadow">
                <h2>P32151<br></h2>
                <h3>45332</h3>
            </td>
            <td id="name"  class="shadow">
                <h1>Понамарев Степан</h1>
                <h2>
                    Лабораторная работа №2
                </h2>
            </td>
        </tr>
    </table>
    <div id="graph-style">
        <canvas id="mycanvas">обновите браузер</canvas>
    </div>

    <div class="form">
        <form id="form">
            <table class="select-table">
                <tr>
                    <td class="rightcol"><label for="input_x">X:</label></td>
                    <td>
                        <select name="X" id="input_x">
                            <option value="-5">-5</option>
                            <option value="-4">-4</option>
                            <option value="-3">-3</option>
                            <option value="-2">-2</option>
                            <option value="-1">-1</option>
                            <option value="0" selected>0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td class="rightcol"><label for="input_y">Y:</label></td>
                    <td>
                        <input type="text" name="Y" id="input_y" maxlength="5" placeholder="(-3 ... 5)">
                    </td>
                </tr>
                <tr>
                    <td class="rightcol"><label for="input_r">R:</label></td>
                    <td id="input_r">
                        <input class="rCheckbox" type="checkbox" id="R1" name="R=1" value="1" checked>
                        <label for="R1">1</label>
                        <input class="rCheckbox" type="checkbox" id="R15" name="R=1.5" value="1.5">
                        <label for="R15">1.5</label>
                        <input class="rCheckbox" type="checkbox" id="R2" name="R=2" value="2">
                        <label for="R2">2</label>
                        <input class="rCheckbox" type="checkbox" id="R25" name="R=2.5" value="2.5">
                        <label for="R25">2.5</label>
                        <input class="rCheckbox" type="checkbox" id="R3" name="R=3" value="3">
                        <label for="R3">3</label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="submit" value="Проверить">
                    </td>
                    <td id="warning"></td>
                </tr>

                <tr>
                    <td>----------------</td>
                    <td>--------------------------</td>
                </tr>
                <tr>
                    <td>
                        <input type="button" id="clear" value="Очистить таблицу">
                    </td>
                </tr>

            </table>
            <table>
                <tr>
                    <td style="padding:1%;text-align:center;">
                        <h2>Results</h2>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" style="padding:1%">
                        <table id="results">
                            <thead>
                            <tr>
                                <th>Attempt #</th>
                                <th>X</th>
                                <th>Y</th>
                                <th>R</th>
                                <th>Result</th>
                                <th>Attempt time</th>
                                <th>Processing time</th>
                            </tr>
                            </thead>
                            <tbody id="items">
                            </tbody>
                        </table>
                    </td>
                    <td>
                    </td>
                </tr>
            </table>
        </form>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <script type="module" src="./main.js"></script>
</body>
</html>