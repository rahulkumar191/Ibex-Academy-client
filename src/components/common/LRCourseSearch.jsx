import React, {useEffect, useState} from 'react'
import PrimaryButton from "./PrimaryButton";

const LRCourseSearch = ({courses, setToRenderCourses}) => {

    const [activeButton, setActiveButton] = useState('Recorded');

  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    if(selectedValue !== selectedOption){
      setSelectedOption(selectedValue);
    }
  };

  const selectCourse = (type) => {
      const data = courses.filter(course => course.type === type);
      return data;
  }

  useEffect(()=> {
    setToRenderCourses(selectCourse(activeButton));
  }, [activeButton, selectedOption]);

  return (
    <div className=' mb-5'>
      <div className="flex justify-around mb-5">
        <PrimaryButton className={`cursor-pointer ${activeButton === 'Recorded' ? "" : "bg-transparent !text-primary-color" }`} 
          onClick={() => {
            if(activeButton !== 'Recorded'){
              setActiveButton('Recorded');
            }else{
              alert('Allready Selected')
            }
          }}>
          Recorded
        </PrimaryButton>
        <PrimaryButton className={`cursor-pointer ${activeButton === 'Live' ? "" : "bg-transparent !text-primary-color" }`}
          onClick={() => {
            if(activeButton !== 'Live'){
              setActiveButton('Live');
            }else{
              alert('Allready Selected')
            }
          }}>
          Live
        </PrimaryButton>
      </div>

      <div>
      <select value={selectedOption} onChange={handleSelectChange} 
        className="block py-2 px-4 rounded-md border border-primary-color focus:outline-none focus: focus:border-primary-color"
      >
        <option value="">All</option>
        <option value="webDevelopment">Web Development</option>
        <option value="mobileAppDevelopment">Mobile App Development</option>
        <option value="dataScience">Data Science</option>
        <option value="machineLearning">Machine Learning</option>
        <option value="artificialIntelligence">Artificial Intelligence</option>
        <option value="fullStackDevelopment">Full Stack Development</option>
        <option value="frontendDevelopment">Frontend Development</option>
        <option value="backendDevelopment">Backend Development</option>
        <option value="devOps">DevOps</option>
        <option value="cloudComputing">Cloud Computing</option>
        <option value="blockchain">Blockchain Development</option>
      </select>
    </div>
    </div>
  )
}

export default LRCourseSearch