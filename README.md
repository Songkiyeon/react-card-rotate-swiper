# React Card Rotate Swiper
a react component to swipe element using rotate

## Demo
![ezgif com-gif-maker](https://user-images.githubusercontent.com/19369750/137274861-8f6c252a-02e1-4203-bedb-e9f317d2a96b.gif)



## Installation

```
npm install --save react-card-rotate-swiper
```

## Usage
```
import { CardSwiper } from "react-card-rotate-swiper";

//...

function App() {

  const handleSwipe = (d) => {
    //fill this your callback
  };
  
  return (
    <div className="App">
      <CardSwiper
        onSwipe={handleSwipe}
        className={"swiper"}
        contents={
          //fill this your element
          <Inner>
            <img src={img1} alt="img"></img>
          </Inner>
        }
      />
    </div>
  );
}
```

## Props

### 1. contents
- required
- any

This prop means the contents you want to show.

### 2. onSwipe
- optional
- Function

If you want to do something after card swiping, then fill in this props like callback function

### 3. className
- optional
- string

If you want to give the classname of some style, this props do this

### 4. detectingSize
- optional
- number
- default : 100

The prop means the pixels to recognize wether you are swiping card <br/>
If you swipe more than detectingSize pixels, then the component will think about direction<br/>

First component give priority to "left" and "right". <br/>
And after that, give next priority to "up" and "down" 

### 5. throwLimit
- optional
- number
- default : 3000

This prop means the point of card disappearance <br/>
If you give some number bigger than 3000, then the card will be throwed farther and faster
