//Dependencies
import React, { Component , PropTypes} from 'react';
import NotificationList from './notification-list';
import {groupBy, map} from 'lodash/collection';
import moment from 'moment';
const propTypes = {
    data: PropTypes.array
};

// function to group date
function groupDate({creationDate}) {
    return moment(creationDate).format('L');
}

function formatDate(date) {
    const momentDate = moment(date);
    const currentDate = moment();
    const isOlderThanAWeek = momentDate.diff(currentDate.subtract(1, 'week')) > 0;
    const isOlderThanAMonth = momentDate.diff(currentDate.subtract(1, 'month')) > 0;
    return momentDate.fromNow();
}

//Maybe i should add a Notification Group component by date which uses a notifciation list component
const NotificationGroup = ({data}) => {
    let idx = 0;
    return (
        <div data-focus='notification-group'>
            {
                map(
                    groupBy(data, groupDate),
                    (group, day) => {
                        return (
                            <div key={idx++}>
                                <h2>{formatDate(day)}</h2>
                                <NotificationList data={group}/>
                            </div>
                        );
                    }
                )
            }
        </div>
    );
};

NotificationGroup.propTypes = propTypes;

export default NotificationGroup;
