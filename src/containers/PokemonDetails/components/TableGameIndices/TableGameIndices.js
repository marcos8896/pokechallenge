import React from 'react';
import filterCaseInsensitive from '../../../../shared/tableFiltering';
import PropTypes from 'prop-types';

import ReactTable from 'react-table';
import Typography from '@material-ui/core/Typography';


const columns = [{
    Header: <Typography variant="h5">Games</Typography>,
    columns: [
      {
        Header: 'Game',
        accessor: 'version.name',
        minWidth: 150
      },
      {
        Header: 'Game index',
        accessor: 'game_index',
        maxWidth: 150
      },
    ]
  }
];

const TableGameIndices = ({ indices }) => {

  return (
    <ReactTable
      className="-striped -highlight"
      data={indices}
      filterable
      defaultFilterMethod={filterCaseInsensitive}
      columns={columns}
      defaultPageSize={5}
      noDataText="No stats to show"
    />
  );

}

TableGameIndices.propTypes = {
  indices: PropTypes.array,
};

export default TableGameIndices;
