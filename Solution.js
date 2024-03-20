
/**
 * @param {ListNode} headFirstList
 * @param {number} indexA
 * @param {number} indexB
 * @param {ListNode} headSecondList
 * @return {ListNode}
 */
var mergeInBetween = function (headFirstList, indexA, indexB, headSecondList) {
    const keyNodesToSliceList = findKeyNodesToSliceList(headFirstList, indexA, indexB);
    const lastNodeInSecondList = findLastNodeInList(headSecondList);

    keyNodesToSliceList.nodePreceedingNodeAtIndexA.next = headSecondList;
    lastNodeInSecondList.next = keyNodesToSliceList.nodeAtIndexB.next;
    keyNodesToSliceList.nodeAtIndexB.next = null;

    return headFirstList;
};

/**
 * @param {ListNode} headFirstList
 * @param {number} indexA 
 * @param {number} indexB 
 * @return {KeyNodesToSliceList}
 */
function findKeyNodesToSliceList(headFirstList, indexA, indexB) {
    let nodePreceedingNodeAtIndexA = null;
    let nodeAtIndexB = null;

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

/**
 * @param {ListNode} headSecondList
 * @return {ListNode}
 */
function findLastNodeInList(headSecondList) {
    let lastNodeInSecondList = null;
    let current = headSecondList;

    while (current !== null) {
        lastNodeInSecondList = current;
        current = current.next;
    }
    return lastNodeInSecondList;
}

/**
 * @param {ListNode} nodePreceedingNodeAtIndexA
 * @param {ListNode} nodeAtIndexB
 */
function KeyNodesToSliceList(nodePreceedingNodeAtIndexA, nodeAtIndexB) {
    this.nodePreceedingNodeAtIndexA = nodePreceedingNodeAtIndexA;
    this.nodeAtIndexB = nodeAtIndexB;
}

/*
 Function ListNode is in-built in the solution file on leetcode.com. 
 When running the code on the website, do not include this function.
 */
/**
 * @param {number} val
 * @param {ListNode} next
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}
