import styled from "styled-components";

export const TaskArea = styled.div`
  .task-list {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  .input-todo {
    margin-top: 10px;
    margin-left: 10px;
    .btn-add {
      margin-top: 5px;
    }
    input {
      border-radius: 10px;
      height: 35px;
      padding: 5px;
    }
    button {
      border-radius: 10px;
      padding: 5px;
      font-size: 1em;
    }
  }
  main {
    min-width: 100%;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.3em;
    text-decoration: underline;
    margin: 1em;
    height: 5vh;
    background-color: #c8adc0;
    border-radius: 5px;
    padding: 5px;
  }
  .check-task,
  .btn-remove,
  .checkbox-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;
