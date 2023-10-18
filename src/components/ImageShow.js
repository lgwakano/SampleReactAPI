function ImageShow({image, index}){
    return <div>
        <img 
        alt={image.alt_description} 
        src={image.urls.regular}/>
    </div>
}

export default ImageShow;