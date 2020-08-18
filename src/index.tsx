import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/es/locale/zh_CN';
import { stores, StoresContext } from './store';
import './index.less';
import RouterComponent from './router';

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <StoresContext.Provider value={stores}>
      <RouterComponent />
    </StoresContext.Provider>
  </ConfigProvider>,
  document.getElementById('root')
);
