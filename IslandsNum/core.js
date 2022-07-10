/**
 * @description 岛屿数量
 * @param grid
 */
const numsIsland = (grid) => {
    let count = 0;
    const findIsland = (x, y) => {
        grid[x][y] = 0; // todo
        if(grid[x-1] && grid[x - 1][y]){
            grid[x-1]
        }
        if(grid[x+1] && grid[x+1][y]){
            grid[x+1]
        }
    }
    for(let i = 0;i < grid.length;i ++){
        for(let j = 0;j < grid[i].length;j ++){
            if(grid[i][j] === 1){
                findIsland(i, j);
                count ++;
            }
        }
    }

    return count;
}