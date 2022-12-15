<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>JSP - Hello World</title>
    <style>
        body {background-color: #ffdd88;}
    </style>
</head>

<body>
    <h1><%= "Hellooo Wooorld!" %></h1><br>

    <a href="hello-servlet">Hello Servlet</a><br>

    <span>canvas start</span>

    <canvas id="mycanvas"></canvas>

    <span>canvas end</span>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <script type="module" src="./main.js"></script>
    <div class="form">
        <form id="form">
            <table class="select-table">
                <tr>
                    <td><label for="input_x">X:</label></td>
                    <td>
                        <select name="X" id="input_x">
                            <option value="-5">-5</option>
                            <option value="-4">-4</option>
                            <option value="-3">-3</option>
                            <option value="-2">-2</option>
                            <option value="-1">-1</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td><label for="input_y">Y:</label></td>
                    <td>
                        <input type="text" name="Y" id="input_y" maxlength="5" placeholder="(-3 ... 5)">
                    </td>
                </tr>
                <tr>
                    <td><label for="input_r">R:</label></td>
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
                    <td id="warning"> There's would be warning</td>
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
</body>
</html>