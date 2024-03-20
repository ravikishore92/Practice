import './Course1.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
//#0f5298
export default function Course1()
{
     return (
        <>
        <div>
           
            <div className='section'>
                <div className='subject'>
                    <div className='smallbox'></div>
                    <img src="logo192.png" className='image' />
                    <div className='sub1'>React Js</div>
                    <div className='view'>View All<ArrowForwardIosIcon style={{height:'17px',fontWeight:'700',marginLeft:'0px'}}></ArrowForwardIosIcon> </div>
                </div>
                <div style={{display:'flex',gap:'20px'}} >
                    <div className='card'>
                        <img src="logo192.png" className='image1' />
                        <div className='subjectname'>ReactJs - 1</div>
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
                        <img src="logo192.png" className='image1' />
                        <div className='subjectname'>ReactJS - 2</div>
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
                        <img src="logo192.png" className='image1' />
                        <div className='subjectname'>ReactJs - 3</div>
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