# JavaScript


// 273

`클라이언트` - **jQuery** 를 이용해 클라이언트 애플리케이션을 개발   
    `JSON` - 데이터 주고받기   
`서버` - **Node.js** 를 통해 서버 프로그램 개발   

<hr>

// 274

`객체` - 속성과 동작을 한데 모아둔 것
`메서드` - 동작

```JavaScript
document.write("<h1>텍스트</h1>");
```
  - document 객체의 write() 메서드 호출
  - HTML 문서에 ```"<h1>텍스트</h1>"``` 추가   

<hr>

#### 내부 자바스크립트

```JavaScript
<script>
  document.write("Hello World!");
</script>
```   


#### 외부 자바스크립트

```JavaScript
<script src="myscript.js"></script>
```


#### 인라인 자바스크립트

```JavaScript
<button type="button" onclick="alter('반갑습니다')">버튼을 누르세요!</button>
```

<hr>

// 279

```JavaScript
  document.getElementById("heading1").innerHTML = "My HomePage";
```
  - 웹 페이지에서 특정한 요소를 찾아서 그 콘텐츠 변경
  - id 가 heading1인 헤딩요소를 찾아서 내용을 바꾼다.


// 289

```JavaScript
  var myCar = {moder:"bmz", color:"red", hp:100};
```

>```JavaScript
>  document.write(myCar.model + "<br>");
>  document.write(myCar.color + "<br>");
>  document.write(myCar.hp + "<br>);
>```

<hr>

// 294 

- `parseInt()` - 문자열을 숫자로 변환한다.
- `String()` - 숫자를 문자열로 반환한다.


#### `prompt()` 함수

```JavaScript
  <script>
    var age = prompt("나이를 입력하세요", "만 나이로 입력합니다.");
  </script>
```

  - 항상 사용자 입력을 문자열로 반환
    - ```number = parseInt(input);``` -> 문자열 input을 숫자 number로 반환

