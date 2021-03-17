/*
Evan Chou
Coen60 Lab 8
Javascript for Pagerank algorithm
*/

function pageRank(a, b, c, i) {
    //a, b, and c are initial values and i is the desired max iteration
    var yahoo = a;
    var amazon = b;
    var microsoft = c;

    //used to be called in for loop
    var checkSize = Math.pow(10, -3); //10^-3

    //these are previous values to plug back in
    var prevX;
    var prevY;
    var prevZ;

    for (var j = 0; j < i; j++) {
        var x = yahoo;
        var y = amazon;
        var z = microsoft;

        //new values
        var newX;
        var newY;
        var newZ;

        //pagerank algorithm and equation done here
        newX = x * (1 / 2) + y * (1 / 2) + z * 0;
        prevX = Math.abs(newX - x);
        newY = x * (1 / 2) + y * 0 + z * 1;
        prevY = Math.abs(newY - y);
        newZ = x * 0 + y * (1 / 2) + z * 0;
        prevZ = Math.abs(newZ - z);

        //assign new values
        yahoo = newX;
        amazon = newY;
        microsoft = newZ;

        //done if it converges
        if (prevX < checkSize && prevY < checkSize && prevZ < checkSize) {
            console.log("With the initial values you put in, the PageRank algorithm shows that it converged after " + j + " iterations.");
            break;
        }
    }

    //print out
    console.log("Yahoo initial: " + a);
    console.log("Yahoo final: " + yahoo);
    console.log("Amazon initial: " + b);
    console.log("Amazon final: " + amazon);
    console.log("Microsoft initial: " + c);
    console.log("Microsoft final: " + microsoft);
}
pageRank(0.5, 0.25, 0.25, 100); //use this to test for values and convergence. This is just one example using 0.5 for a, 0.25 for b, and 0.25 for c, with 100 max iterations

/* Observations

Using PR(y)=PR(a)=PR(m)=1/3 as initial values, the algorithm converged after 25 iterations.

Using PR(y)=0.5, PR(a)=0.25, PR(m)=0.25 as initial values, the algorithm converged after 26 interations.

Using PR(y)=PR(a)=PR(m)=0.4 as initial values, the algorithm converged after 25 iterations.

*/