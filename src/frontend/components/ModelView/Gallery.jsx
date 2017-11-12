import React, { PureComponent } from 'react';
import Masonry from 'react-masonry-component';
import styles from './Gallery.scss';

const masonryOptions = {
    transitionDuration: 0
};
const noImage = '/assets/image/no_image.png';
export default class Gallery extends PureComponent {
    constructor() {
        super();
    }

    render() {
        const {
            items
        } = this.props;
        return (
            <div className={styles.gallery}>
                <Masonry
                    options={masonryOptions} // default {}
                    disableImagesLoaded={false} // default false
                    updateOnEachImageLoad={false}
                >
                    {
                        items.data.map(x => (
                            <div className={styles.item}>
                                <div className={styles.name}>{x.name}</div>
                                <div className={styles.img}>
                                    <img src={x.url || noImage} 
                                        onError={(e) => e.target.src = noImage}
                                    />
                                    <div className={styles.rating}>{x.rating}</div>
                                </div>
                            </div>
                        ))
                    }
                </Masonry>
            </div>
        );
    }
}