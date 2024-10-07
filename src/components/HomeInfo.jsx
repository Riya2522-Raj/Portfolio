import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import './HomeInfo.css'; // Import a new CSS file for styles

const HomeInfo = ({ currentStage }) => {
  return (
    <div className={`home-info-container ${currentStage === 1 ? 'fade-in' : ''}`}>
      {currentStage === 1 && (
        <h1 className='sm:text-xl sm:leading-snug text-center text-white mx-5'>
          Hi, I'm
          <span className='font-semibold mx-2 highlight'>Sudheer Bhati</span> 👋
          <br />
          <span className='subtitle'>A Software Engineer</span>
        </h1>
      )}

      {currentStage === 2 && (
        <div className='info-box fade-in'>
          <p className='highlight-text font-medium sm:text-xl text-center'>
            Worked on many projects<br /> and picked up many skills along the way
          </p>
          <Link to='/about' className='neo-brutalism-white neo-btn fade-in'>
            Learn more
            <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
          </Link>
        </div>
      )}

      {currentStage === 3 && (
        <div className='info-box fade-in'>
          <p className='highlight-text font-medium text-center sm:text-xl'>
            Led multiple projects to success over the years. <br /> Curious about the impact?
          </p>
          <Link to='/projects' className='neo-brutalism-white neo-btn fade-in'>
            Visit my portfolio
            <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
          </Link>
        </div>
      )}

      {currentStage === 4 && (
        <div className='info-box fade-in'>
          <p className='highlight-text font-medium sm:text-xl text-center'>
            Need a project done or looking for a dev? <br /> I'm just a few keystrokes away
          </p>
          <Link to='/contact' className='neo-brutalism-white neo-btn fade-in'>
            Let's talk
            <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
          </Link>
        </div>
      )}
    </div>
  );
};

export default HomeInfo;
