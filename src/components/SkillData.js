import "./SkillsStyles.css";

  /*
    Stored template for props for skills 
  */


function SkillsData(props){
    return(
        <div className="scard">
            <div className="s-img">
                <img src={props.image} alt="image"/>
            </div>
            <h2>{props.heading}</h2>
        </div>
    )
}

export default SkillsData;