async function sendHttpRequest(url,){
  const response = await fetch(url, config);

  const resData = await response.json();

  if (!response.ok){
    throw new Error(resData.message || 'Something went wrong, failed to send request.');
  }

  return resData;
}

export default function useHttp(){
   
}
