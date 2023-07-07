# Practice : Todo List

[Blog](https://velog.io/@jin_s/WIL-23.07.07)

- add, delete, done
- typescript, tailwindcss, styled-components

### Trouble Shooting

<details><summary>isComposing </summary>

Enter키로 input값을 받기 위한 KeyChange를 설정하면서 커서가 해당되어있는 마지막 글자가 함께 입력되는 문제가 발생했다.
단순하게 빈 값이 들어올때를 막는다고 해결되지 않아 검색을 해보았고, 검색을 해보니 크롬브라우저 상의 한글 문제인 것으로 보였다.
자음 모음이 조합되어 구성되는 문자이다 보니 키보드 커서가 존재하는 상황에 이벤트핸들러가 2번 호출되는 문제라고 한다.
isComposing의 경우 입력문자가 조합문자인지 아닌지를 boolean 타입으로 반환하는 프로퍼티라고 한다.
따라서 해당 프로퍼티를 조건에 추가해주도록 한다.

</details>

<details><summary>isComposing </summary>

사이트를 새로 구동할 경우 id가 계속 1부터 시작하는 문제 발생
본래 기획의 경우 DB에 저장하지 않고 post, delete의 기능구현에 의의가 있던터라 id를 `const nextId = useRef(1);` 로 선언하고 이후 `nextId.current++`로 현재 선언된 todolist의 id에서 +1씩 하는 방식이었다.
하지만 DB에 저장하게 되면서 VS code를 재구동할 경우 `nextId.current`가 1로 인식되어 1부터 생성, 완료나 삭제시 id를 통한 식별때문에 id:1로 만들어진 모든 TODO가 삭제, 완료되는 문제 발생

따라서 `const currentId = lists.length > 0 ? lists[lists.length - 1].id : 0;`로 현재 list의 마지막 id값을 확인한 후 그 id값에 +1씩하게 되는 방법으로 변경하게 되었다.

</details>

[reference](https://github.com/preCrew/MinHyung/blob/master/Projects/SoloProjects/todolist/src/components/TodoList.tsx)
