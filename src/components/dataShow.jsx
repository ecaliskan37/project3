import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { MdOutlineSignalWifiStatusbarConnectedNoInternet4 } from 'react-icons/md'

const DataShow = () => {
  const [list, setList] = useState([])
  const [button, setButton] = useState(0)

  useEffect(() => {
    if (button) {
      getData()
    }
  }, [button])

  const getData = async () => {
    const result = await axios.get('api')
    const data = await result.data
    console.log(data)
    setList(data)
  }
  console.log(list)

  return (
    <div className="box">
      <button
        style={{ backgroundColor: 'lightgrey' }}
        onClick={() => {
          setButton((x) => x + 1)
        }}
      >
        New Quote
      </button>
      {list.map((item, index) => {
        return (
          <div
            key={index}
            style={{ fontWeight: 'bold', backgroundColor: 'white' }}
          >
            <p
              style={{ fontWeight: 'bold', backgroundColor: 'white' }}
            >{`"${item?.q}`}</p>
            <p
              style={{ fontWeight: 'bold', backgroundColor: 'white' }}
            >{`-${item?.a}`}</p>
          </div>
        )
      })}
    </div>
  )
}
export default DataShow
