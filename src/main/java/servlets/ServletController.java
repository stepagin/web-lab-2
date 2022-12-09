package servlets;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import model.Point;
import model.PointContaier;

import java.io.IOException;
import java.util.ArrayList;

@WebServlet(name = "ServletController", value = "/controller")
public class ServletController extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ServletContext servletContext = getServletContext();
        if(servletContext.getAttribute("dots") == null)
            servletContext.setAttribute("dots", new PointContaier());
        // if GET contents x_input, y_input and r_input throws data to AreaCheckServlet
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.sendError(HttpServletResponse.SC_FORBIDDEN);
    }
}
