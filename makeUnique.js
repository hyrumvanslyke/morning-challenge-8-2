// Write your solution below:

function makeUnique(s) {// FUNCTION TO REMOVE DUPLICATE CHARACTERS
    let newS = new Set(s.split(""))// USE SET TO REMOVE ANY REPEATING CHARACTERS
    return [...newS].join("")// JOIN BACK TOGETHER
  }

  console.log(makeUnique('hyrumiscool'))// LOGGED FOR TESTING