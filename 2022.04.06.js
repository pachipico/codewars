// John has invited some friends. His list is:

// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Could you make a program that

// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

// So the result of function meeting(s) will be:

// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// It can happen that in two distinct families with the same family name two people have the same first name too.

// 내 답안
function meeting(s) {
  return s
    .toUpperCase()
    .split(";")
    .map((v) => v.split(":").reverse())
    .sort((a, b) => (a[0] == b[0] ? a[1].localeCompare(b[1]) : a[0].localeCompare(b[0])))
    .map((v) => "(" + v.join(", ") + ")")
    .join("");
}

//모범 답안
function meeting(s) {
  let string = s
    .toUpperCase()
    .split(";")
    .map((x) => x.split(":").reverse().join(", "))
    .sort()
    .join(")(");
  return "(" + string + ")";
}

// join을 하고 sort 를 하면 됬던거였는데 조금 돌아서 간듯. 그래도 나름 만족하는 풀이가 나왔다.
