import java.rmi.Remote;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.function.IntBinaryOperator;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class solution {


}
3*2*1
// 3 2 1  => 1: 4, 2: 2, 3: 1

// 1
// 2
// 3
// 3 1
// 3
// 3 2 
// 3 2 1


// 4 3 2 1 => 1: 7, 2: 3, 3: 2, 4: 1
// 1
// 2
// 3
// 4
// 4 1
// 4
// 4 2
// 4
// 4 3
// 4 3 1
// 4
// 4 3 
// 4 3 2
// 4 3 2 1

// abaa -> bba -> ca

// 5 4 3 2 1 => 1: 11, 2: 7, 3: 4, 4: 2, 5: 1
// 11 7 4 2 1
// 1
// 2
// 3
// 4
// 5
// 5 1
// 5 
// 5 2
// 5 
// 5 3
// 5
// 5 4
// 5 4 1
// 5 
// 5 4
// 5 4 2
// 5 
// 5 4
// 5 4 3
// 5 4 3 1
// 5
// 5 4
// 5 4 3 
// 5 4 3 2
// 5 4 3 2 1

// 3 7
// 4 14
// 5 25

