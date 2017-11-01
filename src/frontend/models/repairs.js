import dateToString from 'dateToString.js';
import rooms from 'rooms.js';

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
            defaultValue: ''
        },
        value: {
            type: 'int',
            title: 'Сумма',
            col: 6,
            defaultValue: 0
        },
        discount: {
            hidden: true,
            type: 'int',
            title: 'Скидка',
            col: 6,
            defaultValue: 0
        },
        comment: {
            hidden: true,
            type: 'string',
            title: 'Комментарий',
            defaultValue: ''    
        }
    }
};