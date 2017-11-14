import rooms from 'rooms.js';
import custom from 'ModelView/Gallery.jsx';

export default {
    title: 'Идеи на ремонт',
    name: 'idea',
    sort: {
        rating: -1
    },
    custom,
    fields: {
        _id: {
            type: 'string',
            title: 'ID',
            hide: true
        },
        name: {
            type: 'string',
            title: 'Идея',
            defaultValue: '',
            col: 6
        },
        room: {
            type: 'list',
            title: 'Комната',
            values: rooms,
            defaultValue: rooms[0],
            col: 6
        },
        comment: {
            type: 'string',
            title: 'Комментарий',
            defaultValue: '',
            hidden: true,
            col: 6
        },
        rating: {
            type: 'int',
            title: 'Рейтинг',
            col: 6,
            defaultValue: 0
        },
        url: {
            type: 'string',
            title: 'Ссылка',
            defaultValue: ''
        },  
        img: {
            type: 'img',
            title: 'Изображение',
            defaultValue: null
        }
    }
};