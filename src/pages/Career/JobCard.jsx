
import PropTypes from 'prop-types'

const JobCard = ({career}) => {
  return (
    <div>
        <h3 className="text-xl font-bold">{career.job_title}</h3>
    </div>
  )
}

JobCard.propTypes = {
    career:PropTypes.node
}

export default JobCard