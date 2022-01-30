window.dom = {
    find(node) {
        let a = document.querySelectorAll(node)
        return a;
    },
    style(node, name, object) {
        if (arguments.length === 3) {
            node.style[name] = value
        } else if (arguments.length === 2) {
            if (typeof name === 'string') {
                return node.style[name]
            } else if (name instanceof object) {
                //dom.style(div,{color:'red'})
                const object = name
                for (let key in object) {
                    node.style[key] = object[key]
                }
            }
        }
    },
    each(nodeList, fn) {
        for (let i = 0; i < node.length; i++) {
            fn.call(null, nodeList[i])
        }
    }
}
