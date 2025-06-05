import Image from 'next/image'

const ProjectCard = ({ name, description, image, framework ,link}) => {
  return (
    <div className='flex flex-col items-center justify-center p-2 shadow-2xl w-72 h-96'>
      <Image src={image} alt="project home image" className='w-full h-2/3 object-contain' />
      <div className='w-full h-1/3 flex flex-col items-start justify-center'>
        <h2 className='text-lg font-semibold mt-2 mb-3.5'>{name}</h2>
        <p className='text-sm'>{description}</p>
      </div>
      <div className='flex items-center justify-between mt-2 w-full'>
        <div className='framework'>
          <Image src={framework} alt="framework icon" width={24} height={24} />
        </div>
          <button 
            className="group mt-2 px-2 py-2 bg-black text-white rounded transition-all duration-300 overflow-hidden w-10 hover:w-24 flex items-center gap-1 justify-center"
            onClick={() => window.open(link, '_blank')}
          >
              <span className="whitespace-nowrap overflow-hidden opacity-0 group-hover:opacity-100 group-hover:ml-1 transition-all duration-300">
                View
              </span>
              <i className="bx bx-caret-right text-xl"></i>
          </button>
        </div>
    </div>
  )
}

export default ProjectCard