

export const checkDate = (itemCheck: Date[], type: string) => {

  const dateToday = Date.now()
  const nowYear = new Date(dateToday).getFullYear().toString();
  const nowMonth = new Date(dateToday).getMonth().toString();
  const nowDay = new Date(dateToday).getDay().toString();
  const checkDay = nowYear + nowMonth + nowDay;
  const checkMonth = nowYear + nowMonth;
  const checkYear = nowYear;

  if(!itemCheck) return null

  const dateCheck = itemCheck.map((item) => {

    const itemYear = new Date(item).getFullYear().toString();
    const itemmonth = new Date(item).getMonth().toString();
    const itemDay = new Date(item).getDay().toString();

    if(type === 'day'){
      return itemYear + itemmonth + itemDay
    };

    if(type === 'month'){
      return itemYear + itemmonth 
    };

    if(type === 'year'){
      return itemYear 
    };

    return undefined
    
  });
  console.log(dateCheck ,'datacheck');
  
  const resultCheck = dateCheck.filter((item) => {

    if(type === 'day'){
      return item === checkDay
    };

    if(type === 'month'){
      return item === checkMonth
    };

    if(type === 'year'){
      return item === checkYear
    };

    return undefined
  });

  console.log(resultCheck,'ket qua');
  
  return resultCheck.length

};