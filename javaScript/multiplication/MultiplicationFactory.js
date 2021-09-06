var MultiplicationFactory = {};
MultiplicationFactory.multiplyTable = [];

/*
주석 : 
이름 : createMultiplyTable
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

MultiplicationFactory.createMultiplyTable = function( startRowNumber , endRowNumber, startColumNumber , endColumNumber) {
    
    var count = startRowNumber;
    while (count <= endRowNumber) {
        this.multiplyTable[count] = MultiplicationFactory.createMultiplyRow(count, startColumNumber, endColumNumber);
        ++count;
    }
    return this.multiplyTable;
}

/*
주석 : 
이름 : createMultiplyRow
역할 : 곱셈 테이블의 행을 만든다. (구구단에 한단에 해당 된다.)
*/
MultiplicationFactory.createMultiplyRow = function( rowNumber , startColumNumber , endColumNumber) {

    var multiplyRow = [];
    while(startColumNumber <= endColumNumber) {
        multiplyRow[startColumNumber] = MultiplicationFactory.createMultiplicationOperation(rowNumber, startColumNumber);
        ++startColumNumber;
    }
    return multiplyRow;

}

/*
주석 : 
이름 : createMultiplicationOperation
역할 : 곱셈 연산식을 만든다.
*/
MultiplicationFactory.createMultiplicationOperation = function( rowNumber , columNumber ) {
    var result = rowNumber * columNumber;
    var operation = [];
    operation.push(rowNumber + " * " + columNumber + " = " + result);
    return operation;
}

/*
    이름 : findMultiplyItem
    역할 : multiplicationTable에서 한 아이템(곱셈식)을 찾는다.
*/
MultiplicationFactory.findMultiplyItem = function(row, col) {
    return this.multiplyTable[row][col];
}
