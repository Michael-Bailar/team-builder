import React, {useState} from 'react';

const TeamMemberForm = props => {
    console.log("props", props);
    const [teamMember, setTeamMember] = useState({
      name: "",
      email: "",
      role: ""
    });
  
    const handleChanges = e => {
      setTeamMember({
        ...teamMember,
        [e.target.name]: e.target.value
      });
    };
  
    const submitForm = e => {
      e.preventDefault();
      props.addNewTeamMember(teamMember);
      setTeamMember({ name: "", email: "", role: ""});
    };
  
    return (
      <form onSubmit={submitForm}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          onChange={handleChanges}
          value={teamMember.title}
        />
        <br />
        <label htmlFor="email">Email</label>
        <textarea
          id="email"
          type="text"
          name="email"
          onChange={handleChanges}
          value={teamMember.email}
        />
        <br />
        <label htmlFor="role">Role</label>
        <textarea
          id="role"
          type="text"
          name="role"
          onChange={handleChanges}
          value={teamMember.role}
        />
        <br />
        <button type="submit">Add Member</button>
      </form>
    );
  };

export default TeamMemberForm;