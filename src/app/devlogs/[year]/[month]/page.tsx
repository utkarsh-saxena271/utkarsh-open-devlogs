export default function Month({
  params,
}: {
  params: { month: string }
}) {
  const { month } = params
  return <div>My Post: {month}</div>
}