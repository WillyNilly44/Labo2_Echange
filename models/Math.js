import Model from './model.js';

export default class Math extends Model {
    constructor() {
        super();

        this.addField('x', 'string');
        this.addField('y', 'string');
        this.addField('op', 'string');
        this.addField('value', 'string');
              
        this.setKey("op");
    }
}