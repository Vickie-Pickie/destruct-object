export default function destructObject(obj) {
  const { special } = obj;
  return special.map(({
    id, name, icon, description = 'Описание недоступно',
  }) => ({
    id,
    name,
    icon,
    description,
  }));
}
