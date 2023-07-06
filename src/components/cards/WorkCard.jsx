import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';
import StackedIcons from '../StackedIcons';

const WorkCard = ({title = "None", description = "None", repo = null, imgs = [], techs = []}) => {
  
  const { t } = useTranslation();
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImg === imgs.length - 1) {
        setCurrentImg(0)
      } else {
        setCurrentImg(currentImg + 1);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [currentImg, imgs.length]);

  return (
    <div className="min-h-full bg-white rounded-lg shadow-md shadow-blue-600">
      <div className="min-w-full border-b border-b-blue-300">
        <img className="rounded-t-lg aspect-video" src={imgs[currentImg]} alt="" />
      </div>
      
      <div className="flex flex-col min-h-full p-4 my-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{ title }</h5>
          <p className="mb-3 font-normal text-gray-700">{ description }</p>
          <div className="flex justify-between">
            <a href={repo} target="_blank" rel="noreferrer" className="small-fill-btn space-x-2">
              <span>{ t('portfolio_view_code') }</span>
              <FontAwesomeIcon icon={faGithubAlt} />
            </a>
            <StackedIcons techs={techs} />
          </div>
      </div>
    </div>
  );
}

export default WorkCard;