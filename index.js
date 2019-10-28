const generator = (base) => (
	typeof crypto !== 'undefined' && typeof crypto.getRandomValues === 'function'
		? () => {
			const num = crypto.getRandomValues(new Uint8Array(1))[0];
			return (num > base ? num % base : num).toString(base)
		}
		: () => Math.floor(Math.random() * base).toString(base)
);

const uid = (length = 7, hex = false) => (
	Array.from({ length }, generator(hex ? 16 : 36)).join('')
);

// Legacy
module.exports = uid;
// ES6+
module.exports.default = uid;
