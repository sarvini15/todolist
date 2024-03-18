export default function Title(props) {
  const { title = "My Todo List" } = props;
  return <h3 class="card-title mb-3">My Todo List</h3>;
}
