import { Link } from 'react-router-dom'
import { Box } from '../elements/Box'

const BoxsHome = () => {
  return (
    <section className="my-[101px]">
      <div className="flex items-center justify-center font-serif font-bold">
        <Link to={'/add-contacts'}>
          <Box>
            <span>Add</span>
            <span>Contacts</span>
          </Box>
        </Link>
        <Link to={'/list-contacts'}>
          <Box className={'ml-[60px]'}>
            <span>List</span>
            <span>Contacts</span>
          </Box>
        </Link>
      </div>
    </section>
  )
}

export default BoxsHome
