import { Button, Stack, Typography } from '@mui/material';

import { type TMarker, type TShape, type TRemoveShape, type TAddShapeToMap } from 'types';

import { useEffect, useRef } from 'react';

type Props = {
  shape: TShape;
  addShapeToMap: TAddShapeToMap;
  removeShape: TRemoveShape;
};
const ShapeListItem = ({ shape, addShapeToMap, removeShape }: Props) => {
  const markerRef = useRef<TMarker>(null as unknown as TMarker);

  useEffect(() => {
    markerRef.current = addShapeToMap(shape);
  }, [addShapeToMap]);

  const handleDeleteClick = () => {
    removeShape(shape.properties.id, markerRef.current);
  };

  return (
    <Stack key={shape.properties.id} direction='row' justifyContent='space-between' alignItems='center'>
      <Typography>{shape.properties.name}</Typography>
      <Button size='small' variant='contained' color='error' onClick={handleDeleteClick}>
        Удалить
      </Button>
    </Stack>
  );
};
export default ShapeListItem;
