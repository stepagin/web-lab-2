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
                        <input type="checkbox" id="R=1" name="R=1" checked>
                        <label for="R=1">1</label>
                        <input type="checkbox" id="R=1.5" name="R=1.5">
                        <label for="R=1.5">1.5</label>
                        <input type="checkbox" id="R=2" name="R=2">
                        <label for="R=2">2</label>
                        <input type="checkbox" id="R=2.5" name="R=2.5">
                        <label for="R=2.5">2.5</label>
                        <input type="checkbox" id="R=3" name="R=3">
                        <label for="R=3">3</label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="submit" value="Проверить">
                    </td>
                    <td id="warning"></td>
                </tr>

            </table>
        </form>
    </div>
</body>
</html>