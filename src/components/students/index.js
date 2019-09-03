import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Header from '../header'
import Title from '../Title'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  table: {
    minWidth: 650,
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  
  title: {
    flexGrow: 1,
  },
  
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Alex Sandler', 'admin@admin.com', 6.0, 24, 4.0),
  createData('Alex Sandler', 'admin@admin.com', 9.0, 37, 4.3),
  createData('Alex Sandler', 'admin@admin.com', 16.0, 24, 6.0),
  createData('Alex Sandler', 'admin@admin.com', 3.7, 67, 4.3),
  createData('Alex Sandler', 'admin@admin.com', 16.0, 49, 3.9),
];

export default function Students() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />

      <main className={classes.content}>

        <div className={classes.appBarSpacer} />

        <Title children="Alunos" />
 
        <Container maxWidth="lg" className={classes.container}>
          <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell align="center">Nome</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Courses</TableCell>
                <TableCell align="center">Lessons</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.name} hover>
                  <TableCell component="th" align="center" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.calories}</TableCell>
                  <TableCell align="center">{row.fat}</TableCell>
                  <TableCell align="center">{row.carbs}</TableCell>
                  <TableCell align="center">
                  <Tooltip title="Excluir" placement="top">
                    <IconButton className={classes.button} aria-label="delete" color="default">
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        </Container>

      </main>
    </div>
  );
}