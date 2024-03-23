const skills = [
    {
      skill: "HTML+CSS",
      level: "advanced",
      color: "#2662EA"
    },
    {
      skill: "JavaScript",
      level: "advanced",
      color: "#EFD81D"
    },
    {
      skill: "Web Design",
      level: "advanced",
      color: "#C3DCAF"
    },
    {
      skill: "Git and GitHub",
      level: "intermediate",
      color: "#E84F33"
    },
    {
      skill: "React",
      level: "advanced",
      color: "#60DAFB"
    },
    {
      skill: "Svelte",
      level: "beginner",
      color: "#FF3B00"
    }
  ];

const Skill = () => {
    return (
        <div className="skill" style={{ backgroundColor: color }}>
          <span>{skill}</span>
          <span>
            {level === "beginner" && "👶"}
            {level === "intermediate" && "👍"}
            {level === "advanced" && "💪"}
          </span>
        </div>
      );
}

export default Skill
