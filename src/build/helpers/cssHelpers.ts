const hexToRgb = (hex: string) => {
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result
		? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
				result[3],
				16,
		  )}`
		: '';
};

export function getRGBA(color: string, opacity: number): string {
	return `rgba(${hexToRgb(color)}, ${opacity})`;
}
