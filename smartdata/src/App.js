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
      selectedKey: (GetKeyFromLocalStorage() ? GetKeyFromLocalStorage() : [] ), 
      fullSelectedSportElement: [],
      fullSportArray: FullSportArray,
      arrowStatus: [],
      arrowStatusSecond: [],
      liveArrowStatus: false,
    }
  }

  
  SetSelectedSportKeyToState = e => {
    
    let elementKey = e.target.id;
    
    if(this.state.selectedKey.indexOf(elementKey) === -1){
      this.setState({
        selectedKey: this.state.selectedKey.concat([elementKey]),
        // fullSelectedSportElement: this.CompareArrays()
      })
      
    } else if (this.state.selectedKey.indexOf(elementKey) !== -1){
      
      this.setState({
        selectedKey: this.state.selectedKey.filter(elem => {return elem !== elementKey}),
        // fullSelectedSportElement: this.CompareArrays()
      })
    }    
  }
  
  CompareArrays = () => {
    let selectedObj = [] ;

    this.state.fullSportArray.map(item =>
      this.state.selectedKey.map(item2 => {
        if(item.key === item2){
          selectedObj.push(item)
        }

        return selectedObj
      })
    )

    return selectedObj
  }

  setArrowStatusToState = e => {
    let arrow = e.target.id

    this.setState({
      arrowStatus: this.state.arrowStatus.indexOf(arrow) === -1 ? this.state.arrowStatus.concat([arrow]) : this.state.arrowStatus.filter(elem => {return elem !== arrow})
    })
    
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
    SetItemToLocalStorage(this.state.selectedKey);
  }

  render() {
    console.log(this.state, 'state')
    return (
      <Main LiveArrowStatusResult={this.state.liveArrowStatus} LiveArrowStatusToState={this.LiveArrowStatusToState} ArrowResultSecondMenu={this.state.arrowStatusSecond} setArrowStatusToStateSecondMenu={this.setArrowStatusToStateSecondMenu} ArrowResult={this.state.arrowStatus} setArrowStatusToState={this.setArrowStatusToState} FullSportArray={this.state.fullSportArray} SetClassNameForStars={this.state.selectedKey} SetSelectedSportKeyToState={this.SetSelectedSportKeyToState} />
    );
  }
}

export default App;