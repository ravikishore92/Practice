import './Courses.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
//#0f5298
export default function Courses()
{
     return (
        <>
        <div>
            <div className='title'>All Test Series</div>
            <div className='title1'>Click to view Test Series and mock tests for all groups</div>
            <div className='section'>
                <div className='subject'>
                    <div className='smallbox'></div>
                    <img src="java2.webp" className='image' />
                    <div className='sub1'>Java Core</div>
                    <div className='view'>View All<ArrowForwardIosIcon style={{height:'17px',fontWeight:'700',marginLeft:'0px'}}></ArrowForwardIosIcon> </div>
                </div>
                <div style={{display:'flex',gap:'20px'}} >
                    <div className='card'>
                        <img src="java2.webp" className='image1' />
                        <div className='subjectname'>Java Core - 1</div>
                         <div className="flex" style={{marginTop:'50px'}}>
                            <div style={{fontWeight:'900'}}>.</div>
                            <div className='q1'>Questions</div>
                            <div className='value'>50</div>
                         </div>
                         <div className="flex">
                            <div style={{fontWeight:'900'}}>.</div>
                            <div className='q1'>Time(mins)</div>
                            <div className='value'>75</div>
                         </div>
                         <div className="flex">
                            <div style={{fontWeight:'900'}}>.</div>
                            <div className='q1'>Maximum Marks</div>
                            <div className='value'>100</div>
                         </div>
                         <button className='btn'>ATTEMPT NOW</button>
                    </div>
                    <div className='card'>
                        <img src="java2.webp" className='image1' />
                        <div className='subjectname'>Java Core - 2</div>
                         <div className="flex" style={{marginTop:'50px'}}>
                            <div style={{fontWeight:'900'}}>.</div>
                            <div className='q1'>Questions</div>
                            <div className='value'>50</div>
                         </div>
                         <div className="flex">
                            <div style={{fontWeight:'900'}}>.</div>
                            <div className='q1'>Time(mins)</div>
                            <div className='value'>75</div>
                         </div>
                         <div className="flex">
                            <div style={{fontWeight:'900'}}>.</div>
                            <div className='q1'>Maximum Marks</div>
                            <div className='value'>100</div>
                         </div>
                         <button className='btn'>ATTEMPT NOW</button>
                    </div>
                    <div className='card'>
                        <img src="java2.webp" className='image1' />
                        <div className='subjectname'>Java Core - 3</div>
                         <div className="flex" style={{marginTop:'50px'}}>
                            <div style={{fontWeight:'900'}}>.</div>
                            <div className='q1'>Questions</div>
                            <div className='value'>50</div>
                         </div>
                         <div className="flex">
                            <div style={{fontWeight:'900'}}>.</div>
                            <div className='q1'>Time(mins)</div>
                            <div className='value'>75</div>
                         </div>
                         <div className="flex">
                            <div style={{fontWeight:'900'}}>.</div>
                            <div className='q1'>Maximum Marks</div>
                            <div className='value'>100</div>
                         </div>
                         <button className='btn'>ATTEMPT NOW</button>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}