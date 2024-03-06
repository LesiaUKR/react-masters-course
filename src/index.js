import React from "react";
import ReactDOM from "react-dom/client";
// import data from "./data.json";
// import data2 from "./data.json";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
// import "./index.css";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<React.StrictMode></React.StrictMode>);

/**** Стандарний підхід через JavaScript****/

// const div = document.createElement("div");
// div.id = "qwerty";

/**** Підхід через React****/

//звертаємось не до DOM-дерева document, а до бібліотеки React
// const text = React.createElement("p", { id: "123" }, "Hello React");

// const div = React.createElement(
//   "div",
//   {
//     id: "qwerty",
//     className: "qwerty",
//   },
//   "Alex",
//   text
// );
//Alex, text - це children
// console.log(div);

// const root = document.getElementById("root");
// root.append(div);

//у випадку append в JS в root прилітає DOM-елемент
//у випадку append в React в root попаде не div, а звичайний [object Object], бо об'єкт це посилання

//для того щоб отримати головний елемент в React, в який ми хочемо щось додати,
// звертаємось до ReactDOM і використовуємо метод createRoot(), щоб в ньому вказати куди ми хочемо
// додати новий елемент, а потім викличемо метод render(), в якому вкажемо, який елемент хочемо додати

// ReactDOM.createRoot(root).render(div);

/**** JSX елементи ****/

// JSX - це можливість писати в середині JS XML подібний код, тобто
// дає можливість в середині змінної зберігати розмітку

// const text = <p id="123">Hello React</p>;

// const div = (
//   <div id="qwerty" className="'qwerty">
//     {text}
//   </div>
// );
//{text} - це children, яку потрібно огорнути в {}, щоб з просто тексту, ми звертались до змінної

// ReactDOM.createRoot(root).render(div);

/**** Рендеримо елементи з data.json****/

// const GenerateProductList = () =>
//   data.map(({ thumbnail, title, description, price, id }) => (
//     <div className="card" style={{ width: "18rem" }} key={id}>
//       <img src={thumbnail} className="card-img-top" alt="..." />
//       <div className="card-body">
//         <h5 className="card-title">{title}</h5>
//         <p className="card-text">{description}</p>
//         <a href="_" className="btn btn-primary">
//           {price}
//         </a>
//       </div>
//     </div>
//   ));

// key - це внутрішній атрибут для React, завдяки якому React відслідковує зміни в конкретному елементі
// key не видно в html, скористатися ним не зможемо
// щоб зробити із функції JSX елемент необхідно огорнути її  в тег як html елемент, а не просто викликати, тобто
// замість ReactDOM.createRoot(root).render(generateProductList()); використати ReactDOM.createRoot(root).render(<generateProductList/>);
// а також назвати функцію generateProductList з великої літери GenerateProductList
// тепер це повноцінний компонент React
// ReactDOM.createRoot(root).render(<GenerateProductList />) аналогічно ReactDOM.createRoot(root).render(GenerateProductList());

// const GenerateProductList2 = () =>
//   data2.map(({ thumbnail, title, description, price, id }) => (
//     <div className="card" style={{ width: "18rem" }} key={id}>
//       <img src={thumbnail} className="card-img-top" alt="..." />
//       <div className="card-body">
//         <h5 className="card-title">{title}</h5>
//         <p className="card-text">{description}</p>
//         <a href="_" className="btn btn-primary">
//           {price}
//         </a>
//       </div>
//     </div>
//   ));

const root = document.getElementById("root");

// Якщо потрібно зарендерити два елементи, в render потрібно передати один компонент
// для цього огортаємо два компоненти в спільний батьківський елемент, а даному випадку в div
// render потрібно вважати як return в функції, який повертає лише одне щось

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
