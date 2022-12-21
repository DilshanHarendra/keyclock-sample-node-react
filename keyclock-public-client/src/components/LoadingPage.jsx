import React from 'react';


function LoadingPage(){
	return(<div style={{zIndex:1000,backgroundColor:'rgba(0,0,0,0.5)'}} className=" fixed top-0 right-0 left-0 bottom-0 grid place-items-center">

		<svg className="w-16 h-16" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{margin: 'auto', background: 'none', display: 'block', shapeRendering: 'auto'}} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
			<circle cx={50} cy={50} fill="none" stroke="#1b3ee5" strokeWidth={10} r={35} strokeDasharray="164.93361431346415 56.97787143782138">
				<animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1" />
			</circle>
		</svg>
	</div>);
}export default LoadingPage;
