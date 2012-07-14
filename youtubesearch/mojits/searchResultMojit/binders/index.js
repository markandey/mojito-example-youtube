/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('searchResultMojitBinderIndex', function(Y, NAME) {

/**
 * The searchResultMojitBinderIndex module.
 *
 * @module searchResultMojitBinderIndex
 */

    /**
     * Constructor for the searchResultMojitBinderIndex class.
     *
     * @class searchResultMojitBinderIndex
     * @constructor
     */
    Y.namespace('mojito.binders')[NAME] = {

        /**
         * Binder initialization method, invoked after all binders on the page
         * have been constructed.
         */
        init: function(mojitProxy) {
            this.mojitProxy = mojitProxy;
        },

        /**
         * The binder method, invoked to allow the mojit to attach DOM event
         * handlers.
         *
         * @param node {Node} The DOM node to which this mojit is attached.
         */
        bind: function(node) {
            var me = this;
            this.node = node;
            /////// SIMPLE BINDER
            Y.one('#get').on('click', function() {
                var text = Y.one('#text').get('value');
                me.node.set('innerHTML', 'loading');
                me.mojitProxy.invoke('index', {
                    'params': {
                        'url': {
                            'query': text
                        }
                    }
                }, function(err, html) {
                    me.node.set('innerHTML', html);
                });
            });
            /////////BINDER ENDS
        }

    };

}, '0.0.1', {requires: ['event-mouseenter', 'mojito-client']});
