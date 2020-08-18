import axiosRequest from '@/utils/axios';

export function postLogin(params: {
  username: string;
  password: string;
}): Promise<any> {
  return axiosRequest.request({
    url: '/demo/login',
    method: 'post',
    data: params,
  });
}
