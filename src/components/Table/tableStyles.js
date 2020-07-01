import { makeStyles } from '@material-ui/core';

export const tableStyles = makeStyles((theme) => ({
  cell: {
    '&:first-child': {
      paddingLeft: '1rem',
    },
    '&:last-child': {
      paddingRight: '1rem',
    },
  },
  cellBody: {
    padding: '.25rem .5rem',
    fontSize: '0.8125rem',
  },
  cellHeader: {
    padding: '.5rem .5rem',
    fontSize: '.75rem',
    lineHeight: '.8rem',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  cellGroup: {
    padding: '1rem',
    borderLeft: '1px solid #E0E0E0',
    '&:first-child': {
      borderLeft: 'none',
    },
  },
  cellSticky: {
    position: 'sticky',
    left: 0,
    backgroundColor: theme.palette.grey[100],
  },
  rowFixed: {
    backgroundColor: theme.palette.grey[300],
  },
  noData: {
    textAlign: 'center',
  },
  noWrap: {
    whiteSpace: 'nowrap',
  },
  table: {
    tableLayout: 'auto',
    width: '100%',
  },
  tableContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100vh - 3rem)',
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  tableRowContainer: {
    height: 'calc(100vh - 7rem)',
    overflowX: 'scroll',
    overflowY: 'auto',
  },
  tableSortLabelIcon: {
    opacity: 0.15,
  },
  tableFixed: {
    tableLayout: 'fixed',
  },
  tablePagination: {
    order: 9,
    flex: 0,
  },
  tableUpperControl1: {
    marginBottom: '2rem',
    order: 0,
    [theme.breakpoints.down('sm')]: {
      order: 1,
    },
  },
  tableUpperControl2: {
    marginBottom: '2rem',
    order: 1,
    [theme.breakpoints.down('sm')]: {
      order: 0,
    },
  },
  tableWrapper: {
    order: 8,
  },
  tabularNums: {
    fontVariant: 'tabular-nums',
  },
  tooltipBadgeAnchor: {
    top: '-5px',
  },
  tooltipBadgeRoot: {
    flexShrink: 'unset',
  },
  tooltipIcon: {
    fontSize: '1.33rem',
    paddingLeft: `0.6rem`,
  },
}));

export const globalSearchStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
}));