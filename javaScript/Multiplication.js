
 

var MultiplicationFactory = {};

/*
  주석 : 
  이름 : createMultiplyTable
  역활 : 곱셈 테이블 (예를 들어 구구단 같은 표를 만든다.) 
  
  
  재료 : 
  
                                0 (startColumNumber)     1 2 3 4 .............................. n (endColumNumber)

        
0 (startRowNumber)              0 X 0 = 0     0 * 1 = 0   0 * 2 = 0 ........................... 0 * n = 0  
1
2
                3               3 * 1 = 0 .........
                4
.
.
.
.
.
m (endRowNumber)
  
  

 */
var startColumNumber = 1;
var endColumNumber = 2;
var startRowNumber = 3;
var endRowNumber = 4;

MultiplicationFactory.createMultiplyTable = function( startColumNumber , endColumNumber , startRowNumber , endRowNumber ) {

    var count = startRowNumber;
    var multiplyTable = [];
    while (count <= endRowNumber) {
        multiplyTable.push(MultiplicationFactory.createMultiplyRow(count, startColumNumber, endColumNumber));
        ++count;
    }
    console.log(multiplyTable);
    return multiplyTable
}

 

/*
  주석 : 
  이름 : createMultiplyRow
  역활 : 곱셈 테이블 의 열을 만단다. (구구단에 한단에 해당 된다.)
  
 
 */
MultiplicationFactory.createMultiplyRow = function( rowNumber , startColumNumber , endColumNumber) {

    var multiplyRow = [];
    while(startColumNumber <= endColumNumber) {
        multiplyRow.push(MultiplicationFactory.createMultiplicationOperation(rowNumber, startColumNumber));
        ++startColumNumber;
    }
    return multiplyRow;

}

 

 

/*
  주석 : 
  이름 : createMultiplicationOperation
  역활 : 곱셈 연산식을 만든다.
  
 
 */
MultiplicationFactory.createMultiplicationOperation = function( rowNumber , columNumber ) {
    var result = rowNumber * columNumber;
    var operation = rowNumber + " * " + columNumber + " = " + result;
    var color = (rowNumber % 2 == 1) ? "blue" : "orange";  
    var multiplicationOperation = {};
    multiplicationOperation = {operation, color};
    return multiplicationOperation
}
