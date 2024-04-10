import { useCallback } from 'react';

import { type TAddShapeToStore, type TRemoveShape } from 'types';

import useMap from './useMap';

import { useAppDispatch } from './hooks';
import { addShapeToData, removeShapeFromData } from 'redux/shapesSlice';

const useShapes = () => {
  const { addShapeToMap, removeShapeFromMap } = useMap();

  const dispatch = useAppDispatch();

  const addShapeToStore: TAddShapeToStore = useCallback(shape => {
    dispatch(addShapeToData(shape));
  }, []);

  const removeShape: TRemoveShape = (id, marker) => {
		dispatch(removeShapeFromData(id))
    removeShapeFromMap(marker);
  };
  return { addShapeToStore, addShapeToMap, removeShape };
};
export default useShapes;
