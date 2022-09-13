import {
  Avatar,
  Divider,
  Box,
  ThemeProvider,
  Typography,
  Paper,
  List,
  ListItem,
} from '@mui/material';
import theme from './theme';
import avatar from './images/me.jpeg';
import { bgcolor } from '@mui/system';
import Skill from './components/skill';
import Period from './components/period';
import Activity from './components/activity';

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
              {/* Web Developer */}
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
              <Typography variant="h3">Rm. Valcea, RO</Typography>
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
          <Divider width={980} variant="middle" color="#ff4333" />

          <Box width={358} m={2}>
            <Box m={2}>
              Eager to learn, adept at contributing to high quality work,
              finding solutions and determining customer satisfaction.
            </Box>
            <Typography variant="h4" m={2}>
              SKILLS
            </Typography>

            
            <Skill skill={'HTML'} value={90} />
            <Skill skill={'CSS'} value={90} />
            <Skill skill={'React'} value={80} />
            <Skill skill={'Java'} value={40} />
            <Skill skill={'Collaboration'} value={100} />
            <Skill skill={'Analitical Skills'} value={100} />


            <Typography variant="h4" m={2}>
              LANGUAGES
            </Typography>

            <Skill skill={'English'} value={100} />

            <Typography variant="h4" m={2}>
              EDUCATION
            </Typography>
            <Box
              ml={2}
              mr={2}
              mt={1}
              mb={0}
              sx={{ display: 'flex', flexDirection: 'row', width: 'auto' }}
            >
              <Period>2022.03-2022.07</Period>
              <Activity>
                <Typography variant="h4" m={1}>
                  INTERNSHIP, DB CLOUD SCHOOL
                </Typography>
                <Box m={1}>
                  Deutsche Bank Romania
                </Box>
              </Activity>
            </Box>
            <Box
              ml={2}
              mr={2}
              mt={1}
              mb={0}
              sx={{ display: 'flex', flexDirection: 'row', width: 'auto' }}
            >
              <Period>2011.10-2015.06</Period>
              <Activity>
                <Typography variant="h4" m={1}>
                  BE, COMPUTER SCIENCE
                </Typography>
                <Box m={1}>
                  Lucian Blaga University of Sibiu - Herman Oberth Engineering Faculty
                </Box>
              </Activity>
            </Box>

            <Box
              ml={2}
              mr={2}
              mt={1}
              mb={0}
              sx={{ display: 'flex', flexDirection: 'row', width: 'auto' }}
            >
              <Period>2006.09-2010.06</Period>
              <Activity>
                <Typography variant="h4" m={1}>
                  HSD, MATH & COMPUTER SCIENCE
                </Typography>
                <Box m={1}>
                  Ferdinand the 1st Technologic High School of Rm. Vâlcea 
                </Box>
              </Activity>
            </Box>
          </Box>

          <Divider orientation="vertical" variant="middle" flexItem  color="#ff4333"/>

          <Box width={601} m={2}>
            <Typography variant="h4" m={2}>
              WORK EXPERIENCE
            </Typography>
            <Box
              ml={2}
              mr={2}
              mt={1}
              mb={0}
              sx={{ display: 'flex', flexDirection: 'row', width: 'auto' }}
            >
              <Period>2021.03-2021.10</Period>
              <Activity>
                <Typography variant="h4" m={1}>
                  QA TESTER
                </Typography>
                <Typography variant="p" m={1}>
                  CRĂCIUN CONCEPT SRL for DEEPSTASH SRL - Remote
                </Typography>
                <List>
                  <ListItem>
                    Completed in-depth usability testing on Windows, MacOs and
                    Android devices
                  </ListItem>
                  <ListItem>
                    Evaluated function, performance and design compliance of the
                    product against design standards and customer needs
                  </ListItem>
                  <ListItem>
                    Documented testing procedures for developers and future
                    testing use
                  </ListItem>
                  <ListItem>
                    Recommended changes and corrections to developers for
                    optimal software usability
                  </ListItem>
                  <ListItem>
                    Advised developers on problems with performance and other
                    issues
                  </ListItem>
                  <ListItem>
                    Collaborated with developers and product owners to stay
                    current on product features and intended functionality
                  </ListItem>
                  <ListItem>
                    Monitored resolution of bugs, tested fixes and helped
                    developers tackle ongoing problems by providing QA
                    perspective
                  </ListItem>
                </List>
              </Activity>
            </Box>

            <Box
              ml={2}
              mr={2}
              mt={1}
              mb={0}
              sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}
            >
              <Period>2015.06-2016.02</Period>
              <Activity>
                <Typography variant="h4" m={1}>
                  DATA ENTRY CLERK
                </Typography>
                <Typography variant="p" m={1}>
                  ELEMENT SUSPEN SRL - Sibiu, RO
                </Typography>
                <List>
                  <ListItem>
                    Completed data entry tasks with accuracy and efficiency
                  </ListItem>
                  <ListItem>
                    Mantained product listings according to specifications
                  </ListItem>
                  <ListItem>
                    Edited HTML, CSS and images for the customer listings
                  </ListItem>
                  <ListItem>
                    Executed verifications against databases to check
                    availability and prices for the customer listings
                  </ListItem>
                  <ListItem>
                    Compiled data and reviewed information for accuracy prior to
                    input
                  </ListItem>
                  <ListItem>
                    Improved work efficiency by using mouse macros for
                    Copy&Paste jobs
                  </ListItem>
                </List>
              </Activity>
            </Box>

            <Box
              ml={2}
              mr={2}
              mt={1}
              mb={0}
              sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}
            >
              <Period>2012.11-Present</Period>
              <Activity>
                <Typography variant="h4" m={1}>
                  ADMINISTRATOR{' '}
                </Typography>
                <Typography variant="p" m={1}>
                CRĂCIUN CONCEPT SRL - Rm. Vâlcea, RO
                </Typography>
                <List>
                  <ListItem>
                    Eliminated recordkeeping errors by precisely handling financial transactions, journal entries and accounts payable and receivable activities
                  </ListItem>
                  <ListItem>
                    Managed payroll, transactions, invoicing and budgeting to decrease financial inconsistencies
                  </ListItem>
                  <ListItem>
                    Adapted to workflow changes and implemented continuous process improvements to overcome obstacles
                  </ListItem>
                  <ListItem>
                    Maximized branding outreach by facilitating marketing initiatives
                  </ListItem>
                </List>
              </Activity>
            </Box>

            
          </Box>
        </Paper>
      </div>
    </ThemeProvider>
  );
}

export default App;
