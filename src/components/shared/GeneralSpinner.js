import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
  spinner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  }
}

const GeneralSpinner = () => (
  <div style={styles.spinner}><CircularProgress /></div>
);

export default GeneralSpinner;


