var MultiplicationController = {};

/*
    인풋값을 모델에게 주고 테이블을 얻는다.
*/
MultiplicationController.getTable = function(startRowNumber, endRowNumber, endColumNumber) {
    var startColumNumber = 1;
    var startRowNumber = document.getElementById("startRowNumber").value;
    var endRowNumber = document.getElementById("endRowNumber").value;
    var endColumNumber = document.getElementById("endColumNumber").value;
    if (startRowNumber > endRowNumber) {
        alert("첫 번째 단이 마지막 단보다 더 작아야 합니다.");
        history.go(0);
    } else {
        var createTable = MultiplicationFactory.createMultiplyTable(startColumNumber , endColumNumber , startRowNumber , endRowNumber);
        MultiplicationUI.printMultiplicationTable(createTable,startRowNumber, endRowNumber, endColumNumber);
    }
}
