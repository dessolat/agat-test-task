import { useCallback, useEffect } from 'react';

import { fetchShapes } from '../api/index';

import { addShapesToData } from 'redux/shapesSlice';
import { useAppDispatch } from './hooks';

const useFetching = () => {
  const fetchShapesCallback = useCallback(fetchShapes, []);

  const dispatch = useAppDispatch();

	useEffect(() => {
		(async () => {
      try {
        const shapesData = await fetchShapesCallback();

        dispatch(addShapesToData(shapesData));
      } catch (e) {
        console.error('Error:', (e as Error).message);
      }
    })();
	}, [fetchShapesCallback, dispatch])
};
export default useFetching;
