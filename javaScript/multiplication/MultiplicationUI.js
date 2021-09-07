var MultiplicationUI = {};
/*
    이름 : printMultiplicationTable
    역할 : 곱셈 테이블을 출력한다.
    재료

    table[1] = [1*1=1], [1*2=2], 
    table[2] = [2*1=1], [2*2=4],
*/
MultiplicationUI.printMultiplicationTable = function(startRowNumber , endRowNumber, startColumNumber , endColumNumber) {
    document.write("<table border = 1>");
    document.write("<tr>");
    for (k = startRowNumber; k <= endRowNumber; k++) {
        for (i = startRowNumber; i <= k; i++) {
            document.write("<td>");
            for (j = startColumNumber; j <= endColumNumber; j++) {
                var color = (i % 2 == 1) ? "<font color=blue>" : "<font color=orange>";
                var resultText = MultiplicationFactory.findMultiplyItem(i, j);
                // resultText는 하나의 아이템
                document.write(color + resultText + "<br/>");
            }
            document.write("</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}
