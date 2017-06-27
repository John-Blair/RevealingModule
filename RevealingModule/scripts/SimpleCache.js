
// I provide a super simple cache container.
var simpleCache = (function SimpleCache() {

    // Create an object without a prototype so that we don't run into any cache-key
    // conflicts with native Object.prototype properties.
    var cache = Object.create(null);

    // Reveal the public API.
    return ({
        get: get,
        has: has,
        remove: remove,
        set: set,
        cache: cache
    });


    // ---
    // PUBLIC METHODS.
    // ---


    // I get the value cached at the given key; or, undefined.
    function get(key) {

        return (cache[key]);

    }

    function list() {

        var x = cache;
        return (cache);

    }


    // I check to see if the given key has a cached value.
    function has(key) {

        return (key in cache);

    }


    // I remove the given key (and associated value) from the cache.
    // --
    // NOTE: Returns [this] for method chaining.
    function remove(key) {

        delete (cache[key]);

        // CAUTION: In this context, [this] does not refer to the SimpleCache instance;
        // rather, it refers to the public API that was "revealed". As such, method
        // chaining can only work in conjunction with "public" methods.
        return (this);

    }


    // I cache the given value at the given key.
    // --
    // NOTE: Returns [this] for method chaining.
    function set(key, value) {

        cache[key] = value;

        // CAUTION: In this context, [this] does not refer to the SimpleCache instance;
        // rather, it refers to the public API that was "revealed". As such, method
        // chaining can only work in conjunction with "public" methods.
        return (this);

    }

})();
