import React from 'react'
import { Grid,
Card,
CardActionArea,
CardActions,
CardContent,
CardMedia,
Typography,
Button,
 } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    addButton:{
        fontSize: 50,
        color: "#ccc",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        height: 350,
        placeContent: 'center',
    },
    card: {
      maxWidth: 345,
      
    },
    media: {
      height: 140,
    },
  }));

export default function ListCourses() {
        const classes = useStyles();

        return (
            <>
            <Button variant="contained" color="secondary" style={{marginBottom: 20}}>
                <AddIcon/>Novo curso
            </Button>

            <Grid container spacing={2}>
            {/* Cursos */}

                <Grid item xs={12} sm={4}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image="/static/course1.jpg"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            First Course
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Abrir
                        </Button>
                        <Button size="small" color="primary">
                        Learn More
                        </Button>
                    </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={4}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image="/static/course1.jpg"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Second Course
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Abrir
                        </Button>
                        <Button size="small" color="primary">
                        Learn More
                        </Button>
                    </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={4}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image="/static/course1.jpg"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Third Course
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Abrir
                        </Button>
                        <Button size="small" color="primary">
                        Learn More
                        </Button>
                    </CardActions>
                    </Card>
                </Grid>

                


            </Grid>

            
            </>
        )
    }
