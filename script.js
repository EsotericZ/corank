let playerA = 1200;
let playerB = 1250;

const k = 20;

let favorite = 0;
let underdog = 0;

const expected = (playerLevelA, playerLevelB) => {
    if (playerLevelA > playerLevelB) {
        favorite = playerLevelA;
        underdog = playerLevelB;
    } else {
        favorite = playerLevelB;
        underdog = playerLevelA;
    }
    
    const diffFavorite = (favorite - underdog);
    const diffUnderdog = (underdog - favorite);
    
    const expFav = 1/((Math.pow(10,(-diffFavorite/400)))+1)
    const expUnd = 1/((Math.pow(10,(-diffUnderdog/400)))+1)
    
    console.log('Favorite', expFavorite)
    console.log('Underdog', expUnderdog)
    return expFav, expUnd
}

expected(playerA, playerB);