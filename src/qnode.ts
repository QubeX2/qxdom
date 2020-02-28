export interface QNode {
    tagName: string;
    attrs: object;
    children: Array<QNode>;
}

const qnode = (tagName: string, attrs: object, children: Array<QNode>) => {
    const vElem = Object.create(null);

    Object.assign(vElem, {
        tagName,
        attrs,
        children
    });

    return vElem;
};

export default qnode;