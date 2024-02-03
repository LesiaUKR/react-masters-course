import defaultImage from "../assets/product-card-default-image.png";

const GenerateProductList2 = ({ data }) => {
  const isCreate = true;
  const isEditing = false;
  return data.map(({ thumbnail, title, description, price, id }) => (
    <div className="card" style={{ width: "18rem" }} key={id}>
      <img
        src={thumbnail ? thumbnail : defaultImage}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="_" className="btn btn-primary">
          {price}
        </a>
        {/* не буде рендеритися 
           {false}
           {null}
           {undefined}
           */}

        {isCreate ? <button>Create</button> : <button>Save</button>}
        {isEditing && <button>Cancel</button>}
      </div>
    </div>
  ));
};
export default GenerateProductList2;
