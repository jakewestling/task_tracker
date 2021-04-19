import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation()
  return (
    <header className='header'>

      {/* Using styles inline */}
      {/* <h1 style={{ color: 'red', backgroundColor: 'aliceblue' }}>{title}</h1> */}
      {/* Using styles from JS object headingStyle below */}
      {/* <h1 style={headingStyle}>{title}</h1> */}

      <h1>{title}</h1>
      {/* <Button color='dodgerblue' text='Hello 2' />
      <Button color='gold' text='Hello 3' /> */}
      {location.pathname === '/' && (
        <Button
          color={showAdd ? 'red' : 'limegreen'}
          text={showAdd ? 'Minimize' : 'Create Task'}
          onClick={onAdd}
        />
      )}

    </header>
  )
}

// Set default values of properties here, if needed
Header.defaultProps = {
  title: 'Task Tracker',
}

// Set the property types for error checking here
// or use typescript
// can also set required boolean
Header.propTypes = {
  title: PropTypes.string.isRequired
}

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'aliceblue'

// }


export default Header
