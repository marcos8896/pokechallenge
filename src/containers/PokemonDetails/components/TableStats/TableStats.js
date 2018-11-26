import React from 'react';
import filterCaseInsensitive from '../../../../shared/tableFiltering';
import PropTypes from 'prop-types';

import ReactTable from 'react-table';
import Typography from '@material-ui/core/Typography';


const columns = [{
    Header: <Typography variant="h5">Stats</Typography>,
    columns: [
      {
        Header: 'Stat name',
        accessor: 'stat.name',
        maxWidth: 150
      },
      {
        Header: 'Effort',
        accessor: 'effort',
        maxWidth: 70
      },
      {
        Header: 'Base stat points',
        accessor: 'base_stat',
        maxWidth: 150
      },
    ]
  }
];

const TableStats = ({ stats }) => {

  return (
    <ReactTable
      className="-striped -highlight"
      data={stats}
      filterable
      defaultFilterMethod={filterCaseInsensitive}
      columns={columns}
      defaultPageSize={5}
      noDataText="No stats to show"
    />
  );

}

TableStats.propTypes = {
  stats: PropTypes.array,
};

export default TableStats;
