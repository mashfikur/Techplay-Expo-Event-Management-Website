
import PropTypes from 'prop-types'

const Service = ({service}) => {
    const {service_name,service_image}=service
  return (
    <div>
        <h3>
            {service_name}
            <img className='w-[50%]' src={service_image} alt="" />
        </h3>
    </div>
  )
}

Service.propTypes = {
    service:PropTypes.object
}

export default Service