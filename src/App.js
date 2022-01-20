import {
  Avatar,
  Container,
  Divider,
  Box,
  TextField,
  ThemeProvider,
  Typography,
  Paper,
  LinearProgress,
} from '@mui/material';
import theme from './theme';
import avatar from './images/me.jpeg';
import { bgcolor } from '@mui/system';
import Skill from './components/skill';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Paper
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            m: 'auto',
            width: 1024,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignContent: 'flex-start',
            // bgcolor: '#fff322',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              m: 3,
              flexDirection: 'column',
              // bgcolor: '#ccc',
            }}
          >
            <Typography variant="h1" sx={{ width: 780, mt: 2 }}>
              ALEXANDRU CRĂCIUN
            </Typography>
            <Typography variant="h2" sx={{ mt: 2, mb: 2 }}>
              Web Developer
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                mt: 1,
              }}
            >
              <Typography variant="h3">+40 767 168 701</Typography>
              <Typography variant="h3">alexandruxc10@gmail.com</Typography>
              <Typography variant="h3">Bucharest, RO</Typography>
            </Box>
          </Box>
          <Avatar
            alt="Alexandru Crăciun"
            src={avatar}
            sx={{
              width: 150,
              height: 150,
              ml: 2,
              mt: 2,
              border: '3px solid #E4472E',
            }}
          />
          <Divider width={'96%'} variant="middle" color="#ff4333" />
          <Box width={'43%'} bgcolor="#fff333" m={4}>
            Reliable Web Developer adept at contributing to high quality work,
            finding solutions and determining customer satisfaction.
          </Box>
          <Box width={'43%'} bgcolor="#fff333" m={4}>
            Reliable Web Developer adept at contributing to high quality work,
            finding solutions and determining customer satisfaction.
          </Box>
          <Box width={'43%'} m={4}>
            <Typography variant="h4" m={2}>
              SKILLS
            </Typography>

            <Skill skill={'Computer'} value={80}/>

          

            
          </Box>
          <Box height={1212}>something</Box>
        </Paper>
      </div>
    </ThemeProvider>
  );
}

export default App;
