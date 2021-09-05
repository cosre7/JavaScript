var MultiplicationController = {};

// var model = MultiplicationFactory;
// var view = MultiplicationUI;
/*
    인풋값을 모델에게 주고 테이블을 얻는다.
*/
MultiplicationController.getTable = function(startRowNumber, endRowNumber, endColumNumber) {
    var startColumNumber = 1;
    var startRowNumber = document.getElementById("startRowNumber").value;
    var endRowNumber = document.getElementById("endRowNumber").value;
    var endColumNumber = document.getElementById("endColumNumber").value;
    var createTable = MultiplicationFactory.createMultiplyTable(startColumNumber , endColumNumber , startRowNumber , endRowNumber);
    MultiplicationUI.printMultiplicationTable(createTable,startRowNumber, endRowNumber, endColumNumber);
    // console.log(MultiplicationController.giveTable(createTable));
}

// /*
//     테이블을 뷰에게 준다.
// */
// MultiplicationController.giveTable = function(createTable,startRowNumber, endRowNumber, endColumNumber) {
//     // MultiplicationUI = {'printMultiplicationTable' : createTable};
//     console.log("성공");
//     // console.log(createTable);
//     var table = createTable;
//     MultiplicationUI.printMultiplicationTable(table,startRowNumber, endRowNumber, endColumNumber);
//     // return table
// }
