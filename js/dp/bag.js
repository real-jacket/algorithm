/**
 * 题目描述：有n件物品和一个最多能背重量为w 的背包。第i件物品的重量是weight[i]，
 * 得到的价值是value[i] 。每件物品只能用一次，求解将哪些物品装入背包里物品价值总和最大。
 */

const size = 5;
const wList = [2, 3, 4];
const vList = [15, 20, 30];

function testWeightBagProblem(wList, vList, size) {
  const dp = Array(wList.length)
    .fill()
    .map((item) => Array(size + 1).fill(0));
  // 初始化第一行
  for (let i = wList[0]; i < size + 1; i++) {
    dp[0][i] = vList[0];
  }

  for (let i = 1; i < wList.length; i++) {
    for (let j = 0; j < size + 1; j++) {
      //  放 i 商品的时候,如果超出体积大小，不用比较
      if (j - wList[i] < 0) {
        dp[i][j] = dp[i - 1][j];
      } else {
        // 没有超出提及则需要比较不放与放的价值
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - wList[i]] + vList[i]);
      }
    }
  }

  console.table(dp);
  return dp[wList.length - 1][size];
}

const res = testWeightBagProblem(wList, vList, size);
console.log(res);

function testWeightBagProblem01(wList, vList, size) {
  const dp = Array(size + 1).fill(0);

  // 初始化第一行
  for (let i = wList[0]; i < size + 1; i++) {
    dp[i] = vList[0];
  }
  for (let j = 1; j < wList.length; j++) {
    for (let i = size; i >= wList[j]; i--) {
      dp[i] = Math.max(dp[i], dp[i - wList[j]] + vList[j]);
    }
  }

  return dp[size];
}

const nres = testWeightBagProblem01(wList, vList, size);
console.log('nres: ', nres);
