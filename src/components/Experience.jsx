import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faCode, faGraduationCap, faSchool, faUniversity } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { download, downloadHover, resume } from '../assets';
import { textVariant } from '../utils/motion';
import holyChildImage from '../assets/hcs.jpeg'; // Add your Holy Child School image
import iemImage from '../assets/iem.jpeg'; 


const Experience = () => {
  const resumeLink = 'https://drive.google.com/file/d/1P77O_Q_3-xB2ge_GrnYSWg478BQGfsKP/view?usp=drivesdk';
  
  const contactInfo = [
    {
      icon: faPhone,
      label: 'Phone',
      value: '+91-7908323253',
      link: 'tel:+917908323253',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-gradient-to-br from-green-500 to-emerald-600',
    },
    {
      icon: faEnvelope,
      label: 'Email',
      value: 'kbidisha.2005@gmail.com',
      link: 'mailto:kbidisha.2005@gmail.com',
      color: 'from-red-500 to-pink-600',
      bgColor: 'bg-gradient-to-br from-red-500 to-pink-600',
    },
    {
      icon: faLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/bidisha-kundu',
      link: 'https://www.linkedin.com/in/bidisha-kundu-41706428b/',
      color: 'from-blue-600 to-blue-800',
      bgColor: 'bg-gradient-to-br from-blue-600 to-blue-800',
    },
    {
      icon: faGithub,
      label: 'GitHub',
      value: 'github.com/Bidisha2005',
      link: 'https://github.com/Bidisha2005',
      color: 'from-gray-700 to-gray-900',
      bgColor: 'bg-gradient-to-br from-gray-700 to-gray-900',
    },
    {
      icon: faCode,
      label: 'LeetCode',
      value: 'leetcode.com/u/bidisha2005-',
      link: 'https://leetcode.com/u/bidisha2005-/',
      color: 'from-amber-500 to-yellow-600',
      bgColor: 'bg-gradient-to-br from-amber-500 to-yellow-600',
    },
    {
      icon: faInstagram,
      label: 'Instagram',
      value: '@bidisha_2005',
      link: 'https://instagram.com/itsbidishary_05',
      color: 'from-pink-500 to-rose-600',
      bgColor: 'bg-gradient-to-br from-pink-500 to-rose-600',
    },
  ];

  const educationTimeline = [
    {
      id: 1,
      year: '2021',
      title: 'ICSE Examination',
      institution: 'Holy Child School',
      percentage: '95.4%',
      description: 'Completed ICSE with outstanding academic performance',
      icon: faSchool,
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      image: holyChildImage, // Use your actual image
    },
    {
      id: 2,
      year: '2021-2023',
      title: 'ISC Examination',
      institution: 'Holy Child School',
      percentage: '88.25%',
      description: 'Completed ISC with excellent results in Science stream',
      icon: faGraduationCap,
      color: 'bg-gradient-to-br from-purple-500 to-purple-700',
      image: holyChildImage, // Use same or different image
    },
    {
      id: 3,
      year: '2023-Present',
      title: 'B.Tech Computer Science',
      institution: 'Institute of Engineering and Management',
      percentage: '9.0 CGPA',
      description: 'Pursuing Computer Science Engineering with specialization in AI/ML',
      icon: faUniversity,
      color: 'bg-gradient-to-br from-green-500 to-emerald-700',
      image: iemImage, // Use your actual IEM image
    },
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} sm:pl-16 pl-[2rem]`}>
          Academic Journey
        </p>
        <h2 className={`${styles.sectionHeadText} sm:pl-16 pl-[2rem]`}>
          Education Timeline
        </h2>
      </motion.div>

      {/* Education Timeline Section - Full Width */}
      <div className="mt-20 bg-eerieBlack p-8 rounded-2xl shadow-2xl mx-auto max-w-6xl">
        {/* Vertical Timeline with Center Alignment */}
        <div className="relative">
          {/* Vertical Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500"></div>
          
          {educationTimeline.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-16 flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              {/* Timeline Dot with Glow Effect */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-gray-800 z-10 shadow-lg">
                <div className={`absolute inset-0 rounded-full ${edu.color} opacity-70 animate-pulse`}></div>
              </div>
              
              {/* Timeline Card */}
              <div className={`w-full md:w-5/12 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
              }`}>
                <div className="bg-jet rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group">
                  {/* Image Section with Overlay */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={edu.image}
                      alt={edu.institution}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className={`absolute top-4 right-4 ${edu.color} text-white p-3 rounded-full shadow-lg`}>
                      <FontAwesomeIcon icon={edu.icon} className="text-xl" />
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="text-white text-2xl font-bold font-beckman">
                        {edu.institution}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-taupe text-sm font-semibold bg-gray-800 px-4 py-2 rounded-full border border-gray-700">
                        {edu.year}
                      </span>
                      <span className="text-white text-xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 px-4 py-2 rounded-full shadow-lg">
                        {edu.percentage}
                      </span>
                    </div>
                    
                    <h4 className="text-white text-2xl font-bold font-beckman mb-3">
                      {edu.title}
                    </h4>
                    
                    <p className="text-taupe text-base leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact & Resume Section - Below Timeline */}
      <div className="mt-20 flex flex-col items-center">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="text-center mb-12"
  >
    <h2 className={`${styles.sectionHeadText} text-white`}>
      Get In Touch
    </h2>
    <p className={`${styles.sectionSubText} mt-4`}>
      Connect with me through various platforms
    </p>
  </motion.div>

  {/* Circular Contact Information */}
  <div className="relative w-full max-w-4xl mx-auto mb-16">
    {/* Circular Container */}
    <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
      {/* Center Resume Button */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-br from-gray-900 to-black rounded-full p-4 md:p-6 shadow-2xl border-2 border-gray-700 w-32 h-32 md:w-40 md:h-40 flex items-center justify-center"
        >
          <div className="flex flex-col items-center justify-center">
            <img
              src={resume}
              alt="resume"
              className="w-12 h-12 md:w-16 md:h-16 object-contain mb-2 md:mb-3"
            />
            <button
              onClick={() => window.open(resumeLink, '_blank')}
              className="text-timberWolf text-xs md:text-sm font-bold font-beckman px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-1 md:gap-2"
              onMouseOver={(e) => {
                e.currentTarget.querySelector('.download-btn').src = downloadHover;
              }}
              onMouseOut={(e) => {
                e.currentTarget.querySelector('.download-btn').src = download;
              }}
            >
              RESUME
              <img
                src={download}
                alt="download"
                className="download-btn w-3 h-3 md:w-4 md:h-4 object-contain"
              />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Circular Contact Items */}
      {contactInfo.map((item, index) => {
        const angle = (index * 360) / contactInfo.length;
        const radius = 140; // Distance from center
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);
        
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="absolute"
            style={{
              left: `calc(42% + ${x}px)`,
              top: `calc(42% + ${y}px)`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${item.bgColor} w-14 h-14 md:w-18 md:h-18 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group relative`}
            >
              <FontAwesomeIcon 
                icon={item.icon} 
                className="text-white text-lg md:text-xl" 
              />
              
              {/* Tooltip */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50 pointer-events-none">
                <span className="text-sm font-semibold">{item.label}</span>
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-gray-900"></div>
              </div>
            </a>
          </motion.div>
        );
      })}
    </div>
  </div>
</div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');