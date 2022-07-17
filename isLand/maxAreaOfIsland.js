/**
 * @description 岛屿的最大面积 max area of island
 * @param grid
 */
const maxAreaOfIsland = (grid) => {
    let resultArea = [];

    // 二维数组 传染算法
    const dfsHelper = (x, y, area) => {
        grid[x][y] = 0;
        area = area + 1;
        let maxArea = area;
        if(grid[x - 1] && grid[x - 1][y] === 1){
            maxArea = Math.max(maxArea, dfsHelper(x - 1, y, maxArea));
        }
        if(grid[x + 1] && grid[x + 1][y] === 1){
            maxArea = Math.max(maxArea, dfsHelper(x + 1, y, maxArea));
        }
        if(grid[x][y - 1] === 1){
            maxArea = Math.max(maxArea, dfsHelper(x, y - 1, maxArea));
        }
        if(grid[x][y + 1] === 1){
            maxArea = Math.max(maxArea, dfsHelper(x, y + 1, maxArea));
        }

        return maxArea;
    }

    for(let i = 0;i < grid.length;i ++){
        for(let j = 0;j < grid[0].length;j ++){
            let area = 0;
            if(grid[i][j] === 1){
                resultArea.push(dfsHelper(i, j, area));
            }
        }
    }

    return resultArea.length ? Math.max(...resultArea) : 0;
}