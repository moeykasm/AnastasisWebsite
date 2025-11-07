import { useState, useMemo, useEffect } from 'react'
import './css/reportabug.css'
import Menu from '../components/Menu';

export default function ReportABug() {

  const [info, setInfo] = useState(
    {
      discord: '',
      bug: ''
    }
  )

  async function sendBugReportWebhook(webhookUrl,) {
    try {
      const now = new Date();
      const isoDate = now.toISOString();
  
      const payload = {
        embeds: [
          {
            title: 'New bug report',
            fields: [
              {
                name: 'Discord',
                value: info.discord,
                inline: false
              },
              {
                name: 'Bug detected',
                value: info.bug,
                inline: false
              }
            ],
            timestamp: isoDate,
            color: 0xFFD700, 
            thumbnail: {
              url: '' 
            }
          }
        ]
      };
      
      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
   
    } catch (error) {
      console.error('Error sending bug report:', error);
    }
  }

  function send() {
    if(info.discord && info.bug) {
      sendBugReportWebhook(
        'https://discord.com/api/webhooks/1381750707501142186/zh5VMY8H7LMN-2Mo3hoM3bNaJvDxU54zfhW9Nn9lds1IEhhSejoctg1r_WVLoucz2M3x',
      )
    }
  }

  function inputChanged(event) {
    setInfo(prev => (
        {
          ...prev,
          [event.target.id]: event.target.value
        }
      )
    )
  }
  
  return (
    <>
      <Menu />
      <div className="report_a_bug_wrapper">

        <h1>REPORT A BUG</h1>
        <p>Fill out the form and we will be in touch!</p>

        <div className="form">
          <input onChange={inputChanged} id='discord' type="text" placeholder='Discord Username'/>
          <textarea onChange={inputChanged} name="" id="bug" placeholder='What bug have you detected?'></textarea>
          <button onClick={send}>REPORT BUG</button>
        </div>
 
      </div>
    </>
  )
}


