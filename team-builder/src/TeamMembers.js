import React from "react";

const TeamMembers = props => {
  return (
    <div className="team-member-list">
      {props.teamMembers.map(member => (
        <div className="team-member" key={member.name}>
          <h2>{member.name}</h2>
          <p>{member.email}</p>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamMembers;
