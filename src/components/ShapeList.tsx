import { Paper, Stack } from '@mui/material';

import { type TAddShapeToMap, type TRemoveShape } from 'types';

import { useAppSelector } from 'hooks/hooks';

import ShapeListItem from './ShapeListItem';

type Props = {
  addShapeToMap: TAddShapeToMap;
  removeShape: TRemoveShape;
};

const ShapeList = ({ addShapeToMap, removeShape }: Props) => {
  const shapesData = useAppSelector(state => state.data);
console.log(shapesData)
  return (
    <Paper sx={{ position: 'absolute', left: 10, top: 10, width: 300, zIndex: 500,py: 2 }} variant='elevation' >
      <Stack component='ul' px={2} spacing={1} maxHeight='58vh' sx={{overflowY: 'scroll'}}>
        {shapesData.map((shape, i) => (
          <ShapeListItem
            key={shape.properties.id}
            shape={shape}
            addShapeToMap={addShapeToMap}
            removeShape={removeShape}
          />
        ))}
      </Stack>
    </Paper>
  );
};
export default ShapeList;
