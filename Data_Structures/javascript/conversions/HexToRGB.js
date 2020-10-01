const hexStringToRGB = hexString => {
	const r = (hexString.substring(1, 3)).toUpperCase();
	const g = (hexString.substring(3, 5)).toUpperCase();
	const b = (hexString.substring(5, 7)).toUpperCase();

	r = parseInt(r, 16);
	g = parseInt(g, 16);
	b = parseInt(b, 16);
	const obj = { r, g, b };

	return obj;
}