import React from 'react'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';

function SkillsEducation() {
    return (
        <div>
            <h5>Education</h5>
            <hr></hr>
            <Form.List name="education">
                {(fields, { add, remove }) => (
                    <>
                        <div className='row'>
                            {fields.map(({ key, name, ...restField }) => (
                                <>
                                    <div className='col-md-3'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'qualification']}
                                            rules={[{ required: true, message: 'Missing Qualification' }]}
                                        >
                                            <Input placeholder="Qualification" />
                                        </Form.Item>
                                    </div>

                                    <div className='col-md-2'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'percentage']}
                                            rules={[{ required: true, message: 'Missing Percentage' }]}
                                        >
                                            <Input placeholder="Percentage" />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-3'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'institution']}
                                            rules={[{ required: true, message: 'Missing Institution' }]}
                                        >
                                            <Input placeholder="Institution" />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-2'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'yearrange']}
                                            rules={[{ required: true, message: 'Missing year' }]}
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
                                Add Education
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>

            <h5>Skills</h5>
            <hr></hr>
            <Form.List name="skills">
                {(fields, { add, remove }) => (
                    <>
                        <div className='row'>
                            {fields.map(({ key, name, ...restField }) => (
                                <>
                                    <div className='col-md-4'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'technology']}
                                            rules={[{ required: true, message: 'Missing Technology' }]}
                                        >
                                            <Input placeholder="Technology" />
                                        </Form.Item>
                                    </div>

                                    <div className='col-md-3'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'rating']}
                                            rules={[{ required: true, message: 'Missing Rating' }]}
                                        >
                                            <Input placeholder="Rating" />
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
                                Add Skill
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
        </div>
    )
}

export default SkillsEducation