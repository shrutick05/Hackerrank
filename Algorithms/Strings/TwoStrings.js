//https://www.hackerrank.com/challenges/two-strings
function hasCommonSubstring(str1, str2) {
    var flag = {};
    str1 = str1.trim();
    str2 = str2.trim();
    var str1Len = str1.length;
    var str2Len = str2.length;
    for (var i=0; i<str1Len; i++) {
        flag[str1[i]] = 1;
    }
    for (var i=0; i<str2Len; i++) {
        if (str2[i] in flag)
            return true;
    }
    return false;
}
function processData(input) {
    var lines = input.split("\n");
    var n = parseInt(lines[0]);
    lines = lines.slice(1);
    for (var i=0; i<2*n; i++) {
        var str1 = lines[i];
        var str2 = lines[i+1];
        i++;
        var answer = hasCommonSubstring(str1, str2);
        if (answer) {
            console.log("YES");
        }
        else {
            console.log("NO");
        }
    }
}