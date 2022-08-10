import React from 'react';
import SwiftSlider from 'react-swift-slider'
import imagemTeste from './IMG/spotifySite'

export default function Experience ( ) {
    const data =  [
        {'id':'1',imagemTeste},
        {'id':'2','src':'https://drive.google.com/file/d/15S1aCy2iqU3c-1IL91_SBamKTRjj_E0-/view?usp=sharing'},
        {'id':'3','src':'https://drive.google.com/file/d/1BHyDJABMNEXmrSrmmqo69msC7_k9UJFV/view?usp=sharing'}
      ];
    
          return (
            <SwiftSlider data = {data}/>
          );
      }