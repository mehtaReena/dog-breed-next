import '../styles/styles.css'
import DogCard from '../components/DogCard'
import FavCard from '../components/FavCard'
import { useState , useEffect} from 'react';

function MyApp() {

  let [breed, setBreed] = useState('');
  let [dogs, setDogs] = useState([]);
  let [favList, setfavList] = useState([]);
  let [breedList, setBreedList] = useState([]);

  const [loading, setLoading] = useState(false);

  const getData = async (val) => {

    setLoading(true);
    const response = await fetch('https://dog.ceo/api/breed/' + val + '/images/random/10', {
      method: "get",

    });
    const data = await response.json();
    setDogs(data.message)
    setLoading(false);
    console.log(data.message[1])
  }

  const getBread = async () => {

    const response = await fetch(' https://dog.ceo/api/breeds/list/all', {
      method: "get",

    });
    const data = await response.json();
    console.log(Object.keys(data.message)[10])
    setBreedList(Object.keys(data.message))
  }



  const addToFav = (url ,id) => {
    console.log(id)
    dogs = dogs.filter(function (item) {
      return item !== url
    })
    setDogs(dogs)
    setfavList([...favList, url])



  }

  const removeFromFav = (url, id) => {
    console.log(id)
    favList = favList.filter(function (item) {
      return item !== url
    })
    setfavList(favList)
    setDogs([...dogs, url])

  }


  const search = (val) => {

    getData(val);
  }


  useEffect(()=>{
    getBread()


  },[])
  return (
    <div className="container">
      <div className="font">Search dog breed </div>
      <div className="search">

      <select className="employer" name="employer"
            onChange={(e) => search(e.target.value)}>
            <option value="" disabled>breeds...</option>
                {breedList.map((item ,idx) =>
                  <option key ={idx} value={item}>{item}</option>
                )}

            </select>


       {/*  <div>
          <input type="text" id="breed" name="breed"
            onChange={e => setBreed(e.target.value)}  ></input>
        </div>
          <div className="query-btn">
            <button id="query-btn" onClick={search}>Search</button>
          </div>*/}

        </div>

        <div className="breeds border">
        <div className="dogs">
          {
            loading ? <h5> loading ... </h5> :
              dogs.map((item, idx) => (
                <DogCard
                  key={idx}
                  id={idx}
                  url={item}
                  addToFav={addToFav}
                />
              ))
          }

        </div>
        <div>
          <div><h4> My Favorites</h4></div>
        <div className="dogs ">

          {

            favList.length < 0 ? <h1> loading ... </h1> :
              favList.map((item, idx) => (
                <FavCard
                  key={idx}
                  id={idx}
                  url={item}
                  removeFromFav={removeFromFav}
                />
              ))


          }
        </div>

      </div>
      </div>
      </div>

      );
}


export default MyApp
