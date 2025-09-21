import FirstPic from "../assets/Ladiel.png"

const Projects = () => {
   const projectNames = {
      title: "Flex box project",
      description: "this is a list of the fofhfbenkjqwihas"
   }
  return (
    <div>
      <h1>Projects</h1>
      <div className='container'>
         <div className="row" style={{display: "flex"}}>
            <div className="-col-start-6">
            <h3>{projectNames.title}</h3>
            <p>{projectNames.description}</p>
            </div>
            <div className="col-start-6">
               <img src={FirstPic} alt="" />
            </div>
         </div>
      </div>
    </div>
  )
}

export default Projects;
