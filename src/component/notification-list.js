//Dependencies
import React, { Component , PropTypes} from 'react';
import Notification from './notification';
import {groupBy, map} from 'lodash/collection';
import moment from 'moment';
const propTypes = {
    data: PropTypes.array
};
//Maybe i should add a Notification Group component by date which uses a notifciation list component
const NotificationList = ({data}) => {
    const groupedByDayNotifs = groupBy(data, (n) => moment(n.creationDate).format('L'));

    return (
        <div data-focus='notification-list'>
            {
                map(
                    groupedByDayNotifs,
                    (group, day) => {
                        return (
                            <div>{moment(day).fromNow()} {group.map((notif, id) => <Notification key={id} {...notif} />)}</div>
                        )
                    }
                )
            }
        </div>
    );
};

NotificationList.propTypes = propTypes;

export default NotificationList;
