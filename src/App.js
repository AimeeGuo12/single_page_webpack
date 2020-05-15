import React from 'react';
// import {hot} from 'react-hot-loader/root';
// import './app.css';
// import './app.scss';
// import styles from './app.scss';
import Btn from './components/Btn';
import ReactDom from 'react-dom';
// import pic_1 from './assets/01.jpg';
// import pic_2 from './assets/02.jpg';
function App() {
    return (
        <div className='title'>
        {/* // <div className={styles.title}> */}

            hello react
            {/* <img src={pic_1} alt="" style={{width: 100, height: 100}}/>
            <img src={pic_2} alt="" style={{width: 100, height: 100}}/> */}
            <Btn></Btn>
        </div>
    )
}
// export default hot(App);
export default App;