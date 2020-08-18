import React from 'react';
import { Form, Input, Button } from 'antd';
import { Store } from 'antd/lib/form/interface';
import { postLogin } from '@/services/user';
import useAxiosRequest from '@/hooks/useAxiosRequest';
import { useUserStore } from '@/store';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login: React.FC = observer(() => {
  const { setUserInfo } = useUserStore();
  const history = useHistory();
  const { loading, run } = useAxiosRequest(
    (params) => postLogin(params),
    (data: any) => {
      setUserInfo(data.data);
      sessionStorage.setItem('userinfo', JSON.stringify(data.data));
      history.push('/');
    },
    1000,
    true
  );

  const onFinish = (values: Store) => {
    run(values);
  };

  return (
    <div style={{ width: '40%' }}>
      <Form {...layout} name='basic' onFinish={onFinish}>
        <Form.Item
          label='用户名'
          name='username'
          rules={[{ required: true, message: '用户名不能为空' }]}
        >
          <Input placeholder='请输入用户名' />
        </Form.Item>

        <Form.Item
          label='密码'
          name='password'
          rules={[{ required: true, message: '密码不能为空' }]}
        >
          <Input.Password placeholder='请输入密码' />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type='primary' htmlType='submit' block loading={loading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
});

export default Login;
