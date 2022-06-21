import React from 'react';
import { useState } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert';
import * as Api from 'services/Api';
import { isLoggedin, setToken } from '../../redux/actions/userAction.js';
// import { bindActionCreators } from 'redux';
// import * as actionCreators from 'redux/actions/userAction';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();
  // const { isLoggedin, setToken } = bindActionCreators(actionCreators, dispatch);

  //state from auth reducer
  const { isAuthenticated } = useSelector((state) => state.auth);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const cred = {
      email,
      password,
    };

    try {
      let response = await Api.login(cred);
      console.log(response);
      const token = response.jwt;

      localStorage.setItem('token', token);

      dispatch(isLoggedin(cred));
      dispatch(setToken(token));

      // isLoggedin(cred);
      // setToken(token);

      // console.log(cred);

      navigate('/');
      alert.success('login sucess');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="flex flex-col justify-center items-center py-16">
        <div className="flex ">
          <div className="flex justify-center items-center px-4">
            <FaSignInAlt size={30} />
          </div>

          <h1 className="text-4xl font-mono font-semibold">Log In</h1>
        </div>
        <form className="flex flex-col py-2">
          {isAuthenticated ? (
            <div>SUCESSFULLY SUBMITTED </div>
          ) : (
            console.log('not authenticated')
          )}
          <div className="pt-3">
            <input
              type="email"
              className="w-[350px] shadow appearance-none border-2 rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-purple-500 focus:shadow-outline"
              id="email"
              name="email"
              placeholder="Enter your Email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="pt-3">
            <input
              type="password"
              className="shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-purple-500 focus:shadow-outline"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={onChange}
            />
          </div>

          <div className="pt-3">
            <button
              type="submit"
              onClick={onSubmit}
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
