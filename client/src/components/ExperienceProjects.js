import React from 'react'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';
const {TextArea}  = Input

function ExperienceProjects() {
    return (
        <div>
            <h5>Experience</h5>
            <hr></hr>
            <Form.List name="experience">
                {(fields, { add, remove }) => (
                    <>
                        <div className='row'>
                            {fields.map(({ key, name, ...restField }) => (
                                <>
                                    <div className='col-md-3'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'company']}
                                            rules={[{ required: true, message: 'Missing Company' }]}
                                        >
                                            <Input placeholder="Company" />
                                        </Form.Item>
                                    </div>

                                    <div className='col-md-2'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'years']}
                                            rules={[{ required: true, message: 'Missing Years' }]}
                                        >
                                            <Input placeholder="Years" />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-3'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'place']}
                                            rules={[{ required: true, message: 'Missing Place' }]}
                                        >
                                            <Input placeholder="Place" />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-2'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'yearrange']}
                                            rules={[{ required: true, message: 'Missing Range' }]}
                                        >
                                            <Input placeholder="Year Range" />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-2'>
                                        <MinusCircleOutlined style={{ fontSize: 20, color: 'tomato' }} onClick={() => remove(name)} />
                                    </div>
                                </>
                            ))}
                        </div>

                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                Add Experience
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
            <h5>Projects</h5>
            <hr></hr>
            <Form.List name="projects">
                {(fields, { add, remove }) => (
                    <>
                        <div className='row'>
                            {fields.map(({ key, name, ...restField }) => (
                                <>
                                    <div className='col-md-4'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'title']}
                                            rules={[{ required: true, message: 'Missing Title' }]}
                                        >
                                            <Input placeholder="Title" />
                                        </Form.Item>
                                    </div>

                                    <div className='col-md-3'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'description']}
                                            rules={[{ required: true, message: 'Missing Description' }]}
                                        >
                                            <TextArea placeholder="Description" />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-3'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'yearrange']}
                                            rules={[{ required: true, message: 'Missing Year Range' }]}
                                        >
                                            <Input placeholder="Year Range" />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-2'>
                                        <MinusCircleOutlined style={{ fontSize: 20, color: 'tomato' }} onClick={() => remove(name)} />
                                    </div>
                                </>
                            ))}
                        </div>

                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                Add Projects
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
        </div>
    )
}

export default ExperienceProjects