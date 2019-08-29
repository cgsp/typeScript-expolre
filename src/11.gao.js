/*
 * @Desc: 交叉类型
 * @Author: John.Guan
 * @Date: 2019-08-29 19:39:04
 * @Last Modified by: John.Guan
 * @Last Modified time: 2019-08-29 20:43:33
 */
function broken(name) {
    function postfix(epither) {
        return name.charAt(0) + '. the' + epither;
    }
    name = name || 'Bob';
    return postfix(name);
}
