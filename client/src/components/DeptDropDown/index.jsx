import { useState } from "react";

const options = [
  { value: "Marketing", label: "Marketing" },
  { value: "Sales", label: "Sales" },
  { value: "Human Resources", label: "Human Resources" }]

export default changeHandler = event => {
  this.setState({ dept_id: event ? event.value : '' });
};

<select
  name="dept_id"
  value={options.find(item => item.value === dept_id)}
  onChange={this.changeHandler}
  options={options}></select>

