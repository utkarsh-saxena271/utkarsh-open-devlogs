export default  function Year({
  params,
}: {
  params: { year: string }
}) {
  const { year } =  params
  return <div>My Post: {year}</div>
}