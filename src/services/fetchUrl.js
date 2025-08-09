// funcion para hacer fech a la api de cleanuri y obtener una url acortada
export async function fetchShortenedLink(url, setShortenedLink, setError) {
           if (url) {
               try {
                   const response = await fetch('/api/cleanuri/shorten', {
                       method: 'POST',
                       headers: {
                           'Content-Type': 'application/x-www-form-urlencoded',
                       },
                       body: `url=${encodeURIComponent(url)}`
                        });
                    
                    if (!response.ok) {
                        throw new Error(data.error || "Failed to shorten URL");
                    }
                    
                    const data = await response.json();

                    if (data.result_url) {
                        //console.log(data);
                        setShortenedLink(data.result_url);
                        //console.log("Shortened URL:", data.result_url);

                    }

                } catch (error) {
                    console.error("Fetch error:", error);
                    setError("Url not valid");
                }
           }
       }