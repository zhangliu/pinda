interface Pd {
    toast: any;
}

export default {
    init: (pd: Pd) => {
        global.pd = pd;
    },

    get toast() {
        return global?.pd?.toast;
    },
}