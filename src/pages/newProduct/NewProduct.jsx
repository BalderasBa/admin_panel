import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="new-Product">
      <h1 className="add-product-title">New Product</h1>
      <form className="add-Product-form">
        <div className="add-Product-item">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="add-Product-item">
          <label>Name</label>
          <input type="text" placeholder="Apple Airpods" />
        </div>
        <div className="add-Product-item">
          <label>Description</label>
          <input type="text" placeholder="Description Here" />
        </div>
        <div className="add-Product-item">
          <label>Stock</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="add-Product-item">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="add-Product-button">Create</button>
      </form>
    </div>
  );
}
