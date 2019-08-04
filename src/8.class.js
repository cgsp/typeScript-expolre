/*
 * @Desc: 类
 * @Author: John.Guan
 * @Date: 2019-08-02 14:14:48
 * @Last Modified by: John.Guan
 * @Last Modified time: 2019-08-02 15:04:40
 */
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        if (this.greeting) {
            return 'hello' + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    };
    Greeter.standardGreeting = '傻逼';
    return Greeter;
}());
var greeter = new Greeter('world');
console.log(greeter.greet());
var greeterMaker = Greeter;
greeterMaker.standardGreeting = '傻逼2222';
var greeter2 = new Greeter();
console.log(greeter2.greet());
