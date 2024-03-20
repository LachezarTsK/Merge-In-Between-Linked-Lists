
using namespace std;

/*
Sruct ListNode is in-built in the solution file on leetcode.com.
When running the code on the website, do not include this struct.
*/
struct ListNode {
    int val;
    ListNode* next;

    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode* next) : val(x), next(next) {}
};

class Solution {

    struct KeyNodesToSliceList {
        ListNode* nodePreceedingNodeAtIndexA;
        ListNode* nodeAtIndexB;

        KeyNodesToSliceList(ListNode* nodePreceedingNodeAtIndexA, ListNode* nodeAtIndexB) :
                nodePreceedingNodeAtIndexA { nodePreceedingNodeAtIndexA },
                nodeAtIndexB { nodeAtIndexB } {}
    };

public:
    ListNode* mergeInBetween(ListNode* headFirstList, int indexA, int indexB, ListNode* headSecondList) const {
        KeyNodesToSliceList keyNodesToSliceList = findKeyNodesToSliceList(headFirstList, indexA, indexB);
        ListNode* lastNodeInSecondList = findLastNodeInList(headSecondList);

        keyNodesToSliceList.nodePreceedingNodeAtIndexA->next = headSecondList;
        lastNodeInSecondList->next = keyNodesToSliceList.nodeAtIndexB->next;
        keyNodesToSliceList.nodeAtIndexB->next = nullptr;

        return headFirstList;
    }

private:
    KeyNodesToSliceList findKeyNodesToSliceList(ListNode* headFirstList, int indexA, int indexB) const {
        ListNode* nodePreceedingNodeAtIndexA = nullptr;
        ListNode* nodeAtIndexB = nullptr;

        ListNode* current = headFirstList;
        int indexNodes = 0;

        while (indexNodes < indexB) {
            if (indexNodes == indexA - 1) {
                nodePreceedingNodeAtIndexA = current;
            }
            ++indexNodes;
            current = current->next;
        }
        nodeAtIndexB = current;

        return KeyNodesToSliceList(nodePreceedingNodeAtIndexA, nodeAtIndexB);
    }

    ListNode* findLastNodeInList(ListNode* headSecondList) const {
        ListNode* lastNodeInSecondList = nullptr;
        ListNode* current = headSecondList;

        while (current != nullptr) {
            lastNodeInSecondList = current;
            current = current->next;
        }
        return lastNodeInSecondList;
    }
};
