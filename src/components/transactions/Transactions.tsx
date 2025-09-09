import "./Transactions.scss";
import { Typography, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import type { DataType } from "../types";

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
      dataIndex: "category",
      key: "category",
      sorter: (a, b) => a.category.length - b.category.length,
      width: "40%",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      sorter: (a, b) => a.amount - b.amount,
    },
  ];
  const data: DataType[] = [
    {
      key: "1",
      description: "John Brown",
      amount: 32,
      category: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      description: "Jim Green",
      amount: 42,
      category: "London No. 1 Lake Park",
    },
    {
      key: "3",
      description: "Joe Black",
      amount: 32,
      category: "Sydney No. 1 Lake Park",
    },
    {
      key: "4",
      description: "Jim Red",
      amount: 32,
      category: "London No. 2 Lake Park",
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

  return (
    <div className="transaction">
      <Title level={2} style={{ margin: 0 }}>
        Transactions
      </Title>
      <div className="transaction_table">
        <Table<DataType>
          columns={columns}
          dataSource={data}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
