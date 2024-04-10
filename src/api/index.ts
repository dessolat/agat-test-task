import { URL } from 'endpoints';
import { type TShape } from 'types';

export const fetchShapes = async () => {
  const response = await fetch(URL.SHAPES)
	
	if (!response.ok) {
		throw new Error(response.statusText)
	}

	return response.json() as Promise<TShape[]>
};