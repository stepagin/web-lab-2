package servlets;

import com.google.gson.Gson;
import jakarta.servlet.*;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;
import model.Point;
import model.PointContainer;

import java.io.IOException;
import java.io.PrintWriter;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Locale;

public class AreaCheckServlet extends HttpServlet {

    private Gson gson = new Gson();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        long startTime = System.nanoTime();
        ServletContext context = getServletContext();
        HttpSession session = req.getSession();
        context.log("AreaCheckServlet: doGet");
        PointContainer table;
        if (context.getAttribute("points") == null) {
            table = new PointContainer();
        } else {
            table = (PointContainer) context.getAttribute("points");
        }

        Double x = Double.parseDouble(req.getParameter("x"));
        Double y = Double.parseDouble(req.getParameter("y"));
        Double r = Double.parseDouble(req.getParameter("r"));
        if (r < 1 || r > 3) {
            req.setAttribute("warning", "Value of R must be in range [1; 3]");
            req.getRequestDispatcher("./index.jsp").forward(req, resp);
            return;
        } else if (x < -5 || x > 3.5) {
            req.setAttribute("warning", "Value of X must be in range [-5; 3]");
            req.getRequestDispatcher("./index.jsp").forward(req, resp);
            return;
        } else if (y <= -3.5 || y >= 5) {
            req.setAttribute("warning", "Value of Y must be in range (-3; 5)");
            // resp.sendRedirect(req.getContextPath() + "/");
            req.getRequestDispatcher("./index.jsp").forward(req, resp);
            return;
        }


        Point point = new Point(x, y, r, checkHit(x, y, r), LocalDateTime.now().format(DateTimeFormatter.ofPattern("MMMM, dd, yyyy HH:mm:ss", Locale.US)));


        point.setAttampt(table.getCount()+1);
        point.setDuration((System.nanoTime() - startTime) / 1000000.0F);
        table.addPoint(point);
        context.setAttribute("points", table);
        PrintWriter writer = resp.getWriter();
        writer.print(gson.toJson(table.getPoints()));
        writer.flush();
        writer.close();
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.sendError(HttpServletResponse.SC_BAD_GATEWAY);
    }

    private boolean checkHit(double x, double y, double r) {
        if (x > 0 && y < 0) {
            return false;
        } else if (y <= x + r && x <= 0 && y >= 0) {
            return true;
        } else if (x >= 0 && y > 0 && x <= r/2 && y <= r) {
            return true;
        } else if (x * x + y * y <= r * r && x <= 0 && y <= 0) {
            return true;
        }
        return false;
    }
}
