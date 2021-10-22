var MultiplicationFactory = {};
MultiplicationFactory.multiplicationTable = [];

/*
주석 : 
이름 : createMultiplicationTable
역할 : 곱셈 테이블 (예를 들어 구구단 같은 표를 만든다.) 
재료 : 
                                0 (startColumNumber)     1 2 3 4 .............................. n (endColumNumber)
        
0 (startRowNumber)              0 X 0 = 0     0 * 1 = 0   0 * 2 = 0 ........................... 0 * n = 0  
1
2
                3               3 * 1 = 0 .........
                4
.
.
m (endRowNumber)
*/

MultiplicationFactory.createMultiplicationTable = function( startRowNumber , endRowNumber, startColumNumber , endColumNumber) {
    
    while (startRowNumber <= endRowNumber) {
        this.multiplicationTable[startRowNumber] = MultiplicationFactory.createMultiplicationRow(count, startColumNumber, endColumNumber);
        ++startRowNumber;
    }
    return this.multiplicationTable;
}

/*
주석 : 
이름 : createMultiplicationRow
역할 : 곱셈 테이블의 행을 만든다. (구구단에 한단에 해당 된다.)
*/
MultiplicationFactory.createMultiplicationRow = function( rowNumber , startColumNumber , endColumNumber) {

    var multiplicationRow = [];
    while(startColumNumber <= endColumNumber) {
        multiplicationRow[startColumNumber] = MultiplicationFactory.createMultiplicationOperation(rowNumber, startColumNumber);
        ++startColumNumber;
    }
    return multiplicationRow;

}

/*
주석 : 
이름 : createMultiplicationOperation
역할 : 곱셈 연산식을 만든다.
*/
MultiplicationFactory.createMultiplicationOperation = function( rowNumber , columnNumber ) {
    var result = rowNumber * columnNumber;
    var operation = [];
    operation.push(rowNumber + " * " + columnNumber + " = " + result);
    return operation;
}

/*
    이름 : findMultiplicationItem
    역할 : multiplicationTable에서 한 아이템(곱셈식)을 찾는다.
*/
MultiplicationFactory.findMultiplicationItem = function(row, col) {
    return this.multiplicationTable[row][col];
}
