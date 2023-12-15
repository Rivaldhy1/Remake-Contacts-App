import { Box } from '../elements/Box'

const BoxsHome = () => {
  return (
    <section className="my-[101px]">
      <div className="flex items-center justify-center font-serif font-bold text-base">
        <Box>
          <span>Add</span>
          <span>Contact</span>
        </Box>
        <Box className={'ml-[60px]'}>
          <span>List</span>
          <span>Contacts</span>
        </Box>
      </div>
    </section>
  )
}

export default BoxsHome
