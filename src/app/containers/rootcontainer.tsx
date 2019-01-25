/*
 * Created by charlotte.wang(wangchao@gagogroup.com) on 2019/01/25
 * Last Modified by charlotte.wang on 2019/01/25
 * Copyright (c) 2019 Gago Ltd.
 * 
 * HISTORY:
 * Date      	By       	Comments
 * ----------	---------	-------------------------------------------------------
 */
import * as React from 'react';
import { Hello } from "../components/hello";
import { hot } from "react-hot-loader/root";

const RootContainer = () => (
  <Hello compiler="Typescript" framework="React" bundler="Webpack" />
);

export default hot(RootContainer);


