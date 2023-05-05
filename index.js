// code your solution here
function superbowlWin(array) {
    //My answer
    const win = array.find(game => game.result === "W");
    if (win) {
        return win.year;
    }

    //Answer from google assistance 
    // const win = array.find(function(game) {
    //     return game.result === "W";
    // });
    // return win ? win.year : undefined;
}