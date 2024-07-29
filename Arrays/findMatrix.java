// Leetcode -#2610

import java.util.*;
class Solution {
    public static List<List<Integer>> findMatrix(int[] nums) {
        List<List<Integer>> newMatix = new ArrayList<>();
        HashMap <Integer,List<Integer>> matrix= new HashMap<>(); 
        for (int i : nums){
            
            matrix.add(i, map.get(i))
        }
    }
    
}

class findMatrix{
    public static void main(String[] args) {
        int[] arr = {1,3,4,1,2,3,1}; // Example input
        List<List<Integer>> twoDimensionalArray =Solution.findMatrix(arr);
        Iterator<List<Integer>> arrTwo =  twoDimensionalArray.iterator();
        while ( arrTwo.hasNext()) {
            List<Integer> currentGroup =  arrTwo.next();
            System.out.println(currentGroup);
        }
    }
}