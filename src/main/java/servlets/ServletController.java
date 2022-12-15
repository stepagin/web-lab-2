package servlets;

import com.google.gson.Gson;
import jakarta.servlet.ServletContext;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import model.PointContainer;

import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "ServletController", value = "/table")
public class ServletController extends HttpServlet {
    private Gson gson = new Gson();
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ServletContext context = getServletContext();
        context.log("ServletController: doGet");

        if (request.getParameterMap().isEmpty()) {
            if (context.getAttribute("points") == null) {
                PointContainer table = new PointContainer();
                context.setAttribute("points", table);
                PrintWriter writer = response.getWriter();
                writer.print(gson.toJson(table.getPoints()));
                writer.flush();
                writer.close();
            } else {
                PointContainer table = (PointContainer) context.getAttribute("points");
                context.log(gson.toJson(table.getPoints()));
                PrintWriter writer = response.getWriter();
                writer.print(gson.toJson(table.getPoints()));
                writer.flush();
                writer.close();
            }
        } else if (checkNumberParameter(request, "x") && checkNumberParameter(request, "y") && checkNumberParameter(request, "r")) {
            context.getNamedDispatcher("AreaCheckServlet").forward(request, response);
        } else if (!checkNumberParameter(request, "x")) {
            request.setAttribute("warning", "Please, enter correct X");
            request.getRequestDispatcher("./index.jsp").forward(request, response);
        } else if (!checkNumberParameter(request, "y")) {
            request.setAttribute("warning", "Please, enter correct Y");
            request.getRequestDispatcher("./index.jsp").forward(request, response);
        } else if (!checkNumberParameter(request, "r")) {
            request.setAttribute("warning", "Please, enter correct R");
            request.getRequestDispatcher("./index.jsp").forward(request, response);
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.sendError(HttpServletResponse.SC_FORBIDDEN);
    }
    private boolean checkNumberParameter(HttpServletRequest req, String name) {
        try {
            if (req.getParameter(name) != null) {
                Double.parseDouble(req.getParameter(name).replace(",", "."));
                return true;
            } else {
                return false;
            }
        } catch (NumberFormatException e) {
            return false;
        }
    }
}
