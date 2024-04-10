import 'leaflet/dist/leaflet.css';
import './style.css';

import { Box } from '@mui/material';

import ShapeList from 'components/ShapeList';

import useFetching from 'hooks/useFetching';
import useShapes from 'hooks/useShapes';
import AddShapeForm from 'components/AddShapeForm';

function App() {
  const { addShapeToStore, addShapeToMap, removeShape } = useShapes();

  useFetching();
  return (
    <Box height='100vh'>
      <div id='map-id'></div>
      <ShapeList addShapeToMap={addShapeToMap} removeShape={removeShape} />
			<AddShapeForm addShapeToStore={addShapeToStore} />
    </Box>
  );
}

export default App;
