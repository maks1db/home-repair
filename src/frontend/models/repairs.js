import dateToString from 'dateToString.js';
import rooms from 'rooms.js';
import { change } from 'redux-form';

export default {
    title: 'Ремонт',
    name: 'repair',
    sort: {
        date: -1
    },
    sum: 'value',
    fields: {
        _id: {
            type: 'string',
            title: 'ID',
            hide: true
        },
        name: {
            type: 'string',
            title: 'Наименование расходов',
            defaultValue: ''
        },
        date: {
            type: 'date',
            title: 'Дата расхода',
            col: 6,
            defaultValue: new Date(),
            serialize: (value) => {
                return dateToString(value, 'date');
            }
        },
        room: {
            type: 'list',
            title: 'Комната',
            values: rooms,
            defaultValue: rooms[0],
            col: 6
        },
        shop: {
            type: 'string',
            title: 'Магазин',
            defaultValue: '',
            col: 6
        },
        discount: {
            hidden: true,
            type: 'int',
            title: 'Скидка',
            col: 6,
            defaultValue: 0
        },
        count: {
            type: 'int',
            title: 'Количество',
            col: 4,
            defaultValue: 0,
            onChange: (current, values, form) => {
                return change(form, 'value', current * (values.price || 0));
            }
        },
        price: {
            type: 'int',
            title: 'Цена',
            col: 4,
            defaultValue: 0,
            onChange: (current, values, form) => {
                return change(form, 'value', current * (values.count || 0));
            }
        },
        value: {
            type: 'int',
            title: 'Сумма',
            col: 4,
            defaultValue: 0,
            onChange: (current, values, form) => {
                const count = values.count || 0;
                return change(form, 'price', count === 0 ? 0 : current/ count );
            }
        },
        
        comment: {
            hidden: true,
            type: 'string',
            title: 'Комментарий',
            defaultValue: ''    
        }
    }
};