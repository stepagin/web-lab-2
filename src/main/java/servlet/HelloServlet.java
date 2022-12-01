package servlet;

import java.io.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;

@WebServlet(name = "helloServlet", value = "/hello-servlet")
public class HelloServlet extends HttpServlet {
    private String message;

    public void init() {
        message = "popa!";
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("text/html");
        response.setHeader("Cookie", "Income=0");
        // Hello
        PrintWriter out = response.getWriter();
//        out.println("<html><body>");
        out.println("<h1>" + message + "</h1>");
//        out.println("boba aboba</body></html>");
    }

    public void destroy() {

    }
}