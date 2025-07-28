
import propTypes from 'prop-types'
import styles from './module.styles/serviceCard.module.css'

const ServiceCard = (props) => {
    const imageUrl =  props.imageUrl
    const title = props.title
    const description = props.description
    const altText = props.altText
  return (
    <div className={styles.serviceCard}>
        <img src={imageUrl} alt={altText} className= {styles.image}/>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
  )
}
ServiceCard.propTypes={
    imageUrl: propTypes.string,
    title: propTypes.string,
    description: propTypes.string,
    altText: propTypes.string
}

export default ServiceCard