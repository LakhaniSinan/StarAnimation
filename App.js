import CustomizedStarRating from 'react-native-customized-star-rating';
import React,{Component}  from 'react'
import {Animated,Easing,View} from 'react-native'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scaleAnimation: new Animated.Value(1),
            filledStar: 0,
        }
    }

    clickStar(j) {
        this.setState({ filledStar: j })
    }

    render() {
        return (
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <CustomizedStarRating
                noOfStars={'5'}
                starRowStyle={styles.starRowStyle}
                starSizeStyle={styles.starSizeStyle}
                selectedStar={this.state.filledStar}
                starAnimationScale={1.2}
                animationDuration={400}
                easingType={Easing.ease}
                emptyStarImagePath={require('./images/empty.png')}
                filledStarImagePath={require('./images/star.png')}
                onClickFunc={(i) => this.clickStar(i)}
            />
            </View>
        );
    }
}

const styles={
  starRowStyle:{
    flexDirection:'row'
  },
  starSizeStyle:{
     height:30,width:30
  }
}

export default App