import { useEffect, useState } from 'react';

export default function useDebounceValue<T = unknown>(value: T, delay: number) {
	const [debounceValue, setDebounceValue] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebounceValue(value);
		}, delay);

		return () => {
			clearInterval(handler);
		};
	}, [value, delay]);

	return debounceValue;
}
