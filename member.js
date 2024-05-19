function skillsMember() {
  // Get the member id from the URL
  const memberId = window.location.search.split('=')[1];
  // Get the member from the database
  const member = getMemberById(memberId);
  // Get the skills from the member
  const skills = member.skills;
  // Return the skills
  return skills;
}