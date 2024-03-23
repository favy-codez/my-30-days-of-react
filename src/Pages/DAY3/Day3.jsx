import Intro from "./Intro";
import Avatar from './Avatar'
import SkillList from "./SkillList";

const Day3 = () => {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  )
}

export default Day3
