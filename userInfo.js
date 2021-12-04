
class userInfo{
  constructor() {
      this.timeOpened = new Date()
      this.timeOpened = (new Date()).getTimezoneOffset()/60
  }

  // путь файла
  pageon() {
      return window.location.pathname
  }

  // путь от файла
  referrer() {
      return document.referrer
  }

  // история
  history() {
      return this.history.length
  }

  browserInfo() {
      return navigator
  }

  // геоолокация
  async position() {
      const pos = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject)
      })

      return {
          long: pos.coords.longitude,
          lat: pos.coords.latitude,
          accuracy: pos.coords.accuracy,
          altitude: pos.coords.altitude,
          heading: pos.coords.heading,
          speed: pos.coords.speed,
          timestamp: pos.timestamp,
      }
  }

  // состояние батареи
  async battery() {
      return await navigator.getBattery()
  }

  // вычисление ip
  async ip(){
      /**
       *  city
       *  continent
       *  countryCode
       *  countryName
       *  ipAddress
       *  statProv
       */
      let res =  await (await fetch('https://api.db-ip.com/v2/free/self'));
      let data = await res.json()
      return data;
    
  }
}

let info = new userInfo()

async function concludionInfo() {
  // console.log(info.pageon());
  // console.log(info.referrer());
  // console.log(info.history());
  // console.log(info.browserInfo());
  // console.log(await info.position());
  // console.log(await info.battery());
  console.log(await info.ip());
}

concludionInfo()