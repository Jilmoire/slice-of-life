'use client';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs, { Dayjs } from 'dayjs'
import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';

//custom modules
import { DashNav } from '@/modules/assets/AppBar';
import { Logintoggle } from '@/modules/auth/LoginBox'
import { Container, Typography } from '@mui/material';

export default function ButtonUsage() {

interface PhotoItem {
  id: string;
  image_url: string;
  created_at: string;
}

const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
const [photos, setPhotos] = useState<PhotoItem[]>([]);
const [loading, setLoading] = useState<boolean>(false);

useEffect(() => {
    if (!selectedDate) return;

    const fetchPhotosByDate = async () => {
      setLoading(true);
      
      // Get the exact start and end string coordinates for the chosen day
      const startOfDay = selectedDate.startOf('day').toISOString();
      const endOfDay = selectedDate.endOf('day').toISOString();

      const { data, error } = await supabase
        .from('photos') // Your Supabase table name
        .select('id, image_url, created_at')
        .gte('created_at', startOfDay) // Greater than or equal to 12:00 AM of selected day
        .lte('created_at', endOfDay);   // Less than or equal to 11:59 PM of selected day

      if (error) {
        console.error("Error fetching images from Supabase:", error.message);
      } else {
        setPhotos(data || []);
      }
      setLoading(false);
    };

    fetchPhotosByDate();
  }, [selectedDate]);

  return (
    <html>
      <head/>
        <body>
              <DashNav/>
<Container sx={{display:"flex",flexDirection:"row",marginLeft:"0", justifyContent:"space-between", alignItems:"center"}}>
              <Box sx={{display:"flex", flexDirection: "column"}}>
                <Box sx={{display:"flex", flexDirection: "column"}}>
                <Typography variant="h6" sx={{display:"flex"}}>
                  Date:
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateCalendar />
                </LocalizationProvider>
                </Box>

              </Box>

              <Box sx={{border:"black"}}>
                <ImageList cols={5} variant="quilted" sx={{ width: '60vw', height: '70vh', borderRadius: 3, overflow: 'hidden' }}>
                                <ImageListItem cols={2} rows={1}>
                                    <img src="/photos/random_wallpaper.png"></img>
                                </ImageListItem>
                                <ImageListItem rows={2} cols={3}>
                                    <img src="/photos/random_wallpaper2.png"></img>
                                </ImageListItem>
                                <ImageListItem rows={1} cols={1}>
                                    <img src="/photos/random_wallpaper2.png"></img>
                                </ImageListItem>
                                <ImageListItem rows={1} cols={1}>
                                    <img src="/photos/random_wallpaper.png"></img>
                                </ImageListItem>
                </ImageList>
              </Box>
</Container>
              <Box component="footer" sx={{position: "fixed", width: '100%',}}>foot</Box>
        </body>
    </html>
  );
}

