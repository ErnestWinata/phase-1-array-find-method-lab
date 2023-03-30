// code your solution here
function superbowlWin(year) {
    const winYear = year.find(score => score.result === "W");
    return winYear ? winYear.year : undefined;
  }

  
  
  
  