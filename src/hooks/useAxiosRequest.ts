import { useRequest } from 'ahooks';
import { message } from 'antd';

function useAxiosRequest(
  fn: (params: any) => Promise<any>,
  successFun: (data: any) => void,
  delayTime: number = 500,
  manual: boolean = false
) {
  return useRequest(fn, {
    requestMethod: fn,
    manual,
    loadingDelay: delayTime,
    onError: (error: any) => {
      message.error(error.mes);
    },
    onSuccess: (data: any) => {
      successFun(data);
    },
  });
}

export default useAxiosRequest;
