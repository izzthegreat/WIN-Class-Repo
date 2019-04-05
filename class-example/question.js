var arr = [19, 5, 42, 2, 77];
function a(nums){
    pos = nums.filter(function(x){ return x >= 0 });
    var min1 = Math.min.apply(Math, pos);
    pos.splice(pos.indexOf(min1), 1);
    var min2 = Math.min.apply(Math, pos);
    return console.log(min1 + min2);
}
a(arr);