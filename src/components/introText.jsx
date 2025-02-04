
const IntroText = (props) => {
    return (
        <div className='intro-text'>
            <h2 className='intro'>{props.title} <span className='name'>{props.name}</span> <br/>{props.continuation}</h2>
        </div>
    );
}

export default IntroText