package org.example;

public class SubjectTaskInfo {
    private int totalTasks;
    private int gradedTasks;

    public SubjectTaskInfo(int totalTasks, int gradedTasks) {
        this.totalTasks = totalTasks;
        this.gradedTasks = gradedTasks;
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