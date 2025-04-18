import React, { useState } from 'react';
import styles from "./admin.module.scss";
import logo from "../Admin/BLUE.png";
import TodayRoundedIcon from '@mui/icons-material/TodayRounded';
// import { HappyProvider } from '@ant-design/happy-work-theme';
import SchoolIcon from '@mui/icons-material/School';

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';
const { Header, Sider, Content } = Layout;

const menuItems = [
    { key: "1", to: "", icon: <UserOutlined />, label: "Home" },
    { key: "2", to: "batchcard", icon: <TodayRoundedIcon />, label: "Batch Dates" },
    { key: "3", to: "topperlist", icon: <SchoolIcon />, label: "Topper" },

];

const AdminDashboard = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout className={styles.dashboard}>
            <Header className={styles.header}>

                <Button className={styles.btn}
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={() => setCollapsed(!collapsed)}
                />

                <img src={logo} alt="" />
                <div className="container">
                    <div className="row">

                        <div className="text-center">
                            <h1>Arise Admin Panel</h1>
                        </div>

                    </div>
                </div>

            </Header>

            <Layout>
                <Sider className={styles.sider} trigger={null} collapsible collapsed={collapsed}>
                    <div className="demo-logo-vertical" />
                    <Menu mode="inline" defaultSelectedKeys={[""]}>
                        {menuItems.map((item) => (
                            <Menu.Item key={item.key} icon={item.icon}>
                                <NavLink to={item.to}>{item.label}</NavLink>
                            </Menu.Item>
                        ))}
                    </Menu>
                </Sider>
                <Content className={styles.content}
                    style={{
                        margin: '2.25rem 2.25rem 0rem',
                        padding: 24,

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
export default AdminDashboard;