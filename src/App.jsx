import { Fragment } from "react";
import GenerateProductList from "./components/GenerateProductList";
import GenerateProductList2 from "./components/GenerateProductList2";
import data from "./data.json";
import data2 from "./data.json";

const App = () => {
  return (
    <Fragment>
      <GenerateProductList data={data} a="qwe" name="qwe" number={123}>
        <div>це children для GenerateProductList</div>
      </GenerateProductList>
      {/* GenerateProductsList({data:data,a:'qwe',name:'qwe',number:123}) */}
      <GenerateProductList2 data={data2} />
    </Fragment>
  );
};

export default App;
