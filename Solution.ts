
function mergeInBetween
    (headFirstList: ListNode | null, indexA: number, indexB: number, headSecondList: ListNode | null)
    : ListNode | null {

    const keyNodesToSliceList = findKeyNodesToSliceList(headFirstList, indexA, indexB);
    const lastNodeInSecondList = findLastNodeInList(headSecondList);

    keyNodesToSliceList.nodePreceedingNodeAtIndexA.next = headSecondList;
    lastNodeInSecondList.next = keyNodesToSliceList.nodeAtIndexB.next;
    keyNodesToSliceList.nodeAtIndexB.next = null;

    return headFirstList;
};

function findKeyNodesToSliceList(headFirstList: ListNode, indexA: number, indexB: number): KeyNodesToSliceList {
    let nodePreceedingNodeAtIndexA: ListNode = null;
    let nodeAtIndexB: ListNode = null;

    let current = headFirstList;
    let indexNodes = 0;

    while (indexNodes < indexB) {
        if (indexNodes === indexA - 1) {
            nodePreceedingNodeAtIndexA = current;
        }
        ++indexNodes;
        current = current.next;
    }
    nodeAtIndexB = current;

    return new KeyNodesToSliceList(nodePreceedingNodeAtIndexA, nodeAtIndexB);
}

function findLastNodeInList(headSecondList: ListNode): ListNode {
    let lastNodeInSecondList: ListNode = null;
    let current: ListNode = headSecondList;

    while (current !== null) {
        lastNodeInSecondList = current;
        current = current.next;
    }
    return lastNodeInSecondList;
}

class KeyNodesToSliceList {
    constructor(public nodePreceedingNodeAtIndexA: ListNode, public nodeAtIndexB: ListNode) { }
}

/*
Class ListNode is in-built in the solution file on leetcode.com. 
When running the code on the website, do not include this class.
 */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
