import { Box, Typography, LinearProgress } from "@mui/material";
import React from "react";

function Skill(props) {
var grade='';
if(props.value<=20) {grade='Basic'} else
if(props.value<=40) {grade='Fair'} else
if(props.value<=60) {grade='Good'} else
if(props.value<=80) {grade='Very Good'} else
if(props.value>81) {grade='Excellent'};
    
return <Box mt={2}>
<Typography variant="p" m={2}>
  {props.skill}
</Typography>
<Box ml={2} mr={2}>
  <LinearProgress variant="determinate" value={props.value} />
</Box>
<Box textAlign={'right'} mr={2}>
  {grade}
</Box>
</Box>
}

export default Skill;
