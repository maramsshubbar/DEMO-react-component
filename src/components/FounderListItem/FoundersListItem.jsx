function FoundersListItem({ name = "NAME MISSING", title, credentials }) {
  return (
    <li>
      <h3>{name}: {title}</h3>
      <p>{credentials}</p>
    </li>
  );
}

export default FoundersListItem;