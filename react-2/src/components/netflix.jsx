import seriesdata from "../api/series.json"
const Netflix = () => {
  return (
    <ul>
        {
            seriesdata.map((curElem)=>{
                return (
        <li key={curElem.id}>
    <div className='anil'>
        <div>
            <img src={curElem.img_url} alt="og" height={200} />
        </div>
      <h1>Name:{curElem.name}</h1>
      <h2>rating:{curElem.rating}</h2>
      <p>summary:{curElem.description}</p>
      <p>Genre:{curElem.genre}</p>
      <p>cast:{curElem.cast}</p>
      <a href={curElem.watch_url}>
        <button>watch now</button>
      </a>
    </div>
    </li>)
}
)}
    </ul>
  )
}

export default Netflix
