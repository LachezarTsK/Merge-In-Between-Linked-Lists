
using System;

public class Solution
{
    private record KeyNodesToSliceList(ListNode nodePreceedingNodeAtIndexA, ListNode nodeAtIndexB) { }
    public ListNode MergeInBetween(ListNode headFirstList, int indexA, int indexB, ListNode headSecondList)
    {
        KeyNodesToSliceList keyNodesToSliceList = FindKeyNodesToSliceList(headFirstList, indexA, indexB);
        ListNode lastNodeInSecondList = FindLastNodeInList(headSecondList);

        keyNodesToSliceList.nodePreceedingNodeAtIndexA.next = headSecondList;
        lastNodeInSecondList.next = keyNodesToSliceList.nodeAtIndexB.next;
        keyNodesToSliceList.nodeAtIndexB.next = null;

        return headFirstList;
    }

    private KeyNodesToSliceList FindKeyNodesToSliceList(ListNode headFirstList, int indexA, int indexB)
    {
        ListNode? nodePreceedingNodeAtIndexA = null;
        ListNode? nodeAtIndexB = null;

        ListNode current = headFirstList;
        int indexNodes = 0;

        while (indexNodes < indexB)
        {
            if (indexNodes == indexA - 1)
            {
                nodePreceedingNodeAtIndexA = current;
            }
            ++indexNodes;
            current = current.next;
        }
        nodeAtIndexB = current;

        return new KeyNodesToSliceList(nodePreceedingNodeAtIndexA, nodeAtIndexB);
    }

    private ListNode FindLastNodeInList(ListNode headSecondList)
    {
        ListNode? lastNodeInSecondList = null;
        ListNode current = headSecondList;

        while (current != null)
        {
            lastNodeInSecondList = current;
            current = current.next;
        }
        return lastNodeInSecondList;
    }
}

/*
Class ListNode is in-built in the solution file on leetcode.com. 
When running the code on the website, do not include this class.
 */
public class ListNode
{
    public int val;
    public ListNode? next;
    public ListNode(int val = 0, ListNode next = null)
    {
        this.val = val;
        this.next = next;
    }
}
