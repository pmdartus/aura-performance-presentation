({
    render : function(cmp, helper) {
        console.timeStamp('RENDER - List');
        return this.superRender();
    },
    afterRender: function (component, helper) {
        console.timeStamp('AFTER_RENDER - List');
        return this.superAfterRender();
    },
})
