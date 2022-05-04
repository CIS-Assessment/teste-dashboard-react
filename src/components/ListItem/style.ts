import styled from "styled-components";

type ContainerProps ={
    done: boolean;
}

export const Container = styled.div(({ done }:ContainerProps ) => (
    `
    display: flex;
    background-color: #20212C;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;

    input{
        width: 25px;
        height: 25px;
        margin-left: 5px;
    }
    #inp{
        border: 0px;
        width: 200px;
        background: #FFF;
        outline: 0;
        font-size: 18px;
        flex: 1;
    }
    #edit{
        position:fixed;
        display:flex;
        background-color: #20212C;
        color: #fff;
        margin-left: 49%;
    }
    #remove{
        position: fixed;
        background-color: #20212C;
        margin-left: 53%;
        font-size: 20px;
        color: #ff0000;
        height: 24px;
        width: 24px;
    
    }
    
    label{
        color: #CCC;
        text-decoration: ${done ? 'line-through' : 'initial'};
        margin-left: 10px;
    }
`
))