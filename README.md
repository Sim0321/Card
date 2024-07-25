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

