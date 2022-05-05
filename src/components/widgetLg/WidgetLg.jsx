import "./widgetLg.css";
import { useState } from "react";
import { format } from "timeago.js";
import { orders } from "../../data";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widget-lg-btn " + type}>{type} </button>;
  };
  return (
    <div className="widget-lg">
      <span className="widget-lg-title">Latest Transactions</span>
      <table className="widget-lg-table">
        <thead className="widget-lg-tr">
          <tr>
            <th className="widget-lg-th">Custemer</th>
            <th className="widget-lg-th">Date</th>
            <th className="widget-lg-th">Amount</th>
            <th className="widget-lg-th">States</th>
          </tr>
        </thead>
        {orders.map((order) => (
          <tbody className="widget-lg-tr" key={order.id}>
            <td className="widget-lg-user">{order.username}</td>
            <td className="widget-lg-date">{format(order.createdAt)}</td>
            <td className="widget-lg-amount">$ {order.amount}</td>
            <td className="widget-lg-status">
              <Button type={order.status} />
            </td>
          </tbody>
        ))}
      </table>
    </div>
  );
}
