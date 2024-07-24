import "./App.css";
import Text from "@shared/Text";
import Button from "@shared/Button";

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
    </div>
  );
}

export default App;
