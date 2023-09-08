import React, { useState } from 'react'
import styles from "./Left.module.css"
import { BsThreeDotsVertical } from "react-icons/bs"
import { leftData, leftDataExpanded, subHeaderBottomItems } from '../../data/Data'
import { MdExpandMore, MdExpandLess } from "react-icons/md"
import { HiArrowNarrowRight } from "react-icons/hi"
import { SportState } from '../../SportContext'
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import { useLocation, useNavigate } from "react-router-dom";

const Left = () => {
    const [leftSideData, setLeftSidedata] = useState(leftDataExpanded)
    const navigate = useNavigate();
    const location = useLocation();
    const { setSportId, sportId, highlights, sports, setMarketId , marketId } = SportState();
    // const handleSeriesId = (data)=>{
    //     if((data.competition.id===seriesId)){
    //         setSeriesId(null)
    //     }
    //     else{
    //         setSeriesId(data.competition.id)
    //     }
    // }
    const handleSportId = (subHeaderItem) => {
        setSportId(subHeaderItem.id)

        if (subHeaderItem.url) {
            if(subHeaderItem.url==="/"){
                navigate("/crickets")
            }
            else{
                navigate(`${subHeaderItem.url}`)
            }
            
        }
    }
    const getMarketData = (data) => {
        setMarketId(data.marketID);
        navigate("/crickets/1")
    }
    return (
        <div className={styles.left}>
            <div className={styles.leftHeading}>
                <BsThreeDotsVertical />
                <p style={{ fontSize: "14px", fontWeight: "700" }}>Sports</p>
            </div>
            <div className="">
                {
                    (sportId === "0" || location.pathname==="/" || location.pathname==="/in-play" || location.pathname==="/multi-markets") ?
                        subHeaderBottomItems.map(data => {
                            return <div key={data.title} onClick={() => handleSportId(data)}>
                                <div className={styles.leftItem} style={{ borderBottom: "1px solid #d2d6e2", color: "#223869" }}>
                                    <p>{data.title}</p>
                                    <BsFillArrowRightCircleFill />
                                </div>


                            </div>
                        })
                        :
                        highlights.map(data => {
                            return <div key={data.name} onClick={() => getMarketData(data)} style={{backgroundColor:(marketId===data.marketID?"#d2d6e2":"white")}}>
                                <div className={styles.leftItem} style={{ borderBottom: "1px solid #d2d6e2", color: "#223869" }}>
                                    <p>{data.name}</p>
                                    <BsFillArrowRightCircleFill />
                                </div>


                            </div>
                        })
                }
                {/* {series.map(data=>{
                    return <div   key={data.competition.name}>
                        <div className={styles.leftItem} style={{borderBottom:"1px solid #d2d6e2" , color:"#223869"}}>
                        <p>{data.competition.name}</p>
                        {(data.competition.id===seriesId)?<MdExpandLess onClick={()=>handleSeriesId(data)}/>:<MdExpandMore   onClick={()=>handleSeriesId(data)}/>}
                        </div>
                        {(data.competition.id===seriesId)?matches.map(subData=>{
                            return <div className={styles.leftSubItem} key={subData.event.name}>
                                <HiArrowNarrowRight style={{marginRight:"10px" , width:"20px" , fontSize:"16px" , fontWeight:"800"}}/>
                                <p>{subData.event.name}</p>
                            </div>
                        }):null}

                    </div>
                })} */}


            </div>
        </div>
    )
}

export default Left