<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!doctype html>
<html lang="ko">
<head>
    <meta charset="utf-8">
</head>
<body>
정규식에서 의미를 같는 문자들 \^$.*+?()[]{}| <br>
문자 클래스 내부 ([...]) <br>
_<br>
물음표로 시작하는 그룹 (?...) 내부<br>
:=!<><br>
<>는 XRegExp 라이브러리에서만 사용하며 그룹 이름에 쓰인다<br>
|패턴문자|<br>
위 언급한 특수 문자를 제외한 모든 문자는 자신과 일치한다.<br>
|.|<br>
행 종결(줄바꿈 문자 캐리지 리턴 등)을 제외한 모든 자바스크립트 문자에 일치한다.<br>
정말 모든 문자에 일치하게 하려면 [\s\S\]를 사용한다.<br>
|문자 이스케이프(문자 하나에 일치)|<br>
\f, \n, \t, \r, \v <br>
\0, \u0000<br>
\x00, \xFF<br>
|문자 클래스 이스케이프(문자 집합 중 하나에 일치)|<br>
\d, [0-9]<br>
\D, [^0-9]<br>
\w, [A-Za-z0-9_]<br>
\W<br>
\s, \S<br>

<br>

/^(ab)$/.test('(ab)')
<div id="test1"></div>
/^\(ab\)$/.test('(ab)')
<div id="test2"></div>
/./.test(\'n')
<div id="test3"></div>
/[\s\S]/.test('\n')
<div id="test4"></div>


<script>
    window.onload = function(){
        document.getElementById('test1').innerHTML = /^(ab)$/.test('(ab)');
        document.getElementById('test2').innerHTML = /^\(ab\)$/.test('(ab)');
        document.getElementById('test3').innerHTML = /./.test('\n');
        document.getElementById('test4').innerHTML = /[\s\S]/.test('\n');

    }

</script>
</body>
</html>
