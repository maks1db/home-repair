import React, { PureComponent } from 'react';
import Masonry from 'react-masonry-component';
import styles from './Gallery.scss';
import ImgView from './ImgView.jsx';
import Img from './Controls/Img.jsx';

const masonryOptions = {
    transitionDuration: 0
};

export default class Gallery extends PureComponent {
    constructor() {
        super();

        this.state = {
            open: false,
            id: ''
        };
    }
    
    onSetModalImg = (index) => {
        this.setState({
            id: this.props.items.data[index]._id
        });
    }

    onSetModal = (open) => {
        this.setState({ open });
    }

    onClickImg = (id) => {

        this.setState({
            open: true,
            id 
        });
    }

    render() {
        const {
            onSetModal,
            onSetModalImg,
            onClickImg
        } = this;

        const {
            items,
            onGetItem
        } = this.props;

        const {
            open, id
        } = this.state;
        return (
            <div className={styles.gallery}>
                <Masonry
                    options={masonryOptions} // default {}
                    disableImagesLoaded={false} // default false
                    updateOnEachImageLoad={false}
                >
                    {
                        items.data.map(x => (
                            <div className={styles.item}
                                key={x._id}
                                onClick={() => onClickImg(x._id)}    
                            >
                                <div className={styles.name}>{x.name}</div>
                                <div className={styles.img}>
                                    <Img src={x.url} />
                                    <div className={styles.rating}>{x.rating}</div>
                                </div>
                                <div className={styles.room}>{x.room}</div>
                            </div>
                        ))
                    }
                </Masonry>
                <ImgView 
                    items={items}
                    open={open}
                    id={id}
                    onSetModal={onSetModal}
                    onSetModalImg={onSetModalImg}
                    onGetItem={onGetItem}
                />
            </div>
        );
    }
}