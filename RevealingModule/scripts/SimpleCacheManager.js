/// <reference path="SimpleCache.js" />
/// <reference path="jquery-3.1.1.js" />

var simpleCacheManager = (function SimpleCacheManager(options) {


    // Establish our default settings
    var settings = $.extend({
        simpleCache: null,
        keyId: '#keyId',
        valId: '#valId',
        listId: '#listId',
        getButtonId: '#getButtonId',
        hasButtonId: '#hasButtonId',
        removeButtonId: '#removeButtonId',
        setButtonId: '#setButtonId',
        listButtonId: '#listButtonId'
    }, options);

    if (settings.simpleCache == null) {

        settings.simpleCache = simpleCache;
    }


    // Event Bindings

    $(settings.getButtonId).on("click", function () {
        get();

    });

    $(settings.hasButtonId).on("click", function () {
        has();

    });

    $(settings.removeButtonId).on("click", function () {
        remove();

    });


    $(settings.setButtonId).on("click", function () {
        set();

    });

    $(settings.listButtonId).on("click", function () {
        list();

    });
    // ---
    // PUBLIC METHODS.
    // ---


    function get() {
        var key = $(settings.keyId).val();
        $(settings.valId).val(settings.simpleCache.get(key));
    
    };


    // I check to see if the given key has a cached value.
    function has() {
        var key = $(settings.keyId).val();
        alert(settings.simpleCache.has(key));

    }


    // I remove the given key (and associated value) from the cache.
    // --
    // NOTE: Returns [this] for method chaining.
    function remove() {
        var key = $(settings.keyId).val();
        delete (settings.simpleCache.remove(key));


    }


    // I cache the given value at the given key.
    // --
    // NOTE: Returns [this] for method chaining.
    function set() {
        var key = $(settings.keyId).val();
        var val = $(settings.valId).val();


        settings.simpleCache.set(key,val);

    }

    function list() {
        $(settings.listId).empty();

        for (var key in settings.simpleCache.cache) {

            $(settings.listId).append("<br/>Key:" + key + " Value:" + settings.simpleCache.cache[key]);
        }

    }

    // Reveal the public API.
    return ({
        get: get,
        has: has,
        remove: remove,
        set: set,
        list: list
    });



})({ simpleCache: simpleCache });
