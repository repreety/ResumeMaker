import React, { useEffect, useState } from 'react'
import axios from 'axios'

import DefaultLayout from '../components/DefaultLayout'
import { Tabs, Input, Form, Button, Spin, message } from 'antd';
import PersonalInfo from '../components/PersonalInfo';
import SkillsEducation from '../components/SkillsEducation';
import ExperienceProjects from '../components/ExperienceProjects';
const { TabPane } = Tabs;

function Profile() {
    const [loading, setLoading] = useState(false);
    const user = JSON.parse(localStorage.getItem('Resume-users'))
    
    const onFinish = async (values) => {
        setLoading(true);
        try {
            const result = await axios.post('api/user/update', {...values, _id : user._id});
            localStorage.setItem('Resume-users', JSON.stringify(result.data));
            setLoading(false);
            message.success('Profile Updated successfull');
        } catch (error) {
            setLoading(false);
            message.error('Update failed');
        }
    };
    return (
        <DefaultLayout>
            {loading && (<Spin size="large" />)}

            <div className='update-profile'>
                <h4><b>Update Profile</b></h4>
                <hr></hr>
                <Form layout='vertical' onFinish={onFinish} initialValues={user}>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Personal Info" key="1">
                            <PersonalInfo />
                        </TabPane>
                        <TabPane tab="Skills and Education" key="2">
                            <SkillsEducation />
                        </TabPane>
                        <TabPane tab="Experience / Projects" key="3">
                            <ExperienceProjects />
                        </TabPane>
                    </Tabs>
                    <Button htmlType='submit'>UPDATE</Button>
                </Form>

            </div>
        </DefaultLayout>
    )
}

export default Profile