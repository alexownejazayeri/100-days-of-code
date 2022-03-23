const source = "Svetlana";
const target = "Yelena";

const levenshteinDistance = (s, t) => {
  let ld = 0;

  const n = s.length;
  const m = t.length;

  // If either string empty return len non-empty strin
  if (m === 0) {
    ld = n;
  }

  if (n === 0) {
    ld = m;
  }

  // Construct the matrix
  const skeleton = new Array(m + 1).fill([]);
  const matrix = skeleton.map((el) => new Array(n + 1).fill(null));

  matrix[0] = [...Array(n + 1).keys()];
  matrix.forEach((el, j) => (j > 0 ? (el[0] = j) : null));

  // Build string arrays for cost evaluations
  const sArr = [""];
  const tArr = [""];

  for (let char of s.toLowerCase()) {
    sArr.push(char);
  }

  for (let char of t.toLowerCase()) {
    tArr.push(char);
  }

  // Calculate d[i, j] for all values 
  matrix.forEach((row, j) => {
    if (j > 0) {
      row.map((rowJElementAtColumnI, i) => {
        if (i > 0) {
          const cost = !(sArr[i] === tArr[j]);
          // console.log(`(${j},${tArr[j]}), (${i}, ${sArr[i]}), ${cost}`); <- uncomment to debug cost eval

          const insert = matrix[j - 1][i] + 1;
          const remove = matrix[j][i - 1] + 1;
          const substitute = matrix[j - 1][i - 1] + cost;

          matrix[j][i] = Math.min(insert, remove, substitute);
        }
      });
    }
  });

  ld = matrix[m][n];
  return ld;
};

const ld = levenshteinDistance(source, target);
console.log(ld);