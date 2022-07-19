import React from 'react'
import '../../resources/templates.css'

function Template1() {
    const user = JSON.parse(localStorage.getItem('Resume-users'))
    return (
        <div className='template1-parent' >
            <div className ='top d-flex align-items-center justify-content-between'>
                <h1>{user.firstname.toUpperCase()} {user.lastname.toUpperCase()}</h1>
                <div>
                    <p>{user.email}</p>
                    <p>{user.address}</p>
                    <p>{user.mobilenumber}</p>
                </div>
            </div>
            <hr/>
            <div className='divider mt-3'></div>
            <div className='objective mt-3'>
                <h3>Objective</h3>
                <hr/>
                <p>{user.objective}</p>
            </div>
            
            <div className='divider mt-3'></div>
            <div className='education mt-3'>
                <h3>Education</h3>
                <hr/>
                {user.education.map((education)=>{
                    return <div className = 'd-flex'>
                        <h6 style = {{width:120}}><b>{education.yearrange} : </b></h6>
                        <p><b>{education.qualification}</b> with <b>{education.percentage}%</b> in {education.institution}</p>
                    </div>
                })}                
            </div>

            <div className='divider mt-3'></div>
            <div className='experience mt-3'>
                <h3>Experience</h3>
                <hr/>
                {user.experience.map((exp)=>{
                    return <div className = 'd-flex'>
                        <h6  style = {{width:120}}><b>{exp.yearrange} : </b></h6>
                        <p><b>{exp.company}</b> in {exp.place} for {exp.years} years</p>
                    </div>
                })}                
            </div>

            <div className='divider mt-3'></div>
            <div className='projects mt-3'>
                <h3>Projects</h3>
                <hr/>
                {user.projects.map((pr)=>{
                    return <div className = 'd-flex flex-column'>
                        <h6>
                            <b>{pr.title} {"    "} [{pr.yearrange}]{" "}</b></h6>
                        <p>{pr.description}</p>
                    </div>
                })}                
            </div>

            <div className='divider mt-3'></div>
            <div className='skills mt-3'>
                <h3>Skills</h3>
                <hr/>
                {user.skills.map((skill)=>{
                    return <div className = 'd-flex flex-column'>
                        {skill.technology}
                    </div>
                })}                
            </div>

        </div>
    )
}

export default Template1