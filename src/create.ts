import { VNode } from './vnode';

export default (tagName: string, attrs: object, children: Array<VNode>) => {
    const vElem = Object.create(null);

    Object.assign(vElem, {
        tagName,
        attrs,
        children
    });

    return vElem;
}