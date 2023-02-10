import React, { useState } from 'react';
import { Header, Form, Button } from 'semantic-ui-react';
import DatePicker from "react-datepicker";
import { Messages } from './messages';
import "react-datepicker/dist/react-datepicker.css";
import './calendar.css';


interface Props {
  handleShowProfile: () => void
}

export const Calendar = ({ handleShowProfile }: Props) => {
  const [time, setTime] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [startDate, setStartDate] = useState(new Date());

  const times = () => {
    const rows = [];
    for(let i=1; i<=12; i++) {
      rows.push(i);
    }
    return rows;
  }

  const handleTime = (e: any) => {
    setTime(e.target.textContent);
  }

  const handleSchedule = () => {
    setSuccess('Your appointement has been scheduled!')
  }

  const handleCancel = () => {
    handleShowProfile();
  }

  return (
    <div>
      <Form className="calendar-form">
      { success && <Messages message={success} positive/> }
      <Header>Schedule Response</Header>
      <Form.Group widths='equal'>
        <Form.Field 
          label='Date'
          control='input'
          type='text'
          value={startDate}
          disabled
        />
        <Form.Field 
          label='Time'
          control='input'
          type='text'
          disabled
          value={time}
        />
        </Form.Group>
        <Form.Group>
        <div className='date'>
          <DatePicker
            selected={startDate}
            onChange={(date: any) => setStartDate(date)}
            inline
          />
        </div>
        <div className='times'>
          {times().map((t, i) => <span key={i} onClick={handleTime}>{t}:00 AM</span>)}
          {times().map((t, i) => <span key={i} onClick={handleTime}>{t}:00 PM</span>)}
        </div>
        </Form.Group>
        <Form.Group style={{paddingLeft: "10px"}}>
          <Button primary onClick={handleSchedule}>Schedule</Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </Form.Group>
      </Form>
    </div>
  );
}