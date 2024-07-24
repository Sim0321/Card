import "./App.css";
import Text from "@shared/Text";

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
    </div>
  );
}

export default App;
