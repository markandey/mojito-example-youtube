/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('searchResultMojitModelFoo', function(Y, NAME) {

    /**
     * The searchResultMojitModelFoo module.
     *
     * @module searchResultMojit
     */

    /**
     * Constructor for the searchResultMojitModelFoo class.
     *
     * @class searchResultMojitModelFoo
     * @constructor
     */
    Y.mojito.models[NAME] = {

        init: function(config) {
            this.config = config;
        },

        /**
         * Method that will be invoked by the mojit controller to obtain data.
         *
         * @param callback {function(err,data)} The callback function to call when the
         *        data has been retrieved.
         */
        getData: function(query,callback) {
            if (!query) {
                callback(false, {});
            }
            var q = "select * from youtube.search where query='" + query + "'";
            Y.YQL(q, function(rawData) {
                try {
                    if (!rawData.query.results) {
                        callback(false, {});
                        return;
                    }
                    callback(false, rawData.query.results);
                } catch (e) {
                    callback(false, {});
                }

            });
        }

    };

}, '0.0.1', {
    requires: ['yql']
});