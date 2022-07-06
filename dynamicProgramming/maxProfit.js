/**
 * @description 买卖股票的最佳时机（贪心）
 * @param prices
 */
const maxProfit = (prices) => {
    let maxprofit = 0;
    let minPrice = prices[0];
    for(let i = 0;i < prices.length - 1;i ++){
        maxprofit = Math.max(maxprofit, prices[i + 1] - minPrice);
        minPrice = Math.min(prices[i + 1], minPrice);
    }

    return maxprofit;
}