package model;

import java.util.ArrayList;

public class PointContainer {
    private ArrayList<Point> points;
    private int count;

    public PointContainer() {
        points = new ArrayList<>();
        count = 0;
    }

    public ArrayList<Point> getPoints() {
        return points;
    }

    public int getCount() {
        return count;
    }

    public void addPoint(Point p) {
        points.add(p);
        count++;
    }

    public void clearAllPoints() {
        points.clear();
        count = 0;
    }
}
