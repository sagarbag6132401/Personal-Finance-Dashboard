import "./Card.scss";
import type { CardProps } from "../types";
export const Card: React.FC<CardProps> = ({ icon, amount, amountType }) => {
  return (
    <div className="maincard">
      <div className="icon">{icon}</div>
      <div className="amount_type">
        <div className="amount">${amount}</div>
        <div className="type">{amountType}</div>
      </div>
    </div>
  );
};
