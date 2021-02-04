import { Grid } from '@material-ui/core'
import SideBar from './Components/SideBar'

function App() {
  return (
    <>
      <Grid container>
        <Grid item xs={12} className={'nav-bar'}>Nav Bar</Grid>
        <Grid item xs={9} className={'main'}>Body</Grid>
        <Grid item xs={3} className={'side-bar'}>
          <SideBar />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
