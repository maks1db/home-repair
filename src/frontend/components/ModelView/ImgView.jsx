import React, { PureComponent } from 'react';
import styles from './Gallery.scss';

export default class ImgView extends PureComponent {
    constructor() {
        super();
    }

    render() {

        return (
            props.open && <div className={styles.fullImg}>
                <div className={styles.title}>{item.title} </div>
                <div className={styles.count}>{props.index + 1} из {props.items.data.length}</div>
                {!props.commentActive && <div className={styles.preview}>
                    <img src={item.url}/>
                </div>} 
                <div className={styles.description}>
                    {item.info}
                </div>
                <div className={styles.ratingPreview}>
                    <div className={styles.content}>
                        <Rating 
                            starCount={10}
                            name="rating"
                            onStarClick={(value) => props.onUpdateRating(item._id, value)}
                            value={item.value}
                        />
                    </div>
                </div>
                {props.index !== 0 && 
                <div 
                    onClick={() => props.onSetModalImg(props.index - 1)}
                    className={styles.left}
                ><i className="fa fa-chevron-left"></i></div>
                }
                {props.index !== props.items.data.length -1 && 
                <div 
                    className={styles.right}
                    onClick={() => props.onSetModalImg(props.index + 1)}
                ><i className="fa fa fa-chevron-right"></i></div>
                }
                <div 
                    className={styles.close}
                    onClick={()=>props.onSetModal(false)}    
                ><i className="fa fa-times"></i></div>
            
            </div>
        );
    }
}