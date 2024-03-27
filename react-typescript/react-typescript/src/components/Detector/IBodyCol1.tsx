import '../style.css';

function IBodyCol1() {
    return (
        <div>
            <h1 className='title2'>AI or Not?</h1>
            <div className="imageBox">Drag or upload image here</div>
            <div className='hl2'></div>

            {/* Row */}
            <div className='row'>
                <div className='button'>Upload</div>
                <p className="text3">or</p>
                <div className='UrlBar'>Paste URL</div>
            </div>
        </div>
    );
}

export default IBodyCol1;