import * as React from 'react';

//Components
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Radium, { StyleRoot } from 'radium';

//Images
import img1 from '../../src/Images/movie6.jpg'
import img2 from '../../src/Images/movie2.jpg'
import img3 from '../../src/Images/movie8.jpg'
import img4 from '../../src/Images/movie4.jpg'
import img5 from '../../src/Images/movie5.jpg'
import img6 from '../../src/Images/movie1.jpg'
import img7 from '../../src/Images/movie7.jpg'
import img8 from '../../src/Images/movie3.jpg'
import img9 from '../../src/Images/movie9.jpg'

const itemData = [
  {
    img: img1,
    title: 'Breakfast',
  },
  {
    img: img2 ,
    title: 'Burger',
  },
  {
    img: img3,
    title: 'Camera',
  },
  {
    img: img4 ,
    title: 'Coffee',
  },
  {
    img: img5,
    title: 'Hats',
  },
  {
    img: img6 ,
    title: 'Honey',
  },
  {
    img: img7 ,
    title: 'Basketball',
  },
  {
    img: img8,
    title: 'Fern',
  },
  {
    img: img9,
    title: 'Mushrooms',
  },
];

const StandardImageList = () => {

  const style = {
      // Adding media query..
      '@media (max-width: 500px)': {
        display: 'none',
      },
    };

  return (
    <StyleRoot>
    <ImageList  sx={{ marginRight:'20px', width: 500, height: 500, overflow: 'hidden', marginTop:'0px',  '@media (max-width: 500px)': {
        display: 'none',
      }, }} 
    cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </StyleRoot>
  );
}

export default Radium(StandardImageList);