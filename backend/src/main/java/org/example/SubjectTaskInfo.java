package org.example;

public class SubjectTaskInfo {
    private int totalTasks;
    private int gradedTasks;
    private String className;

    public SubjectTaskInfo(int totalTasks, int gradedTasks, String className) {
        this.totalTasks = totalTasks;
        this.gradedTasks = gradedTasks;
        this.className = className;
    }

    public String getClassName() {
        return className;
    }

    public int getTotalTasks() {
        return totalTasks;
    }

    public int getGradedTasks() {
        return gradedTasks;
    }

    public double getGradingRatio() {
        return totalTasks == 0 ? 0 : (double) gradedTasks / totalTasks;
    }
}