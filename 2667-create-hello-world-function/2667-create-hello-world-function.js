/**
 * @return {Function}
 */
var createHelloWorld = function() {
    const f = ["Hello World"];
    console.log(f);
    return function(...args) {
        return "Hello World";
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */