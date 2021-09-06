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
        // 행별 최대 출력 갯수
        var maxCount = endRowNumber - startRowNumber + 1 + 1;

        document.write("<tr>");
        for (j = startRowNumber; j <= maxCount; j++) {
            var color = (i % 2 == 1) ? "blue" : "orange";
            
            if(i > j) {
                document.write("<th><font color=" + color + ">"  + "</th>");
                document.write("<td><font color=" + color + ">"  + "</td>")
            } else {
                document.write("<th><font color=" + color + ">" + i + "단" + "</th>");
                document.write("<td><font color=" + color + ">" + resultTable[i + "단"].join("") + "</td>")
            }
        }
        document.write("</tr>");

        // document.write("<tr>");
        // for (j = startRowNumber; j <= i; j++) {
        //     var color = (j % 2 == 1) ? "blue" : "orange";
        //     document.write("<th><font color=" + color + ">" + j + "단" + "</th>");
        //     document.write("<td><font color=" + color + ">" + resultTable[j + "단"].join("") + "</td>")
        // }
        // document.write("</tr>");
    }
    document.write("</table>");
    return resultTable;
}
