// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

// At the end of the first year there will be: 
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be: 
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.
// More generally given parameters:

// p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10
// Note:
// Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

// 내 답안
class Arge {
    public static int nbYear(int p0, double percent, int aug, int p) {
      System.out.printf("p0: %d, percent: %f, aug: %d, p: %d\n",p0, percent, aug, p );
        int pop = p0;
        int years = 0;
        while (pop < p){
            years++;
            pop = oneYear(pop, percent, aug);
        }
        return years;
    }
    
    private static int oneYear(int p0, double percent, int aug){
        return (int)Math.floor(p0 + p0*percent/100 + aug);
    }
}
// 모범답안
class Arge {
    
    public static int nbYear(int p0, double percent, int aug, int p) {
        if (p0>=p) return 0;
        else return nbYear((int) (p0+aug+p0*(percent/100)), percent, aug, p) + 1;
    }
}

// 나도 재귀로 풀려했는데 테스트코드가 몇번씩 계속 돌아서 cnt가 초기화가 안됬다./..

    class Arge {
    
       private static int cnt = 0;

    public static int nbYear(int p0, double percent, int aug, int p) {
        System.out.printf("p0: %d, percent: %f, aug: %d, p: %d\n",p0, percent, aug, p );
        cnt++;
        int pop = (int)Math.floor(p0 + p0*percent/100 + aug);

        return pop > p ? pop : nbYear(pop, percent, aug, p);
    }
}