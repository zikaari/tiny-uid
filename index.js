const base = 36;

const generator = typeof crypto !== 'undefined' && typeof crypto.getRandomValues === 'function' ?
    () => {
        const num = crypto.getRandomValues(new Uint8Array(1))[0];
        return (num > base ? num % base : num).toString(base)
    } :
    () => Math.floor(Math.random() * base).toString(base);

function uid(length = 7) {
    return 'x'.repeat(length).replace(/[x]/g, generator);
}

// Legacy
module.exports = uid;
// ES6+
module.exports.default = uid;
