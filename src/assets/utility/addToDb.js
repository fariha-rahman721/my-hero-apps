

  const getInstalledApp = () =>{

    const installedAppSTR = localStorage.getItem('Installed App')
    if(installedAppSTR){
        const installedAppData = JSON.parse(installedAppSTR)
        return installedAppData;
    }else{
        return [];
    }

  }

  const addInstalledToDB = (id) =>{
     const installedAppData = getInstalledApp();
     if(installedAppData.includes(id)){
        return;
     } else{
        installedAppData.push(id)
        const data = JSON.stringify(installedAppData)
        localStorage.setItem('Installed App', data)
     }

  }

  

  export {addInstalledToDB, getInstalledApp}