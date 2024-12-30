const App = () => {
  const course = 'Half Stack application development'
  const stuff = [
    {part: 'Fundamentals of React', exercise: 10},
    {part: 'Using props to pass data', exercise: 7},
    {part: 'State of a component', exericse: 14}
  ]

  const Header = () => {
    return (
      <div>
        <h1>{course}</h1>
      </div>
    )
  }

 

  const Content = () => {
   return (
    <div>
      {stuff[0].part} {stuff[0].exercise} {stuff[1].part} {stuff[1].exercise} {stuff[2].part} {stuff[2].exercise}
    </div>
   )
  }

  // const Total = () => {
  //   return (
  //     {exercises1} + {exercises2} + {exercises3}
  //   )

  // }

  return (

    <div>
       <div>
      <Header />
      <Content  />
      {/* <Total /> */}
    </div>
    </div>
  )
}

export default App