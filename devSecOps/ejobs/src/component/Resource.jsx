import {Link} from 'react-router-dom'

function Resource({icon, title}) {
  return (
    <div className="flex items-center gap-4 mb-2">
        {icon}
        <Link to={`/${title}`}>{title}</Link>
    </div>
  )
}

export default Resource