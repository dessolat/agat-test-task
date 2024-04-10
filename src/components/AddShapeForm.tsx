import { Button, FormLabel, Paper, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import { TAddShapeToStore, TShape } from 'types';

import L from 'leaflet';
import { useAppSelector } from 'hooks/hooks';

type Props = {
  addShapeToStore: TAddShapeToStore;
};

const AddShapeForm = ({ addShapeToStore }: Props) => {
  const [formData, setFormData] = useState({ name: '', lat: 0, lon: 0 });

  const shapesData = useAppSelector(state => state.data);

  const handleFormChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const getMaxMarkerId = (shapesData: TShape[]) => {
    return shapesData.reduce(
      (maxMarkerId, shape) => (shape.properties.id > maxMarkerId ? shape.properties.id : maxMarkerId),
      0
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const markerJSON = L.marker([formData.lat, formData.lon]).toGeoJSON();
    markerJSON.properties.id = getMaxMarkerId(shapesData) + 1;
		markerJSON.properties.name = formData.name;
    
		addShapeToStore(markerJSON as TShape);
		setFormData({ name: '', lat: 0, lon: 0 });
  };

  return (
    <Paper sx={{ position: 'absolute', left: 10, bottom: 10, width: 300, zIndex: 500 }} variant='elevation'>
      <Stack component='form' padding={2} spacing={1} onChange={handleFormChange} onSubmit={handleSubmit}>
        <FormLabel>Добавить новый маркер:</FormLabel>
        <TextField size='small' label='Имя' name='name' value={formData.name} autoFocus required />
        <TextField
          size='small'
          label='Широта'
          name='lat'
          value={formData.lat}
          type='number'
          required
          autoComplete='false'
        />
        <TextField
          size='small'
          label='Долгота'
          name='lon'
          value={formData.lon}
          type='number'
          required
          autoComplete='false'
        />
        <Button variant='contained' type='submit'>
          Сохранить
        </Button>
      </Stack>
    </Paper>
  );
};
export default AddShapeForm;
