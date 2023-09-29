import Model from './model.js';

export default class Math extends Model {
    constructor() {
        super();

        this.addField('x', 'integer');
        this.addField('y', 'integer');
        this.addField('op', 'string');
        this.addField('n', 'integer');
              
        this.setKey("op");
    }
}