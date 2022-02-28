import React from "react";
import { useSelector ,useDispatch} from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { authControl } from "./loginSlice";



export default function Login() {
  const dispatch=useDispatch();
  const userIn = useSelector((state) => state.login.userIn);

  return (
    <div className="container " style={{ backgroundColor: "#F8F9FA" }}>
      <div
        className="m-auto mt-3 p-2"
        style={{ width: "60%", maxWidth: "350px" }}
      >
        <div className="header mb-3">
          <img
            src="https://picsum.photos/200/300?random=2"
            style={{ width: "100%" }}
          />
        </div>
        <Formik
       initialValues={{ email: '', password: '' }}
       validationSchema={Yup.object({
         email:Yup.string().required("Lütfen Email Alanını Boş Geçmeyiniz."),
         password:Yup.string().required("Lütfen Şifre Alanını Boş Geçmeyiniz")
       })}
       onSubmit={(values, { resetForm,setSubmitting }) => {
          if(values.email=== userIn.email && values.password===userIn.password){
            dispatch((authControl()))
            console.log(userIn.auth)
          }
          else{
            resetForm();
            alert("Kullanıcı Adı Veya Şifre Hatalıdır.")
          }
       }}
     >
       {({
         values,
         errors,
         touched,
         dirty,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
           <input
           className="form-control mb-2"
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
             placeholder="Emailinizi Giriniz"
           />
          {
             errors.email && touched.email && (
               <div className="input-feedback mb-2">
                 {errors.email}
               </div>
             )
           }
           <input
           className="form-control mb-2"
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
             placeholder="Şifrenizi Giriniz"
           />
           {
             errors.password && touched.password && (
               <div className="input-feedback mb-2">
                 {errors.password}
               </div>
             )
           }
           <button className="btn btn-success" type="submit" disabled={isSubmitting}>
            Giriş Yap
           </button>
         </form>
       )}
     </Formik>
      </div>
    </div>
  );
}
