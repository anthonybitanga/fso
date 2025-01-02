const Total = (course) => {
    return (
      <div>
        {course.course.parts[0].exercises + course.course.parts[1].exercises + course.course.parts[2].exercises}
      </div>
      

    )
  
   }
  
export default Total