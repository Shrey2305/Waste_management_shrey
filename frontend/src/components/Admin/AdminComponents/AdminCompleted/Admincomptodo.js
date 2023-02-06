import React, { Component,useRef } from 'react';
import { Bar } from "react-chartjs-2";
import Chart, { Legend } from 'chart.js/auto';
import { red } from '@mui/material/colors';
import { fontSize } from '@mui/system';

import Footer from '../../../Footer/Footer.js';
import { Calendar } from "react-multi-date-picker"
import DatePicker from "react-multi-date-picker"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import List from './List';



export default function Admincomptodo() {

  const datePickerRef = useRef()
  return (
    <>

      <div class='text-center m-2 display-6'>completed order</div>  


               {/* Calender */}
   -   <div class='m-3 text-center'>
  <div class='btn btn-danger text-white border-4 m-1'
    onClick={() => datePickerRef.current.openCalendar()}
  >
    Click to select date<CalendarMonthIcon></CalendarMonthIcon>
  </div>
  <DatePicker  
    ref={datePickerRef} 
  >
    <button
      style={{ margin: "5px" }}
      onClick={() => datePickerRef.current.closeCalendar()}
    >
      close
    </button>
  </DatePicker>
</div>


    <div><List></List></div>
   
      <div><Footer/></div>
      </>
    );
  }

