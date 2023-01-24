public class d {
    public static boolean validParentheses(String parens) {
        parens.replaceAll("\\w", "");
        parens.replaceAll("(?<=\\().*(?=\\).*)", "\\1");
        System.out.println(parens);
    }
}

