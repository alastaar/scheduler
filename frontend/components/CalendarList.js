import React, { Component } from "react";
import { render } from "react-dom";
import gql from 'graphql-tag';
import dates from '../lib/dates';
import { perPage } from '../config';
import BigCalendar from "react-big-calendar";
import moment from "moment";
import CalendarStyles from './styles/CalendarStyles';
import debounce from 'lodash.debounce';
import { Query } from 'react-apollo';
import User from './User';
import CalendarComponent from './CalendarComponent';
import Router from 'next/router';

moment.locale("en");
const localizer = BigCalendar.momentLocalizer(moment);

const allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

const ALL_REQUESTS_CALENDAR_QUERY = gql`
  query ALL_REQUESTS_CALENDAR_QUERY {
    requests(orderBy: createdAt_DESC) {
      id
      name
      email
      details
      dateOne
      timeOne
      approved
      user{
        name
        lastName
        email
      }
    }
  }
`;


class CalendarList extends Component {

 allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

  state = {
    view: "day",
    date: new Date(),
    width: 500,
    cal_events: [],
  };

  convertDate = (date, time) => {
    var newDate = new Date();
    var dateParts=date.split('-');
    var timeParts=time.split(':');
    var mydate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2], timeParts[0], timeParts[1]);
    var newDate = moment.utc(mydate).toDate()
    console.log(newDate);
    return newDate;
  }

  convertDatePlusOne= (date, time) => {
    var newDate = new Date();
    var newDatePlusOne = new Date();
    var dateParts=date.split('-');
    var timeParts=time.split(':');
    var mydate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2], timeParts[0], timeParts[1]);
    var newDate = moment.utc(mydate).toDate();
    var newDatePlusOne = moment(newDate).add(1, 'h').toDate();
    console.log(newDatePlusOne);
    return newDatePlusOne;
  }

  convertName = (name) => {
    if(name === null) {
      return '';
    } else {
      return name;
    }
  }

  convertTime = (time24) => {
    var tmpArr = time24.split(':'), time12;
    if(+tmpArr[0] == 12) {
      time12 = tmpArr[0] + ':' + tmpArr[1] + ' pm';
    }
    else {
      if(+tmpArr[0] == 0) {
        time12 = '12:' + tmpArr[1] + ' am';
      }
      else {
        if(+tmpArr[0] > 12) {
          time12 = (+tmpArr[0]-12) + ':' + tmpArr[1] + ' pm';
        }
        else {
          time12 = (+tmpArr[0]) + ':' + tmpArr[1] + ' am';
        }
      }
    }
    return time12;
  };

    eventStyleGetter = (event, approved, start, end, isSelected) => {
      var backgroundColor = '#' + event.hexColor;
      if(event.approved === "no") {
        var style = {
            backgroundColor: 'red',
            borderRadius: '0px',
            opacity: 0.8,
            color: 'white',
            border: '0px',
            display: 'block'
        };
      } else if ( event.approved == "yes" ) {
        var style = {
            backgroundColor: 'black',
            borderRadius: '0px',
            opacity: 0.8,
            color: 'white',
            border: '0px',
            display: 'block'
        };
      } else {
        var style = {
            backgroundColor: 'gold',
            borderRadius: '0px',
            opacity: 0.8,
            color: 'black',
            border: '0px',
            display: 'block'
        };
      }
      return {
          style: style
      };
  };

  handleSelectEvent = event => {
    Router.push({
      pathname: '/request-item',
      query: { id: event.id },
    });
  };


  render() {
    return (
      <User>
        {({ data: { me } }) => (
        <CalendarStyles>
        <div className="key">
          <div className="red"></div><span>Pending</span>
          <div className="black"></div><span>Approved</span>
          <div className="gold"></div><span>Confirmed</span>
        </div>
        <Query query={ALL_REQUESTS_CALENDAR_QUERY}>
          {({ data, loading, error }) => (
            <div style={{ height: 500 }}>
              <BigCalendar
                events={data.requests.filter(request => request.email === me.email && request.user !== null).map((request, index) => ({
                  title: this.convertTime(request.timeOne) + ' ' + this.convertName(request.user.name) + ' ' + this.convertName(request.user.email),
                  start: this.convertDate(request.dateOne, request.timeOne),
                  end: this.convertDatePlusOne(request.dateOne, request.timeOne),
                  approved: request.approved,
                  id: request.id,
                }))}
                max={dates.add(dates.endOf(new Date(), 'day'), -1, 'hours')}
                defaultDate={new Date()}
                step={60}
                showMultiDayTimes
                views={['month', 'week', 'day', 'agenda']}
                onSelectEvent={(event) => this.handleSelectEvent(event)}
                eventPropGetter={(this.eventStyleGetter)}
                localizer={localizer}
              />
            </div>
          )}
        </Query>
        </CalendarStyles>
      )}
    </User>
    );
  }
}

export default CalendarList;
export { ALL_REQUESTS_CALENDAR_QUERY };
