import React, { useState, useEffect } from "react";
import "./form.scss";
const Form = () => {
   

  const [formValues, setFormValues] = useState({
    companyname: "",
    shortcompanyname: "",
    email: "",
    contacttype: "",
    branch: "",
    dateofissue:"",
    dateofexpiry:"",
    dateofestablishment:"",
    mobilenumber: "",
    companytype:"",
    countryofformation:"",
    buildingtype:"",
    matrix:"",
    city:"",
    commercialestablishnumber:"",
    companywebsite:"",
    vat:""
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    console.log(formValues);
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
    console.log(formValues);
   const postCompany = async ()=>{
      let res = await axios.post("http://localhost:3000",formValues);
      let data1 =res.data;
      console.log(data1);

       }
  };
  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.companyname) {
      errors.companyname = "Cannot be blank";
    } else if (values.companyname.length > 20) {
      errors.companyname = "Password must be more than 4 characters";
    }

    if (!values.shortcompanyname) {
      errors.shortcompanyname = "Please enter company Name";
    } else if (values.shortcompanyname.length > 20) {
      errors.shortcompanyname =
        "Company name Should be less than 20 characters";
    }

    if (!values.email) {
      errors.email = "Cannot be blank";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
    }

    if (!values.contacttype) {
      errors.contacttype = "Cannot be blank";
    } else if (values.contacttype.length > 20) {
      errors.contacttype = "";
    }
    
    if (!values.branch) {
      errors.branch = "Cannot be blank";
    } else if (values.branch.length > 20) {
      errors.branch = "Company name Should be less than 20 characters";
    }
      
    if (!values.branch) {
      errors.branch = "Cannot be blank";
    } else if (values.branch.length > 20) {
      errors.branch = "Company name Should be less than 20 characters";
    }

    if (!values.dateofissue) {
      errors.dateofissue = "Issue date required";
    } else if (values.dateofissue.length > 20) {
      errors.dateofissue = "";
    }

    if (!values.dateofexpiry) {
      errors.dateofexpiry = "Expiry date required";
    } else if (values.dateofexpiry.length > 20) {
      errors.expiry = "";
    }

    if (!values.dateofestablishment) {
      errors.dateofestablishment = "Establishment date required";
    } else if (values.dateofestablishment.length > 20) {
      errors.dateofestablishment = "";
    }

    if (!values.mobilenumber) {
      errors.mobilenumber = "Mobile number required";
    } else if (values.mobilenumber.length >15) {
      errors.mobilenumber = "Mobile number should be less than 15";
    }

    if (!values.companytype) {
      errors.companytype = "Cannot be empty ";
    } else if (values.companytype.length >15) {
      errors.companytype = "Mobile number should be less than 15";
    }
    if (!values.countryofformation) {
      errors.countryofformation = "Cannot be empty ";
    } else if (values.countryofformation.length >15) {
      errors.countryofformation = "Mobile number should be less than 15";
    }
    if (!values.state) {
      errors.state = "Select state ";
    } else if (values.state.length >15) {
      errors.state = "";
    }

    if (!values.matrix) {
      errors.matrix = "Select yes or no";
    } else if (values.matrix.length >15) {
      errors.matrix = "";
    }

   if (!values.city) {
      errors.city = "Select city";
    } else if (values.matrix.length >15) {
      errors.city = "";
    }
    if (!values.countryofformation) {
      errors.countryofformation = "Cannot be empty ";
    } else if (values.countryofformation.length >15) {
      errors.countryofformation = "should be less than 15";
    }

    if (!values.commercialestablishnumber) {
      errors.commercialestablishnumber = "Cannot be empty ";
    } else if (values.commercialestablishnumber.length >15) {
      errors.commercialestablishnumber = "should be less than 15";
    }
    if (!values.chamberofcommercialnumber) {
      errors.chamberofcommercialnumber = "Cannot be empty ";
    } else if (values.chamberofcommercialnumber.length >15) {
      errors.chamberofcommercialnumber = "should be less than 15";
    }
    
    
    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submit();
    }
  }, [formErrors]);

  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmitting && (
        <span className="success-msg">Form submitted successfully</span>
      )}
      <form onSubmit={handleSubmit} noValidate>
        <div clasName="test2">
        <div class="form-group col-md-3">
          <label htmlFor="text">Company Name</label>
          <input
            type="text"
            name="companyname"
            id="companyname"
            value={formValues.companyname}
            onChange={handleChange}
            className={formErrors.companyname && "input-error"}
          />
          {formErrors.companyname && (
            <span className="error">{formErrors.companyname}</span>
          )}
        </div>
        
        <div class="form-group col-md-3">
                    <label for="inputPassword4">Please Select</label>
                      <label class="rd1">
                        <input
                          class="rd1"
                          name="buildingtype"
                          type="radio"
                          value={formValues.buildingtype}
                          onChange={handleChange}
                        />
                        Resident{" "}
                      </label>
                      <label>
                        <input
                          class="rd2"
                          name="buildingtype"
                          type="radio"
                          value={formValues.buildingtype}
                          onChange={handleChange}
                        />
                        Non-Resident
                      </label>
                    
                  </div>
                  <div class="form-group col-md-3">
          <label htmlFor="text">Country of formation</label>
          <input
            type="text"
            name="countryofformation"
            id="countryofformation"
            value={formValues.countryofformation}
            onChange={handleChange}
            className={formErrors.countryofformation && "input-error"}
          />
          {formErrors.countryofformation && (
            <span className="error">{formErrors.countryofformation}</span>
          )}
        </div>
          
        <div class="form-group col-md-3">
                    <label htmlfor="select">State*</label><br></br>
                    <select
                      class="form-group form-control col-md-12"
                      name="state"
                      id="drop"
                      value={formValues.state}
                      onChange={handleChange}
                      className={formErrors.state && "input-error"}
                      required
                    >
                      <option>Select</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                    {formErrors.state && (
            <span className="error">{formErrors.state}</span>
          )}
        </div>
        </div>
        
         <div className="test2">
        <div class="form-group col-md-3">
          <label htmlFor="text">Company Short Name</label>
          <input
            type="text"
            name="shortcompanyname"
            id="shortcompanyname"
            value={formValues.shortcompanyname}
            onChange={handleChange}
            className={formErrors.shortcompanyname && "input-error"}
          />
          {formErrors.shortcompanyname && (
            <span className="error">{formErrors.shortcompanyname}</span>
          )}
        </div>
        <div class="form-group col-md-3">
          <label htmlFor="text">Campany type</label>
          <input
            type="text"
            name="companytype"
            id="companytype"
            value={formValues.companytype}
            onChange={handleChange}
            className={formErrors.companytype && "input-error"}
          />
          {formErrors.companytype && (
            <span className="error">{formErrors.companytype}</span>
          )}</div>

