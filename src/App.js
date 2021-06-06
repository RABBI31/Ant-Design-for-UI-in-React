import React from 'react'
import './App.css';
import 'antd/dist/antd.css';
import Navbar from './components/common/Navbar';
import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import home from './views/AppHome';
import AppHome from './views/AppHome';

const { Header,content } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
       <Header>
         <Navbar />
       </Header>
       <div>
         
       </div>
      <Content>
        <AppHome />
      </Content>
    </Layout>
  );
}

export default App;
