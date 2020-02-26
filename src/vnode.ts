export interface VNode {
    tagName: string;
    attrs: object;
    children: Array<VNode>;
}
