'use client';
import React, { useState, useEffect } from 'react';


import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from '@mui/material/Dialog';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs, { Dayjs } from 'dayjs'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { supabase } from '@/lib/supabaseClient';

//custom modules
import { DashNav } from '@/modules/assets/AppBar';
import { ImageUploader } from '@/modules/assets/UploadButton';

export default function ButtonUsage() {

interface PhotoItem {
  id: string;
  image_url: string;
  created_at: string;
}

const [previewImage, setPreviewImage] = useState<string | null>(null);
const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
const [photos, setPhotos] = useState<PhotoItem[]>([]);
const [loading, setLoading] = useState<boolean>(false);

useEffect(() => {
  if (!selectedDate) return;

  const fetchPhotosByDate = async () => {
    setLoading(true);
    
    const startOfDay = selectedDate.startOf('day').toISOString();
    const endOfDay = selectedDate.endOf('day').toISOString();

    const { data, error } = await supabase
      .from('photos')
      .select('id, image_url, created_at')
      .gte('created_at', startOfDay)
      .lte('created_at', endOfDay);

    if (error) {
      console.error("Error fetching images:", error.message);
    } else {
      console.log("Fetched photos for date:", data);
      setPhotos(data || []);
    }
    setLoading(false);
  };

  fetchPhotosByDate();
}, [selectedDate]);

const handleDeletePhoto = async (photoId: string, imageUrl: string) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this photo?");
  if (!confirmDelete) return;

  try {
    // 1. Extract the relative file path from the full public URL
    // Public URL format: .../storage/v1/object/public/photos/uploads/123.jpg
    const filePath = imageUrl.split('/photos/')[1];

    if (filePath) {
      // 2. Delete file from Supabase Storage bucket
      const { error: storageError } = await supabase.storage
        .from('photos')
        .remove([filePath]);

      if (storageError) console.warn("Storage delete warning:", storageError.message);
    }

    // 3. Delete row from Supabase Database
    const { error: dbError } = await supabase
      .from('photos')
      .delete()
      .eq('id', photoId);

    if (dbError) throw dbError;

    // 4. Update UI state locally so the photo disappears instantly
    setPhotos((prev) => prev.filter((photo) => photo.id !== photoId));

    // Close preview modal if open
    setPreviewImage(null);

  } catch (error: any) {
    alert(`Failed to delete photo: ${error.message}`);
  }
};


  return (
    <html>
      <head/>
        <body>
              <DashNav/>
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent:"space-around",mt: 4, alignItems:"center", height:"85vh"}}>
                        <Box sx={{ display: "flex", flexDirection: "column", padding:2}}>
                          <Typography variant="h6" sx={{fontWeight: 'bold' }}>
                            Date: {selectedDate ? selectedDate.format('MMMM DD, YYYY') : 'None'}
                          </Typography>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateCalendar 
                              value={selectedDate} 
                              onChange={(newDate) => setSelectedDate(newDate)} 
                            />
                          </LocalizationProvider>
                            <ImageUploader onUploadSuccess={() => {}} />
                        </Box>

                        <Box sx={{ display: 'flex'}}>
                          {loading ? (<CircularProgress />) : photos.length === 0 ? (
                            <Typography variant="body1" color="text.secondary">
                              No memories uploaded on this day.
                            </Typography>
                          ) : (
                            <ImageList cols={5} sx={{ width: '70vw', height: '70vh', borderRadius: 2, overflow: 'scroll' }}>
                              {photos.map((photo, index) => {
                                const isEven = index % 4 === 0;
                                  return (
                                    <ImageListItem key={photo.id} cols={isEven ? 2 : 1} rows={isEven ? 2 : 1} sx={{cursor: 'pointer', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.01)' }}}
                                      onClick={() => setPreviewImage(photo.image_url)}>
                                      <img style={{ width: '90%', height: '90%', objectFit: 'cover' }}
                                        src={photo.image_url} 
                                        alt="Memory upload" 
                                        loading="lazy"/>
                                    </ImageListItem>
                                  );
                                }
                              )}
                            </ImageList>
                          )}
                        </Box>


                        <Dialog open={Boolean(previewImage)} onClose={() => setPreviewImage(null)}>
                          {previewImage && (
                            <Box sx={{ position: 'relative' }}>
                              <IconButton
                                onClick={() => {
                                  const activePhoto = photos.find(p => p.image_url === previewImage);
                                  if (activePhoto) handleDeletePhoto(activePhoto.id, activePhoto.image_url);
                                }}
                                sx={{
                                  position: 'absolute',
                                  top: 10,
                                  right: 10,
                                  bgcolor: 'rgba(0,0,0,0.6)',
                                  color: 'white',
                                  '&:hover': { bgcolor: 'red' },
                                }}
                              >
                                <DeleteIcon />
                              </IconButton>

                              <Box
                                component="img"
                                src={previewImage}
                                alt="Enlarged view"
                                sx={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain' }}
                              />
                            </Box>
                          )}
                        </Dialog>
                </Box>
                    
                <Box component="footer" sx={{position: "fixed", width: '100%', bgcolor:"yellow", bottom:0, left:0}}>foot</Box>
        </body>
    </html>
  );
}

