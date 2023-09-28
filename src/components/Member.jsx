export default function Member({ member }) {
  return (
    <article>
      <h2>
        {member.firstName} {member.lastName}
      </h2>

      <a href={`mailto:${member.mail}`}>{member.mail}</a>
      <img src={member.image} alt="" />
      <p>This is a {member.gender} 🎉</p>
    </article>
  );
}
