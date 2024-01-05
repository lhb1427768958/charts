import React, { useCallback } from 'react';
import { PageContainer } from '@ant-design/pro-components';
import ComCharts from './components/ComCharts';
import { Input, Button } from 'antd';
const ChartsPage = () => {
    return (
        <PageContainer ghost>
            <div>
                关键词 <Input style={{width: 300}} /> <Button>立即检索</Button>
            </div>
             <ComCharts />
        </PageContainer>
    )
}

export default ChartsPage;