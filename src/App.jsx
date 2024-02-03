// import GenerateProductList2 from "./components/GenerateProductList2";
import data from "./data.json";
// import data2 from "./data.json";
import GenerateProductList from "./components/GenerateProductList/GenerateProductList";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.container}>
      <GenerateProductList data={data} a="qwe" name="qwe" number={123}>
        <div>це children для GenerateProductList</div>
      </GenerateProductList>
      {/* GenerateProductsList({data:data,a:'qwe',name:'qwe',number:123}) */}
      {/* <GenerateProductList2 data={data2} /> */}
    </div>
  );
};

export default App;
