import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>ဒါကပုံတွေ</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='ရေတံကွန်ကိုလူတစ်ယောက်ကကြည့်နေတဲ့ပုံ'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='ပင်လယ်နဲ့ကျွန်းသုံးခု စပိဘုတ် ၂စီး လျောက်ပက်မောင်းနေတဲ့ပုံ'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='ပင်လယ် မဲမဲ ကြီးမှာ လှေဖြူတစ်စီးလျှောက်ပက်မောင်းနေတဲ့ပုံ'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='ကျွန်းပါ်မှာ တင်ထားတဲ့ ဂိမ်းဘောလုံးကွင်း'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='ဆာဟာရ ထဲမှာလူတွေလားစီး (အဲ လားဆွဲ)'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
