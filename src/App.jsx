const App = () => {
  const course = 'Half Stack application development'
  const stuff = [
    {part: 'Fundamentals of React', exercise: 10},
    {part: 'Using props to pass data', exercise: 7},
    {part: 'State of a component', exercise: 14}
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
       <Part parts={0}/>
       <Part parts={1}/>
       <Part parts={2}/>
     </div>
    )
   }
 
  const Part = (parts) => {

    return (
      <div>
    
            {stuff[parts.parts].part}  {stuff[parts.parts].exercise}<br/>
      </div>
    )

  }

 const Total = () => {
  return (
    <div>
      {stuff[0].exercise + stuff[1].exercise + stuff[2].exercise}
    </div>
    
  )

 }

  return (

    <div>
       <div>
      <Header />
      <Content />
      <Total />
    </div>
    </div>
  )
}

export default App