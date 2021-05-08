/*
NOTE: The beginning portion builds our test case binary tree. Scroll down to the section titled Our Solution for the code solution!
 */

// ------- Code to generate our binary tree -------
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(values) {
        const queue = [this];
        let i = 0;
        while (queue.length > 0) {
            let current = queue.shift();
            for (let side of ["left", "right"]) {
                if (!current[side]) {
                    if (values[i] !== null) {
                        current[side] = new TreeNode(values[i]);
                    }
                    i++;
                    if (i >= values.length) return this;
                }
                if (current[side]) queue.push(current[side]);
            }
        }
        return this;
    }
}

const tree = new TreeNode(3);
tree.insert([6, 1, 9, 2, null, 4, null, 5, null, null, null, null, 8, null, null, null]);
// ------- Code to generate our binary tree -------

// ------- Our Solution -------
const levelOrder = function (root) {
    if (!root) return [];
    const result = [];
    const queue = [root];

    while (queue.length) {
        const currentLevelValues = [];
        let length = queue.length, count = 0;

        while (count < length) {
            const currentNode = queue.shift();

            currentLevelValues.push(currentNode.value);

            if (currentNode.left) {
                queue.push(currentNode.left)
            }

            if (currentNode.right) {
                queue.push(currentNode.right)
            }

            count++;
        }

        result.push(currentLevelValues);
    }

    return result;
};


// BFS
var levelOrder = function(root) {
    if(!root) return []
    const queue = []
    const output = []
    queue.push(root)
    while(queue.length) {
        // Remove all the current nodes in the queue and add each node's children to the queue
        const len = queue.length
        const row = []
        for(let i = 0; i < len; i++) {
            const cur = queue.shift()
            if(cur.left) queue.push(cur.left)
            if(cur.right) queue.push(cur.right)
            // Push the current node val to the row array
            row.push(cur.val)
        }
        // Push the current row array into the output array
        output.push(row)
    }
    return output
};
console.log(levelOrder(tree))