import React from "react";
import { connect } from "react-redux";


const mapStateToProps = state => ({
    count: state
})

const mapDispatchToProps = dispatch => ({
    addAction: () => dispatch({ type:'ADD'}),
    addTen: () => dispatch({type: 'ADD_TEN'}),
    removeAction: () => dispatch({type:'REMOVE'}),
    removeTen: () => dispatch({type:'REMOVE_TEN'}),
    resetAction: () => dispatch({type:'RESET'})
});
 
const countComponent = ({ count, addAction, addTen, removeAction, removeTen, resetAction }) => (
    <div>
        <p>{count}</p>
        <button onClick={addAction}>+1</button>
        <button onClick={removeAction}>-1</button>
        <button onClick={addTen}>+10</button>
        <button onClick={removeTen}>-10</button>
        <button onClick={resetAction}>reset</button>
    </div>
);
 
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(countComponent);

