var Sort = /** @class */ (function () {
    function Sort() {
    }
    Sort.quickSort = function (arr) {
        if (arr.length <= 1) {
            return arr;
        }
        var pivotIndex = Math.floor(arr.length / 2);
        var pivot = arr.splice(pivotIndex, 1)[0];
        var left = [];
        var right = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] < pivot) {
                left.push(arr[i]);
            }
            else {
                right.push(arr[i]);
            }
        }
        return Sort.quickSort(left).concat([pivot], Sort.quickSort(right));
    };
    return Sort;
}());
function test() {
    var arr = [3, 5, 2, 1, 6, 2, 4, 4];
    console.log(Sort.quickSort(arr));
}
test();
