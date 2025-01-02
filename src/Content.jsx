const Content = (course) => {
    return (
 
     <div>
        {console.log(course.course.parts[0].name)}
        {course.course.parts[0].name} {course.course.parts[0].exercises} <br/>
        {course.course.parts[1].name} {course.course.parts[1].exercises} <br/>
        {course.course.parts[2].name} {course.course.parts[2].exercises}
     </div>
    )
   }

export default Content