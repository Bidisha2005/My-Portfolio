import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { download, downloadHover, resume } from '../assets';
import { textVariant } from '../utils/motion';

const Experience = () => {
  const resumeLink = 'https://drive.google.com/file/d/1lc0O4lzJg4Pd7FdAsc8GNXiBvxpbgPj4/view?usp=drivesdk';
  
  const contactInfo = [
    {
      icon: faPhone,
      label: 'Phone',
      value: '+91-7908323253',
      link: 'tel:+917908323253',
      color: 'text-green-600',
    },
    {
      icon: faEnvelope,
      label: 'Email',
      value: 'kbidisha.2005@gmail.com',
      link: 'mailto:kbidisha.2005@gmail.com',
      color: 'text-red-600',
    },
    {
      icon: faLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/bidisha-kundu',
      link: 'https://www.linkedin.com/in/bidisha-kundu-41706428b/',
      color: 'text-blue-700',
    },
    {
      icon: faGithub,
      label: 'GitHub',
      value: 'github.com/Bidisha2005',
      link: 'https://github.com/Bidisha2005',
      color: 'text-gray-800',
    },
    {
      icon: faCode,
      label: 'LeetCode',
      value: 'leetcode.com/u/bidisha2005-',
      link: 'https://leetcode.com/u/bidisha2005-/',
      color: 'text-amber-600',
    },
    {
      icon: faInstagram,
      label: 'Instagram',
      value: '@bidisha_2005',
      link: 'https://instagram.com/itsbidishary_05',
      color: 'text-pink-600',
    },
   
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} sm:pl-16 pl-[2rem]`}>
          Ready to contribute
        </p>
        <h2 className={`${styles.sectionHeadText} sm:pl-16 pl-[2rem]`}>
          Resume & Contact
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col lg:flex-row gap-10">
        
        {/* Left Side - Contact Cards in Horizontal Grid */}
        <div className="lg:w-2/3">
          <div className="bg-eerieBlack p-8 rounded-2xl shadow-lg">
            <h3 className="text-white text-[28px] font-bold font-beckman tracking-[2px] mb-8">
              Contact Information
            </h3>
            
            {/* Grid Layout for Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-6 bg-jet rounded-xl hover:bg-night transition-all duration-300 hover:scale-[1.02] group"
                >
                  <div className={`${item.color} text-3xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  <h4 className="text-timberWolf text-[18px] font-bold font-beckman mb-2 text-center">
                    {item.label}
                  </h4>
                  
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Resume Download Card */}
        <div className="lg:w-1/3">
          <div className="bg-jet p-8 rounded-2xl shadow-lg h-full flex flex-col justify-center">
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <img
                  src={resume}
                  alt="resume"
                  className="w-32 h-32 object-contain"
                />
              </div>
              
              <h3 className="text-white text-[28px] font-bold font-beckman tracking-[2px] mb-4">
                Download Resume
              </h3>
              
              <p className="text-taupe text-[18px] font-medium mb-8">
                Computer Science student with expertise in full-stack development, AI, and machine learning.
              </p>
              
              <button
                className="live-demo flex justify-center items-center mx-auto
                text-[18px] text-timberWolf 
                font-bold font-beckman py-5 px-8
                whitespace-nowrap gap-3 w-full rounded-[12px] bg-night 
                hover:bg-battleGray 
                hover:text-eerieBlack transition duration-[0.3s] 
                ease-in-out hover:scale-[1.02]"
                onClick={() =>
                  window.open(
                    resumeLink,
                    '_blank'
                  )
                }
                onMouseOver={() => {
                  document
                    .querySelector('.download-btn')
                    .setAttribute('src', downloadHover);
                }}
                onMouseOut={() => {
                  document
                    .querySelector('.download-btn')
                    .setAttribute('src', download);
                }}>
                DOWNLOAD RESUME (PDF)
                <img
                  src={download}
                  alt="download"
                  className="download-btn w-6 h-6 object-contain"
                />
              </button>
              
              <p className="text-taupe text-[14px] font-medium mt-4">
                Updated: December 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');