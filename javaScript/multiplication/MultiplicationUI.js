var MultiplicationUI = {};
/*
    이름 : printMultiplicationTable
    역할 : 곱셈 테이블을 출력한다.
*/
MultiplicationUI.printMultiplicationTable = function(table,startRowNumber, endRowNumber) {
    // console.log(startRowNumber);
    var resultTable = table;
    document.write('<table border="1">');

    document.write("<tr>");
    for (i = startRowNumber; i <= endRowNumber; i++) {
        for (j = startRowNumber; j <= i; j++) {
            var color = (j % 2 == 1) ? "<font color=blue>" : "<font color=orange>";
            document.write("<td>" + color + j + "단 <br/>");
            document.write(color + resultTable[j + "단"].join("") + "</td>")
        }
        document.write("</tr>");
    }
    document.write("</table>");
    return resultTable;
}
