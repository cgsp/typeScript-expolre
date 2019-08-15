/*
 * @Desc: 函数
 * @Author: John.Guan
 * @Date: 2019-08-14 19:11:27
 * @Last Modified by: John.Guan
 * @Last Modified time: 2019-08-15 11:51:01
 */
function buildName3(firstName) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return firstName + ' ' + rest.join(' ');
}
console.log(buildName3('guan', '1', '2'));
