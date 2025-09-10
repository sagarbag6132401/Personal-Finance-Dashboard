import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme, Typography, type MenuProps } from "antd";
import "./leftside-navbar.css";
import { useNavigate, Outlet } from "react-router-dom";

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const LeftsideNavbar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();

  const handleNavItemClick: MenuProps["onClick"] = (e) => {
    const navLink = e.key === "home" ? "/" : `/${String(e.key).toLowerCase()}`;
    navigate(navLink);
  };
  return (
    <Layout className="layout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={handleNavItemClick}
          items={[
            {
              key: "home",
              icon: <UserOutlined />,
              label: "Home",
            },
            {
              key: "about",
              icon: <VideoCameraOutlined />,
              label: "About",
            },
            {
              key: "contact",
              icon: <UploadOutlined />,
              label: "Contact Us",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <Title level={4} style={{ color: "#001529", margin: 0 }}>
            Finance Dashboard
          </Title>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default LeftsideNavbar;
