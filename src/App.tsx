import "./App.css";
import Text from "@shared/Text";
import Button from "@shared/Button";
import Input from "@shared/Input";
import TextField from "@shared/TextField";

function App() {
  return (
    <div>
      <Text typography="t1" display="block" color="red">
        t1
      </Text>
      <Text typography="t1" color="green">
        t2
      </Text>
      <Text typography="t1" color="blue">
        t3
      </Text>
      <Text typography="t1">t4</Text>
      <Text typography="t1">t5</Text>

      <div style={{ height: 10, width: "100%", background: "#efefef" }} />

      <Button color="success">클릭해주세요</Button>
      <Button color="success" weak={true}>
        클릭해주세요
      </Button>
      <Button color="error">클릭해주세요</Button>
      <Button color="error" weak={true}>
        클릭해주세요
      </Button>

      <Button>클릭해주세요</Button>
      <Button weak={true}>클릭해주세요</Button>
      <Button full={true}>클릭해주세요</Button>
      <Button disabled={true}>클릭해주세요</Button>

      <div style={{ height: 10, width: "100%", background: "#efefef" }} />

      <Input placeholder="로그인" />
      <Input placeholder="비밀번호" aria-invalid={true} />
      <Input aria-invalid={false} />

      <div style={{ height: 10, width: "100%", background: "#efefef" }} />

      <TextField label="아이디" />
      <TextField
        label="패스워드"
        hasError={true}
        helpMessage="비밀번호가 틀렸어요"
      />
    </div>
  );
}

export default App;
