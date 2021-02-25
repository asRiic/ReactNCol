import React from 'react';
import 'antd/dist/antd.css'
import { Col, Row, Layout } from 'antd';
import '../assets/css/Dashboard.css';

import Navbar from '../components/Navbar';
import MenuSider from '../components/MenuSider';

const { Header, Footer, Sider, Content } = Layout;

function Dashboard() {
  return (
    <>
      <Layout>
        <Sider className="sider">
          <MenuSider />
        </Sider>
        <Layout>
          <Header className='headerNav'>
            <Navbar />
          </Header>
          <Content>
            <Row>
              <Col xs={24}>
                hOLIIIII
              </Col>
            </Row>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default Dashboard;