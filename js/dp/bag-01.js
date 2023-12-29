var findMaxForm = function (strs, m, n) {
  const dp = new Array(m + 1).fill().map((item) => new Array(n + 1).fill(0));
  let zeroM, OneN;

  for (let str of strs) {
    zeroM = str.replace(/1/g, '').length;
    OneN = str.length - zeroM;
    for (let i = m; i >= zeroM; i--) {
      for (let j = n; j >= OneN; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i - zeroM][j - OneN] + 1);
      }
    }
  }
  return dp[m][n];
};

const strs = ['10', '0001', '111001', '1', '0'];
const m = 5;
const n = 3;

const res = findMaxForm(strs, m, n);
console.log('res: ', res);
