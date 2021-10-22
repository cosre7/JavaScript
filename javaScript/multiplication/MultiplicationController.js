var MultiplicationController = {};

/*
    인풋값을 모델에게 주고 테이블을 얻는다.
*/
MultiplicationController.getTable = function(startRowNumber, endRowNumber, endColumNumber) {
    var startColumNumber = 1;
    var startRowNumber = Number(document.getElementById("startRowNumber").value);
    var endRowNumber = Number(document.getElementById("endRowNumber").value);
    var endColumNumber = Number(document.getElementById("endColumNumber").value);
    
    MultiplicationFactory.createMultiplicationTable(startRowNumber,endRowNumber, startColumNumber, endColumNumber);
    if (startRowNumber > endRowNumber) {
        alert("첫 번째 단이 마지막 단보다 더 작아야 합니다.");
        history.go(0);
    } else {
        MultiplicationUI.printMultiplicationTable(startRowNumber , endRowNumber, startColumNumber , endColumNumber);
    }
}
