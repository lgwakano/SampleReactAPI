import './ImageList.css';
import ImageShow from './ImageShow'

function ImageList({images}){

    const renderedImages = images.map((image, index) => {
        return <ImageShow image={image} key={image.id}/>
    });

    return (<div className='image-list'>
        {renderedImages}
    </div>);
}

export default ImageList;