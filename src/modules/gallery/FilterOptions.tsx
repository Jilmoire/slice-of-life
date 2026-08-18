import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'

export function ImgFilter() {
  return (
    <Box>
        <FormControl fullWidth>
            <InputLabel id="imgfilter">Select Filter</InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Age">
                    <MenuItem>By Date</MenuItem>
                    <MenuItem>By Name</MenuItem>
                    <MenuItem>By Size</MenuItem>
                </Select>
        </FormControl>
    </Box>

  );
}