import React, { Component } from 'react';
import styled from 'styled-components';
import Layouts from './Layouts';
import Colors from '../Services/colors.js'

function AuthInput(props){

  return (
    <div>
      password
      <input type="text"/>
    </div>
  );
}

export default AuthInput;