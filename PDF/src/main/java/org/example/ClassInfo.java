package org.example;


public class ClassInfo {
    private int villageMembers;
    private int cityMembers;

    public ClassInfo(int villageMembers, int cityMembers) {
        this.villageMembers = villageMembers;
        this.cityMembers = cityMembers;
    }

    public int getVillageMembers() {
        return villageMembers;
    }

    public int getCityMembers() {
        return cityMembers;
    }
}
