import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';  // 引入antd样式表
export default function Btn() {
    let clickHandle = () => {
        let files = []
    }
    return (
        <div>
            <Button type="danger" onClick={() => clickHandle()}>click me2222</Button>
        </div>
    )
}