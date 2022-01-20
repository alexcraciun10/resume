import { Box, Typography, LinearProgress } from "@mui/material";
import React from "react";

function Skill(props) {
    
        switch(true) {
            case props.value<20 :
                this.grade= 'Weak';
                break;
                default:
                    this.grade='Good';
        };
    
return <Box mt={2}>
<Typography variant="p" m={2}>
  {props.skill}
</Typography>
<Box ml={2} mr={2}>
  <LinearProgress variant="determinate" value={props.value} />
</Box>
<Typography variant="p" ml={2}>
  {this.grade}
</Typography>
</Box>
}

export default Skill;
