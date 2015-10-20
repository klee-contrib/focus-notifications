//Dependencies
import React, { Component , PropTypes} from 'react';
import NotificationList from './notification-list';
import {groupBy, map} from 'lodash/collection';
import moment from 'moment';
const propTypes = {
    data: PropTypes.array,
    onRead: PropTypes.func.isRequired
};
function _isYoungerThanA(periodName, date) {
    return moment(date).diff(moment().subtract(1, periodName)) > 0;
}
// function to group date
function groupDate({creationDate: date}) {
    console.log(date);
    if(_isYoungerThanA('day', date)) {
        return 'today';
    }
    if(_isYoungerThanA('week', date)) {
        return 'week';
    }
    if(_isYoungerThanA('month', date)) {
        return 'month';
    }
    return 'before';
}


function formatDate(date) {
    if(_isYoungerThanA('day', date)) {
        return momentDate.fromNow();
    }
    if(_isYoungerThanA('week', date)) {
        return 'Last week';
    }
    if(_isYoungerThanA('month', date)) {
        return 'Last month';
    }
    return 'Before';
}

//Maybe i should add a Notification Group component by date which uses a notifciation list component
const NotificationGroup = ({data, onRead}) => {
    let idx = 0;
    return (
        <div data-focus='notification-group'>
            {
                map(
                    groupBy(data, groupDate),
                    (group, groupTitle) => {
                        return (
                            <div key={idx++}>
                                <h2>{groupTitle}</h2>
                                <NotificationList data={group} onRead={onRead}/>
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
