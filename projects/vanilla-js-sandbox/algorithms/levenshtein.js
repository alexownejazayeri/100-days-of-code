const source = "Deake";
const target = "Drake";

const levenshteinDistance = (s, t) => {
    let ld = 0;
    
    const n = s.length;
    const m = t.length;
    
    // Step 1, if either is empty return the 
    // length of the non-empty string
    m === 0 ? ld = n
    : n === 0 ? ld = m
    : console.log("no nonempty strings");

    // Step 2, construct a matrix
    // Containing 0...m rows and 0...n columns
    const row = new Array(n + 1).fill(0);
    const matrix = [...Array(m + 1)];

    // Step 4, examine each character of t (j from 1 to m)
    
    
    for (let char of t) {

    }
        /* if (i === 0) {
            return el.unshift('');
        } else {
            return el.unshift(t[i-1]);
        }
    }); */

    // Step 3, examine each character of s (i from 1 to n)
    let sArr = [""]
    
    for (let char of s) {
        sArr.push(char);
    }

    matrix.unshift(sArr);


    return matrix;
}

console.log(levenshteinDistance(source, target));