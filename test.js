var twoSum = function (nums, target) {
    const seen = {};
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        console.log(diff)
        if (diff in seen) {
            console.log("hit")
            return [seen[diff], i]
        } else {
            console.log("hit2")
            seen[nums[i]] = i
            console.log(seen)
        }
    }
};
const array = [2, 7, 11, 15]
const targ = 9;
console.log(twoSum(array, targ));