import React from 'react';

export function SpinnerGroup(){
    return (
        <>
            <div className="spinner-grow text-success" role="status" style={{margin:10}}>
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-danger" role="status" style={{margin:10}}>
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-warning" role="status" style={{margin:10}}>
                <span className="sr-only">Loading...</span>
            </div>
            <br/>
            <div className="spinner-grow text-info" role="status" style={{margin:10}}>
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-light" role="status" style={{margin:10}}>
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-dark" role="status" style={{margin:10}}>
                <span className="sr-only">Loading...</span>
            </div>
            <br/>
            <div className="spinner-grow text-danger" role="status" style={{margin:10}}>
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-dark" role="status" style={{margin:10}}>
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-border text-light" role="status" style={{margin:10,backgroundColor:'#ced6e0'}}>
                <span className="sr-only">Loading...</span>
            </div>
        </>
    )
}