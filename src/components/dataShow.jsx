import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DataShow = () => {
  const [list, setList] = useState([])
  const [button, setButton] = useState(false)

  useEffect(() => {
    if (button) {
      getData()
    }
  }, [button])

  const getData = async () => {
    try {
      axios('https://zenquotes.io/api/random', {
        method: 'GET',
        mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        withCredentials: true,
        credentials: 'same-origin',
      }).then((item) => {
        console.log(item.data)
        setList(item.data)
      })
    } catch (error) {
      // Hata yakalama
      if (error.response) {
        // Sunucu tarafından döndürülen hata
        console.error('HTTP Hatası:', error.response.status)
      } else if (error.request) {
        // İstek gönderme hatası
        console.error('İstek Hatası:', error.request)
      } else {
        // Diğer hatalar
        console.error('Hata:', error.message)
      }
    } finally {
    }
  }

  //   const result = await axios
  //     .get('api')
  //     .then((item) => {

  //     })
  // }

  console.log(list)

  return (
    <div className="box">
      <button
        style={{ backgroundColor: 'lightgrey' }}
        onClick={() => {
          setButton(!button)
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
