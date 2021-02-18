import './Styles/styles.scss';
import React, { Component } from 'react';
import { Main } from './Components/Main';
import { SetItemToLocalStorage } from './Components/Functions/SetToLocalStorage';
import { GetKeyFromLocalStorage} from './Components/Functions/GetFromLocalStorage';
import { FullSportArray } from "./Components/Functions/SportArray";


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: (GetKeyFromLocalStorage() ? GetKeyFromLocalStorage() : [] ), 
      fullSelectedSportElement: [],
      fullSportArray: FullSportArray,
      arrowStatus: [],
      arrowStatusSecond: [],
      liveArrowStatus: false,
    }
  }
  
  SetSelectedSportKeyToState = e => {
    let elementKey = e.target.id;
    let selectedKeys;

    if(this.state.selectedKeys.indexOf(elementKey) === -1){
        selectedKeys = this.state.selectedKeys.concat([elementKey]);
    } else if (this.state.selectedKeys.indexOf(elementKey) !== -1){
        selectedKeys = this.state.selectedKeys.filter(elem => {return elem !== elementKey});
    } 

    console.log('click', selectedKeys, this.state.fullSportArray)
    
    this.setState({
      selectedKeys: selectedKeys,
      fullSelectedSportElement: this.getSelectedSports(selectedKeys)
    });
  }
  
  getSelectedSports = (selectedKeys) => {
    return this.state.fullSportArray.filter(s => selectedKeys.includes(s))
  }

  setArrowStatusToState = e => {
    let arrow = e.target.id
    let arrowStatus = this.state.arrowStatus.indexOf(arrow) === -1 
      ? this.state.arrowStatus.concat([arrow]) 
      : this.state.arrowStatus.filter(elem => {return elem !== arrow});
    
    this.setState({
      arrowStatus
    });
  }

  setArrowStatusToStateSecondMenu = e => {
    let arrow = e.target.id

    this.setState({
      arrowStatusSecond: this.state.arrowStatusSecond.indexOf(arrow) === -1 ? this.state.arrowStatusSecond.concat([arrow]) : this.state.arrowStatusSecond.filter(elem => {return elem !== arrow})
    })
  }

  LiveArrowStatusToState = () => {
    this.setState({
      liveArrowStatus: !this.state.liveArrowStatus
    })

  }
  
  componentDidUpdate() {  
    SetItemToLocalStorage(this.state.selectedKeys);
  }

  render() {
    console.log( 'state', this.state)
    return (
      <Main 
        LiveArrowStatusResult={this.state.liveArrowStatus} 
        LiveArrowStatusToState={this.LiveArrowStatusToState} 
        ArrowResultSecondMenu={this.state.arrowStatusSecond} 
        setArrowStatusToStateSecondMenu={this.setArrowStatusToStateSecondMenu} 
        ArrowResult={this.state.arrowStatus} 
        setArrowStatusToState={this.setArrowStatusToState} 
        FullSportArray={this.state.fullSportArray} 
        SetClassNameForStars={this.state.selectedKeys} 
        SetSelectedSportKeyToState={this.SetSelectedSportKeyToState} />
    );
  }
}

export default App;