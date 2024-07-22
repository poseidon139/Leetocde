// Leetcode -#1282

import java.util.*;

class Solution {
    public static List<List<Integer>> groupThePeople(int[] groupSizes) {
        List<List<Integer>> res = new ArrayList<>();
        Map<Integer, List<Integer>> groups = new HashMap<>();

        for (int i = 0; i < groupSizes.length; i++) {
            int size = groupSizes[i];

            groups.putIfAbsent(size, new ArrayList<>());
            groups.get(size).add(i);

            if (groups.get(size).size() == size) {
                res.add(groups.get(size));
                groups.remove(size);
            }
        }

        return res;  
    }
    public static void main(String[] args) {
        int[] arr = {3, 3, 3, 3, 3, 1, 3}; // Example input
        List<List<Integer>> peopleGroup = groupThePeople(arr);
        Iterator<List<Integer>> group = peopleGroup.iterator();
        while (group.hasNext()) {
            List<Integer> currentGroup = group.next();
            System.out.println(currentGroup);
        }

    }
}