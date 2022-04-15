// Time Complexity : O(log n) where n is smallest array
// Space Complexity : O(1)
// Did this code successfully run on Leetcode : Yes
// Any problem you faced while coding this : No

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

 var findMedianSortedArrays = function(nums1, nums2) {
    let n1 = nums1.length;
    let n2 = nums2.length;
    
    if(n1 === 0 && n2 === 0) return 0.0;
    if(n1 > n2){
        return findMedianSortedArrays(nums2, nums1);
    }
    let low = 0;
    let high = n1;
    while(low<=high) {
        let partitionX = Math.floor(low + (high - low) / 2);
        let partitionY = Math.floor((n1+n2)/2) - partitionX;
        let L1 = (partitionX === 0) ? -Infinity : nums1[partitionX-1];
        let R1 = (partitionX === n1) ? Infinity : nums1[partitionX];
        let L2 = (partitionY === 0) ? -Infinity : nums2[partitionY-1];
        let R2 = (partitionY === n2) ? Infinity : nums2[partitionY];
        if(L1 <= R2 && L2 <= R1) {
            //correct partition
            //odd case
            if((n1+n2)%2 !== 0) {
                return Math.min(R1, R2);
            } else {  //even case
                return (Math.max(L1, L2) + Math.min(R1, R2))/2;
            }  
        } else if(L1 > R2) {
            high = partitionX - 1;
        } else {
            low = partitionX + 1;
        }
    }
};