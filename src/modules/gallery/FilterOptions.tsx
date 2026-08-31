"use client";

import * as React from 'react';
import Box from '@mui/material/Box'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton'

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import dayjs from 'dayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs' 
import { Typography } from '@mui/material';

export function ImgFilter() {
  const [filter, setFilter] = React.useState("");
  const [day, setDay] = React.useState(dayjs());

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box>
          <FormControl fullWidth>
              <InputLabel id="imgfilter">Select Filter</InputLabel>
                  <Select labelId="imgfilter" id="demo-simple-select" label="Filter" value={filter} onChange={handleChange}>
                      <MenuItem value={"Show All"}> Show All</MenuItem>
                      <MenuItem value={"By Date Uploaded"}>By Date Uploaded</MenuItem>
                      <MenuItem value={"Alphbetically"}>Alphbetically</MenuItem>
                  </Select>
          </FormControl>

          <Box>
            <DateCalendar disabled={filter !== "By Date Uploaded"} value={day} onChange={(newValue) => setDay(newValue)}/>
          </Box>

          <Box>
            <ToggleButtonGroup  disabled={filter !== "Alphbetically"}>
              <ToggleButton value="a-z">
                <ArrowDownwardIcon /> <Typography>: A-Z</Typography>
              </ToggleButton>
              <ToggleButton value="z-a">
                <ArrowUpwardIcon /> <Typography>: Z-A</Typography>
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
      </Box>
    </LocalizationProvider>

  );
}