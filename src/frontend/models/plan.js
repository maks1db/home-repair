import rooms from 'rooms.js';

export default {
    title: 'Планирование на ремонт',
    name: 'plan',
    sort: {
        name: 1
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
            title: 'Наименование',
            defaultValue: ''
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
        
        count: {
            type: 'int',
            title: 'Количество',
            defaultValue: 0,
            col: 6
        },
        value: {
            type: 'int',
            title: 'Сумма затрат',
            defaultValue: 0,
            col: 6
        },
        comment: {
            type: 'string',
            title: 'Комментарий',
            defaultValue: ''
        },
    }
};