import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import "./featuredInfo.css";

function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featured-item">
        <span className="featured-title">Revanue</span>
        <div className="featured-money-container">
          <span className="featured-money">$ 145</span>
          <span className="featured-money-rate">
            % 5<ArrowUpward className="featured-icon positif" />
          </span>
        </div>
        <span className="featured-sub">Compare to last month</span>
      </div>
      <div className="featured-item">
        <span className="featured-title">Sales</span>
        <div className="featured-money-container">
          <span className="featured-money">$5.23</span>
          <span className="featured-money-rate">
            -1.23
            <ArrowDownward className="featured-icon negatif" />
          </span>
        </div>
        <span className="featured-sub">Compare to last month</span>
      </div>
      <div className="featured-item">
        <span className="featured-title">Cost</span>
        <div className="featured-money-container">
          <span className="featured-money">$3.123</span>
          <span className="featured-money-rate">
            +9.23
            <ArrowUpward className="featured-icon" />
          </span>
        </div>
        <span className="featured-sub">Compare to last month</span>
      </div>
    </div>
  );
}

export default FeaturedInfo;
