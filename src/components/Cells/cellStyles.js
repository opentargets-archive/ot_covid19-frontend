import { makeStyles, colors } from '@material-ui/core';

export const cellStyles = makeStyles((theme) => ({
  booleanIconTrue: {
    color: colors.green[500],
  },
  booleanIconFalse: {
    color: colors.deepOrange.A400,
  },
  iconCell: {
    verticalAlign: 'middle',
  },
  maxPhaseContainer: {
    margin: 'auto',
    textAlign: 'center',
    fontSize: '0.8125rem',
    lineHeight: '1.05',
    width: '19px',
    fontWeight: 'bold',
  },
  naLabel: {
    border: `1.5px solid ${theme.palette.grey[500]}`,
    borderRadius: '50px',
    margin: 'auto',
    width: '1.5rem',
  },
  qualityContainer: {
    borderRadius: '25px',
    padding: '0 .25rem',
    margin: 'auto',
    textAlign: 'center',
    width: '3rem',
  },
  regulationIcon: {
    color: theme.palette.grey[700],
    fontSize: '1.25rem',
  },
  safetyHasIcon: {
    color: colors.yellow[800],
  },
  safetySourceIcon: {
    fontSize: '1.25rem',
  },
  // The !important tags solve Stylesheet conflicts on production build bug.
  tooltip: {
    backgroundColor: `${theme.palette.common.white} !important`,
    border: `1px solid ${theme.palette.grey[300]} !important`,
    color: `${theme.palette.text.primary} !important`,
    boxShadow: `${theme.shadows[1]} !important`,
    fontSize: `11 !important`,
  },
  // The !important tags solve Stylesheet conflicts on production build bug.
  tooltipArrow: {
    '&:before': {
      backgroundColor: `${theme.palette.common.white} !important`,
      border: `1px solid ${theme.palette.grey[300]} !important`,
    },
  },
}));