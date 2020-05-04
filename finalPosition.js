function finalPosition(moves) {
  let finalY = 0;
  let finalX = 0;
  for (const move of moves) {
    switch (move) {
      case 'north':
        finalY++;
        break;
      case 'south':
        finalY--;
        break;
      case 'east':
        finalX++;
        break;
      case 'west':
        finalX--;
        break;
    }
  }

  return [finalX, finalY];
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];

console.log(finalPosition(moves));
