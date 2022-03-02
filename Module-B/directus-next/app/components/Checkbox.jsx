export default function Checkbox(label, id) {
  return (
    <label className="mt-3 mr-3 inline-flex items-center">
      <input type="checkbox" className="h-5 w-5" value={id} />{' '}
      <span className="ml-2 text-gray-700">{label}</span>
    </label>
  )
}
