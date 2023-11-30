import React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import {useNavigate } from "react-router-dom";
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './home.css'
function Calendar(props) {
  const events = [
    {
      title: "event 1",
      start: '2023-11-30',
    },
  ];
  console.log(props.i);
  const navigate=useNavigate();
  const todo = () =>{
    navigate('/todo');
  }
  const Event1 = () =>{
    navigate('/event');
  }
  const Profile = () =>{
    navigate('/profile');
  }
  const Year = () =>{
    navigate('/year');
  }
  const handleEventClick = () => {
       
    navigate('/event');
   };
  return (
    <div  className="homepage">
   
<div className="navbar">
    <nav>
      <ul>
      <h1 className="title1">NammaCalender</h1>
      <li>
      <h5 className="title2" onClick={todo}>Todo</h5>
      
      </li>
      <li>
      <h5 className="title2" onClick={Event1}>Event</h5>
      
      </li>
      <li>
      <h5 className="title2" onClick={Profile}>Profile</h5>
      
      
      </li>
      <li>
      <h5 className="title2" onClick={Year}>Yearly Calendar</h5>
      
          
        </li>
      </ul>
    </nav>
    </div>

<br></br>


      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next", // will normally be on the left. if RTL, will be on the right
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
        }}
        height={"90vh"}
        events={events}
        eventClick={handleEventClick}
        selectable={true}
      />
    </div>
  );
}

export default Calendar;