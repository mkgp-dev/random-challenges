/*
(October 17, 2025) Find the Itinerary in Alphabetical Order
You are given a list of airline tickets, where each ticket is a pair [from, to] representing a flight from one airport to another.
Your task is to reconstruct the complete travel route in the correct order.
All trips start from airport "A".
If there are multiple possible routes, return the one that comes first in alphabetical order (when read as a single string).

Test cases:
console.log(findPath([["C", "F"], ["A", "C"], ["I", "Z"], ["F", "I"]]));
// ["A", "C", "F", "I", "Z"]
console.log(findPath([["A","C"],["A","B"],["C","B"],["B","A"],["B","C"]]));
// ["A","B","A","C","B","C"]
console.log(findPath([["Y", "L"], ["D", "A"], ["A", "D"], ["R", "Y"], ["A", "R"]]));
// ["A", "D", "A", "R", "Y", "L"]
*/

const findPath = (array) => {
  // i was recommended to use Hierholzer's Algorithm
  // https://www.geeksforgeeks.org/dsa/hierholzers-algorithm-directed-graph/
  const hierAlgo = (adj) => {
    // All trips start from airport "A".
    const currPath = ['A'];
    const circuit = [];

    while (currPath.length) {
      const currNode = currPath[currPath.length - 1];
      // since this is a Map so i must grab the list using /get/
      const list = adj.get(currNode);
      if (list && list.length) {
        const nextNode = list.pop();
        currPath.push(nextNode);
      } else {
        circuit.push(currPath.pop());
      }
    }

    return circuit;
  };

  // pairing tickets [from, to]
  const m = new Map();
  for (const [from, to] of array) {
    if (!m.has(from)) m.set(from, []);
    m.get(from).push(to);
  }

  // sort the list alphabetically > reverse so we can pop the least
  for (const [_, list] of m) {
    list.sort();
    list.reverse();
  }

  // using hierholzer's algo
  const trip = hierAlgo(m);

  /* debug purposes
  for (const [key, value] of m) {
    console.log(key, value);
  }
  console.log('new array', trip);
  */

  return trip.reverse();
};