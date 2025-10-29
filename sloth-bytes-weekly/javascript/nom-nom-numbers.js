/*
(October 29, 2025) Nom Nom Numbers
A number can "eat" the number to its right if it’s larger than that number.
When it eats, it becomes the sum of both numbers.
Keep repeating this process from left to right until no more eating can happen.

Test cases:
nom_nom([5, 3, 7])
=> [15]
nom_nom([5, 3, 9])
=> [8, 9]
nom_nom([1, 2, 3])
=> [1, 2, 3]
nom_nom([2, 1, 3])
=> [3, 3]
nom_nom([8, 5, 9])
=> [22]
nom_nom([6, 5, 6, 100])
=> [17, 100]
*/

const nom_nom = (arr) => {
  return arr.reduce((prev, data) => (
    /*
    {
    const n = prev[prev.length - 1];
    if (n > data) prev[prev.length - 1] = n + data;
    else prev.push(data);
    return prev;
    }
    */
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_operator
    prev[prev.length - 1] > data ? (prev[prev.length - 1] += data, prev) : (prev.push(data), prev)
  ), []); 
};
