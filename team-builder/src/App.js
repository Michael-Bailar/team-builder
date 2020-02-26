import React, {useState} from 'react';

import './App.css';
import TeamMembers from './TeamMembers';
import TeamMemberForm from './TeamMemberForm';

function App() {

  const [teamMembers, setTeamMembers] = useState([
    {
      name: 'Michael',
      email: 'michael@email.com',
      role: 'student'
    }
  ]);

  const addNewTeamMember = member => {
    const newMember = {
      id: member.name,
      name: member.name,
      email: member.email,
      role: member.role
    }
    setTeamMembers([...teamMembers, newMember]);
  }

  return (
    <div className="App">
      <h1>My Team Mates</h1>
      <TeamMemberForm addNewTeamMember={addNewTeamMember}/>
      <TeamMembers teamMembers={teamMembers}/>
    </div>
  );
}

export default App;
