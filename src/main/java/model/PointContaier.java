package model;

import java.util.ArrayList;

public class PointContaier {
    private ArrayList<Point> points;
    private int count;

    public PointContaier() {
        points = new ArrayList<>();
        count = 0;
    }

    public ArrayList<Point> getPoints() {
        return points;
    }

    public int useCount() {
        count++;
        return count;
    }

    public void addPoint(Point p) {
        points.add(p);
    }

    public void clearAllPoints() {
        points.clear();
    }
}
