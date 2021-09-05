var MultiplicationUI = {};
/*
    이름 : printMultiplicationTable
    역할 : 곱셈 테이블을 출력한다.
*/
MultiplicationUI.printMultiplicationTable = function(table,startRowNumber, endRowNumber, endColumNumber) {
    // console.log(startRowNumber);
    var resultTable = table;
    document.write('<table border="1">');
    for (i = startRowNumber; i <= endRowNumber; i++) {
        document.write("<tr>");
        for (j = startRowNumber; j <= i; j++) {
            var color = (j % 2 == 1) ? "blue" : "orange";
            document.write(j + "단 : " + color + "<br/>", resultTable[j + "단"].join(""));
        }
        document.write("</tr>");
        document.write("------------------<br/>")
    }
    document.write("</table>");
    return resultTable;
}

