import { QNode } from "./qnode";

const renderElem = (vNode: QNode) => {
    const $el = document.createElement(vNode.tagName);

    for(const [k, v] of Object.entries(vNode.attrs)) {
        $el.setAttribute(k, v);
    }

    for(const child of vNode.children) {
       $el.appendChild(qxdom(child));
    }

    return $el;

};

const qxdom = (vNode) => {
    if(typeof vNode === 'string') {
        return document.createTextNode(vNode);
    }

    return renderElem(vNode);
};

export default qxdom;