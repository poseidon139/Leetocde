//Leetcode-#2433
//here there is a property known as a^b=c 
//b=a^c

class Solution {
    public static  int[] findArray(int[] pref) {
        int[] result= new int[pref.length];
        result[0]=pref[0];
        for ( int i =1 ; i< pref.length ; i++){
            result[i]=pref[i-1]^pref[i];
        }
        return result;

    }


    public static void main(String[] args) {
       int[] arr={5,2,0,3,1};
       int[] result=findArray(arr);
       for (int i : result ){
        System.out.println(i);
       }
    }
}