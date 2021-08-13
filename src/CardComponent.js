import React from 'react';
import './home.css';

function CardComponent(props) {

// send props in following order: project title, date, tag1, tag2, image link, card num ||

    let projTitle = props.projTitle;
    let date = props.projDate;
    let imgLink = props.imgLink;
    let tags1 = props.tags1;
    let tags2 = props.tags2;
    let cardNum = props.cardNum;
    let url = props.url;
    

    let cardId = "card"+cardNum;
    let titleId = "card"+cardNum+"title";
    let headerID = "card"+cardNum+"Header";
    let imageID = "card"+cardNum+"img";
    let tagsID = "card"+cardNum+"tags";
    let tag1ID = "card"+cardNum+"tag1";
    let tag2ID = "card"+cardNum+"tag2";

    // if(props.cardNum=='1')
    //     var url='https://github.com/rijulsarji/Voice-Assistant-using-gTTS-and-Spreech-Recognition'
    // else if(props.cardNum=='2')
    //     var url='https://github.com/rijulsarji/2D-Shooting-Game-Using-PyGame'
    // else if(props.cardNum=='3')
    //     var url = "https://github.com/rijulsarji/Hackathon-Moody-AI";
    // else if(props.cardNum=='4')
    //     var url = "https://github.com/rijulsarji/Cindy-the-BMI-Calculator";
    // else if(props.cardNum=='5')
    //     var url = "https://github.com/rijulsarji/To-do-list";
    // else if(props.cardNum=='6')
    //     var url = "https://github.com/rijulsarji/Granny-s-Advice";

    function urlFunc() {
        window.open(url);
    }
    
    return (
        <div className="card" /*onclick link to project id="card2"*/ id={cardId} onClick={urlFunc}>
            <header className="article-header" id={headerID}>
                <div>
                    <div className="category-title" id={titleId}>
                        <span className="projname">{projTitle}</span>
                        <br />
                        <span className="date">{date}</span>
                    </div>
                </div>
            </header>
            
            <div id="pygameImg">
                <img src={imgLink} alt="" id={imageID}/>
            </div>

            <div className="tags" id={tagsID}>

                <div id={tag1ID}>{tags1}</div>
                <div id={tag2ID}>{tags2}</div>

            </div>
        </div>
    )
}

export default CardComponent;