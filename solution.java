public class solution {
    static int shiftedDiff(String first, String second) {
        int cnt = 0;
        if (first.equals(second)) return 0;
        if (second.equalsIgnoreCase(first) || new StringBuilder(first).reverse().toString().equals(second) || first.trim().length() == 0 || second.trim().length() == 0)
            return -1;
        while (!first.equals(second)) {
            cnt++;
            String s = rotate(first);

            first = s;


            if (cnt > first.length() + 1) return -1;
        }
        return cnt;
    }

    private static String rotate(String st) {
        int length = st.length();
        StringBuilder sb = new StringBuilder(st.substring(length - 1));
        return sb.append(st, 0, length - 1).toString();
    }
}

