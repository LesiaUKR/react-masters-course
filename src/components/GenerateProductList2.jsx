const GenerateProductList2 = ({ data }) => {
  return data.map(({ thumbnail, title, description, price, id }) => (
    <div className="card" style={{ width: "18rem" }} key={id}>
      <img src={thumbnail} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="_" className="btn btn-primary">
          {price}
        </a>
      </div>
    </div>
  ));
};
export default GenerateProductList2;
