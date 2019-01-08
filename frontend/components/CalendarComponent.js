import React, { Component } from "react";
import { render } from "react-dom";
import gql from 'graphql-tag';
import moment from "moment";
import { Query } from 'react-apollo';
import User from './User';
import { ALL_REQUESTS_CALENDAR_QUERY } from './CalendarList';
import styled from 'styled-components';
import Link from 'next/link';

const CalendarComponentStyles = styled.div`
  height: 20px;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 2px;
  padding-bottom: 2px;
`;

const CalendarStyled = styled.div`
  a {
    font-size: 10px;
    margin: 0;
    color: white;
    vertical-align: top;

  }
`;



class CalendarComponent extends Component {
  state = {
    view: "day",
    date: new Date(),
    width: 500,
    cal_events: [],
  };

  convertDate = (date) => {
    return moment.utc(date).toDate()
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
          <>
          <CalendarStyled>
            <Query query={ALL_REQUESTS_CALENDAR_QUERY}>
              { ({ data, error, loading }) => {
                if ( loading ) return <p> ... loading </p>;
                if ( error ) return <p> ERROR: { error.message }</p>;
                return  <>
                    { data.requests.filter(request => request.email === me.email).map(request =>
                      <Link href={{pathname: '/request-item', query: { id: request.id },}}>
                        <a>
                          <CalendarComponentStyles style={{background: request.approved === "no" ? "red" : request.approved === "yes" ? "black" : "gold"}}>
                            <div request={request} key={ request.id } >
                              { this.convertTime(request.timeOne) } with { request.name }
                            </div>
                          </CalendarComponentStyles>
                        </a>
                      </Link>

                    )}
                  </>
              } }
            </Query>
          </CalendarStyled>
        </>
      )}
    </User>
    );
  }
}

export default CalendarComponent;
