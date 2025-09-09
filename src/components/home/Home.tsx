import { Card } from "../card/Card";
import { cards } from "../Constants/constants";
import { Transactions } from "../transactions/Transactions";
import "./Home.scss";
export default function Home() {
  return (
    <div className="dashboard">
      <div className="cards">
        {cards.map((item, index) => {
          return (
            <Card
              key={index}
              icon={item.icon}
              amount={item.amount}
              amountType={item.amountType}
            />
          );
        })}
      </div>
      <Transactions />
    </div>
  );
}
