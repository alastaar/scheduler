import React, { Component } from "react";
import { render } from "react-dom";
import gql from 'graphql-tag';
import events from '../lib/events';
import { perPage } from '../config';
import BigCalendar from "react-big-calendar";
import moment from "moment";
import CalendarStyles from './styles/CalendarStyles';
import debounce from 'lodash.debounce';
import { Query } from 'react-apollo';
import User from './User';
import CalendarComponent from './CalendarComponent';

moment.locale("en");
const localizer = BigCalendar.momentLocalizer(moment);

const allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

const ALL_REQUESTS_CALENDAR_QUERY = gql`
  query ALL_REQUESTS_CALENDAR_QUERY($skip: Int = 0, $first: Int = ${ perPage }) {
    requests(first: $first, skip: $skip, orderBy: createdAt_DESC) {
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
  state = {
    view: "day",
    date: new Date(),
    width: 500,
    cal_events: [],
  };

  convertDate = (date) => {
    return moment(date);
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
  }


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
                localizer={localizer}
                events={data.requests.filter(request => request.email === me.email).map((request, index) => ({
                  title: this.convertTime(request.timeOne) + ' ' + request.user.name + ' ' + request.user.email,
                  start: this.convertDate(request.dateOne),
                  end: request.dateOne,
                  desc: request.user.name,
                }))}
                components={{
                  event: CalendarComponent
                }}
                startAccessor="start"
                endAccessor="end"
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
