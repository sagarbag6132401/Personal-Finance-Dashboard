import "./Transactions.scss";
import { Typography, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import type { DataType } from "../types";
import { useSelector } from "react-redux";
import { selectAllItems } from "../../redux/itemsSlice";

const { Title } = Typography;
export const Transactions = () => {
  const columns: TableColumnsType<DataType> = [
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      sorter: (a, b) => a.description.length - b.description.length,
      ellipsis: true,
      width: "30%",
    },

    {
      title: "Transaction Type",
      dataIndex: "transactionType",
      key: "transactionType",
      sorter: (a, b) => a.transactionType.length - b.transactionType.length,
      width: "40%",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      sorter: (a, b) => a.amount - b.amount,
    },
  ];

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const transactions = useSelector(selectAllItems);

  return (
    <div className="transaction">
      <Title level={2} style={{ margin: 0 }}>
        Transactions
      </Title>
      <div className="transaction_table">
        <Table<DataType>
          columns={columns}
          dataSource={transactions}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
