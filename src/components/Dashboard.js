import React, { Fragment } from 'react';
import Shops from './Shops';
import BookForm from './BookForm';

const Dashboard = () => {
  return (
    <Fragment>
      <Shops />
      <BookForm />
    </Fragment>
  );
};

export default Dashboard;