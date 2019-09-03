import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import { Link } from 'react-router-dom'


export const mainListItems = (
  <div>
    <Link to="/">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon style={{color: '#fff'}} />
        </ListItemIcon>
          <ListItemText primary="Home" />
      </ListItem>
    </Link>
    
    <Link to="/students">
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon style={{color: '#fff'}} />
        </ListItemIcon>
          <ListItemText primary="Students" />
      </ListItem>
    </Link>
    

    <ListItem button>
      <ListItemIcon>
        <BarChartIcon style={{color: '#fff'}} />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>


    <ListItem button>
      <ListItemIcon>
        <LayersIcon style={{color: '#fff'}} />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItem>


  </div>
);
