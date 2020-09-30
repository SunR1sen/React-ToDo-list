import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import 'antd/dist/antd.css';

const { Search } = Input;

function useInputValue(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: event => setValue(event.target.value)
    },
    clear: () => setValue(''),
    value: () => value
  }
}

function AddTodo({onCreate}) {
  const input = useInputValue('')

  function submitHandler(event) {

    if (input.value().trim()) {
      onCreate(input.value());
      input.clear()
      // setValue('');
    }
  }

  return (
      <Search
          className='todo_input'
          placeholder="To do text"
          enterButton="Add todo"
          size="large"
          onSearch={submitHandler}
          {...input.bind}
      />
  )
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired
}

export default AddTodo;