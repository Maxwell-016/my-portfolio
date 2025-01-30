import propTypes from 'prop-types'

const CircularAvatar = (props) =>{
    return (
        <div className="outer-circle">
            <div className="inner-circle">
                <img src={props.imageUrl} alt={props.altText} />
            </div>
        </div>
    );
}
CircularAvatar.propTypes = {
    imageUrl: propTypes.string,
    altText : propTypes.string
}
export default CircularAvatar