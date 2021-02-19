import './Styles/styles.scss';
import React, { Component } from 'react';
import { Main } from './Components/Main';
import { SetFavKeysToLocalStorage, SetFavSportsToLocalStorage } from './Components/01Functions/SetToLocalStorage';
import { GetFavKeysFromLocalStorage, GetFavSportsFromLocalStorage} from './Components/01Functions/GetFromLocalStorage';
import { sportArray } from "./Components/01Functions/SportArray";


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: (GetFavKeysFromLocalStorage() ? GetFavKeysFromLocalStorage() : [] ), 
      selectedSportArray: (GetFavSportsFromLocalStorage() ? GetFavSportsFromLocalStorage() : []),
      sportArray: sportArray,
      arrowStatus: [],
      secondArrowStatus: [],
      liveArrowStatus: false,
      arrowStatusForFavorites: [],
      secondArrowStatusForFavorites: [],
    }
  }
  
  
  /*          Functions for "Sports" Menu          */
  
  setSelectedSportKeyToState = e => {
    let elementKey = e.target.id;
    let selectedKeys;

    if(this.state.selectedKeys.indexOf(elementKey) === -1){
        selectedKeys = this.state.selectedKeys.concat([elementKey]);
    } else if (this.state.selectedKeys.indexOf(elementKey) !== -1){
        selectedKeys = this.state.selectedKeys.filter(elem => {return elem !== elementKey});
    } 
    
    this.setState({
      selectedKeys,
      selectedSportArray: this.getSelectedSports(selectedKeys)
    });
  }
  
  getSelectedSports = (selectedKey) => {
    return this.state.sportArray.filter(s => selectedKey.includes(s.key))
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
    let secondArrowStatus = this.state.secondArrowStatus.indexOf(arrow) === -1 
      ? this.state.secondArrowStatus.concat([arrow]) 
      : this.state.secondArrowStatus.filter(elem => {return elem !== arrow})

    this.setState({
      secondArrowStatus
    })
  }

  LiveArrowStatusToState = () => {
    this.setState({
      liveArrowStatus: !this.state.liveArrowStatus
    })

  }

  /*          Functions for "Favorites" Menu          */

  setArrowStatusForFavoritesToState = e => {
    let arrow = e.target.id;

    let arrowStatusForFavorites = this.state.arrowStatusForFavorites.indexOf(arrow) === -1 
      ? this.state.arrowStatusForFavorites.concat([arrow]) 
      : this.state.arrowStatusForFavorites.filter(elem => {return elem !== arrow});
    
    this.setState({
      arrowStatusForFavorites
    });
  }

  setArrowStatusForFavoritesToStateSecondMenu = e => {
    let arrow = e.target.id;

    let secondArrowStatusForFavorites = this.state.secondArrowStatusForFavorites.indexOf(arrow) === -1 
      ? this.state.secondArrowStatusForFavorites.concat([arrow]) 
      : this.state.secondArrowStatusForFavorites.filter(elem => {return elem !== arrow});
    
    this.setState({
      secondArrowStatusForFavorites
    });
  }  

  deleteItemFromFavorites = e => {
    let elementKey = e.target.id;
    let selectedKeys;

    if (this.state.selectedKeys.indexOf(elementKey) !== -1){
        selectedKeys = this.state.selectedKeys.filter(elem => {return elem !== elementKey});
    } 
    
    this.setState({
      selectedKeys,
      selectedSportArray: this.getSelectedSports(selectedKeys)
    });

    

    // SetFavKeysToLocalStorage(LocalStorage)

    // console.log("delete",selectedElement, localStorage.map(item => item))

  }
  
  componentDidUpdate() {  
    SetFavKeysToLocalStorage(this.state.selectedKeys);
    SetFavSportsToLocalStorage(this.state.selectedSportArray)  
  }

  render() {
    console.log( 'state', this.state)
    return (
      <Main 

        LiveArrowStatusToState = {this.LiveArrowStatusToState} 
        LiveArrowStatusResult = {this.state.liveArrowStatus} 
        
        setArrowStatusToStateSecondMenu = {this.setArrowStatusToStateSecondMenu} 
        ArrowResultSecondMenu = {this.state.secondArrowStatus} 

        setArrowStatusToState={this.setArrowStatusToState} 
        ArrowResult = {this.state.arrowStatus} 

        sportArray = {this.state.sportArray} 

        SetSelectedSportKeyToState = {this.setSelectedSportKeyToState}
        SetClassNameForStars = {this.state.selectedKeys} 
        
        selectedSportArray = {this.state.selectedSportArray}

        setArrowStatusForFavoritesToState = {this.setArrowStatusForFavoritesToState}
        ArrowStatusResultForFavorites = {this.state.arrowStatusForFavorites}

        setArrowStatusForFavoritesToStateSecondMenu={this.setArrowStatusForFavoritesToStateSecondMenu} 
        ArrowStatusResultForFavoritesSecondMenu = {this.state.secondArrowStatusForFavorites}

        DeleteItemFromFavorites={this.deleteItemFromFavorites}
      />
    );
  }
}

export default App;