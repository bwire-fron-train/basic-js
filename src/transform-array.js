module.exports = function transform(arr) {
    if (Array.isArray(arr)) {
        if (arr == []) {
            return [];
        } else {
            const acc = [];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === '--discard-next') {
                    if (arr[i + 1] != undefined) {
                        i += 1;
                    }
                } else if (arr[i] === '--discard-prev') {
                    acc.pop(); 
                } else if (arr[i] === '--double-next') {
                    if (arr[i + 1] != undefined) {
                        acc.push(arr[i + 1]);
                    }
                } else if (arr[i] === '--double-prev') { 
                    if (arr[i - 1] != undefined) {
                        acc.push(arr[i -1]);
                    } 
                } else {
                    acc.push(arr[i]);
                }
            }
            return acc;
        }
    } else {
        throw new Error;
    }  
};

//console.log(transform( [ '--double-prev', 22, '--discard-next', 'DEF', 22, '--double-next' ] ));