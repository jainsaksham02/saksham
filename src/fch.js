import React, { Component } from 'react';
import './fch.css';

class Batch extends Component{
	constructor(){
		super();
		this.state = {
			title: '',
			author: '',
			ind: -1,
			batches: []
		};
		this.fetchBatches();
	}


	fetchBatches = ()=> {
		fetch("http://nugen.co.in/api/v1/batches")
		.then((res)=>{
			return res.json();
		})
		.then((res)=>{
			this.setState({
				batches: res
			});
		})
		.catch((err)=>{
			console.log("Error while fetching batches "+ err);
		})
	}








    render(){
        return (
        	<div>

	            <ul>
	                {
	                	this.state.batches.map((v,i)=>{
	                		return (
	                			<li key={i}>
	                				{ v.batch_name }
	                				will be start at =>
	                				{ ' ' + v.batch_timings }
													<ul className="my-courses">
														{
															v.courses.map((course,course_index)=>{
																return (
																	<li>
																		{ course.course_name }
																	</li>
																);
															})
														}
													</ul>

	                			</li>
	                			)
	                	})
	                }
	            </ul>
            </div>
        );
    }
}

export default Batch;