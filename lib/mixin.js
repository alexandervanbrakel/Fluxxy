var Mixin = function (flux, stores) {
    return {
        
        /**
         * Initial state from the store
         * @returns {*}
         */
        getInitialState: function () {
            return this.getStoreState();
        },

        /**
         * When a component is mounted register
         */
        componentDidMount: function () {
            for (var i in stores) {
                flux.onStoreChange(stores[i], function () {
                    this.setState(this.getStoreState());
                }.bind(this));
            }
        }
    }
};

module.exports = Mixin;