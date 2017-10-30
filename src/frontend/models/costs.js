import dateToString from 'dateToString.js';

export default {
    title: 'Расходы на ремонт',
    name: 'costs',
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
        value: {
            type: 'int',
            title: 'Значение',
            col: 6,
            defaultValue: 0
        }
    }
};