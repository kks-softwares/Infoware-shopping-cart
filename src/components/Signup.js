import React from 'react';
import "../components/css/Signup.css";

export const Signup = () => {

   const onSubmit = (event) => {
        event.preventDefault();
      }

    return (
        <div>
        <form onSubmit={e => onSubmit(e)}>
            <div class="row mt-5">
                    <div class="col-md-7 mx-auto">
                      <div class="form-wrapper">
                        <div class="row">
                          <div class="col-md-12">
                            <h4>Registration form</h4>
                          </div>
                        </div>
                        <form>
                        <div className="row">
                            <div class="col-md-6">
                                    <label for="firstname" class="form-label">First Name</label>
                                    <input type="email" class="form-control" id="firstname" aria-describedby="emailHelp"/>
                                </div>
                                <div class="col-md-6">
                                    <label for="lastname" class="form-label">Last Name</label>
                                    <input type="text" class="form-control" id="lastname"/>
                                </div>
                                <div class="col-md-6">
                                    <label for="phone" class="form-label">Phone</label>
                                    <input type="text" class="form-control" id="phone"/>
                                </div>
                                <div class="col-md-6">
                                    <label for="Mobile" class="form-label">Mobile Phone</label>
                                    <input type="number" class="form-control" id="mobile"/>
                                </div>
                                <div class="col-md-6">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="email"/>
                                </div>

                                <hr style={{border:"15%", marginTop:"3%", height: '5px', background: 'black'}}/>
                                
                                <div class="col-md-6">
                                    <label for="companyname" class="form-label">Company Name</label>
                                    <input type="text" class="form-control" id="companyname"/>
                                </div>
                                <div class="col-md-6">
                                    <label for="companywebsite" class="form-label">Company Website</label>
                                    <input type="text" class="form-control" id="companywebsite"/>
                                </div>
                                <div class="col-md-6">
                                    <label for="compaddress" class="form-label">Company Address</label>
                                    <input type="text" class="form-control" id="compaddress"/>
                                </div>
                                <div class="col-md-6">
                                    <label for="Address2" class="form-label">Address 2</label>
                                    <input type="text" class="form-control" id="Address2"/>
                                </div>
                                <div class="col-md-6">
                                    <label for="city" class="form-label">City</label>
                                    <input type="text" class="form-control" id="city"/>
                                </div>

                                <button type="submit" class="btn btn-primary" style={{ marginTop:"3%"}}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </form>
        </div>
    )
}

export default Signup;
