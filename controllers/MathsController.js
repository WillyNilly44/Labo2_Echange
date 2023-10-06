import Controller from './Controller.js';
import path from 'path';
import fs from 'fs';

export default class MathsController extends Controller {
    constructor(HttpContext) {
        super(HttpContext);
    }
    get(id) {
        let test = this.HttpContext.path.params;
        if (test.op == " ") { test.op = "+" }
        if(this.HttpContext.path.queryString == "?")
         {
            let helppage = path.join(process.cwd(),wwwroot,'helpMath.html')
            return this.HttpContext.response.HTML(fs.readFileSync(helppage));
         }
        
        if (!this.HttpContext.path.queryString.includes("n")) {
            if(!this.HttpContext.path.queryString.includes('x')){
                test.error = "x is missing";
                this.HttpContext.response.JSON(test);
            }
            else if(!this.HttpContext.path.queryString.includes('y'))
            {
                test.error = "y is missing";
                this.HttpContext.response.JSON(test);
            }
            else if(this.HttpContext.path.queryString.includes("x")&&this.HttpContext.path.queryString.includes("y") && Object.keys(test).length == 3)
            {
                switch (test.op) {

                    case "+":
                        test.value = parseFloat(test.x) + parseFloat(test.y);
                        this.HttpContext.response.JSON(test);
                        break;
                    case "-":
                        test.value = parseFloat(test.x) - parseFloat(test.y)
                        this.HttpContext.response.JSON(test);
                        break;
                    case "*":
                        test.value = parseFloat(test.x) * parseFloat(test.y)
                        this.HttpContext.response.JSON(test);
                        break;
                    case "/":
                        if(test.y == 0)
                        {
                            test.value = "Infinity"
                            if(test.x == 0)
                            {
                                test.value = "NaN"
                            }
                        }
                        else
                        {
                            test.value = parseFloat(test.x) / parseFloat(test.y)
                        }
                        this.HttpContext.response.JSON(test);
                        break;
                    case "%":
                        if (test.y != 0) { test.value = parseFloat(test.x) % parseFloat(test.y) }
                        else { test.value = "NaN" }
                        this.HttpContext.response.JSON(test);
                        break;
                    default:
                        test.error = "Opération inexistante";
                        this.HttpContext.response.JSON(test);
                }
            }
            else
            {
                test.error = "Too much parameters";
                this.HttpContext.response.JSON(test);
            }
           
            
        }
        else if (this.HttpContext.path.queryString.includes("n")) {
            if(Object.keys(test).length == 2)
            {
                test.n = parseFloat(test.n);
                if (test.n == 0) {
                    test.error = "'n' must a number > 0";
                    this.HttpContext.response.JSON(test);
                }
                else {
                    switch (test.op) {
                        case "!":
                            if(Number.isInteger(test.n))
                            {
                                if(test.n > 0)
                                {
                                    test.value = factorial(test.n);
                                    this.HttpContext.response.JSON(test);
                                }
                                else
                                {
                                    test.error = ("'n' must be an integer > 0");
                                    this.HttpContext.response.JSON(test);
                                }
                                
                            }
                            else
                            {
                                test.error = ("'n' must be an integer");
                                this.HttpContext.response.JSON(test);
                            }
                            break;
                        case "p":
                            if(Number.isInteger(test.n))
                            {
                                test.value = isPrimeNumber(test.n);
                                this.HttpContext.response.JSON(test);
                            }
                            else
                            {
                                test.error = ("'n' must be an integer");
                                this.HttpContext.response.JSON(test);
                            }
                            break;
                        case "np":
                            test.value = primePosition(test.n);
                            this.HttpContext.response.JSON(test);
                            break;
                    }
                }
            }
            else
            {
                test.error = "Too many parameters";
                this.HttpContext.response.JSON(test);
            }
           
        }
    }
}
function isPrimeNumber(number) {
    for (var i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return number > 1;
}
function primePosition(n) {
    let primeNumer = 0;
            for (let i = 0; i < n; i++) {
                primeNumer++;
                while (!isPrimeNumber(primeNumer)) {
                    primeNumer++;
                }
            }
            return primeNumer;
}
function noURL() {
    return ''
}
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    if(n<0)
    {
        n = n*-1;
    }
    return n * factorial(n - 1);
}
