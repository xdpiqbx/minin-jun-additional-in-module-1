const winnerTicket = (first, last) => {
  const tickets = [];
  for (let i = first; i <= last; i += 1) {
    if (i % 3 === 0 && i % 7 === 0) {
      if (i % 5 !== 0 && i % 2 !== 0) {
        tickets.push(i);
      }
    }
  }
  // return Math.max(...tickets); // так
  return tickets[tickets.length - 1]; // или так
};

console.log(winnerTicket(1016, 1937));
// 1911
