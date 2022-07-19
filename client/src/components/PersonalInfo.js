import { Form, Input } from 'antd'
import React from 'react'
const { TextArea } = Input

function PersonalInfo() {
    return (
        <div>
            <div className='row'>
                <div className='col-md-4'>
                    <Form.Item name='firstname' label='Firstname' rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                </div>
                <div className='col-md-4'>
                    <Form.Item name='lastname' label='Lastname' rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                </div>
                <div className='col-md-4'>
                    <Form.Item name='email' label='E-mail' rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                </div>
                <div className='col-md-4'>
                    <Form.Item name='mobilenumber' label='Mobile No.' rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                </div>
                <div className='col-md-4'>
                    <Form.Item name='portfolio' label='Portfolio' rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                </div>
                <div className='col-md-12'>
                    <Form.Item name='objective' label='Objective' rules={[{ required: true }]}>
                        <TextArea />
                    </Form.Item>
                </div>
                <div className='col-md-12'>
                    <Form.Item name='address' label='Address' rules={[{ required: true }]}>
                        <TextArea />
                    </Form.Item>
                </div>
            </div>
        </div>
    )
}

export default PersonalInfo