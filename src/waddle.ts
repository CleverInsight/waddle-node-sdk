import services from "./services";


class waddle {
  auth_key: string
  auth_token: string
  bearer: string
  
  constructor(auth_key:string, auth_token:string) {
  	this.auth_key = auth_key;
    this.auth_token = auth_token;
    this.bearer = '';
	  // Get the access token here
    services.post('/auth/login', {email: "rajan.s@cleverinsight.co", password: "Rajan@123"})
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));

  }
	
  // getBucket method to fetch `id` matching bucket
  

}

export default waddle;