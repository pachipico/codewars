// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

// Important
// Please look at the examples and clarifications below, to ensure you understand the task correctly :)

// Examples
// queueTime([5,3,4], 1)
// // should return 12
// // because when there is 1 till, the total time is just the sum of the times

// queueTime([10,2,3,3], 2)
// // should return 10
// // because here n=2 and the 2nd, 3rd, and 4th people in the
// // queue finish before the 1st person has finished.

// queueTime([2,3,10], 2)
// // should return 12
// Clarifications
// There is only ONE queue serving many tills, and
// The order of the queue NEVER changes, and
// The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
// N.B. You should assume that all the test input will be valid, as specified above.

// P.S. The situation in this kata can be likened to the more-computer-science-related idea of a thread pool, with relation to running multiple processes at the same time: https://en.wikipedia.org/wiki/Thread_pool
function queueTime(customers, n) {
  //TODO
  // 계산대 갯수만큼 배열을 만들고, 배열중에 가장 큰 값과 같아질때까지 나머지 배열로 추가한후
  // 가장 합산값이 높은걸 리턴해주는 식으로 풀면 될듯..?
  let threads = Array.from({ length: n }).map(() => 0);
  let time = 0;
  let index = 0;

  while (index == customers.length) {
    if (threads[index % n] == 0) {
      threads[index % n] = customers[index];
    }
    // if (threads[index % n] != 0) {
    //   threads[(index % n) + 1] = customers[index];
    // }

    threads.map((v) => (v > 0 ? v-- : v));
    time++;
    index++;
    console.log(time, index, threads);
  }
}

// 모범 답안
function queueTime(customers, n) {
  var arrs = new Array(n).fill(0);
  for (let t of customers) {
    let idx = arrs.indexOf(Math.min(...arrs));
    arrs[idx] += t;
    console.log(arrs);
  }
  return Math.max(...arrs);
}
// 못풀었다,, 풀이를 보니 arrs를 만들어 초기화를 한번 하고, arrs 중에서 가장 작은 수에 더하는 식으로 풀이한것 같다.. 많이 배웠다.
