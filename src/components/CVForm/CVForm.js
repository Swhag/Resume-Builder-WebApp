import React from 'react';
import Personal from './Personal';
import Education from './Education';
import Experience from './Experience';

function CVForm(props) {
  const {
    personalInfo,
    handleChangePersonal,
    education,
    handleChangeEducation,
    handleAddEducation,
    handleDeleteEducation,
    experience,
    handleChangeExperience,
    handleAddExperience,
    handleDeleteExperience,
  } = props;

  return (
    <form id='cv-form'>
      <Personal
        personalInfo={personalInfo}
        handleChangePersonal={handleChangePersonal}
      ></Personal>

      <div>--------------------------------------------</div>
      <Education
        education={education}
        handleChangeEducation={handleChangeEducation}
        handleAddEducation={handleAddEducation}
        handleDeleteEducation={handleDeleteEducation}
      ></Education>

      <Experience
        experience={experience}
        handleChangeExperience={handleChangeExperience}
        handleAddExperience={handleAddExperience}
        handleDeleteExperience={handleDeleteExperience}
      ></Experience>
    </form>
  );
}

export default CVForm;