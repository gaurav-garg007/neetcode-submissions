class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(arr, k) {

        let hash = {}, res = [];
        for (var i = 0; i < arr.length; i++) {
            hash[arr[i]] = (hash[arr[i]] || 0) + 1;
        }
        let sorted = Object.entries(hash).sort((a, b) => b[1] - a[1]);
        for (var i = 0; i < sorted.length; i++) {
            if (res.length < k) {
                res.push(sorted[i][0])
            }
        }
        return res;
    }
}
