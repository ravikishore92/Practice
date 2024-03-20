import './CourseList.css';
import LockOpenIcon from '@mui/icons-material/LockOpen';


export default function CourseList()
{      const arr=[1,2,3,4,5,6,7,8,9,10];
        return (
            <>
            <div className='body'>
                <div className='title'>
                    <img src="java2.webp" className='image1' />
                    <div>
                        <div className='sub'>Java Programming Mcqs Mock Tests</div>
                        <div className='subtitle'>10 Mock Tests</div>
                    </div>
                </div>
                
                    <div className='cardlist'>
                        { arr.map((item, index) => (
                        <div className='card' key={index}>
                            {(index<8) ?
                            <div className='cardsub'>Java Mock Test - {item}</div>:<div className='cardsub'>Java Grand Test - {item}</div>
                            }
                            <div className='status'>Available for Free</div>
                            <div className='smallbox'>
                                <div className="flex" style={{marginTop:'30px'}}>
                                    <div className='q1'>Questions</div>
                                    <div className='value'>50</div>
                                </div>
                                <div className="flex">
                                    <div className='q1'>Time</div>
                                    <div className='value'>75(mins)</div>
                                </div>
                                <div className="flex">
                                    <div className='q1'>Maximum Marks</div>
                                    <div className='value'>100</div>
                                </div>
                            </div>
                            <hr className='hr'/>
                            {(index>=5) ? 
                            <div className='unlockbtn'>
                                <div className='lockname'>Unlock</div>
                                <LockOpenIcon style={{height:'15px',marginTop:'5px'}}></LockOpenIcon>
                            </div> : <div className='unlockbtn'>
                                <div className='lockname' style={{marginLeft:'100px'}}>Free</div>
                                
                            </div>}
                        </div>
                        ))}
                </div>
            </div>
            
            </>
        );
}