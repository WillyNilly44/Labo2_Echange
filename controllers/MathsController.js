import Controller from './Controller.js';

export default class MathsController extends Controller {
    constructor(HttpContext) {
        super(HttpContext);
    }
    get(id) {
        let op = this.HttpContext.path.params.op;
        console.log(op);
        let x = parseFloat(this.HttpContext.path.params.x);
        let y = parseFloat(this.HttpContext.path.params.y);
        let n = this.HttpContext.path.params.n;
        let value;
        let message;
        if(isNaN(x) && isNaN(y) && op == undefined)
        {
            this.HttpContext.response.HTML('<p><h1>GET : Maths endpoint</h1></p>' +
            '<p><h1>List of possible query strings:</h1></p><hr>' +
            '<p><h3>? op = + & x = number & y = number</p><p>return {"op":"+", "x":number, "y":numvber, "value": x + y}</h3></p>' +
            '<p><h3>? op = - & x = number & y = number</p><p>return {"op":"-", "x":number, "y":numvber, "value": x - y}</h3></p>' +
            '<p><h3>? op = * & x = number & y = number</p><p>return {"op":"*", "x":number, "y":numvber, "value": x * y}</h3></p>' +
            '<p><h3>? op = / & x = number & y = number</p><p>return {"op":"/", "x":number, "y":numvber, "value": x / y}</h3></p>' +
            '<p><h3>? op = % & x = number & y = number</p><p>return {"op":"%", "x":number, "y":numvber, "value": x % y}</h3></p>' +
            '<p><h3>? op = ! & n = integer</p><p>return {"op":"%", "n":integer, "value": n!}</h3></p>' +
            '<p><h3>? op = p & n = integer</p><p>return {"op":"p", "n":integer, "value": true if n is a prime number}</h3></p>' +
            '<p><h3>? op = np & n = integer</p><p>return {"op":"np", "n":integer, "value": nth prime number}</h3></p>'
        );
        }
        if (x != null && y != null || n != null) {
            switch (op) {
                case " ":
                    value = x + y
                    message = "{'op':"+op+",'x':"+x+", 'y':"+y+",  'value':"+value+"}";
                    this.HttpContext.response.JSON(message);
                    break;
                case "-":
                    value = x - y
                    message = "{'op':"+op+",'x':"+x+", 'y':"+y+",  'value':"+value+"}";
                    this.HttpContext.response.JSON(message);
                    break;
                case "*":
                    value = x * y
                    message = "{'op':"+op+",'x':"+x+", 'y':"+y+",  'value':"+value+"}";
                    this.HttpContext.response.JSON(message);
                    break;
                case "/":
                    value = x / y
                    message = "{'op':"+op+",'x':"+x+", 'y':"+y+",  'value':"+value+"}";
                    this.HttpContext.response.JSON(message);
                    break;
                case "%":
                    value = !n;
                    message = "{'op':"+op+",'n':"+n+"  'value':"+value+"}";
                    this.HttpContext.response.JSON(message);
                    break;
                case "n":
                    value = isPrimeNumber(n);
                    message = "{'op':"+op+",'n':"+n+"  'value':"+value+"}";
                    this.HttpContext.response.JSON(message);
                    break;
                case "np":
                    message = "{'op':"+op+",'n':"+n+"  'value':"+primePosition(n)+"}";
                    this.HttpContext.response.JSON(message);
                    break;

            }
        }
    }
}
function isPrimeNumber(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
function primePosition(position) {
    var primeArray = [];
    var count = 0;

    for (var j = 1; j <= n; j++) {
        for (var i = 1; i <= j; i++) {
            if (j % i == 0) {
                count++;
            }
        }
        if (j == 1) {
            primeArray.push(j);
        }
        if (count == 2) {
            primeArray.push(j);
        }
        count = 0;
    }
    return primeArray[position];
}
function noURL()
{
    return''
}
