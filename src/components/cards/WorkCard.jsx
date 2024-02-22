import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import StackedIcons from '../StackedIcons'
import { Carousel } from 'flowbite-react'

const WorkCard = ({ title = 'None', description = 'None', repo = null, imgs = [], techs = [] }) => {
  const { t } = useTranslation()

  return (
    <div className="relative min-h-full bg-gray-100 rounded-lg shadow border-blue-500 group">
      <div className="absolute -z-10 transition-all duration-300 rounded blur opacity-70 -inset-px group-hover:opacity-100 group-hover:-inset-3 bg-gradient-to-r from-sky-500 to-blue-900"></div>
      <div className="min-w-full h-56">
        <Carousel>
          {
            imgs.map((img, idx) => <img src={img} key={idx} />)
          }
        </Carousel>
      </div>

      <div className="flex flex-col min-h-full p-4 my-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
        <p className="mb-3 font-normal text-gray-700">{description}</p>
        <div className="flex justify-between">
          <a href={repo} target="_blank" rel="noreferrer" className="small-fill-btn space-x-2">
            <span>{t('portfolio_view_code')}</span>
            <FontAwesomeIcon icon={faGithubAlt} />
          </a>
          <StackedIcons techs={techs} />
        </div>
      </div>
    </div>
  )
}

export default WorkCard
