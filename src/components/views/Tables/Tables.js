import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <div>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>
        New Booking
      </Link>

      <Link to={`${process.env.PUBLIC_URL}/tables/booking/:id`}>
        Edit Booking
      </Link>

      <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}>
        New Event
      </Link>

      <Link to={`${process.env.PUBLIC_URL}/tables/events/:id`}>
        Edit Event
      </Link>

    </div>
  </div>
    
);



export default Tables;
