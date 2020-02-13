/* global flatpickr */ // eslint-disable-line no-unused-vars


import {utils} from '../utils.js.js';
import {select, settings} from '../settings.js.js';
import BaseWidget from './BaseWidget.js.js';


class DatePicker extends BaseWidget{

  constructor(wrapper){
    super(wrapper, utils.dateToStr(new Date()));

    const thisWidget = this;

    thisWidget.dom.input = thisWidget.dom.wrapper.querySelector(select.widgets.datePicker.input);

    thisWidget.initPlugin();
  }

  initPlugin(){
    const thisWidget = this;

    thisWidget.minDate = new Date(thisWidget.value);

    thisWidget.maxDate = thisWidget.addDays(thisWidget.minDate, settings.datePicker.maxDaysInFuture);

    flatpickr(thisWidget.dom.input, {
      defaultDate: thisWidget.minDate,
      minDate: thisWidget.minDate,
      maxDate: thisWidget.maxDate,
      locale: {
        firstDayOfWeek: 1
      },
      disable: [
        function(date){
          return (date.getDay() === 1);
        }
      ],
      onChange: function(selectedDates, dateStr){
        thisWidget.value = dateStr;
      },

    });
  }

  addDays(dateStr, days){
    const dateObj = new Date(dateStr);
    dateObj.setDate(dateObj.getDate() + days);
    return dateObj;
  }


  parseValue(date){
    return date;
  }
  isValid(){
    return true;
  }
  renderValue(){

  }


}


export default DatePicker;