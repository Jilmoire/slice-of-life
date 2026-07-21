import { useState } from 'react';

import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import UploadIcon from '@mui/icons-material/Upload';

import { supabase } from '@/lib/supabaseClient';

export function ImageUploader({ onUploadSuccess }: { onUploadSuccess: () => void }) {
  const [uploading, setUploading] = useState(false);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true);

      const file = event.target.files?.[0];
      if (!file) return;

      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random()}.${fileExt}`;
      const filePath = `uploads/${fileName}`;

      const { error: storageError } = await supabase.storage
        .from('photos') 
        .upload(filePath, file);

      if (storageError) throw storageError;

      const { data: urlData } = supabase.storage
        .from('photos')
        .getPublicUrl(filePath);

      const publicUrl = urlData.publicUrl;

      const { error: dbError } = await supabase
        .from('photos')
        .insert([
          { 
            image_url: publicUrl,
            created_at: new Date().toISOString() 
          }
        ]);

      if (dbError) throw dbError;

      onUploadSuccess();

    } catch (error: any) {
      alert(`Error uploading photo: ${error.message}`);
    } finally {
      setUploading(false);
    }
  };

  return (
    <Button
      variant="contained"
      component="label"
      disabled={uploading}
      startIcon={uploading ? <CircularProgress size={20} /> : <UploadIcon />}
      sx={{ mt: 2 }}
    >
      {uploading ? 'Uploading...' : 'Upload New Photo'}
      <input
        type="file"
        hidden
        accept="image/*"
        onChange={handleFileUpload}
      />
    </Button>
  );
}