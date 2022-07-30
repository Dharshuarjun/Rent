import React from 'react';

function Contact() {
  return (
    <div class="contact-form bg-black">
    <div class="form-header text-center">
        <h2>Get in touch</h2>
        <p>Let’s talk about your project</p>
    </div>
    <form>
        <div class="row">
            <div class="form-group col-sm-6">
                <input type="text" name="fname" placeholder="First Name" class="form-control"/>
            </div>
            <div class="form-group col-sm-6">
                <input type="text" name="lname" placeholder="Last Name" class="form-control"/>
            </div>
        </div>                  
        <div class="form-group">
            <input type="email" name="email" placeholder="Email Id" class="form-control"/>
        </div>
        <div class="form-group">
            <input type="text" name="number" placeholder="Mobile Number" class="form-control"/>
        </div>
        <div class="form-group">
            {/* <select class="form-control">
                <option>Select Services</option>
                <option>Packers and Movers</option>
                <option>Transport Insurance</option>
                <option>Warehousing Services</option>
                <option>International Shifting</option>
                <option>Car Transportation</option>
                <option>Office Shifting</option>
                <option>Domestic Shifting</option>
            </select> */}
        </div>
        <div class="form-group">
            <textarea placeholder="Your Message" class="form-control"></textarea>
        </div>
        <div class="form-group">
            <button class="btn btn-primary">Submit</button>
        </div>
    </form>
</div>

  )
}

export default Contact;