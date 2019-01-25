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
interface IProps {
  compiler: string,
  framework: string,
  bundler: string
}
export class Hello extends React.Component<IProps, {}> {
  render() {
    return <h1>This is a {this.props.framework} application using    {this.props.compiler} with {this.props.bundler}</h1>
  }
}




