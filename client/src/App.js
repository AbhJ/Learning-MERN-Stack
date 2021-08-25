// import logo from './logo.svg';
// import './App.css';
import { React, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import memories from './images/memories.jpeg';
import Posts from './components/Posts/Posts';
import Form from './components/form/Form';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import useStyles from './styles';
function App() {
	const classes = useStyles();
	const dispatch = useDispatch(useEffect);
	useEffect(() => {
		dispatch(getPosts());
		// return () => {
		// cleanup
		// }
	}, [dispatch]);
	return (
		<Container maxwidth="lg">
			<AppBar className={classes.appBar} position="static" color="inherit">
				<Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
				<img className={classes.image} src={memories} alt="memories" height="200" />
			</AppBar>
			<Grow in>
				<Container>
					<Grid container justify="space-between" alignItems="stretch" spacing={3}>
						<Grid items xs={12} sm={7}>
							<Posts />
						</Grid>
						<Grid items xs={12} sm={4}>
							<Form />
						</Grid>
					</Grid>
				</Container>
			</Grow>
		</Container>
	);
}

export default App;
