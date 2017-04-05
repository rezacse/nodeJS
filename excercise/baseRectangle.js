// var rect = {
//     area: function(x,y){
//         return (x*y);
//     },
//     perimeter: function(x,y){
//         return 2*(x*y);        
//     }
// }

// function solveRect(x, y){
//     if(x<0 || y<0){
//         console.log("Value can't be negative!!");        
//     }
//     else {
//         console.log("Area : ", rect.area(x,y));        
//         console.log("Perimeter : ", rect.perimeter(x,y));
//     }
// }

// solveRect(2, 5);
// solveRect(-5,5);


module.exports = function(x, y, callback) {
    try {
        if (x < 0 || y < 0) {
            throw new Error("Rectangle dimensions should be greater than zero: l = " +
                x + ", and b = " + y);
        } else
            callback(null, {
                perimeter: function() {
                    return (2 * (x + y));
                },
                area: function() {
                    return (x * y);
                }
            });
    } catch (error) {
        callback(error, null);
    }
}