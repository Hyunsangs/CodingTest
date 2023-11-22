function solution(strArr) {
    const lengthMap = {};
    
    // Group strings by length
    strArr.forEach((str) => {
        const length = str.length;
        if (!lengthMap[length]) {
            lengthMap[length] = [];
        }
        lengthMap[length].push(str);
    });

    // Find the size of the group with the largest number of elements
    const groupSizes = Object.values(lengthMap).map(group => group.length);
    const maxSize = Math.max(...groupSizes);

    return maxSize;
}