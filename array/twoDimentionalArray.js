var averageTempDay1 = [72,75,79,79,81,81];
var averageTempDay2 = [81,79,75,75,73,72];


// two dimensional array
var averageTemp = [];
averageTemp[0] = [72,75,79,79,81,81];
averageTemp[1] = [81,79,75,75,73,72];
console.log(averageTemp);

function printMatrix(myMatrix){
    for(var i=0; i<myMatrix.length; i++){
        for(var j=0; j<myMatrix[i].length;j++){
            console.log(myMatrix[i][j]);
        }
    }
}

printMatrix(averageTemp);