import React from 'react'
import FlipMove from 'react-flip-move';
import ThumbNail from './ThumbNail';

////////
function Results({results}) {
    console.log('results', results)
    return (
        <div className={'flex justify-center items-center'}>
            <FlipMove className="px-5 my-10 sm:grid sm:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
                {results && results.map(result => (<ThumbNail key={result.id} result={result}/>))}
            </FlipMove>
        </div>
    )
}

export default Results;
