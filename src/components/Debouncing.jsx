import axios from 'axios';
import { useEffect, useState } from 'react'
import '../styles/utility.css';

const Debouncing = () => {
  const[pin, setPin] = useState('');
  const pinUrl = `https://api.postalpincode.in/pincode/`;

  useEffect(() => {
    const debouncedASearch = setTimeout(() => {
        axios.get(pinUrl + pin).then((res) => {
            console.log(res.data[0].PostOffice);
          })
          .catch((err) => {
              console.log("Something went wrong:",err);
          })
    },1500)

    return() => {
        clearTimeout(debouncedASearch);
    }
  }, [pin, pinUrl])

  return (
    <div className="con">
      <input
        type="text"
        onChange={(e) => setPin(e.target.value)}
        placeholder="Enter your Pincode"
      />
    </div>
  );
}

export default Debouncing