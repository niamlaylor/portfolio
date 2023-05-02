export default function WeatherCardButtons( { handleToggle, handleExpand, unit } ) {
  return (
    <div className="flex items-center justify-center m-5">
      <button 
          className={"flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 m-1 rounded"}
          type={"button"}
          onClick={handleToggle}
        >
          {unit === 'c' && 'Metric'}
          {unit === 'f' && 'Imperial'}
      </button>
      <button
        className={
          'flex-shrink-0 bg-gray-500 hover:bg-teal-700 border-gray-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 m-1 rounded'
        }
        type={'button'}
        onClick={handleExpand}
      >
        More
      </button>
    </div>
  )
}