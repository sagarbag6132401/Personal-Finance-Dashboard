import "./Transactions.scss";
import { Typography, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { selectAllItems } from "../../redux/getters";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/hooks";
import { addItem } from "../../redux/itemsSlice";
import type { Transaction } from "../../types/storeTypes";

const { Title } = Typography;
export const Transactions = () => {
  const columns: TableColumnsType<Transaction> = [
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      sorter: (a, b) => a.description.length - b.description.length,
      ellipsis: true,
      width: "25%",
    },

    {
      title: "Transaction Type",
      dataIndex: "transactionType",
      key: "transactionType",
      sorter: (a, b) => a.transactionType.length - b.transactionType.length,
      width: "25%",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      sorter: (a, b) => (a.date && b.date ? a.date.localeCompare(b.date) : 0),
      width: "25%",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      sorter: (a, b) => a.amount - b.amount,
      width: "25%",
    },
  ];

  const onChange: TableProps<Transaction>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const transactions = useSelector(selectAllItems);
  const dispatch = useAppDispatch();

  const handleTransaction = () => {
    const newTransactionKey = transactions.length + 1;
    const newTransaction: Transaction = {
      key: `exp${newTransactionKey}`,
      description: `New Transaction ${newTransactionKey}`,
      amount: Math.floor(Math.random() * 1000),
      transactionType: "Miscellaneous",
      date: new Date().toISOString().split("T")[0],
    };
    // dispatch({ type: "transactionData/addItem", payload: newTransaction });
    dispatch(addItem(newTransaction));
  }

  return (
    <div className="transaction">
      <button onClick={handleTransaction}>Add Transaction</button>
      <Title level={2} style={{ margin: 0 }}>
        Transactions
      </Title>
      <div className="transaction_table">
        <Table<Transaction>
          columns={columns}
          dataSource={transactions}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
