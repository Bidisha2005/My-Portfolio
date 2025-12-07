import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { send, sendHover } from '../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faUsers, faLaptopCode, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Encode form data for mailto link
    const subject = `Portfolio Contact: ${encodeURIComponent(form.name)}`;
    const body = `Name: ${encodeURIComponent(form.name)}%0D%0AEmail: ${encodeURIComponent(form.email)}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(form.message)}`;
    
    // Open user's default email client
    window.location.href = `mailto:bidishabs2005@gmail.com?subject=${subject}&body=${body}`;
    
    // Clear form after a short delay
    setTimeout(() => {
      setForm({ name: '', email: '', message: '' });
      setLoading(false);
    }, 500);
  };

  const achievements = [
    {
      id: 1,
      title: 'Adobe India Hackathon 2025',
      subtitle: 'Round 1 Participant',
      description: 'Excited to have participated in Round 1 – Online MCQ + Coding of the Adobe India Hackathon 2025! Grateful for this challenging and insightful experience—full of learning, logic, and late-night debugging!',
      icon: faTrophy,
      color: 'from-purple-600 to-pink-600',
      tags: ['AdobeHackathon', 'WomenInTech', 'TeamWork', 'IEM'],
      link: 'https://www.linkedin.com/posts/bidisha-kundu-41706428b_adobe-india-hackathon-2025-round-1-experience-activity-7358940057145143296-dMlq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZPM1MBFBAfjXdVDU8Y51XZHhAZlvmrTSw',
      date: 'Dec 2025',
      
    },
    {
      id: 2,
      title: 'GDG Solution Challenge India 2025',
      subtitle: 'Participant & Innovator',
      description: 'Participated in the GDG on Campus Solution Challenge India 2025! An incredible journey filled with learning, building, and growing within the tech community.',
      icon: faUsers,
      color: 'from-blue-600 to-cyan-600',
      tags: ['SolutionChallenge', 'GDGIndia', 'GoogleDevelopers', 'Innovation'],
      link: 'https://www.linkedin.com/posts/bidisha-kundu-41706428b_solutionchallenge-gdgindia-hack2skill-activity-7358937778912448514-GKWy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZPM1MBFBAfjXdVDU8Y51XZHhAZlvmrTSw',
      date: 'Jan 2025',
     
      organizer: 'Google Developer Groups & Hack2Skill'
    },
    {
      id: 3,
      title: 'Gen AI Engineer Internship',
      subtitle: 'AI Wallah - 1 Month',
      description: 'Successfully completed a 1-month Gen AI Engineer Internship at AI Wallah! Built 2 AI projects and worked with powerful APIs like Gemini and ChatGPT.',
      icon: faLaptopCode,
      color: 'from-green-600 to-emerald-600',
      tags: ['AI', 'GenAI', 'Internship', 'ChatGPT', 'Gemini'],
      link: 'https://www.linkedin.com/posts/bidisha-kundu-41706428b_ai-genai-internship-activity-7349166182886690817-22Il?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZPM1MBFBAfjXdVDU8Y51XZHhAZlvmrTSw',
      date: 'Feb 2025',
      projects: ['2 AI Projects'],
      skills: ['Gemini API', 'ChatGPT API', 'AI Development']
    }
  ];

  return (
    <div className="w-full">
      {/* Achievements Section */}
      <div className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className={styles.sectionSubText}>Milestones & Recognition</p>
          <h3 className={styles.sectionHeadTextLight}>Achievements.</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: achievement.id * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-eerieBlack rounded-2xl p-6 flex flex-col h-full border border-gray-800 hover:border-gray-600 transition-all duration-300"
            >
              {/* Header with Icon */}
              <div className="flex items-start justify-between mb-4">
                <div className={`bg-gradient-to-br ${achievement.color} w-14 h-14 rounded-xl flex items-center justify-center`}>
                  <FontAwesomeIcon icon={achievement.icon} className="text-white text-2xl" />
                </div>
                <span className="text-taupe text-sm font-medium bg-gray-900 px-3 py-1 rounded-full">
                  {achievement.date}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="mb-4">
                <h4 className="text-white text-xl font-bold font-beckman mb-1">
                  {achievement.title}
                </h4>
                <p className="text-timberWolf text-sm font-medium">
                  {achievement.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-taupe text-sm mb-5 flex-grow">
                {achievement.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {achievement.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs text-cyan-300 bg-cyan-900/30 px-2 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Details */}
              <div className="space-y-2 mb-5">
                
                {achievement.organizer && (
                  <div className="flex items-center">
                    <span className="text-timberWolf text-xs mr-2">Organizer:</span>
                    <span className="text-taupe text-xs">{achievement.organizer}</span>
                  </div>
                )}
                {achievement.projects && (
                  <div className="flex items-center">
                    <span className="text-timberWolf text-xs mr-2">Projects:</span>
                    <span className="text-taupe text-xs">{achievement.projects.join(', ')}</span>
                  </div>
                )}
                {achievement.skills && (
                  <div className="flex items-center">
                    <span className="text-timberWolf text-xs mr-2">Skills:</span>
                    <span className="text-taupe text-xs">{achievement.skills.join(', ')}</span>
                  </div>
                )}
              </div>

              {/* View Post Button */}
              <a
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 transition-all duration-300 group"
              >
                <span className="text-timberWolf text-sm font-semibold group-hover:text-white">
                  View Post
                </span>
                <FontAwesomeIcon 
                  icon={faExternalLinkAlt} 
                  className="text-timberWolf text-xs group-hover:text-white transition-transform duration-300 group-hover:translate-x-1" 
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="bg-jet p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6 font-poppins"
        >
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              required
              className="bg-eerieBlack py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              required
              className="bg-eerieBlack py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">
              Your Message
            </span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What would you like to say?"
              required
              className="bg-eerieBlack py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium resize-none"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="live-demo flex justify-center sm:gap-4 gap-3 sm:text-[20px] text-[16px] text-timberWolf font-bold font-beckman items-center py-5 whitespace-nowrap sm:w-[130px] sm:h-[50px] w-[100px] h-[45px] rounded-[10px] bg-night hover:bg-battleGray hover:text-eerieBlack transition duration-[0.2s] ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
            onMouseOver={() => {
              document
                .querySelector('.contact-btn')
                .setAttribute('src', sendHover);
            }}
            onMouseOut={() => {
              document.querySelector('.contact-btn').setAttribute('src', send);
            }}
          >
            {loading ? 'Opening...' : 'Send'}
            <img
              src={send}
              alt="send"
              className="contact-btn sm:w-[26px] sm:h-[26px] w-[23px] h-[23px] object-contain"
            />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');