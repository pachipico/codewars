// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

// 내 답안
    public static String isSortedAndHow(int[] array) {
        List<Integer> list = IntStream.of(array).boxed().collect(Collectors.toList());
        List<Integer> sorted = list.stream().sorted().collect(Collectors.toList());
        List<Integer> desc = list.stream().sorted(Comparator.reverseOrder()).collect(Collectors.toList());
        if(list.equals(sorted)) return "yes, ascending";
        if(list.equals(desc)) return "yes, descending";
        return "no";
    }



// 모범답안
    public static String isSortedAndHow(int[] array) {
        if(IntStream.range(0, array.length-1).allMatch(i -> array[i] <= array[i+1]))
            return "yes, ascending";

        if(IntStream.range(0, array.length-1).allMatch(i -> array[i] >= array[i+1]))
            return "yes, descending";

        return "no";
    }