<div class="form-group col-md-3">
                    <label for="inputPassword4">Mashreq Matrix Required</label>
                    <form class="form-control">
                      <label class="rd1">
                        <input
                          class="rd1"
                          name="matrix"
                          type="radio"
                          value={formValues.yes}
                          onChange={handleChange}
                        />
                        
                        Yes{" "}
                      </label>
                      <label>
                        <input
                          class="rd2"
                          name="matrix"
                          type="radio"
                          value={formValues.matrix}
                          onChange={handleChange}
                        />
                        No
                      </label>
                    </form>
                    
          
        </div>
        <div class="form-group col-md-3">
                    <label htmlfor="select">city*</label><br></br>
                    <select
                      class="form-group form-control col-md-12"
                      name="city"
                      id="drop"
                      value={formValues.city}
                      onChange={handleChange}
                      className={formErrors.city && "input-error"}
                      required
                    >
                      <option>Select</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                    {formErrors.city && (
            <span className="error">{formErrors.city}</span>
          )}
                
        </div>
        </div>
        <div className="test2">
        <div class="form-group col-md-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formValues.email}
            onChange={handleChange} 
            className={formErrors.email && "input-error"}
          />
          {formErrors.email && (
            <span className="error">{formErrors.email}</span>
          )}
        </div>
        <div class="form-group col-md-3">
          <label htmlFor="text">Chamber of commercial number</label>
          <input
            type="text"
            name="chamberofcommercialnumber"
            id="chamberofcommercialnumber"
            value={formValues.chamberofcommercialnumber}
            onChange={handleChange}
            className={formErrors.chamberofcommercialnumber && "input-error"}
          />
          {formErrors.chamberofcommercialnumber && (
            <span className="error">{formErrors.chamberofcommercialnumber}</span>
          )}</div></div>
        
        <div className="test2">
        <div class="form-group col-md-3">
          <label htmlFor="text">Contact Person</label>
          <input
            type="text"
            name="contacttype"
            id="contacttype"
            value={formValues.contacttype}
            onChange={handleChange}
            className={formErrors.contacttype && "input-error"}
          />
          {formErrors.contacttype && (
            <span className="error">{formErrors.contacttype}</span>
          )}
        </div>
        <div class="form-group col-md-3">
          <label htmlFor="text">Commerical Establish Number</label>
          <input
            type="text"
            name="commercialestablishnumber"
            id="commercialestablishnumber"
            value={formValues.commercialestablishnumber}
            onChange={handleChange}
            className={formErrors.commercialestablishnumber && "input-error"}
          />
          {formErrors.commercialestablishnumber && (
            <span className="error">{formErrors.commercialestablishnumber}</span>
          )}</div>
        </div>

        <div className="test2">
        <div class="form-group col-md-3">
          <label htmlFor="text">Branch</label>
          <input
            type="text"
            name="branch"
            id="branch"
            value={formValues.branch}
            onChange={handleChange}
            className={formErrors.branch && "input-error"}
          />
          {formErrors.branch && (
            <span className="error">{formErrors.branch}</span>
          )}
        </div>
        <div class="form-group col-md-3">
          <label htmlFor="link">Company Website</label>
          <input
            type="link"
            name="companywebsite"
            id="companywebsite"
            value={formValues.companywebsite}
            onChange={handleChange}
            className={formErrors.companywebsite && "input-error"}
          />
          {formErrors.companywebsite && (
            <span className="error">{formErrors.companywebsite}</span>
          )}
        </div>

        </div>
        <div className="test2">
        <div class="form-group col-md-3">
          <label htmlFor="date">Date of Issue</label>
          <input
            type="date"
            name="dateofissue"
            id="dateofissue"
            value={formValues.dateofissue}
            onChange={handleChange}
            className={formErrors.dateofissue && "input-error"}
          /><br></br>
          {formErrors.dateofissue && (
            <span className="error">{formErrors.dateofissue}</span>
          )}
        </div>
        <div class="form-group col-md-3">
          <label htmlFor="text">TRN-TAX Registration Number(VAT)</label>
          <input
            type="text"
            name="vat"
            id="vat"
            value={formValues.vat}
            onChange={handleChange}
            className={formErrors.vat && "input-error"}
          /><br></br>
          {formErrors.vat && (
            <span className="error">{formErrors.vat}</span>
          )}
        </div>
        </div>
        <div class="form-group col-md-3">
          <label htmlFor="date">Date of Expiry</label>
          <input
            type="date"
            name="dateofexpiry"
            id="dateofexpiry"
            value={formValues.dateofexpiry}
            onChange={handleChange}
            className={formErrors.dateofexpiry && "input-error"}
          /><br></br>
          {formErrors.dateofexpiry && (
            <span className="error">{formErrors.dateofexpiry}</span>
          )}
        </div>

        <div class="form-group col-md-3">
          <label htmlFor="date">Date of Establishment</label>
          <input
            type="date"
            name="dateofestablishment"
            id="dateofestablishment"
            value={formValues.dateofestablishment}
            onChange={handleChange}
            className={formErrors.dateofestablishment && "input-error"}
          /><br></br>
          {formErrors.dateofestablishment && (
            <span className="error">{formErrors.dateofestablishment}</span>
          )}
        </div>
           
        
          <div class="form-group col-md-3">
           <label htmlfor="mobilenumber">Mobile Number*</label>
            <input 
            type="text"
            name="mobilenumber" 
            id="mobilenumber"
            value={formValues.mobilenumber} 
            onChange={handleChange} 
            className={formErrors.mobilenumber && "input-error"}
            Placeholder="+91" required/>
             {formErrors.mobilenumber && (
            <span className="error">{formErrors.mobilenumber}</span>
          )}
          </div>
        
        <button type="submit"  class="form-group col-md-2" >Validate</button>
      </form>

    </div>
  );
};

export default Form;
