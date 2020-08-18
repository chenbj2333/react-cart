/**
 * Loading组件
 * 用于按需加载时过渡显示等
 */
import React from 'react';
import ImgLoading from '@/assets/loading.gif';

export default function LoadingComponent(): JSX.Element {
  return (
    <div
      style={{
        textAlign: 'center',
        padding: 50,
        fontSize: 14,
        position: 'relative',
        margin: '0 auto',
        color: '#888',
      }}
    >
      <img style={{ marginBottom: 20 }} src={ImgLoading} alt='' />
      <div>加载中...</div>
    </div>
  );
}
