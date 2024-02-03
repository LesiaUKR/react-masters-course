/**** inline styles ****/

// const GenerateProductList = ({ data }) => {
//   const styleObj = {
//     textAlign: "center",
//     padding: "12px",
//     color: "red",
//     width: "18rem",
//   };

//   return data.map(({ thumbnail, title, description, price, id }) => (
//     <div className="card" key={id} style={styleObj}>
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
// };

/**** vanilla css styling ****/

// import "./GenerateProductList.styled.css";

// const GenerateProductList = ({ data }) => {
//   return data.map(({ thumbnail, title, description, price, id }) => (
//     <div key={id} className="container">
//       <img src={thumbnail} alt="..." />
//       <div>
//         <h5>{title}</h5>
//         <p>{description}</p>
//         <a href="_">{price}</a>
//       </div>
//     </div>
//   ));
// };

/**** module css styling ****/

// import someStyles from "./GenerateProductList.module.css";

// const GenerateProductList = ({ data }) => {
//   return data.map(({ thumbnail, title, description, price, id }) => (
//     <div key={id} className={someStyles.container}>
//       <img src={thumbnail} alt="..." />
//       <div>
//         <h5>{title}</h5>
//         <p>{description}</p>
//         <a href="_">{price}</a>
//       </div>
//     </div>
//   ));
// };

/**** композиція класів vanilla css ****/
// import imageDefault from "../../assets/product-card-default-image.png";
// import "./GenerateProductList.styled.css";

// const generatedClassName = (params) => {
//   return params ? "active" : "notActive";
// };

// const GenerateProductList = ({ data }) => {
//   return data.map(({ thumbnail, title, description, price, id }) => (
//     // <div key={id} className={`container ${thumbnail && "active"}`}>
//     // <div key={id} className={`container ${thumbnail ? "active" : "notActive"}`}>
//     <div key={id} className={`container ${generatedClassName(thumbnail)}`}>
//       <img src={thumbnail ? thumbnail : imageDefault} alt="..." />
//       <div className={`main ${generatedClassName(thumbnail)}`}>
//         <h5>{title}</h5>
//         <p>{description}</p>
//         <a href="_">{price}</a>
//       </div>
//     </div>
//   ));
// };

/**** композиція класів module css ****/

// import someStyles from "./GenerateProductList.module.css";
// import clsx from "clsx";

// const GenerateProductList = ({ data }) => {
//   return data.map(({ thumbnail, title, description, price, id }) => (
//     // це якщо змінити клас
//     // <div
//     //   key={id}
//     //   className={thumbnail ? someStyles.container : someStyles.main}
//     // >
//     // це якщо поєднати класи
//     // <div
//     //   key={id}
//     //   className={`${someStyles.container} ${
//     //     thumbnail ? someStyles.active : someStyles.notActive
//     //   }`}
//     // >
//     // це якщо використати clsx бібліотеку
//     <div
//       key={id}
//       className={clsx(someStyles.container, {
//         [someStyles.active]: thumbnail,
//         [someStyles.notActive]: !thumbnail,
//       })}
//     >
//       <img src={thumbnail} alt="..." />
//       <div>
//         <h5>{title}</h5>
//         <p>{description}</p>
//         <a href="_">{price}</a>
//       </div>
//     </div>
//   ));
// };

/**** css in JS - це використання бібліотек StyledComponents, Emotion, ****/
import { Title, Wrapper } from "./Wrapper.styled";

const GenerateProductList = ({ data }) => {
  return data.map(({ thumbnail, title, description, price, id }) => (
    <Wrapper key={id} active={Boolean(thumbnail)}>
      <img src={thumbnail} alt="..." />
      <div>
        <Title>{title}</Title>
        <p>{description}</p>
        <a href="_">{price}</a>
      </div>
    </Wrapper>
  ));
};
export default GenerateProductList;
