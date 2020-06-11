import React from 'react';
import Carousel, {Modal, ModalGateway} from 'react-images';
import axios from 'axios';

class FBGallery extends React.Component {
    state = {
        images: [],
        isLightboxOpen: false,
        selectedIndex: 0,
        isLoading: true,
        next: null,
        previous: null
    };

    toggleLightbox = (selectedIndex: number) => {
        this.setState(state => ({
            isLightboxOpen: !state.isLightboxOpen,
            selectedIndex
        }));
    };

    async componentDidMount() {
        const key =
            'EAADcbfCjxXkBAEQD0AAvKrNLZCkWXW794HYx5VnQuY5xUP95maLWb8FBy6EFBlYQrBV5JSRtodBYTAW9JLfAtzZAd3qgPO8X0SZAqtyUZC7DwQsZA6MtOf8PYJa8dihunrVLwIc4N3vZC9VRw0oC7ZBkwM7z9MBQsyuOlaTZABHnJ5HaDXC9E6oEkr6REkDs2A7sZAFATIz37UgZDZD';

        const galleryId = '435429489951715';

        const a = axios.create({
            baseURL:
                'https://graph.facebook.com/v6.0/' +
                galleryId +
                '?fields=photos.limit(10)%7Bimages%7D&access_token=' +
                key
        });
        //@ts-ignore
        const response = await a.get();
        this.loadImages(response.data.photos.data, null, response.data.photos.paging.next);
    }

    loadImages(images, previous: string, next: string) {
        this.setState({
            images: images.map(imageObject => ({
                source: imageObject.images[0].source,
                caption: 'Strength Pit Otara',
                thumbnail: imageObject.images[imageObject.images.length - 1].source
            })),
            isLoading: false,
            next,
            previous
        });
    }

    async next() {
        const a = axios.create({
            baseURL: this.state.next
        });
        //@ts-ignore
        const r = await a.get();
        this.loadImages(r.data.data, r.data.paging.previous, r.data.paging.next);
    }

    async previous() {
        const a = axios.create({
            baseURL: this.state.previous
        });
        //@ts-ignore
        const r = await a.get();
        this.loadImages(r.data.data, r.data.paging.previous, r.data.paging.next);
    }

    render() {
        const {selectedIndex, isLightboxOpen, images, isLoading} = this.state;

        return (
            <>
                {!isLoading ? (
                    <div className="image-gallery-container">
                        {images.map(({caption, thumbnail}, index) => (
                            <div
                                className="image-gallery-image-box"
                                onClick={() => this.toggleLightbox(index)}
                                key={index}
                            >
                                <img alt={caption} src={thumbnail} className="image-gallery-image" />
                            </div>
                        ))}
                    </div>
                ) : (
                    <span> Loading images... </span>
                )}

                <ModalGateway>
                    {isLightboxOpen && !isLoading ? (
                        <Modal onClose={this.toggleLightbox}>
                            <Carousel currentIndex={selectedIndex} views={images} />
                        </Modal>
                    ) : null}
                </ModalGateway>
                <div className="center-it image-gallery-pagging-buttons">
                    <div>
                        <button
                            disabled={!this.state.previous}
                            placeholder="Previous"
                            title="Previous"
                            onClick={() => {
                                this.previous();
                            }}
                        >
                            &lt;
                        </button>
                        <button
                            disabled={!this.state.next}
                            placeholder="Next"
                            title="Next"
                            style={{marginLeft: 5}}
                            onClick={() => {
                                this.next();
                            }}
                        >
                            &gt;
                        </button>
                    </div>
                </div>
            </>
        );
    }
}

export default FBGallery;
