/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬至多m (1 <= m < n)个台阶。你有多少种不同的方法可以爬到楼顶呢？
 */

function climbStairs(m, n) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i < n + 1; i++) {
    console.log('dp: ', dp);
    for (let j = 1; j <= m; j++) {
      if (i >= j) {
        dp[i] += dp[i - j];
      }
    }
  }

  return dp[n];
}

const res = climbStairs(2, 3);
console.log('res: ', res);
