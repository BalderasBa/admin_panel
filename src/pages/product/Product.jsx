import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart";
import { productData, productRows } from "../../data";
import { Publish } from "@material-ui/icons";

export default function Product() {
  // const location = useLocation();
  const productId = window.location.pathname.split("/")[2];
  const product = productRows.find((product) => product.id === +productId);
  console.log(productRows);
  return (
    <div className="product">
      <div className="product-title-container">
        <h1 className="product-title">Product</h1>
        <Link to="/admin_panel/newproduct">
          <button className="product-add-btn">Create</button>
        </Link>
      </div>
      <div className="product-top">
        <div className="product-top-left">
          <Chart
            data={productData}
            dataKey="Sales"
            title="Sales Performances"
          />
        </div>
        <div className="product-top-right">
          <div className="product-info-top">
            <img src={product.img} alt="" className="product-info-img" />
            <span className="product-name">{product.name}</span>
          </div>
          <div className="product-info-bottom">
            <div className="product-info-item">
              <span className="product-info-key">id:</span>
              <span className="product-info-value">{product.id}</span>
            </div>
            <div className="product-info-item">
              <span className="product-info-key">sales:</span>
              <span className="product-info-value">123</span>
            </div>
            <div className="product-info-item">
              <span className="product-info-key">in stock:</span>
              <span className="product-info-value">{product.stock}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product-bottom">
        <form className="product-form">
          <div className="product-form-left">
            <label htmlFor="productName">Product Name</label>
            <input type="text" id="productName" placeholder={product.name} />
            <label htmlFor="productDesc">Product Description</label>
            <input type="text" id="productDesc" placeholder={product.desc} />
            <label htmlFor="productPrice">Product Price</label>
            <input type="text" id="productPrice" placeholder={product.price} />
            <label htmlFor="inStock">In Stock</label>
            <select id="inStock" >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="product-form-right">
            <div className="product-upload">
              <img src={product.img} alt="" className="product-upload-img" />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="product-btn">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
