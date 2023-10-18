const Contact = () => {
    return (
      <div className="container">

        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a Message here"
              id="floatingTextarea2"
              style={{ height: 100 }}
              defaultValue={""}
            />
            <label htmlFor="floatingTextarea2">Message</label>
        </div>

          
          <button type="submit" className="btn btn-primary mt-1 mb-2">
            Send
          </button>
        </form>


      </div>
    )
  };
  
  export default Contact;