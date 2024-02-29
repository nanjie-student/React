import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import ListViews from './components/ListView';
import MyComponent from './components/MyComponent';


/**
 * 两个参数
 * 1.组件/视图结构
 * 2.要渲染的容器位置
 */


//componet的概念
class App extends React.Component{

    //method: show
    show(){
        return <div> Show something...</div>

    }
    //method : hide
    hide(){
        return <div>Hide everything...</div>
    }
    //方法后边括号里是接收的值
    showAndHide(flag){
        if(flag){
            return this.hide();
        }else{
            return this.show();
        }
    }
    //渲染方法
    render(){
        //string
        const log = 'test text messages '
        //list
        const names =["Apple",'Banana','Strawberry']

        //条件渲染
        const flag = false;
        
        //Rendering lists
        const banner =[
            { title: 'Hawaii', 
                content: "Hawaii is an island state of the United States, in the Pacific Ocean about 2,000 miles (3,200 km) southwest of the U.S. mainland. It is the only state not on the North American mainland, the only state that is an archipelago, and the only state in the tropics.",
                img: "https://unsplash.com/photos/aerial-view-of-green-and-brown-mountains-and-lake-fd1cQ3mmBTE" 
            },
            { title: 'Tokyo', 
                content: "Tokyo,officially the Tokyo Metropolis (東京都, Tōkyō-to), is the capital of Japan and one of the most populous cities in the world with a population of over 14 million residents as of 2023.[9] The Tokyo metropolitan area, which includes Tokyo and nearby prefectures, is the world's most-populous metropolitan area with 40.8 million residents as of 2023,[10] and is the second-largest metropolitan economy in the world after New York, with a 2022 gross metropolitan product estimated at US$2.08 trillion (US$51,124 per capita).[11]Hawaii is an island state of the United States, in the Pacific Ocean about 2,000 miles (3,200 km) southwest of the U.S. mainland. It is the only state not on the North American mainland, the only state that is an archipelago, and the only state in the tropics.",
                img: "https://unsplash.com/photos/photo-of-people-crossing-road-4HG5hlhmZg8" 
            },
            { title: 'Ireland', 
                content: "Ulster-Scots: Airlann [ˈɑːrlən]) is an island in the North Atlantic Ocean, in north-western Europe. It is separated from Great Britain to its east by the North Channel, the Irish Sea, and St George's Channel. Ireland is the second-largest island of the British Isles, the third-largest in Europe, and the twentieth-largest in the world.",
                img: "https://unsplash.com/photos/rock-formation-beside-sea-under-white-sky-ezJhm4xrHAM" 
            },
        ]



        //返回视图
        return(
            <div>
                <Header title= "project1" data ={ names}/>
                <Header title= "project2"/>
                <ListViews/>
                <MyComponent/>
                <p>HelloReact: {log}</p>
                <ul>
                    {
                    names.map(function(ele,index){
                        return <li key = {index.toString()}>{ele}</li>
                    })}
                </ul>
                { /** jsx garmarly */}
                {/** conditional rendering*/}
                {flag ? this.show(): this.hide()}
                {
                this.showAndHide()
                }
                <div>
                    <ul>
                        {
                            banner.map((ele,index) =>{
                                return(
                                
                                <li key = {index.toString()}>
                                    <h3>{ele.title}</h3>
                                    <img src= {ele.img}/>
                                    <p>{ele.content}</p>
                                </li>
                                ) 
                            })
                            
                        }
                    </ul>
                </div>

            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);