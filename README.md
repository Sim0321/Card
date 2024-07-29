# 공통 컴포넌트

> **Text**

- span태그를 기본으로
- typography, color, display, textAlign, fontWeight, bold를 props로 받음

---

> **Button**

- color, size, weak, full, disabled를 props로 받음
- weak가 true이면 배경색과 글자색이 반대로
- full이 true이면 width가 100%로
- disabled가 true이면 opacity를 0.26주고 cursor를 default로

---

> **Input**

- aria-invalid를 props로 받아 유효성 검사 표현

---

> **TextField**

- HTMLInputElement를 상속받음
- label, hasError, helpMessage를 props로 받음
- label, helpMessage는 React.ReactNode
- focused의 상태를 관리해 label의 color 우선 순위 설정

---

> **Flex**

- align, justify, direction을 props로 받음

---

> **Dimmed**

- children을 props로 받음
- 모달의 검정 배경

---

> **Alert**

- open, title, description, buttonlabel, onButtonClick을 props로 받음

> **Top**

- title, subtitle을 props로 받음

> **ListRow**

- left,contents, right, withArrow, onClick, as를 props로 받음

> **Icon**

- name, size를 props로 받음. name은 assets > icons > index.ts의 이름

> **FixedBottomButton**

- label, onClick, disabled를 props로 받음

> 컴포넌트 합성

```js
//Cardlist.tsx
return (
  <div>
    <ul>
      {data.map((card, index) => {
        return (
          <ListRow
            key={card.id}
            contents={
              <ListRow.Texts title={`${index + 1}위`} subTitle={card.name} />
            }
            right={card.payback != null ? <div>{card.payback}</div> : null}
            withArrow={true}
          />
        );
      })}
    </ul>
  </div>
);

// ListRow.tsx
interface ListRowProps {
  left?: React.ReactNode;
  contents: React.ReactNode;
  right?: React.ReactNode;
  withArrow?: boolean;
  onClick?: () => void;
}

function ListRow({ left, contents, right, withArrow, onClick }: ListRowProps) {
  return (
    <Flex as="li" css={listRowContainerStyles} onClick={onClick} align="center">
      <Flex css={listRowLeftStyles}>{left}</Flex>
      <Flex css={listRowContentStyles}>{contents}</Flex>
      <Flex>{right}</Flex>
      {withArrow ? <Icon name="IconRightArrow" /> : null}
    </Flex>
  );
}

function ListRowTexts({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) {
  return (
    <Flex direction="column">
      <Text bold={true}>{title}</Text>
      <Text typography="t7">{subTitle}</Text>
    </Flex>
  );
}

ListRow.Texts = ListRowTexts; // 함수도 객체이기 때문에 가능

export default ListRow;
```

- 컴포넌트 합성을 하지 않았다면 title="", subTitle="" 이런 식으로 props들이 더 많아지게 됨

> animation

- keyFrame(css)
- framer-motion

> SPA의 스크롤 문제(다른 페이지에서 스크롤이 하단으로 갔다가 또 다른 페이지 가면 스크롤이 하단에 위치한 이슈)

- ScrollToTop 컴포넌트 생생해 router 위에 배치

> TextField input marginBottom

- input에 margin을 주는 것은 비효율적. 유동적인 컴포넌트한테 주는 것이 보다 효율적
- 그러므로 Spacing 컴포넌트 생성(기본 vertical), height와 width로 분기

> Controlled VS UnControlled

- 값을 어떻게 관리할 것인가로 구분
- Controlled -> state
- UnControlled -> dom에 직접적 접근(ref)

> 유효성 라이브러리

- validator 사용
- 맨 처음 진입시 에러메세지
- input에서 focus가 벗어나거나, submit 버튼을 눌렀을 때만 나타나게 하기(dirty로 상태관리)

> AuthGuard

- 인증 처리가 된지 안된지 분기처리(전역상태로 관리)

> router 인증 분기처리

- 인증이 필요한 페이지와 필요하지 않은 페이지를 PrivateRoute로 분기 처리, 인증이 되어 있지 않으면 로그인페이지로
- useLocation의 state를 이용해 로그인을 한 후에 마지막에 있던 페이지로 이동

> 입력이 많을 때 보이는 패턴 **페이지 단위로 분리** VS **하나의 페이지(step분기)**

- 페이지 단위로 분리
  - 각 페이지마다 입력된 값을 모아서 보내는 방식
  - 장점 : 각 페이지마다 필요한 데이터, 변화하는 로직, 해당 데이터를 변화시키는 코드를 하나의 페이지에 있게 되므로 각각 코드를 분리해서 관리하기 때문에 관리가 용이
  - 단점 : 어떤 데이터가 어디서 변화하는지 추적하기가 어려움, 디버깅 또한 어려움
- 하나의 페이지(step 분기)
  - 단일 페이지(주로 예약페이지에 많이 사용), 데이터가 페이지 하나에 다 담겨져 있음. step별로 데이터를 부모(페이지)로 넘겨주는 방식
  - 장점 : 어떤 데이터가 변화하는지 추적하기 용이하고 각 컴포넌트에 필요한 데이터를 관리하기 용이
  - 단점 : 컴포넌트를 여러개 만들어야한다는 번거로움이 있음.
