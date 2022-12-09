package servlets;

import com.sun.net.httpserver.HttpContext;
import jakarta.servlet.*;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;
import model.Point;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

@WebServlet(name = "AreaCheckServlet", value = "/table")
public class AreaCheckServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ServletContext context = getServletContext();
//        request.setAttribute("data", arr);
        PrintWriter out = response.getWriter();
        out.println("<html>");
        out.println("<h1>Hello mazafacka</h1>");
        out.println("<h2>" + context.getAttribute("points") + "</h2>");
        out.println("</html>");

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.sendError(HttpServletResponse.SC_FORBIDDEN);
    }
}
