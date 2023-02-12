class HTTPError {
    private status;
    private message;
  
    constructor(status:any, data:any) {
      this.status = status;
      this.message = data.message;
    }
  }
  
  export default HTTPError;
  