import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import template1img from '../pages/templates/Temp1.png'
import template2img from '../pages/templates/Temp2.png'
import '../resources/templates.css'
import { Link, useNavigate } from 'react-router-dom'


function Home() {
  const navigate = useNavigate();

  const templates = [
    {
      title: 'Simple Resume',
      image: template1img
    },
    {
      title: 'Highlighted Sections Resume',
      image: template2img
    }
  ]
  return (
    <DefaultLayout>
      <div className='row home'>
        {
          templates.map((template, index) => {
            return <div className='col-md-4'>
              <div className='template'>
                <img src={template.image} height='400' alt='' style={{width:'100%'}} />
                <div className="text" style={{}}>
                  <p>{template.title}</p>
                  <button onClick = {()=>navigate(`/templates/${index+1}`)}>TRY</button>
                </div>
              </div>
            </div>
          })
        }
      </div>
    </DefaultLayout>
  )
}

export default Home