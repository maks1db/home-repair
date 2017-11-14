import React, { PureComponent } from 'react';
import styles from './Gallery.scss';
import Img from './Controls/Img.jsx';
import Button from 'Controls/RaisedButton.jsx';

export default class ImgView extends PureComponent {
    constructor() {
        super();

        this.state = {
            items: {}
        };
    }

    componentWillMount() {
        this.setState({
            items: this.props.items
        });
    }

    render() {

        const {
            items,
            open,
            id,
            onSetModalImg,
            onSetModal,
            onGetItem
        } = this.props;

        const index = items.data.findIndex(x => x._id === id);

        const item = items.data[index];

        return (
            open && <div className={styles.fullImg}>
                <div className={styles.title}>{item.name} </div>
                <div className={styles.count}>{index + 1} из {items.data.length}</div>
                {<div className={styles.preview}>
                    <Img src={item.url} />
                </div>} 
                <div className={styles.description}>
                    {item.room}
                </div>
                <div className={styles.rating}>
                    {item.rating}
                </div>
                <div className={styles.edit}>
                    <Button 
                        onClick={() => {
                            onGetItem(item._id);
                        }}
                        option="success"
                        mini={true}
                    ><i className="fa fa-pencil" aria-hidden="true"></i></Button>
                </div>
                {index !== 0 && 
                <div 
                    onClick={() => onSetModalImg(index - 1)}
                    className={styles.left}
                ><i className="fa fa-chevron-left"></i></div>
                }
                {index !== items.data.length -1 && 
                <div 
                    className={styles.right}
                    onClick={() => onSetModalImg(index + 1)}
                ><i className="fa fa fa-chevron-right"></i></div>
                }
                <div 
                    className={styles.close}
                    onClick={()=>onSetModal(false)}    
                ><i className="fa fa-times"></i></div>
            
            </div>
        );
    }
}