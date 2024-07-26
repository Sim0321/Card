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

- left,contents, right, withArrow, onClick을 props로 받음

> **Icon**

- name, size를 props로 받음. name은 assets > icons > index.ts의 이름

- 컴포넌트 합성

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
