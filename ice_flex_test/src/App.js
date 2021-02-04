import { Grid } from '@material-ui/core'
import SideBar from './Components/SideBar'
import NavBar from './Components/NavBar'
import Dashboard from './Components/Dashboard'

function App() {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid item xs={9} className={'main'}>
          <Dashboard />
        </Grid>
        <Grid item xs={3} className={'side-bar'}>
          <SideBar />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
