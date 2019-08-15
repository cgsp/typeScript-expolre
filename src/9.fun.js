/*
 * @Desc: 函数
 * @Author: John.Guan
 * @Date: 2019-08-14 19:11:27
 * @Last Modified by: John.Guan
 * @Last Modified time: 2019-08-15 15:47:59
 */
var pukes = {
    huapais: ['红心', '黑桃', '草花', '方片'],
    cards: Array(52),
    createCard: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedHuapaiIndex = Math.floor(pickedCard / 13);
            return {
                huapai: _this.huapais[pickedHuapaiIndex],
                card: pickedCard % 13
            };
        };
    }
};
var cardPicker = pukes.createCard();
// console.log(cardPicker())
function a(num) {
    console.log(this);
    console.log(num);
}
a(5); // 打印global和5

interface {
    add:
}
